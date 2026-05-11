// PPS Sales Hub — logica aplicației
const { PRODUCTS, SCRIPTS, PARENT_RESOURCES, WEBINARII, WHATSAPP_MESSAGES, GHIDURI_PARINTI, LEARNING_CONTENT, DEMO_CALLS, LIMBAJ } = window.SALES_DATA;

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
  'scripturi': 'Scripturi & Obiecții',
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
    <div class="product-card" data-product-key="${key}">
      <div class="product-card-thumb ${p.thumb}">
        <i class="ti ${p.icon}"></i>
        <span class="tag">${p.tag}</span>
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

  // build benefit categories
  const benefitsHtml = p.benefitsByCategory ? `
    <div class="benefit-categories">
      ${Object.entries(p.benefitsByCategory).map(([cat, items]) => `
        <div class="benefit-cat">
          <strong>${cat}</strong>
          <ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      `).join('')}
    </div>
  ` : '';

  // ---- TAB 1: ESENȚIAL ----
  const tabEsential = `
    <div class="subtab-content active" id="subtab-esential">
      ${p.whatIsIt ? `
        <h5>Ce este programul</h5>
        <p style="font-size:14px; line-height:1.6; color:var(--text); margin-bottom:20px;">${p.whatIsIt}</p>
      ` : ''}

      ${p.strategicNote ? `
        <div class="callout purple">
          <strong>Notă strategică pentru echipă</strong>
          <p>${p.strategicNote}</p>
        </div>
      ` : ''}

      ${p.forWho ? `
        <h5>Pentru cine este (profil)</h5>
        ${ul(p.forWho)}
      ` : ''}

      ${p.realProblem ? `
        <h5>Problema reală</h5>
        ${p.realProblemNote ? `<p style="font-size:13px; color:var(--text2); margin-bottom:8px; font-style:italic;">${p.realProblemNote}</p>` : ''}
        ${ul(p.realProblem)}
      ` : ''}

      ${p.benefitsByCategory ? `
        <h5>Cele 20 de beneficii (organizate pe zone)</h5>
        ${benefitsHtml}
      ` : ''}
    </div>
  `;

  // ---- TAB 2: DISCOVERY ----
  const tabDiscovery = `
    <div class="subtab-content" id="subtab-discovery">
      ${p.parentSignals ? `
        <h5>Semnale pe care le observă părinții</h5>
        <p style="font-size:13px; color:var(--text2); margin-bottom:10px;">Frazele pe care le auzi des de la părinți. Ascultă pentru ele.</p>
        <ul class="list-signals">${p.parentSignals.map(s => `<li>${s}</li>`).join('')}</ul>
      ` : ''}

      ${p.discoveryQuestions ? `
        <h5>5 întrebări de discovery (obligatorii în call)</h5>
        <ul class="list-questions">${p.discoveryQuestions.map(q => `<li>${q}</li>`).join('')}</ul>
      ` : ''}

      ${p.awarenessQuestion && p.awarenessQuestion !== '—' ? `
        <h5>Întrebarea de conștientizare</h5>
        <div class="callout">
          <strong>Întrebare-cheie</strong>
          <p style="font-size:14px; font-style:italic;">„${p.awarenessQuestion}"</p>
        </div>
        ${p.awarenessNote ? `<p style="font-size:12px; color:var(--text2); font-style:italic;">${p.awarenessNote}</p>` : ''}
      ` : ''}
    </div>
  `;

  // ---- TAB 3: CE FACEM ÎN TABĂRĂ ----
  const tabFacem = `
    <div class="subtab-content" id="subtab-facem">
      ${p.whatWeDoIntro ? `
        <h5>Ce facem efectiv</h5>
        <p style="font-size:14px; line-height:1.6; color:var(--text); margin-bottom:16px;">${p.whatWeDoIntro}</p>
      ` : ''}

      ${p.whatWeDoExamples ? `
        <h5>Exemple concrete de activități</h5>
        ${ul(p.whatWeDoExamples)}
      ` : ''}

      ${p.realExamples ? `
        <h5>3 exemple reale (de spus în call)</h5>
        ${p.realExamples.map(ex => `
          <div class="example-card">
            <strong>${ex.title}</strong>
            <p>„${ex.text}"</p>
          </div>
        `).join('')}
      ` : ''}
    </div>
  `;

  // ---- TAB 4: CUM PREZENTĂM ----
  const tabPrezentam = `
    <div class="subtab-content" id="subtab-prezentam">
      ${p.presentationPhrase ? `
        <h5>Fraza de prezentare (de memorat)</h5>
        <div class="callout">
          <strong>Memorează</strong>
          <p style="font-size:14px; font-style:italic;">„${p.presentationPhrase}"</p>
        </div>
      ` : ''}

      ${p.transitionToOffer ? `
        <h5>Cum facem tranziția spre ofertă</h5>
        <div class="callout green">
          <strong>Tranziție</strong>
          <p style="font-size:14px;">„${p.transitionToOffer}"</p>
        </div>
      ` : ''}

      ${p.noVsYesBenefits ? `
        <h5>Cum explicăm beneficiile (NU vs DA)</h5>
        <div class="nu-da-grid">
          <div class="nu-block">
            <strong>NU spunem</strong>
            <ul>${p.noVsYesBenefits.no.map(i => `<li>${i}</li>`).join('')}</ul>
          </div>
          <div class="da-block">
            <strong>SPUNEM</strong>
            <ul>${p.noVsYesBenefits.yes.map(i => `<li>${i}</li>`).join('')}</ul>
          </div>
        </div>
      ` : ''}

      ${p.importantNote ? `
        <div class="callout green">
          <strong>Important · esența</strong>
          <p>${p.importantNote}</p>
        </div>
      ` : ''}
    </div>
  `;

  // ---- TAB 5: OBIECȚII ----
  const tabObiectii = `
    <div class="subtab-content" id="subtab-obiectii">
      ${p.objections && p.objections.length > 0 ? `
        <h5>Obiecții frecvente pentru acest produs</h5>
        ${p.objections.map(o => `
          <div class="objection-block">
            <div class="obj-title">${o.obj}</div>
            <div class="obj-answer">„${o.answer}"</div>
          </div>
        `).join('')}
      ` : '<p style="color:var(--text2); font-size:13px;">Pentru obiecțiile generale, vezi pagina <strong>Scripturi & Obiecții</strong>.</p>'}

      ${p.doNotSay ? `
        <h5>Ce NU spunem (foarte important)</h5>
        <div class="nu-block">
          <strong>Interzis pentru acest produs</strong>
          <ul>${p.doNotSay.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      ` : ''}
    </div>
  `;

  // ---- HTML COMPLET ----
  document.getElementById('productDetail').innerHTML = `
    <div class="product-header">
      <div>
        <h4>${p.name}</h4>
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
    <div class="product-subtabs">
      <button class="active" data-subtab="esential"><i class="ti ti-bookmark"></i> Esențial</button>
      <button data-subtab="discovery"><i class="ti ti-search"></i> Discovery</button>
      <button data-subtab="facem"><i class="ti ti-tools"></i> Ce facem în tabără</button>
      <button data-subtab="prezentam"><i class="ti ti-message-circle"></i> Cum prezentăm</button>
      <button data-subtab="obiectii"><i class="ti ti-shield-x"></i> Obiecții</button>
    </div>
    ${tabEsential}
    ${tabDiscovery}
    ${tabFacem}
    ${tabPrezentam}
    ${tabObiectii}
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
  `;

  // wire up sub-tabs
  document.querySelectorAll('#productDetail .product-subtabs button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#productDetail .product-subtabs button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('#productDetail .subtab-content').forEach(c => c.classList.remove('active'));
      document.getElementById('subtab-' + btn.dataset.subtab).classList.add('active');
    });
  });
}

