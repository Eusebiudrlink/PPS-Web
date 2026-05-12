// PPS Sales Hub — logica aplicației
const { PRODUCTS, GHID_CALLER, GHID_CLOSER, PARENT_RESOURCES, WEBINARII, WHATSAPP_MESSAGES, GHIDURI_PARINTI, LEARNING_CONTENT, DEMO_CALLS, LIMBAJ } = window.SALES_DATA;

// ============= INTRO SPLASH (video logo · prima vizită) =============
(function initIntroSplash(){
  const STORAGE_KEY = 'pps-intro-shown-v1';
  const splash = document.getElementById('introSplash');
  const video = document.getElementById('introSplashVideo');
  const skip = document.getElementById('introSplashSkip');
  if (!splash || !video) return;

  // Dacă a mai fost văzut sau localStorage e blocat, sări peste.
  let alreadyShown = false;
  try { alreadyShown = !!localStorage.getItem(STORAGE_KEY); } catch (e) {}
  if (alreadyShown) return;

  // Afișează splash-ul
  splash.hidden = false;
  // Pornește video-ul (autoplay e mut, deci politica browser-ului permite)
  const playPromise = video.play();
  if (playPromise && playPromise.catch) playPromise.catch(() => {});

  let closed = false;
  function close() {
    if (closed) return;
    closed = true;
    splash.classList.add('fading');
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
    setTimeout(() => { splash.hidden = true; video.pause(); }, 550);
  }
  video.addEventListener('ended', close);
  skip.addEventListener('click', close);
  // ESC închide
  document.addEventListener('keydown', function escClose(e){
    if (e.key === 'Escape' && !closed) { close(); document.removeEventListener('keydown', escClose); }
  });
  // Fallback: dacă video nu se încarcă în 8 sec, închide automat
  video.addEventListener('error', () => setTimeout(close, 200));
  setTimeout(() => { if (!closed && video.readyState < 2) close(); }, 8000);
})();

const PAGE_TITLES = {
  'acasa': 'Acasă',
  'produse': 'Produse',
  'produs': 'Detaliu produs',
  'scripturi': 'Ghiduri Caller & Closer',
  'limbaj': 'Limbaj comun',
  'parinti': 'Resurse pentru părinți',
  'invatare': 'Învățare · onboarding',
  'instrumente': 'Instrumente',
  'politici': 'Reguli Reduceri',
  'comanda': 'Gestionează Leads',
  'ajutor': 'Cere ajutor',
};

// ============= RENDER =============

function renderProductGrid(filter = 'all') {
  const grid = document.getElementById('productGrid');
  const items = Object.entries(PRODUCTS).filter(([k, p]) => filter === 'all' || p.category === filter);
  grid.innerHTML = items.map(([key, p]) => `
    <div class="product-card${p.comingSoon ? ' is-coming-soon' : ''}" data-product-key="${key}">
      <div class="product-card-thumb ${p.thumb}">
        <i class="ti ${p.icon}"></i>
        <span class="tag">${p.tag}</span>
        ${p.comingSoon ? '<span class="card-coming-soon">Va urma</span>' : ''}
      </div>
      <div class="product-card-body">
        <h4>${p.name}</h4>
        <div class="meta">
          <span><i class="ti ti-map-pin"></i> ${p.location.split(' ')[0]}</span>
          <span><i class="ti ti-calendar"></i> ${p.shortDates}</span>
        </div>
        <div class="price-row">
          <div class="price">${p.price}<small>preț standard</small></div>
          ${p.discounted ? `<div style="text-align:right; font-size:11px; color:var(--accent2); font-weight:700;">${p.discounted}</div>` : ''}
        </div>
      </div>
    </div>
  `).join('');
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      renderProductDetail(card.dataset.productKey);
      switchPage('produs');
    });
  });
}

