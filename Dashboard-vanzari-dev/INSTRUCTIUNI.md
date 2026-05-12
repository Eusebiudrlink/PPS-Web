# Instrucțiuni pentru Claude · Sales Hub PPS

**Citește acest fișier ÎNTÂI la începutul fiecărei sesiuni noi pe Sales Hub.**

---

## Ce este acest proiect

**Sales Hub** = dashboard intern pentru echipa de telesales Pașaport pentru Succes.
Două scopuri:
1. **Onboarding rapid** pentru selleri noi (Dana a luat luni să învețe produsele, Alex a vândut doar Tabăra de Încredere ~2 luni)
2. **Acces rapid în timpul apelului** la informații (preț, perioade, beneficii, obiecții, formulări aprobate)

**Owner brief:** Simona (strateg vânzări)
**Construit de:** Sebi (suport tehnic + marketing)
**Folosit de:** Adina (mentor selleri noi), echipa de telesales (Dana, Alex + colegi noi)

**Important:** la PPS NU există rol separat de „setter" sau „closer". Aceeași persoană sună, califică, descoperă și închide. Singura excepție: dacă lead-ul are potențial mare și sellerul nu poate închide, escaladează la Adina/Dana.

---

## Cum lucrăm — workflow în 3 pași

### 1️⃣ Sebi editează conținut în `content/`
Sebi modifică fișiere markdown din folderul `content/`. Aici e **sursa de adevăr** pentru tot ce apare ca text în dashboard. Nu inventa conținut, citește din `content/`.

### 2️⃣ Claude actualizează `data.js` din `content/`
Când Sebi spune „am modificat content/produse/incredere.md, actualizează dashboard":
- Citești fișierul .md modificat
- Actualizezi corespunzător `data.js` (păstrând structura JS validă)
- Confirmi ce ai schimbat

### 3️⃣ Push pe GitHub (când Sebi spune „dă push")
- Copiezi cele 4 fișiere (`sales-hub.html`, `styles.css`, `app.js`, `data.js`) din `Dashboard-Vanzari/` în `PPS-Web/Dashboard-vanzari/`
- Faci commit local
- Sebi rulează `git push origin main` din terminal (sandbox-ul NU are SSH key)
- Live la: https://eusebiudrlink.github.io/PPS-Web/Dashboard-vanzari/sales-hub.html

---

## Reguli de comunicare cu Sebi (foarte important)

### 1. Esența în 2-3 propoziții, apoi întrebare cu opțiuni
Sebi se simte copleșit de plan-uri lungi. Pentru orice cerere strategică:
- Scrie 2-3 propoziții esență
- Oferă întrebare cu 2-3 opțiuni concrete
- Adaugă detalii DOAR după ce confirmă direcția

### 2. Vizual peste text
Când prezinți o structură (sidebar, layout, flux), pornește cu mockup vizual SVG/HTML, nu listă lungă.

### 3. Iterativ, nu big-bang
Livrezi în etape mici cu puncte de verificare. Întrebări concrete: „te uiți pe pagina X și-mi spui dacă..." NU „spune-mi feedback pe tot."

### 4. Aspectul contează
Sebi a spus explicit „Vreau să arate și bine". Investește în polish vizual: paletă coerentă, tipografie bună, spațiere generoasă, microinteracții.

### 5. Romanian, casual, fără formalism
Răspunzi în română. Folosești „tu", nu „dvs.". Eviți jargon corporate. Eviți „genuinely", „honestly", „straightforward". Eviți emoji-uri în propriile răspunsuri (le folosești în dashboard pentru ghidare vizuală pentru selleri, dar nu în chat).

### 6. NU pomeni jargon tehnic
Sebi a corectat: nu zice „fișele Simonei", „ghidul Simonei", „cele 9 fișe" etc. Nici detalii tehnice ca „split fișier", „modal logic" — vorbești despre rezultat, nu despre cum.

### 7. Dezambiguizează la nevoie, nu mai mult
Dacă o cerere are 2-3 interpretări, întrebă scurt. Dacă e clară, execuți.

---

## Reguli pentru content (limbaj PPS)

Toate textele trebuie să respecte limbajul oficial PPS (vezi `content/limbaj-comun.md`):

**NU folosi NICIODATĂ:**
- „aceasta este reducerea maximă" / „nu există reducere mai mare"
- „suntem cei mai buni" / „alte tabere sunt slabe"
- „garantăm rezultate"
- „o să se schimbe complet în 6 zile"
- „dezvoltă inteligență emoțională" (concept abstract — folosim formulări concrete)
- frică artificială, vină, urgență falsă

**Folosește:**
- formulări concrete pe limba părinților
- empatie + ascultare reală
- formula obiecții: „Înțeleg... Are sens... Mulți părinți simt asta... Pot să vă explic cum văd eu situația?"
- ordine prețului: înțelegere → nevoie → soluție → valoare → preț (NU sări direct la preț)

---

## Structura fișierelor

```
Dashboard-Vanzari/
├── sales-hub.html       ← shell HTML (structura paginilor)
├── styles.css           ← toate stilurile (paletă, layout)
├── app.js               ← logica de render + navigare
├── data.js              ← TOATE datele afișate (PRODUCTS, SCRIPTS, etc.)
├── INSTRUCTIUNI.md      ← acest fișier (citește la început)
├── dashboard.html       ← BACKUP versiunea veche (NU folosi)
└── content/             ← SURSA DE ADEVĂR pentru conținut
    ├── README.md
    ├── produse/         ← 1 .md per produs
    ├── limbaj-comun.md
    ├── scripturi.md
    ├── politici.md
    ├── webinarii.md
    ├── whatsapp.md
    ├── resurse-parinti.md
    ├── echipa.md
    └── invatare.md
```

---

## Tehnic: cum modific eu data.js din content/

`data.js` are forma `window.SALES_DATA = { PRODUCTS: {...}, SCRIPTS: [...], ... }`. Când actualizezi:

1. **Citește `.md`-ul modificat de Sebi**
2. **Identifică ce câmpuri se schimbă** (nu rescrie tot data.js dacă schimbi 2 propoziții — folosește `Edit` cu `old_string`/`new_string`)
3. **Păstrează structura JS validă** — atenție la ghilimele, virgule, escape-uri
4. **Pentru ghilimele românești:** `„text"` (deschis) și `"text"` (închis) — NU `"text"` simple
5. **Confirmă ce ai schimbat** într-un mesaj scurt către Sebi

---

## Echipa PPS (cine e cine)

- **Simona** — owner / strateg vânzări. Decide reduceri excepționale, aprobă scripturi și politici.
- **Adina Verde** — mentor selleri noi. Contact WhatsApp. Răspunde rapid pentru întrebări de teren.
- **Sebi** — suport tehnic + marketing. Admin Podio. Construiește tool-urile interne (inclusiv acest dashboard).
- **Dana** — seller. A luat luni să învețe produsele.
- **Alex Popescu** — seller. A vândut doar Tabăra de Încredere primele 2 luni.
- **Colegi noi din echipa de telesales** — adăugați pe măsură ce echipa crește.

---

## Ce să faci la începutul oricărei sesiuni noi

1. Citește acest fișier (`INSTRUCTIUNI.md`)
2. Verifică `content/README.md` pentru organizarea conținutului
3. Verifică memoria persistentă (MEMORY.md) pentru context istoric
4. Întreabă scurt ce vrea Sebi să facem azi