function renderScripts() {
  document.getElementById('scriptBoard').innerHTML = SCRIPTS.map(s => `
    <div class="script-card">
      <div class="script-card-header">
        <strong>${s.title}</strong>
        <span class="phase-tag phase-${s.phase}">${s.phaseLabel}</span>
      </div>
      <div class="script-card-body">
        <div class="quote">${s.quote}</div>
        <div class="note">${s.note}</div>
      </div>
    </div>
  `).join('');
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

function renderGhiduri() {
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

// CALCULATOR COMISION (înlocuiește vechiul KPI)
const COMM_TVA = 0.21;
const COMM_TRANSE = [
  { de: 0, la: 50000, pct: 4 },
  { de: 50000, la: 100000, pct: 5 },
  { de: 100000, la: 150000, pct: 6 },
  { de: 150000, la: Infinity, pct: 7 },
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

function commCalc(vBrut) {
  const vNet = vBrut / (1 + COMM_TVA);

  let com = 0;
  COMM_TRANSE.forEach(t => {
    if (vNet <= t.de) return;
    const ap = Math.min(vNet, t.la === Infinity ? vNet : t.la) - t.de;
    com += ap * t.pct / 100;
  });

  let bonus = 0;
  COMM_PRAGURI.forEach(p => {
    if (vBrut >= p.min) bonus += p.val;
  });

  const total = com + bonus;

  document.getElementById('commCom').textContent = vBrut > 0 ? COMM_FMT(com) : '—';
  document.getElementById('commCom').className = vBrut > 0 ? 'green' : '';
  document.getElementById('commBon').textContent = bonus > 0 ? COMM_FMT(bonus) : (vBrut > 0 ? '0 lei' : '—');
  document.getElementById('commBon').className = bonus > 0 ? 'green' : '';

  if (vBrut === 0) {
    document.getElementById('commTotal').textContent = '—';
    document.getElementById('commSub').textContent = 'Introdu vânzările brute pentru a vedea câștigul';
  } else {
    document.getElementById('commTotal').textContent = COMM_FMT(total);
    const parts = [];
    parts.push('comision ' + COMM_FMT(com));
    if (bonus > 0) parts.push('bonus ' + COMM_FMT(bonus));
    document.getElementById('commSub').textContent = parts.join(' + ');
  }
}

function initCommissionCalc() {
  const slider = document.getElementById('commSlider');
  const input = document.getElementById('commInput');
  if (!slider || !input) return;

  slider.addEventListener('input', function() {
    const val = +this.value;
    commUpdateTrack(this);
    if (document.activeElement !== input) {
      input.value = val > 0 ? val : '';
    }
    commCalc(val);
  });

  input.addEventListener('input', function() {
    const raw = this.value.replace(/[^\d]/g, '');
    const val = raw === '' ? 0 : parseInt(raw, 10);
    const sliderVal = Math.min(val, +slider.max);
    slider.value = sliderVal;
    commUpdateTrack(slider);
    commCalc(val);
  });

  input.addEventListener('blur', function() {
    if (this.value.trim() === '' || this.value === '0') {
      this.value = '';
      slider.value = 0;
      commUpdateTrack(slider);
      commCalc(0);
    }
  });

  // Drawer pentru detalii bonus
  document.getElementById('commDetailsBtn')?.addEventListener('click', () => {
    document.getElementById('commDrawerOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('commDrawerClose')?.addEventListener('click', closeCommDrawer);
  document.getElementById('commDrawerOverlay')?.addEventListener('click', e => {
    if (e.target.id === 'commDrawerOverlay') closeCommDrawer();
  });

  commUpdateTrack(slider);
  commCalc(0);
}

function closeCommDrawer() {
  document.getElementById('commDrawerOverlay').classList.remove('active');
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
renderScripts();
renderResources();
renderGhiduri();
renderWhatsApp();
renderLimbaj();
initCommissionCalc();
wireUpMaterialCards();