function renderProductDetail(key) {
  const p = PRODUCTS[key];
  if (!p) return;

  // helper to render a list as ul
  const ul = (items, cls = 'list-clean') => `<ul class="${cls}">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;

  // Header common (sus pe pagină — același pentru toate produsele)
  const headerHtml = `
    <div class="product-header">
      <div>
        <h4>${p.name}${p.comingSoon ? ' <span class="prod-coming-soon-badge">Va urma</span>' : ''}</h4>
        <p>${p.tagline}</p>
        <span class="product-tag">${p.tag}</span>
      </div>
      <div class="product-price-block">
        <span class="product-price-main">${p.price}</span>
        ${p.discounted ? `<span class="product-price-discounted">${p.discounted}</span>` : ''}
      </div>
    </div>
    <div class="product-meta-strip">
      <div><span class="meta-label">📍 Locație</span><span class="meta-value">${p.location}</span></div>
      <div><span class="meta-label">👥 Capacitate</span><span class="meta-value">${p.capacity}</span></div>
      <div style="margin-left:auto; display:flex; gap:8px; flex-wrap:wrap;">
        ${p.videoUrl ? `<a href="${p.videoUrl}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:6px; background:rgba(196,98,45,0.2); border:1px solid rgba(196,98,45,0.4); color:var(--accent); padding:8px 14px; border-radius:20px; font-size:12px; font-weight:700; text-decoration:none;">🎬 Video tabără →</a>` : ''}
        ${p.productPageUrl ? `<a href="${p.productPageUrl}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:6px; background:var(--accent); color:white; padding:8px 14px; border-radius:20px; font-size:12px; font-weight:700; text-decoration:none;">🔗 Pagina pe site →</a>` : ''}
      </div>
    </div>
  `;

  // === COMING SOON: nu afișăm conținut, doar banner mare ===
  if (p.comingSoon) {
    document.getElementById('productDetail').innerHTML = `
      ${headerHtml}
      <div class="prod-coming-soon">
        <div class="prod-cs-icon">⏳</div>
        <h3>Conținut în pregătire</h3>
        <p>Fișa de vânzare pentru această tabără urmează să fie completată oficial împreună cu Simona. Până atunci, folosește pagina oficială de pe site și consultă-te cu Adina dacă ai apel pe acest produs.</p>
        <div class="prod-cs-actions">
          ${p.productPageUrl ? `<a href="${p.productPageUrl}" target="_blank" rel="noopener" class="prod-cs-btn primary">Vezi pagina pe site →</a>` : ''}
          <button class="prod-cs-btn ghost" data-action="page:ajutor">Contactează Adina pentru context</button>
        </div>
      </div>
      ${p.periods && p.periods.length ? `
        <div class="product-periods">
          <p class="col-label">Perioade & disponibilitate (provizorii)</p>
          <div class="periods-table">
            ${p.periods.map(period => {
              const isFull = period.occupied / period.total > 0.8;
              return `<div class="period-row${isFull ? ' full' : ''}">
                <span class="age">${period.age} ani</span>
                <span>${period.dates}</span>
                <span class="seats"><strong>${period.total - period.occupied}</strong> locuri libere · ${period.occupied}/${period.total}</span>
              </div>`;
            }).join('')}
          </div>
        </div>
      ` : ''}
    `;
    // wire fallback button to Cere ajutor
    const fallbackBtn = document.querySelector('#productDetail .prod-cs-btn.ghost');
    if (fallbackBtn) {
      fallbackBtn.addEventListener('click', () => switchPage('ajutor'));
    }
    return;
  }

  // === Helpers pentru secțiuni ===
  const section = (id, title, eyebrow, contentHtml) => `
    <section class="prod-section" id="prod-${id}">
      <div class="prod-section-head">
        ${eyebrow ? `<span class="prod-section-eyebrow">${eyebrow}</span>` : ''}
        <h3 class="prod-section-title">${title}</h3>
      </div>
      <div class="prod-section-body">${contentHtml}</div>
    </section>
  `;

  // === Fișa produs (varsta/durata/locatie/serii) ===
  const fp = p.fisaProdus;
  const fisaProdusHtml = fp ? `
    <div class="prod-fisa">
      ${fp.age ? `<div class="prod-fisa-item"><span class="lbl">Vârstă</span><strong>${fp.age}</strong></div>` : ''}
      ${fp.duration ? `<div class="prod-fisa-item"><span class="lbl">Durată</span><strong>${fp.duration}</strong></div>` : ''}
      ${fp.location ? `<div class="prod-fisa-item"><span class="lbl">Locație</span><strong>${fp.location}</strong></div>` : ''}
      ${fp.priceLabel ? `<div class="prod-fisa-item"><span class="lbl">Preț</span><strong>${fp.priceLabel}</strong>${fp.rateNote ? `<small>${fp.rateNote}</small>` : ''}</div>` : ''}
      ${fp.seriesLabel ? `<div class="prod-fisa-item wide"><span class="lbl">Serii ${fp.seriesYear || ''}</span><strong>${fp.seriesLabel}</strong></div>` : ''}
    </div>
  ` : '';

  // === 1. Ce este tabăra ===
  const whatIsHtml = (p.whatIsItShort || p.whatIsIt) ? `
    <p class="prod-lead">${p.whatIsItShort || p.whatIsIt}</p>
  ` : '';

  // === 2. Mesaj central ===
  const mesajCentralHtml = p.mesajCentral ? `
    <div class="prod-mesaj-central">
      <span class="prod-mc-label">Mesajul central</span>
      <p>${p.mesajCentral}</p>
    </div>
  ` : '';

  // === 3. Pentru cine ===
  const pentruCine = p.pentruCine || (p.forWho ? { se_potriveste: p.forWho, nu_se_potriveste: p.notFor || [] } : null);
  const pentruCineHtml = pentruCine ? `
    <div class="prod-fit-grid">
      ${pentruCine.se_potriveste && pentruCine.se_potriveste.length ? `
        <div class="prod-fit good">
          <div class="prod-fit-head">✓ Se potrivește dacă</div>
          <ul>${pentruCine.se_potriveste.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      ` : ''}
      ${pentruCine.nu_se_potriveste && pentruCine.nu_se_potriveste.length ? `
        <div class="prod-fit bad">
          <div class="prod-fit-head">✗ Nu se potrivește dacă</div>
          <ul>${pentruCine.nu_se_potriveste.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      ` : ''}
    </div>
  ` : '';

  // === 4. Ce se întâmplă în 6 zile ===
  const ceSeIntamplaHtml = (() => {
    const cs = p.ceSeIntampla;
    if (cs && cs.length) {
      // structured: array of {day?, title, desc?}
      const structured = cs[0] && typeof cs[0] === 'object';
      if (structured) {
        return `<div class="prod-days">
          ${cs.map(d => `
            <div class="prod-day">
              ${d.day ? `<span class="prod-day-num">${d.day}</span>` : ''}
              <div class="prod-day-body">
                <strong>${d.title}</strong>
                ${d.desc ? `<p>${d.desc}</p>` : ''}
                ${d.parentSees ? `<p class="prod-day-parent">Ce vede părintele după: <em>${d.parentSees}</em></p>` : ''}
              </div>
            </div>
          `).join('')}
        </div>`;
      }
      // simple array of strings
      return `<ul class="prod-bullets">${cs.map(i => `<li>${i}</li>`).join('')}</ul>`;
    }
    // fallback la whatWeDoExamples
    if (p.whatWeDoExamples && p.whatWeDoExamples.length) {
      return `
        ${p.whatWeDoIntro ? `<p class="prod-para">${p.whatWeDoIntro}</p>` : ''}
        <ul class="prod-bullets">${p.whatWeDoExamples.map(i => `<li>${i}</li>`).join('')}</ul>
      `;
    }
    return '';
  })();

  // === 5. Profilul părintelui ===
  const profileHtml = p.parintProfil ? `
    ${p.parintProfil.intro ? `<p class="prod-para">${p.parintProfil.intro}</p>` : ''}
    <div class="prod-parent-grid">
      ${p.parintProfil.ingrijorari && p.parintProfil.ingrijorari.length ? `
        <div class="prod-parent-col">
          <span class="prod-parent-col-head">Ce îl îngrijorează</span>
          <ul>${p.parintProfil.ingrijorari.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      ` : ''}
      ${p.parintProfil.doreste && p.parintProfil.doreste.length ? `
        <div class="prod-parent-col">
          <span class="prod-parent-col-head">Ce își dorește</span>
          <ul>${p.parintProfil.doreste.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      ` : ''}
    </div>
  ` : (p.parentSignals && p.parentSignals.length ? `
    <p class="prod-para" style="font-style:italic; color:var(--text2);">Semnale pe care le auzi des de la părinți (ascultă pentru ele):</p>
    <ul class="prod-bullets">${p.parentSignals.map(s => `<li>${s}</li>`).join('')}</ul>
  ` : '');

  // === 6. Cuvintele lui — cum descrie vs ce-și dorește ===
  const cuvinteleHtml = p.cuvintele ? `
    <div class="prod-words-grid">
      <div class="prod-words-col">
        <span class="prod-words-head">Cum descrie problema</span>
        <ul>${p.cuvintele.cumDescrie.map(i => `<li>„${i}"</li>`).join('')}</ul>
      </div>
      <div class="prod-words-col">
        <span class="prod-words-head">Ce își dorește</span>
        <ul>${p.cuvintele.ceIsiDoreste.map(i => `<li>„${i}"</li>`).join('')}</ul>
      </div>
    </div>
  ` : '';

  // === 7. Cum vorbești cu el (NU vs DA) ===
  const cumVorbestiHtml = p.noVsYesBenefits ? `
    <div class="prod-talk-grid">
      <div class="prod-talk-col nu">
        <span class="prod-talk-head">✗ NU spui</span>
        <ul>${p.noVsYesBenefits.no.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      <div class="prod-talk-col da">
        <span class="prod-talk-head">✓ SPUI</span>
        <ul>${p.noVsYesBenefits.yes.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
    </div>
  ` : '';

  // === 8. Întrebări frecvente / obiecții cu răspunsuri ===
  const faqData = p.faq || (p.objections ? p.objections.map(o => ({ q: o.obj, a: o.answer })) : []);
  const faqHtml = faqData.length ? `
    <div class="prod-faq">
      ${faqData.map(f => `
        <details class="prod-faq-item">
          <summary>${f.q}</summary>
          <div class="prod-faq-a">${f.a}</div>
        </details>
      `).join('')}
    </div>
  ` : '';

  // === 9. Povești pentru conversație ===
  const povestiHtml = p.povesti && p.povesti.length ? `
    <div class="prod-stories">
      ${p.povesti.map((s, idx) => `
        <article class="prod-story">
          <div class="prod-story-head">
            <span class="prod-story-num">${idx + 1}</span>
            <div>
              <h4>${s.title}</h4>
              ${s.when ? `<p class="prod-story-when">Folosește când: ${s.when}</p>` : ''}
            </div>
          </div>
          <blockquote class="prod-story-text">${s.text}</blockquote>
        </article>
      `).join('')}
    </div>
  ` : '';

  // === 10. Preț & rate ===
  const pretHtml = (p.pretRate || p.fisaProdus) ? `
    <div class="prod-pret-box">
      <div class="prod-pret-row">
        <div>
          <span class="prod-pret-label">Preț standard</span>
          <strong class="prod-pret-main">${p.price}</strong>
        </div>
        ${p.discounted ? `
          <div>
            <span class="prod-pret-label">Cu reducere</span>
            <strong class="prod-pret-main accent">${p.discounted}</strong>
          </div>
        ` : ''}
      </div>
      ${p.pretRate ? `<p class="prod-pret-text">${p.pretRate}</p>` : `
        <p class="prod-pret-text">Spui prețul clar, fără scuze. Oferi ratele imediat — nu aștepți să întrebe.</p>
      `}
    </div>
  ` : '';

  // === 11. Ce NU spui ===
  const doNotSayHtml = p.doNotSay && p.doNotSay.length ? `
    <ul class="prod-donot">${p.doNotSay.map(i => `<li>${i}</li>`).join('')}</ul>
  ` : '';

  // === 12. Tranziție spre ofertă (dacă există) ===
  const transitionHtml = p.transitionToOffer ? `
    <div class="prod-transition">
      <span class="prod-transition-label">Tranziție spre ofertă</span>
      <p>„${p.transitionToOffer}"</p>
    </div>
  ` : '';

  // === Construim conținutul ===
  let body = '';
  if (fisaProdusHtml) body += `<section class="prod-section prod-fisa-section">${fisaProdusHtml}</section>`;
  if (whatIsHtml || mesajCentralHtml)
    body += section('ce-este', 'Ce este această tabără', 'Esențial', `${whatIsHtml}${mesajCentralHtml}`);
  if (pentruCineHtml)
    body += section('pentru-cine', 'Pentru ce tip de copil e potrivită', 'Profil copil', pentruCineHtml);
  if (ceSeIntamplaHtml)
    body += section('ce-se-intampla', 'Ce se întâmplă în 6 zile', 'În tabără', ceSeIntamplaHtml);
  if (profileHtml)
    body += section('parinte', 'Profilul părintelui', 'Cui vinzi', profileHtml);
  if (cuvinteleHtml)
    body += section('cuvintele', 'Cuvintele părintelui — cum descrie vs ce-și dorește', 'Limbaj', cuvinteleHtml);
  if (cumVorbestiHtml)
    body += section('cum-vorbesti', 'Cum vorbești cu el (NU vs DA)', 'Limbaj seller', cumVorbestiHtml);
  if (faqHtml)
    body += section('faq', 'Întrebări frecvente cu răspunsuri', 'În apel', faqHtml);
  if (povestiHtml)
    body += section('povesti', 'Povești pentru conversație', 'Storytelling', povestiHtml);
  if (pretHtml)
    body += section('pret', 'Prețul și ratele — cum le spui în apel', 'Ofertă', pretHtml);
  if (transitionHtml)
    body += section('tranzitie', 'Tranziție spre ofertă', 'Frază de tranziție', transitionHtml);
  if (doNotSayHtml)
    body += section('nu-spui', 'Ce NU spui niciodată', 'Atenție', doNotSayHtml);

  // === Perioade ===
  const periodsHtml = p.periods && p.periods.length ? `
    <div class="product-periods">
      <p class="col-label">Perioade & disponibilitate</p>
      <div class="periods-table">
        ${p.periods.map(period => {
          const isFull = period.occupied / period.total > 0.8;
          return `<div class="period-row${isFull ? ' full' : ''}">
            <span class="age">${period.age} ani</span>
            <span>${period.dates}</span>
            <span class="seats"><strong>${period.total - period.occupied}</strong> locuri libere · ${period.occupied}/${period.total}</span>
          </div>`;
        }).join('')}
      </div>
    </div>
  ` : '';

  document.getElementById('productDetail').innerHTML = `
    ${headerHtml}
    <div class="prod-scroll">
      ${body}
      ${periodsHtml}
    </div>
  `;
}

// ============= GHIDURI CALLER & CLOSER =============
function renderBlock(b) {
  switch (b.type) {
    case 'paragraph':
      return `<p class="ghid-para">${b.text}</p>`;
    case 'subheading':
      return `<h4 class="ghid-subheading">${b.text}</h4>`;
    case 'script':
      return `<div class="ghid-script">
        <span class="ghid-script-label">Script</span>
        <p>${b.text}</p>
      </div>`;
    case 'script-alt':
      return `<div class="ghid-script alt">
        <span class="ghid-script-label">${b.label}</span>
        <p>${b.text}</p>
      </div>`;
    case 'qa':
      return `<ol class="ghid-qa">${b.items.map(it => `
        <li>
          <p class="ghid-qa-q">${it.q}</p>
          ${it.hint ? `<p class="ghid-qa-hint">→ ${it.hint}</p>` : ''}
        </li>
      `).join('')}</ol>`;
    case 'checklist':
      return `<ul class="ghid-checklist">${b.items.map(it => `<li>${it}</li>`).join('')}</ul>`;
    case 'rule':
      return `<div class="ghid-rule">${b.text}</div>`;
    case 'warning':
      return `<div class="ghid-warning">${b.text}</div>`;
    case 'objections':
      return `<div class="ghid-objections-wrap">
        <div class="ghid-objections-head">
          <span>Ce spune părintele</span>
          <span>Ce răspunzi</span>
        </div>
        ${b.rows.map(r => `
          <div class="ghid-objection">
            <div class="ghid-obj-q">${r.obj}</div>
            <div class="ghid-obj-a">${r.resp}</div>
          </div>
        `).join('')}
      </div>`;
    case 'signals':
      return `<div class="ghid-signals">
        <div class="ghid-signal good">
          <div class="ghid-signal-head">✓ ${b.good.title}</div>
          <ul>${b.good.items.map(it => `<li>${it}</li>`).join('')}</ul>
        </div>
        <div class="ghid-signal bad">
          <div class="ghid-signal-head">✗ ${b.bad.title}</div>
          <ul>${b.bad.items.map(it => `<li>${it}</li>`).join('')}</ul>
        </div>
      </div>`;
    case 'timetable':
      return `<div class="ghid-timetable">
        <div class="ghid-tt-head">
          <span>Timp</span><span>Ce faci</span><span>Semnal că merge bine</span>
        </div>
        ${b.rows.map(r => `
          <div class="ghid-tt-row">
            <span class="ghid-tt-time">${r.time}</span>
            <span class="ghid-tt-action">${r.action}</span>
            <span class="ghid-tt-signal">${r.signal}</span>
          </div>
        `).join('')}
      </div>`;
    default:
      return '';
  }
}

function renderGhid(ghid) {
  return `
    <article class="ghid-doc">
      <header class="ghid-doc-header">
        <div class="ghid-badge">${ghid.badge}</div>
        <h2 class="ghid-doc-title">${ghid.title}</h2>
        <p class="ghid-doc-subtitle">${ghid.subtitle}</p>
        <p class="ghid-doc-intro">${ghid.intro}</p>
      </header>
      <div class="ghid-sections">
        ${ghid.sections.map(sec => `
          <section class="ghid-section">
            <div class="ghid-section-head">
              <span class="ghid-section-num">${sec.num}</span>
              <div>
                <h3 class="ghid-section-title">${sec.title}</h3>
                ${sec.eyebrow ? `<p class="ghid-section-eyebrow">${sec.eyebrow}</p>` : ''}
              </div>
            </div>
            <div class="ghid-section-body">
              ${sec.blocks.map(renderBlock).join('')}
            </div>
          </section>
        `).join('')}
      </div>
      <div class="ghid-footer">${ghid.footer}</div>
    </article>
  `;
}

function renderGhiduri() {
  const callerEl = document.getElementById('ghid-caller');
  const closerEl = document.getElementById('ghid-closer');
  if (callerEl) callerEl.innerHTML = renderGhid(GHID_CALLER);
  if (closerEl) closerEl.innerHTML = renderGhid(GHID_CLOSER);

  // Tabs switching
  document.querySelectorAll('.ghid-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.ghid-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const target = tab.dataset.ghid;
      document.querySelectorAll('.ghid-content').forEach(c => c.classList.remove('active'));
      const targetEl = document.getElementById('ghid-' + target);
      if (targetEl) targetEl.classList.add('active');
    });
  });
}

function renderResources() {
  // Resurse generale (testimoniale etc) — cu link funcțional
  document.getElementById('resourceGrid').innerHTML = PARENT_RESOURCES.map(r => `
    <article class="resource-card">
      <div class="res-icon">${r.emoji || `<i class="ti ${r.icon}"></i>`}</div>
      <strong>${r.title}</strong>
      <p>${r.desc}</p>
      <div class="copy-link">
        <a href="${r.link}" target="_blank" rel="noopener" style="color:var(--text2); text-decoration:none; flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${r.link}</a>
        <button class="copy-btn" data-link="${r.link}">Copiază</button>
      </div>
      <a href="${r.link}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:6px; background:var(--accent); color:white; padding:10px 14px; border-radius:var(--radius-sm); font-size:13px; font-weight:600; text-decoration:none; margin-top:4px; justify-content:center;">${r.cta || 'Deschide'} →</a>
    </article>
  `).join('');

  // Webinarii Simona — secțiune separată cu 3 înregistrări
  const webContainer = document.getElementById('webinariiGrid');
  if (webContainer && WEBINARII) {
    webContainer.innerHTML = WEBINARII.map((w, i) => `
      <article class="webinar-card">
        <div class="webinar-num">${w.emoji || '🎬'} ${i + 1}/3</div>
        <h4>${w.title}</h4>
        <div class="webinar-when"><strong>Când îl trimiți:</strong> ${w.when}</div>
        <p class="webinar-desc">${w.desc}</p>
        <div class="webinar-forwhom"><strong>Pentru cine:</strong> ${w.forWhom}</div>
        <div class="webinar-actions">
          <a href="${w.link}" target="_blank" rel="noopener" class="webinar-btn">Deschide webinar →</a>
          <button class="copy-btn" data-link="${w.link}">Copiază link</button>
        </div>
      </article>
    `).join('');
  }

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const link = btn.dataset.link || btn.previousElementSibling.textContent;
      navigator.clipboard?.writeText(link);
      const original = btn.textContent;
      btn.textContent = '✓ Copiat';
      btn.style.background = 'var(--accent2)';
      setTimeout(() => { btn.textContent = original; btn.style.background = ''; }, 1500);
    });
  });
}

function renderGhiduriParinti() {
  const container = document.getElementById('ghiduriGrid');
  if (!container || !GHIDURI_PARINTI) return;
  container.innerHTML = GHIDURI_PARINTI.map(g => `
    <article class="ghid-card">
      <div class="ghid-emoji">${g.emoji || '📘'}</div>
      <h4>${g.title}</h4>
      <p class="ghid-desc">${g.desc}</p>
      <div class="ghid-when"><strong>Când îl trimiți:</strong> ${g.when}</div>
      <div class="ghid-actions">
        <a href="${g.link}" target="_blank" rel="noopener" class="ghid-btn">Deschide PDF →</a>
        <button class="copy-btn" data-link="${g.link}">Copiază link</button>
      </div>
    </article>
  `).join('');
}

function renderWhatsApp() {
  const container = document.getElementById('whatsappGrid');
  if (!container || !WHATSAPP_MESSAGES) return;
  container.innerHTML = WHATSAPP_MESSAGES.map((m, i) => `
    <article class="whatsapp-card">
      <div class="whatsapp-head">
        <div class="whatsapp-emoji">${m.emoji || '💬'}</div>
        <div class="whatsapp-title-block">
          <h4>${m.title}</h4>
          <div class="whatsapp-when">${m.when}</div>
        </div>
      </div>
      <div class="whatsapp-text" id="wa-text-${i}">${m.text}</div>
      <button class="copy-btn whatsapp-copy" data-target="wa-text-${i}">📋 Copiază mesajul</button>
    </article>
  `).join('');
  container.querySelectorAll('.whatsapp-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetEl = document.getElementById(btn.dataset.target);
      const text = targetEl ? targetEl.textContent : '';
      navigator.clipboard?.writeText(text);
      const original = btn.textContent;
      btn.textContent = '✓ Copiat în clipboard';
      btn.style.background = 'var(--accent2)';
      setTimeout(() => { btn.textContent = original; btn.style.background = ''; }, 1800);
    });
  });
}

// MODAL pentru materiale
function openModal(title, bodyHtml) {
  const overlay = document.getElementById('modalOverlay');
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = bodyHtml;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Click pe material cards cu data-action
function wireUpMaterialCards() {
  document.querySelectorAll('[data-action]').forEach(el => {
    el.addEventListener('click', e => {
      const action = el.dataset.action;
      if (!action) return;
      e.preventDefault();
      if (action.startsWith('http')) {
        window.open(action, '_blank', 'noopener');
      } else if (action.startsWith('page:')) {
        switchPage(action.slice(5));
      } else if (action.startsWith('modal:')) {
        const id = action.slice(6);
        const content = LEARNING_CONTENT[id];
        if (content) openModal(content.title, content.body);
      } else if (action.startsWith('whatsapp:')) {
        const num = action.slice(9);
        window.open('https://wa.me/' + num.replace(/\D/g, ''), '_blank');
      }
    });
    el.style.cursor = 'pointer';
  });
}

function renderCalls() {
  const el = document.getElementById('callLibrary');
  if (!el) return; // Bibliotecă apeluri eliminată — guard ca init-ul să nu mai crape
  el.innerHTML = DEMO_CALLS.map(c => `
    <div class="call-card">
      <div class="call-card-top">
        <span>${c.duration}</span>
        <span class="quality-badge quality-${c.quality}">${c.label}</span>
      </div>
      <h5>${c.title}</h5>
      <p>${c.desc}</p>
    </div>
  `).join('');
}

function renderLimbaj() {
  const L = LIMBAJ;
  const container = document.getElementById('limbajContent');

  container.innerHTML = `
    <!-- HERO cu mesajul central -->
    <div class="lang-hero">
      <p class="label">Mesajul central PPS</p>
      <blockquote>„${L.mesajCentral.main}"</blockquote>
      <p>Forma scurtă: „${L.mesajCentral.alt}"</p>
    </div>

    <!-- 3 variante PPS în 10 sec -->
    <h3 class="section-title"><span class="sec-emoji">⚡</span> Cum explicăm PPS în 10 secunde</h3>
    <p style="font-size:13px; color:var(--text2); margin-bottom:14px;">Trei variante. Alegi în funcție de tipul de părinte cu care vorbești.</p>
    <div class="variants-grid">
      ${L.ppsIn10Sec.map(v => `
        <div class="variant-card">
          <div class="v-label">${v.label}</div>
          <div class="v-text">„${v.text}"</div>
        </div>
      `).join('')}
    </div>

    <!-- Cele 4 niveluri PPS -->
    <h3 class="section-title"><span class="sec-emoji">🪜</span> Structura PPS · 4 niveluri</h3>
    <p style="font-size:13px; color:var(--text2); margin-bottom:14px;">Simplu. Fără complicații. Nu intrăm în detalii dacă nu e nevoie.</p>
    <div class="niveluri-grid">
      ${L.niveluriPPS.map(n => `
        <div class="nivel-card">
          <div class="nivel-num">${n.num}</div>
          <h5>${n.name}</h5>
          <p>${n.desc}</p>
        </div>
      `).join('')}
    </div>

    <!-- Diferența față de tabere -->
    <h3 class="section-title"><span class="sec-emoji">🆚</span> Cum explicăm diferența față de „tabere"</h3>
    <div class="diff-block">
      <div class="nu">${L.diferentaTabere.nu}</div>
      ${L.diferentaTabere.da.map(d => `<div class="da">${d}</div>`).join('')}
    </div>

    <!-- Competențe traduse -->
    <h3 class="section-title"><span class="sec-emoji">🔄</span> Cum traducem „competențele" pe limba părinților</h3>
    <p style="font-size:13px; color:var(--text2); margin-bottom:14px;">Nu folosim concepte abstracte. Folosim exemple concrete pe care părintele le recunoaște.</p>
    <div class="diff-block" style="margin-bottom:16px;">
      <strong style="font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--danger); font-weight:700; display:block; margin-bottom:10px;">NU folosim aceste concepte abstracte</strong>
      ${L.competenteTraduse.nu.map(n => `<div class="nu" style="font-style:normal;">${n}</div>`).join('')}
    </div>
    <div class="competente-table">
      ${Object.entries(L.competenteTraduse.da).map(([cat, items]) => {
        const catEmoji = { 'Emoțional': '😊', 'Social': '👥', 'Mental': '🧠', 'Acțiune': '🎬' }[cat] || '✨';
        return `
        <div class="competente-cat">
          <strong><span class="cat-emoji">${catEmoji}</span>${cat}</strong>
          <ul>${items.map(i => `<li>„${i}"</li>`).join('')}</ul>
        </div>
      `;}).join('')}
    </div>

    <!-- Cum vorbim despre probleme -->
    <h3 class="section-title"><span class="sec-emoji">⚠️</span> Cum vorbim despre PROBLEME (fără să speriem)</h3>
    <div class="diff-block">
      ${L.cumVorbimDespreProbleme.nu.map(n => `<div class="nu">„${n}"</div>`).join('')}
      ${L.cumVorbimDespreProbleme.da.map(d => `<div class="da">„${d}"</div>`).join('')}
    </div>
    <div class="callout" style="margin-top:8px;">
      <strong>Regulă</strong>
      <p>${L.cumVorbimDespreProbleme.rule}</p>
    </div>

    <!-- Formula problema → soluție -->
    <h3 class="section-title"><span class="sec-emoji">🧩</span> Formula problemă → soluție</h3>
    <div class="formula-box">
      <div class="label">Formula standard</div>
      <p style="font-style:italic; font-size:15px; line-height:1.6;">„${L.formulaProblemaSolutie.formula}"</p>
    </div>
    <div class="callout green">
      <strong>Exemplu aplicat</strong>
      <p style="font-style:italic;">„${L.formulaProblemaSolutie.exemplu}"</p>
    </div>

    <!-- Cum vorbim despre tabără -->
    <h3 class="section-title"><span class="sec-emoji">🏕️</span> Cum vorbim despre TABĂRĂ</h3>
    <div class="fraze-cheie">
      ${L.cumVorbimDespreTabara.map(f => `<div class="fraza-item">„${f}"</div>`).join('')}
    </div>

    <!-- Comunitate -->
    <h3 class="section-title"><span class="sec-emoji">🤝</span> Cum introducem COMUNITATEA</h3>
    <p style="font-size:13px; color:var(--text2); margin-bottom:14px;">Fără să exagerăm.</p>
    <div class="fraze-cheie">
      ${L.comunitate.map(f => `<div class="fraza-item">„${f}"</div>`).join('')}
    </div>

    <!-- Cum vorbim despre PREȚ -->
    <h3 class="section-title"><span class="sec-emoji">💰</span> Cum vorbim despre PREȚ</h3>
    <div class="callout danger" style="margin-bottom:14px;">
      <strong>Regulă</strong>
      <p>${L.cumVorbimDespreaPret.rule}</p>
    </div>
    <div class="formula-box">
      <div class="label">Ordinea corectă</div>
      <div class="formula-flow">
        ${L.cumVorbimDespreaPret.ordine.map((p, i) => `
          <span class="step">${p}</span>
          ${i < L.cumVorbimDespreaPret.ordine.length - 1 ? '<span class="arrow">→</span>' : ''}
        `).join('')}
      </div>
    </div>
    <div class="callout green">
      <strong>Când apare prețul, spunem</strong>
      <p style="font-style:italic;">„${L.cumVorbimDespreaPret.formulare}"</p>
    </div>
    <p style="font-size:12px; color:var(--text2); font-style:italic; margin-top:8px;">${L.cumVorbimDespreaPret.note}</p>

    <!-- Formula obiecții -->
    <h3 class="section-title"><span class="sec-emoji">🛡️</span> Cum gestionăm OBIECȚIILE (formula de bază)</h3>
    <div class="callout danger" style="margin-bottom:14px;">
      <strong>Regulă</strong>
      <p>${L.formulaObiectii.rule}</p>
    </div>
    <div class="formula-box">
      <div class="label">Formula în 4 pași</div>
      <div class="formula-flow">
        ${L.formulaObiectii.pasi.map((p, i) => `
          <span class="step">${p}</span>
          ${i < L.formulaObiectii.pasi.length - 1 ? '<span class="arrow">→</span>' : ''}
        `).join('')}
      </div>
    </div>

    <!-- Ce NU spunem (NICIODATĂ) -->
    <h3 class="section-title"><span class="sec-emoji">🚫</span> Ce NU spunem (foarte important)</h3>
    <div class="nu-block" style="margin-bottom:0;">
      <strong>Echipa trebuie să evite</strong>
      <ul>${L.ceNuSpunem.map(n => `<li>${n}</li>`).join('')}</ul>
    </div>

    <!-- Fraze cheie de memorat -->
    <h3 class="section-title"><span class="sec-emoji">🔑</span> Fraze cheie pentru echipă (de memorat)</h3>
    <div class="fraze-cheie">
      ${L.frazeCheie.map(f => `<div class="fraza-item">„${f}"</div>`).join('')}
    </div>

    <!-- Esența -->
    <h3 class="section-title"><span class="sec-emoji">❤️</span> Mesajul emoțional · esența PPS</h3>
    <div class="lang-hero" style="background-image: linear-gradient(135deg, #2D6B5A 0%, #1A4035 100%);">
      <p class="label" style="color:#FFE5C4;">Dacă ar fi o singură idee</p>
      <blockquote>„${L.esenta}"</blockquote>
    </div>
  `;
}

// CALCULATOR COMISION CLOSER — 2 variante (4% fix + progresiv 4-7%)
const COMM_TVA = 0.21;
const COMM_FIX_PCT = 4; // procent fix pentru Closer (varianta simplă)
const COMM_TRANSE = [
  { de: 0, la: 50000, pct: 5 },
  { de: 50000, la: 100000, pct: 6 },
  { de: 100000, la: 150000, pct: 7 },
  { de: 150000, la: Infinity, pct: 8 },
];
const COMM_PRAGURI = [
  { min: 70000, val: 250 },
  { min: 120000, val: 250 },
  { min: 160000, val: 500 },
];
const COMM_FMT = n => Math.round(n).toLocaleString('ro-RO') + ' lei';

function commUpdateTrack(el) {
  const pct = (el.value - el.min) / (el.max - el.min) * 100;
  el.style.background = `linear-gradient(to right, var(--accent) ${pct}%, rgba(255,255,255,0.08) ${pct}%)`;
}

function commCalcBonus(vBrut) {
  let bonus = 0;
  COMM_PRAGURI.forEach(p => {
    if (vBrut >= p.min) bonus += p.val;
  });
  return bonus;
}

function commCalcFix(vBrut) {
  const vNet = vBrut / (1 + COMM_TVA);
  const com = vNet * COMM_FIX_PCT / 100;
  const bonus = commCalcBonus(vBrut);
  commRenderResult('Fix', vBrut, com, bonus);
}

function commCalcProg(vBrut) {
  const vNet = vBrut / (1 + COMM_TVA);
  let com = 0;
  COMM_TRANSE.forEach(t => {
    if (vNet <= t.de) return;
    const ap = Math.min(vNet, t.la === Infinity ? vNet : t.la) - t.de;
    com += ap * t.pct / 100;
  });
  const bonus = commCalcBonus(vBrut);
  commRenderResult('Prog', vBrut, com, bonus);
}

function commRenderResult(suffix, vBrut, com, bonus) {
  const total = com + bonus;
  const elCom = document.getElementById('comm' + suffix + 'Com');
  const elBon = document.getElementById('comm' + suffix + 'Bon');
  const elTotal = document.getElementById('comm' + suffix + 'Total');
  const elSub = document.getElementById('comm' + suffix + 'Sub');
  if (!elCom || !elBon || !elTotal || !elSub) return;

  elCom.textContent = vBrut > 0 ? COMM_FMT(com) : '—';
  elCom.className = vBrut > 0 ? 'green' : '';
  elBon.textContent = bonus > 0 ? COMM_FMT(bonus) : (vBrut > 0 ? '0 lei' : '—');
  elBon.className = bonus > 0 ? 'green' : '';

  if (vBrut === 0) {
    elTotal.textContent = '—';
    elSub.textContent = 'Introdu vânzările brute pentru a vedea câștigul';
  } else {
    elTotal.textContent = COMM_FMT(total);
    const parts = [];
    parts.push('comision ' + COMM_FMT(com));
    if (bonus > 0) parts.push('bonus ' + COMM_FMT(bonus));
    elSub.textContent = parts.join(' + ');
  }
}

function initOneCommissionCalc(suffix, calcFn) {
  const slider = document.getElementById('comm' + suffix + 'Slider');
  const input = document.getElementById('comm' + suffix + 'Input');
  if (!slider || !input) return;

  slider.addEventListener('input', function() {
    const val = +this.value;
    commUpdateTrack(this);
    if (document.activeElement !== input) {
      input.value = val > 0 ? val : '';
    }
    calcFn(val);
  });

  input.addEventListener('input', function() {
    const raw = this.value.replace(/[^\d]/g, '');
    const val = raw === '' ? 0 : parseInt(raw, 10);
    const sliderVal = Math.min(val, +slider.max);
    slider.value = sliderVal;
    commUpdateTrack(slider);
    calcFn(val);
  });

  input.addEventListener('blur', function() {
    if (this.value.trim() === '' || this.value === '0') {
      this.value = '';
      slider.value = 0;
      commUpdateTrack(slider);
      calcFn(0);
    }
  });

  // Drawer pentru detalii bonus
  document.getElementById('comm' + suffix + 'DetailsBtn')?.addEventListener('click', () => {
    document.getElementById('comm' + suffix + 'DrawerOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('comm' + suffix + 'DrawerClose')?.addEventListener('click', () => closeCommDrawer(suffix));
  document.getElementById('comm' + suffix + 'DrawerOverlay')?.addEventListener('click', e => {
    if (e.target.id === 'comm' + suffix + 'DrawerOverlay') closeCommDrawer(suffix);
  });

  commUpdateTrack(slider);
  calcFn(0);
}

function initCommissionCalc() {
  initOneCommissionCalc('Fix', commCalcFix);
  initOneCommissionCalc('Prog', commCalcProg);
}

function closeCommDrawer(suffix) {
  document.getElementById('comm' + suffix + 'DrawerOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ============= NAVIGATION =============
function switchPage(target) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const targetPage = document.getElementById('page-' + target);
  if (targetPage) targetPage.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navMatch = document.querySelector(`.nav-item[data-page="${target}"]`);
  if (navMatch) navMatch.classList.add('active');

  document.getElementById('pageTitle').textContent = PAGE_TITLES[target] || target;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => switchPage(btn.dataset.page));
});

document.body.addEventListener('click', e => {
  const target = e.target.closest('[data-page]');
  if (!target || target.classList.contains('nav-item')) return;
  if (target.classList.contains('product-card')) return;
  e.preventDefault();
  switchPage(target.dataset.page);
});

// Smooth scroll pentru ancore interne (ex: card „Marchează interacțiune" → formular Podio)
document.body.addEventListener('click', e => {
  const a = e.target.closest('[data-scroll-to]');
  if (!a) return;
  e.preventDefault();
  const id = a.getAttribute('data-scroll-to');
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Product filters
document.querySelectorAll('.product-filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.product-filters button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProductGrid(btn.dataset.filter);
  });
});

// Tabs (în Învățare)
document.querySelectorAll('#page-invatare .tabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#page-invatare .tabs button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('#page-invatare .tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

// (KPI vechi eliminat — folosim calculatorul de comision oficial)

// Search dezactivat — eliminat din topbar

// MODAL: close handlers
document.getElementById('modalClose')?.addEventListener('click', closeModal);
document.getElementById('modalOverlay')?.addEventListener('click', e => {
  if (e.target.id === 'modalOverlay') closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// Init
renderProductGrid('all');
renderGhiduri();
renderResources();
renderGhiduriParinti();
renderWhatsApp();
renderLimbaj();
initCommissionCalc();
wireUpMaterialCards();
