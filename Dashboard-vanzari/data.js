// PPS Sales Hub — toate datele, separate de structura HTML.
// Modifică DOAR aici prețuri, perioade, conținut.

window.SALES_DATA = {

PRODUCTS: {
  incredere: {
    name: 'Tabăra de Încredere în Sine',
    tagline: 'Bestseller · primul nivel din sistemul PPS',
    tag: 'Bestseller', category: 'tabere', thumb: 'thumb-incredere', icon: 'ti-shield-check',
    price: '4.500 lei', discounted: '3.850 lei cu -15%',
    location: 'Zona Brașov', capacity: 'Max 48 copii/serie', shortDates: '9 serii · iun-aug',
    productPageUrl: 'https://pasaportpentrusucces.ro/tabere/tabara-incredere-in-sine-adolescenti/',
    videoUrl: 'https://drive.google.com/file/d/1JQffO5LXh6mjrx5dUp0GxyjwoYhhYAz7/view',

    whatIsIt: 'Primul nivel din sistemul nostru de competențe pentru GenZ și Alpha. Copilul învață să se înțeleagă pe sine, să-și gestioneze emoțiile, să comunice, să facă față la bullying, să aibă încredere în el și mai mult curaj în situații reale. E baza pentru tot ce urmează: comunicare, relații, vocație, leadership.',

    forWho: [
      'Nu au încredere în ei',
      'Nu știu la ce sunt buni',
      'Sunt timizi sau retrași',
      'Se enervează ușor',
      'Se blochează sau reacționează puternic în situații sociale',
      'Se tem să greșească',
      'Se compară mult cu alții',
      'Evită să vorbească sau să răspundă',
      'Sunt influențați ușor de grup',
      'Se supără sau se închid repede',
      'Au emoții puternice pe care nu le înțeleg',
    ],

    realProblem: [
      'Lipsă de încredere',
      'Lipsă de instrumente emoționale',
      'Lipsă de experiență în situații reale',
      'Lipsă de claritate interioară',
    ],
    realProblemNote: 'Nu este rea intenție. Copilul nu face asta intenționat.',

    benefitsByCategory: {
      'Emoțional': [
        'Învață ce să facă atunci când îi este frică',
        'Nu se mai rușinează de emoțiile lui',
        'Nu mai evită situațiile dificile',
        'Se liniștește mai repede când se activează',
        'Înțelege de ce simte ce simte',
      ],
      'Comportamental': [
        'Își spune punctul de vedere mai ușor',
        'Ridică mâna și participă mai activ',
        'Intră mai ușor în conversații',
        'Nu mai evită situațiile noi',
        'Începe să acționeze, nu doar să gândească',
      ],
      'Social': [
        'Își face prieteni mai ușor',
        'Nu se mai lasă influențat la fel de ușor',
        'Învață să spună „nu"',
        'Se descurcă mai bine în grup',
        'Înțelege cum funcționează relațiile',
      ],
      'Mental': [
        'Nu mai intră la fel de mult în overthinking',
        'Înțelege cum funcționează mintea lui',
        'Își vede mai clar punctele forte',
        'Începe să aibă mai multă claritate în decizii',
      ],
      'Pentru viața reală': [
        'Face față mai bine situațiilor reale (școală, prieteni, examene, interacțiuni)',
      ],
    },

    parentSignals: [
      '„știe, dar nu spune"',
      '„acasă e ok, în public se schimbă complet"',
      '„se blochează la teste sau evaluări"',
      '„îi este frică de ce spun ceilalți"',
      '„renunță repede"',
      '„are potențial, dar nu îl folosește"',
      '„se închide în el"',
      '„se lasă influențat de prieteni"',
      '„nu are prieteni"',
      '„nu e motivat, nu e organizat"',
    ],

    discoveryQuestions: [
      'Care este cea mai mare provocare pe care o vedeți acum la copilul vostru?',
      'În ce situații se vede cel mai clar?',
      'Ce vă îngrijorează cel mai mult în momentul ăsta?',
      'Ce v-ați dori să fie diferit la el peste câteva luni?',
      'Ce ați încercat până acum?',
    ],

    awarenessQuestion: 'Dacă lucrurile rămân așa, cum credeți că îl va afecta mai departe?',
    awarenessNote: 'Nu o spunem agresiv. Nu speriem. Lăsăm părintele să formuleze.',

    whatWeDoIntro: 'Nu doar vorbim despre încredere. Punem copiii în situații controlate care seamănă cu cele din viața lor. E ca un antrenament pentru viața reală.',
    whatWeDoExamples: [
      'Simulăm situații de respingere',
      'Simulăm prezentări / expunere',
      'Lucrăm pe emoții în timp real',
      'Îi învățăm ce să gândească și ce să facă',
      'Exersează, nu doar ascultă',
    ],

    realExamples: [
      { title: 'Exemplul 1', text: 'Am avut copii care nu vorbeau deloc în grup la început. În câteva zile, după exerciții și simulări, au început să participe și să se exprime.' },
      { title: 'Exemplul 2', text: 'Am avut copii care știau foarte bine materia, dar se blocau la teste. Lucrând pe partea emoțională, au reușit să gestioneze momentul respectiv.' },
      { title: 'Exemplul 3', text: 'Am avut copii care se lăsau foarte ușor influențați. După tabără, au început să pună limite și să aleagă mai conștient.' },
    ],

    presentationPhrase: 'Tabăra de încredere în sine este primul nivel din sistemul nostru, unde copilul învață să se înțeleagă, să-și gestioneze emoțiile și să aibă curaj în situații reale, nu doar în teorie.',

    transitionToOffer: 'Din ce mi-ați spus, cred că acest program i s-ar potrivi foarte bine. Vă explic exact cum funcționează și vedeți dacă simțiți că este pasul potrivit pentru voi.',

    noVsYesBenefits: {
      no: ['„dezvoltă inteligență emoțională"'],
      yes: [
        '„învață ce să facă atunci când îi este frică"',
        '„nu se mai blochează la fel de ușor"',
        '„începe să aibă curaj să se exprime"',
      ],
    },

    importantNote: 'Noi nu schimbăm copilul. Îi dăm instrumente ca să se descurce singur. Nu este un eveniment. Este începutul unui proces.',

    objections: [
      { obj: '„Este prea mic"', answer: 'Exact la vârsta asta se formează aceste mecanisme.' },
      { obj: '„Se descurcă el"', answer: 'Se descurcă, dar întrebarea este: la ce nivel?' },
      { obj: '„Mai vedem"', answer: 'Înțeleg. Ce anume ați vrea să mai clarificați ca să vă fie mai ușor să decideți?' },
    ],

    doNotSay: [
      '„copilul nu are nicio problemă"',
      '„se rezolvă tot în 6 zile"',
      '„toți copiii se schimbă"',
      '„este doar distracție"',
      '„garantăm rezultate"',
    ],

    periods: [
      { age: '10–11', dates: '28 iun – 3 iul', occupied: 22, total: 28 },
      { age: '12–14', dates: '5–10 iul', occupied: 20, total: 30 },
      { age: '12–14', dates: '19–24 iul', occupied: 21, total: 29 },
      { age: '12–14', dates: '16–21 aug', occupied: 14, total: 37 },
      { age: '15–18', dates: '12–17 iul', occupied: 14, total: 37 },
      { age: '15–18', dates: '26–31 iul', occupied: 7, total: 43 },
      { age: '15–18', dates: '2–7 aug', occupied: 11, total: 39 },
      { age: '15–18', dates: '23–28 aug', occupied: 7, total: 43 },
    ],
  },

  conectam: {
    name: 'ConnectGen · Ateliere Conectăm Generații',
    tagline: 'Motorul de conversie spre tabere · părinte + copil împreună',
    tag: 'Strategic', category: 'online', thumb: 'thumb-conectam', icon: 'ti-bulb',
    price: '990 lei', discounted: '720 lei cu -30%',
    location: 'Online live (Zoom)', capacity: '+299 lei separat pentru înregistrări la preț întreg', shortDates: 'Seria 1: 5 mar · Seria 2: 15 apr',
    productPageUrl: 'https://pasaportpentrusucces.ro/ateliere/ateliere-online-conectam-generatii/',

    whatIsIt: 'Program în care părintele și copilul lucrează în paralel, ca să înțeleagă ce se întâmplă cu ei și să înceapă să schimbe lucrurile acasă. Nu este doar pentru copil — este pentru relația părinte–copil.',

    strategicNote: 'IMPORTANT pentru echipă: ConnectGen NU este produs final. Este entry + calificare + încredere + educare. E motorul de conversie pentru tabere — încălzește lead-ul, construiește încredere, creează limbaj comun, ajută părintele să înțeleagă copilul, crește șansele de vânzare pentru tabere.',

    forWho: [
      'Părinți care simt că nu mai știu cum să ajungă la copil',
      'Părinți care au încercat să vorbească, dar nu funcționează',
      'Părinți care simt distanță emoțională',
      'Părinți care nu înțeleg reacțiile copilului',
      'Părinți care vor să ajute, dar nu știu cum',
      'Copii care nu comunică deschis',
      'Copii care se închid sau devin defensivi',
      'Copii agitați sau retrași',
      'Copii care reacționează emoțional',
      'Copii care nu spun ce simt',
    ],

    realProblem: [
      'Lipsă de înțelegere reciprocă',
      'Lipsă de limbaj comun',
      'Emoții neînțelese',
      'Reacții automate (tipare)',
      'Ruptură în relație',
    ],
    realProblemNote: 'Nu este disciplină. Nu este „copil dificil".',

    benefitsByCategory: {
      'Pentru părinte': [
        'Înțelege ce se întâmplă în spatele comportamentului copilului',
        'Nu mai ia personal reacțiile copilului',
        'Învață cum să comunice fără conflict',
        'Are mai multă claritate',
        'Se simte mai sigur în rolul de părinte',
        'Nu mai reacționează impulsiv',
        'Învață cum să gestioneze situațiile dificile',
        'Primește ghidaj concret',
        'Nu se mai simte singur în proces',
        'Are direcție clară',
      ],
      'Pentru copil': [
        'Începe să se deschidă mai ușor',
        'Se simte înțeles',
        'Are mai multă claritate emoțională',
        'Începe să comunice mai mult',
        'Se simte mai în siguranță',
        'Înțelege ce simte',
        'Nu mai reacționează la fel de impulsiv',
        'Începe să colaboreze mai ușor',
        'Se apropie de părinte',
        'Devine mai receptiv la schimbare',
      ],
    },

    parentSignals: [
      '„nu mai pot vorbi cu copilul"',
      '„e tot timpul în camera lui"',
      '„nu îmi spune nimic"',
      '„reacționează agresiv la orice"',
      '„a devenit complet altcineva"',
    ],

    discoveryQuestions: [
      'Cum este relația voastră cu copilul în momentul acesta?',
      'În ce situații simțiți că nu vă înțelegeți?',
      'Ce vă este cel mai greu în relația cu el?',
      'Cum reacționează copilul când încercați să vorbiți?',
      'Cum v-ați dori să fie relația voastră?',
    ],

    awarenessQuestion: 'Dacă lucrurile rămân așa, cum credeți că va arăta relația voastră peste 1-2 ani?',
    awarenessNote: 'Nu apăsăm. Nu dramatizăm. Doar ghidăm.',

    whatWeDoIntro: 'Părinții sunt în sesiuni separate. Copiii sunt în sesiuni separate. Lucrăm pe aceleași teme, dar adaptat. Se creează un limbaj comun între voi.',
    whatWeDoExamples: [
      'Emoții',
      'Reacții',
      'Comunicare',
      'Tipare',
      'Relația părinte–copil',
    ],

    realExamples: [
      { title: 'Exemplul 1', text: 'Am avut părinți care spuneau că nu mai pot vorbi cu copilul lor. Încă din timpul programului, copilul a început să se deschidă și să comunice mai natural.' },
      { title: 'Exemplul 2', text: 'Am avut situații în care părintele și copilul erau într-un conflict constant. După ce au înțeles mecanismele, tensiunea a scăzut foarte mult.' },
      { title: 'Exemplul 3', text: 'Mulți părinți spun că după program simt că își înțeleg copilul pentru prima dată cu adevărat și că se înțeleg pe ei mai bine.' },
    ],

    presentationPhrase: 'ConnectGen nu schimbă doar copilul. Schimbă relația dintre voi.',

    transitionToOffer: 'CHEIA FUNNEL-ULUI: ConnectGen este primul pas. După ce înțelegeți mecanismele, următorul pas este ca copilul să le și exerseze. Asta se întâmplă în tabere. ConnectGen = înțelegere. Tabăra = antrenament. În ConnectGen înțelegeți. În tabără copilul exersează.',

    noVsYesBenefits: {
      no: [
        'Curs',
        'Webinar mai lung',
        'Teorie',
      ],
      yes: [
        'Începutul schimbării',
        'Claritate',
        'Relație',
        'Direcție',
      ],
    },

    importantNote: 'ConnectGen creează înțelegere. Tabăra creează schimbare prin acțiune. Folosește-l ca rampă spre tabere.',

    objections: [
      { obj: '„Nu are nevoie copilul"', answer: 'De multe ori, nu este despre copil, ci despre relație.' },
      { obj: '„Nu am timp"', answer: 'Exact de aceea este structurat astfel încât să fie aplicabil imediat.' },
      { obj: '„Mai vedem"', answer: 'Ce v-ar ajuta să vă fie mai clar dacă este potrivit acum?' },
    ],

    doNotSay: [
      '„rezolvă toate problemele"',
      '„este suficient" (fără tabere)',
      '„copilul e problema"',
      '„dacă nu faceți asta, va fi rău"',
    ],

    periods: [
      { age: 'Familii', dates: 'Seria 1: 5 mar 2026', occupied: 0, total: 60 },
      { age: 'Familii', dates: 'Seria 2: 15 apr 2026', occupied: 0, total: 60 },
    ],
  },

  vocatie: {
    name: 'Tabăra de Vocație',
    tagline: 'Nivel 2 · Competențele Viitorului · descoperire de sine',
    tag: 'Claritate', category: 'tabere', thumb: 'thumb-vocatie', icon: 'ti-compass',
    price: '5.500 lei', discounted: '4.675 lei cu -15%',
    location: 'Zona Brașov', capacity: 'Max 48 copii', shortDates: '12–17 iul',
    productPageUrl: 'https://pasaportpentrusucces.ro/tabere/tabara-vocatie-adolescenti/',

    whatIsIt: 'Programul în care adolescentul începe să descopere cine este, la ce este bun și cum își poate construi direcția în lumea care vine. Nu îi spunem ce profesie să aleagă. Îl ajutăm să se înțeleagă și să își descopere punctele forte. Face parte din Nivelul 2 — Competențele Viitorului.',

    forWho: [
      'Nu știu ce vor să facă mai departe',
      'Sunt confuzi sau pierduți',
      'Au multe interese și nu știu ce să aleagă',
      'Se compară cu ceilalți',
      'Simt presiune legată de viitor',
      'Nu își văd punctele forte',
      'Sunt inteligenți, dar fără direcție',
      'Vor să înțeleagă cum funcționează lumea viitorului',
      'Sunt curioși despre joburi, AI și business',
      'Vor să își descopere potențialul',
    ],

    realProblem: [
      'Lipsă de claritate',
      'Lipsă de autocunoaștere',
      'Lipsă de experiențe reale',
      'Lipsă de conectare cu punctele forte',
      'Frică de greșeală și comparație',
    ],
    realProblemNote: 'Nu este lipsă de inteligență.',

    benefitsByCategory: {
      'Claritate personală': [
        'Începe să își vadă punctele forte',
        'Înțelege mai bine cine este',
        'Începe să aibă direcție',
        'Își vede mai clar interesele reale',
        'Înțelege ce îl motivează',
      ],
      'Mindset & încredere': [
        'Nu se mai compară atât de mult',
        'Înțelege că nu există o singură cale „corectă"',
        'Capătă mai mult curaj în decizii',
        'Începe să creadă mai mult în el',
        'Își reduce anxietatea legată de viitor',
      ],
      'Adaptare la lumea viitorului': [
        'Înțelege cum se schimbă lumea și joburile',
        'Înțelege impactul AI-ului și al tehnologiei',
        'Descoperă competențele viitorului',
        'Înțelege că flexibilitatea este importantă',
        'Începe să gândească mai strategic',
      ],
      'Acțiune': [
        'Începe să exploreze conștient',
        'Începe să pună întrebări mai bune',
        'Face legătura între pasiuni și viața reală',
        'Înțelege cum să își construiască drumul',
        'Pleacă cu mai multă claritate și motivație',
      ],
    },

    parentSignals: [
      '„nu știe ce îi place cu adevărat"',
      '„se răzgândește foarte des"',
      '„nu are direcție"',
      '„pare demotivat"',
      '„nu își vede valoarea"',
      '„nu știe la ce este bun"',
      '„îi este frică să aleagă greșit"',
      '„simte presiune când se vorbește despre viitor"',
    ],

    discoveryQuestions: [
      'V-ați dori ca adolescentul vostru să aibă mai multă claritate legată de viitor?',
      'Cum reacționează când se vorbește despre facultate sau profesie?',
      'Simțiți că își vede punctele forte sau încă se caută?',
      'V-ar plăcea să descopere ce i se potrivește fără presiune și comparație?',
      'Cum credeți că s-ar schimba dacă ar avea mai multă claritate și încredere în direcția lui?',
    ],

    awarenessQuestion: 'Cum credeți că l-ar ajuta să intre în lumea adultă cu o direcție clară, nu cu confuzie?',
    awarenessNote: 'Pune problema în viitor, fără presiune.',

    whatWeDoIntro: 'Nu îi spunem cine să devină. Îl ajutăm să se descopere.',
    whatWeDoExamples: [
      'Teste și exerciții de autocunoaștere',
      'Simulări și jocuri de rol',
      'Explorarea punctelor forte',
      'Discuții despre lumea viitorului',
      'AI și competențele viitorului',
      'Experiențe practice și proiecte',
      'Întâlniri și modele inspiraționale',
    ],

    realExamples: [
      { title: 'Exemplul 1', text: 'Am avut adolescenți care intrau cu „nu știu ce vreau" și au plecat cu 2-3 direcții clare pe care vor să le exploreze.' },
      { title: 'Exemplul 2', text: 'Unii și-au schimbat decizia despre liceu/facultate după ce și-au înțeles punctele forte.' },
      { title: 'Exemplul 3', text: 'Mulți părinți au spus că pentru prima dată copilul vorbea despre viitor fără anxietate.' },
    ],

    presentationPhrase: 'Tabăra de Vocație este programul în care adolescentul începe să se descopere, să își înțeleagă punctele forte și să își construiască direcția într-o lume care se schimbă foarte repede.',

    transitionToOffer: 'Din ce mi-ați spus, cred că tabăra de Vocație este pasul potrivit. Vă explic exact cum funcționează și vedeți dacă simțiți că este momentul potrivit pentru el.',

    noVsYesBenefits: {
      no: ['„orientare în carieră"'],
      yes: [
        '„își descoperă punctele forte"',
        '„înțelege ce îl motivează cu adevărat"',
        '„iese din presiunea «ce facultate faci»"',
      ],
    },

    importantNote: 'Vocația nu se decide pe loc. E o explorare. Programul deschide ușa.',

    objections: [
      { obj: '„E prea devreme"', answer: 'Cu cât descoperă mai devreme, cu atât are mai mult timp să exploreze fără presiune.' },
      { obj: '„Decide singur"', answer: 'Decide singur — dar cu ce instrumente? Asta îi dăm noi.' },
      { obj: '„Nu se decide niciodată"', answer: 'Asta e exact problema pe care o rezolvăm: îi dăm cadrul de a se descoperi.' },
    ],

    doNotSay: [
      '„îi spunem ce să facă"',
      '„iese cu o profesie aleasă"',
      '„rezolvă toată confuzia"',
    ],

    periods: [{ age: '13–18', dates: '12–17 iul', occupied: 19, total: 50 }],
  },

  leadership: {
    name: 'Tabăra de Leadership',
    tagline: 'Nivel 3 · pentru adolescenți cu potențial de lider',
    tag: 'Top ales', category: 'tabere', thumb: 'thumb-leadership', icon: 'ti-crown',
    price: '5.900 lei', discounted: '5.015 lei cu -15%',
    location: 'Zona Brașov', capacity: 'Max 48 copii', shortDates: '19–24 iul',
    productPageUrl: 'https://pasaportpentrusucces.ro/tabere/tabara-leadership-adolescenti/',

    whatIsIt: 'Program în care adolescenții învață să conducă: pe ei, proiecte și oameni. Leadership-ul la noi nu înseamnă dominare, ci asumare, comunicare și impact.',

    forWho: [
      'Au inițiativă sau potențial de lider',
      'Vor să aibă impact',
      'Sunt creativi și vor să construiască ceva',
      'Vor să organizeze proiecte',
      'Vor să învețe să lucreze cu oameni',
      'Au idei, dar nu știu cum să le transforme în realitate',
      'Sunt deja implicați în activități / voluntariat',
      'Vor mai multă claritate și direcție',
      'Vor să-și descopere rolul',
    ],

    realProblem: [
      'Autoreglare',
      'Responsabilitate',
      'Comunicare',
      'Organizare',
      'Adaptare',
      'Capacitatea de a lucra cu oameni',
    ],
    realProblemNote: 'Leadership-ul nu este talent pur.',

    benefitsByCategory: {
      'Leadership personal': [
        'Începe să se organizeze mai bine',
        'Devine mai responsabil',
        'Își asumă deciziile',
        'Învață să gestioneze presiunea',
        'Devine mai disciplinat',
      ],
      'Comunicare': [
        'Își exprimă mai clar ideile',
        'Învață să vorbească în fața grupului',
        'Înțelege cum să influențeze fără agresivitate',
        'Ascultă mai bine',
        'Învață să ofere feedback',
      ],
      'Lucru în echipă': [
        'Înțelege rolurile într-o echipă',
        'Învață să colaboreze',
        'Învață să gestioneze conflicte',
        'Devine mai adaptabil',
        'Înțelege responsabilitatea față de grup',
      ],
      'Project management & inițiativă': [
        'Învață să transforme idei în acțiuni',
        'Înțelege cum se construiește un proiect',
        'Începe să gândească strategic',
        'Învață să coordoneze activități',
      ],
      'Pentru viitor': [
        'Capătă experiență practică de leadership, nu doar teorie',
      ],
    },

    parentSignals: [
      '„are potențial, dar nu este organizat"',
      '„începe multe și nu termină"',
      '„vrea să conducă, dar se ceartă cu ceilalți"',
      '„îi este greu să lucreze în echipă"',
      '„are idei bune, dar nu le pune în practică"',
      '„nu are răbdare"',
      '„îi este greu să gestioneze responsabilitatea"',
    ],

    discoveryQuestions: [
      'V-ar plăcea ca adolescentul vostru să aibă mai multă inițiativă și asumare?',
      'Cum se descurcă acum în echipe sau grupuri?',
      'Vedeți la el potențial de leadership sau impact?',
      'Cum reacționează când are responsabilitate?',
      'V-ar plăcea să înceapă să construiască proiecte și să capete experiență practică?',
    ],

    awarenessQuestion: 'Cum credeți că îl va ajuta în viitor dacă învață de acum să comunice, să organizeze și să conducă oameni și proiecte?',

    whatWeDoIntro: 'Adolescenții primesc roluri, proiecte și responsabilități reale. Leadership-ul se învață prin experiență.',
    whatWeDoExamples: [
      'Coordonează echipe',
      'Construiesc proiecte',
      'Rezolvă probleme',
      'Iau decizii sub presiune',
      'Primesc feedback',
      'Își asumă roluri de leadership',
    ],

    realExamples: [
      { title: 'Exemplul 1', text: 'Am avut adolescenți foarte inteligenți, dar dezorganizați, care au început să conducă echipe și să își asume responsabilități.' },
      { title: 'Exemplul 2', text: 'Unii adolescenți și-au descoperit pentru prima dată curajul de a coordona și vorbi în fața altora.' },
      { title: 'Exemplul 3', text: 'Am avut participanți care după tabără au început propriile proiecte sau au devenit mentori pentru alți copii.' },
    ],

    presentationPhrase: 'Tabăra de leadership este un spațiu în care adolescenții învață să conducă prin responsabilitate, comunicare și acțiune, nu prin control sau teorie.',

    transitionToOffer: 'Din ce mi-ați spus, văd că adolescentul vostru are potențial de lider. Acest program îi dă cadrul să-l exerseze cu adevărat.',

    noVsYesBenefits: {
      no: ['„învățăm leadership"'],
      yes: [
        '„învață să organizeze și să ducă lucrurile până la capăt"',
        '„învață să lucreze cu oameni"',
        '„învață să comunice și să coordoneze"',
        '„capătă experiență practică, nu doar teorie"',
      ],
    },

    importantNote: 'Leadership = responsabilitate + comunicare + impact, nu dominare.',

    objections: [
      { obj: '„Nu e lider"', answer: 'Leadership-ul se învață. Nu e talent pur.' },
      { obj: '„Are deja inițiativă"', answer: 'Cu atât mai bine — îi dăm cadrul să o canalizeze structurat.' },
      { obj: '„Mai vedem"', answer: 'Ce ar trebui să vedeți la el ca să fiți siguri că e momentul?' },
    ],

    doNotSay: [
      '„devine lider după 6 zile"',
      '„toți copiii devin lideri"',
      '„e mai bun decât un MBA"',
    ],

    periods: [{ age: '15–18', dates: '19–24 iul', occupied: 7, total: 25 }],
  },

  relatii: {
    name: 'Tabăra de Relații',
    tagline: 'Nivel 2 · abilități sociale și emoționale reale',
    tag: 'Nou', category: 'tabere', thumb: 'thumb-relatii', icon: 'ti-heart-handshake',
    price: '5.500 lei', discounted: '4.675 lei cu -15%',
    location: 'Zona Brașov', capacity: 'Max 48 copii', shortDates: '26–31 iul',
    productPageUrl: 'https://pasaportpentrusucces.ro/tabere/tabara-relatii-sanatoase-adolescenti/',

    whatIsIt: 'Program în care adolescenții învață cum funcționează relațiile, emoțiile, limitele și conexiunile sănătoase. Face parte din Nivelul 2 — Competențele Viitorului.',

    forWho: [
      'Suferă mult în relații și prietenii',
      'Se atașează foarte repede',
      'Se simt respinși ușor',
      'Nu știu să pună limite',
      'Intră în relații toxice',
      'Au nevoie mare de validare',
      'Nu înțeleg de ce reacționează emoțional',
      'Se simt singuri sau neînțeleși',
      'Își doresc conexiuni reale',
    ],

    realProblem: [
      'Lipsă de limite sănătoase',
      'Lipsă de înțelegere emoțională',
      'Frică de respingere',
      'Nevoie mare de validare',
      'Lipsă de claritate în relații',
    ],
    realProblemNote: 'Nu este doar sensibilitate.',

    benefitsByCategory: {
      'Relația cu sine': [
        'Începe să se respecte mai mult',
        'Înțelege de ce reacționează emoțional',
        'Nu mai ia totul atât de personal',
        'Începe să pună limite',
        'Nu mai caută atât de mult validare',
      ],
      'Relațiile cu ceilalți': [
        'Înțelege cum funcționează relațiile sănătoase',
        'Învață să comunice mai clar',
        'Înțelege diferența dintre presiune și iubire',
        'Își alege mai conștient oamenii',
        'Nu se mai lasă influențat atât de ușor',
      ],
      'Emoțional': [
        'Înțelege respingerea și cum să o gestioneze',
        'Învață să gestioneze conflictele',
        'Își exprimă emoțiile mai sănătos',
        'Înțelege atașamentul și conexiunea',
        'Devine mai echilibrat emoțional',
      ],
      'Pentru viitor': [
        'Construiește relații mai sănătoase',
        'Învață să spună „nu" fără vinovăție',
        'Înțelege mai bine dinamica socială',
        'Capătă mai multă siguranță în relații',
        'Devine mai autentic în conexiuni',
      ],
    },

    parentSignals: [
      '„suferă foarte tare din cauza prietenilor"',
      '„se schimbă după anturaj"',
      '„are nevoie constantă de validare"',
      '„se atașează foarte repede"',
      '„nu știe să spună nu"',
      '„se pierde în relații"',
      '„ia totul foarte personal"',
    ],

    discoveryQuestions: [
      'Cum se descurcă adolescentul vostru în relațiile și prieteniile lui?',
      'V-ați dori să aibă mai multă încredere și claritate în relații?',
      'Cum reacționează când este respins sau criticat?',
      'Simțiți că pune limite sănătoase?',
      'Cum credeți că l-ar ajuta în viață să înțeleagă mai bine relațiile și emoțiile?',
    ],

    awarenessQuestion: 'Dacă rămâne așa, cum credeți că va arăta viața lui de relație în liceu / facultate / mai târziu?',

    whatWeDoIntro: 'Lucrăm pe relații reale, în grup. Adolescenții experimentează atașamentul, conflictul, limitele — într-un cadru sigur.',
    whatWeDoExamples: [
      'Simulări de conflict și reconciliere',
      'Exerciții de exprimare emoțională',
      'Lucru pe limite și „nu"',
      'Înțelegere atașament și respingere',
      'Comunicare directă și autentică',
    ],

    realExamples: [
      { title: 'Exemplul 1', text: 'Adolescenți care intrau cu „nu am prieteni" au plecat cu prima conexiune reală în viața lor.' },
      { title: 'Exemplul 2', text: 'Mulți au spus că pentru prima dată au înțeles de ce reacționează atât de puternic la respingere.' },
      { title: 'Exemplul 3', text: 'Părinții ne-au spus că au început să pună limite acasă fără să se simtă vinovați.' },
    ],

    presentationPhrase: 'Tabăra de Relații îi ajută pe adolescenți să înțeleagă cum funcționează conexiunile sănătoase, emoțiile și limitele, astfel încât să nu se mai piardă pe ei în relațiile cu ceilalți.',

    transitionToOffer: 'Din ce văd, programul de Relații i s-ar potrivi. Vă explic concret cum lucrăm și voi simțiți dacă e pasul potrivit.',

    noVsYesBenefits: {
      no: ['„dezvoltăm abilitățile sociale"'],
      yes: [
        '„învață să spună nu fără vinovăție"',
        '„nu se mai lasă influențat la fel de ușor"',
        '„înțelege diferența dintre presiune și iubire"',
      ],
    },

    importantNote: 'Relațiile se învață prin experiență, nu prin lecții.',

    objections: [
      { obj: '„E sociabil"', answer: 'Sociabil ≠ relații sănătoase. Aici lucrăm pe profunzime, nu pe cantitate.' },
      { obj: '„Trece etapa"', answer: 'Trece — dar cu ce mecanisme? Cele care îl vor urma toată viața.' },
    ],

    doNotSay: [
      '„rezolvă toate problemele de prietenie"',
      '„toți copiii devin sociabili"',
    ],

    periods: [{ age: '13–18', dates: '26–31 iul', occupied: 17, total: 50 }],
  },

  financiar: {
    name: 'Tabăra de Educație Financiară',
    tagline: 'Gândire economică și antreprenorială',
    tag: 'Practic', category: 'tabere', thumb: 'thumb-financiar', icon: 'ti-currency-dollar',
    price: '5.500 lei', discounted: '4.675 lei cu -15%',
    location: 'Zona Brașov', capacity: 'Max 48 copii', shortDates: '2–7 aug',
    productPageUrl: 'https://pasaportpentrusucces.ro/tabere/tabara-educatie-financiara-adolescenti/',

    whatIsIt: 'Program în care copiii și adolescenții învață cum funcționează banii, deciziile, valoarea și responsabilitatea într-un mod practic și experiențial. Nu îi învățăm doar să facă bani. Îi învățăm să gândească.',

    forWho: [
      'Nu înțeleg valoarea banilor',
      'Cheltuie impulsiv',
      'Nu au răbdare sau responsabilitate',
      'Nu au contact cu lumea reală',
      'Nu știu cum funcționează business-ul',
      'Sunt creativi, dar dezorganizați',
      'Vor să facă „ceva al lor"',
      'Sunt curioși despre antreprenoriat',
      'Vor mai multă independență',
      'Vor să înțeleagă lumea adulților',
    ],

    realProblem: [
      'Autonomie',
      'Responsabilitate',
      'Decizii',
      'Consecințe',
      'Inițiativă',
      'Relația cu valoarea și efortul',
    ],
    realProblemNote: 'Nu este doar despre bani.',

    benefitsByCategory: {
      'Mentalitate': [
        'Începe să înțeleagă cum funcționează banii',
        'Înțelege diferența dintre dorință și nevoie',
        'Începe să gândească pe termen mai lung',
        'Înțelege valoarea muncii și a responsabilității',
        'Începe să vadă oportunități, nu doar probleme',
      ],
      'Comportamental': [
        'Devine mai responsabil',
        'Își asumă mai ușor consecințele',
        'Începe să ia inițiativă',
        'Devine mai organizat',
        'Începe să termine ce începe',
      ],
      'Relația cu banii': [
        'Nu mai vede banii doar ca „ce primesc"',
        'Înțelege cum se creează valoarea',
        'Începe să facă alegeri mai conștiente',
        'Învață să gestioneze resurse',
        'Înțelege că deciziile au impact',
      ],
      'Social & leadership': [
        'Lucrează în echipă',
        'Comunică și negociază',
        'Învață să colaboreze',
        'Înțelege rolurile într-un proiect',
      ],
      'Pentru viitor': [
        'Începe să gândească mai matur și mai autonom',
      ],
    },

    parentSignals: [
      '„nu înțelege cât de greu se câștigă banii"',
      '„cheltuie imediat tot"',
      '„nu are răbdare"',
      '„nu își asumă responsabilități"',
      '„vrea multe, dar nu duce lucrurile până la capăt"',
      '„nu are inițiativă"',
      '„îi este frică să greșească"',
      '„nu știe ce înseamnă valoare sau muncă"',
    ],

    discoveryQuestions: [
      'Cum se descurcă copilul vostru cu responsabilitatea în momentul acesta?',
      'V-ați dori să fie mai autonom sau mai implicat?',
      'Cum reacționează când trebuie să depună efort pentru ceva?',
      'Ce relație ați vrea să aibă cu banii și munca peste câțiva ani?',
      'V-ar plăcea să înceapă să gândească mai matur și mai independent?',
    ],

    awarenessQuestion: 'Cum credeți că îl va ajuta în viață dacă începe de acum să înțeleagă responsabilitatea, deciziile și valoarea?',

    whatWeDoIntro: 'Copiii intră într-o simulare practică de economie și business. Nu este teorie. Este experiență.',
    whatWeDoExamples: [
      'Construiesc proiecte',
      'Gestionează resurse',
      'Lucrează în echipe',
      'Iau decizii',
      'Negociază',
      'Experimentează consecințe reale',
    ],

    realExamples: [
      { title: 'Exemplul 1', text: 'Am avut copii care la început evitau responsabilitatea și după câteva zile au început să conducă echipe și să ia inițiativă.' },
      { title: 'Exemplul 2', text: 'Unii copii au realizat pentru prima dată câtă muncă este în spatele banilor și au devenit mult mai conștienți.' },
      { title: 'Exemplul 3', text: 'Am avut adolescenți care au descoperit că le place partea de business, organizare sau leadership.' },
    ],

    presentationPhrase: 'Tabăra de educație financiară nu este doar despre bani. Este despre cum învață copilul să gândească, să decidă și să funcționeze în lumea reală.',

    transitionToOffer: 'Văd din ce mi-ați spus că programul ăsta i s-ar potrivi. Vă explic exact cum funcționează simulările și vedeți dacă e potrivit acum.',

    noVsYesBenefits: {
      no: ['„învățăm educație financiară"'],
      yes: [
        '„învață ce înseamnă responsabilitatea"',
        '„înțelege cum se iau deciziile în viața reală"',
        '„vede cum funcționează un business"',
        '„înțelege valoarea muncii și a banilor"',
      ],
    },

    importantNote: 'Banii sunt scuza. Subiectul real e responsabilitatea și gândirea matură.',

    objections: [
      { obj: '„E prea mic pentru bani"', answer: 'Nu vorbim despre investiții. Vorbim despre cum gândește, cum decide, cum își asumă.' },
      { obj: '„Nu vrea business"', answer: 'Nu trebuie să vrea. Învață să gândească. Va folosi asta în orice carieră.' },
    ],

    doNotSay: [
      '„iese cu propriul business"',
      '„o să facă bani după"',
      '„devine antreprenor"',
    ],

    periods: [{ age: '14–18', dates: '2–7 aug', occupied: 13, total: 50 }],
  },

  public: {
    name: 'Tabăra de Public Speaking',
    tagline: 'Nivel 2 · vocea, exprimarea, prezența scenică',
    tag: 'Practic', category: 'tabere', thumb: 'thumb-public', icon: 'ti-microphone',
    price: '5.500 lei', discounted: '4.675 lei cu -15%',
    location: 'Zona Brașov', capacity: 'Max 48 copii', shortDates: '16–21 aug',
    productPageUrl: 'https://pasaportpentrusucces.ro/tabere/tabara-public-speaking-adolescenti/',

    whatIsIt: 'Programul în care adolescenții învață să vorbească cu mai mult curaj, claritate și impact. Face parte din Nivelul 2 — Competențele Viitorului.',

    forWho: [
      'Au emoții când vorbesc în public',
      'Se blochează când sunt priviți',
      'Au idei bune, dar nu le exprimă',
      'Vor să capete curaj',
      'Vor să vorbească mai clar și convingător',
      'Sunt retrași sau timizi',
      'Vor să își dezvolte prezența și impactul',
    ],

    realProblem: [
      'Frică de judecată',
      'Frică de greșeală',
      'Lipsă de exercițiu',
      'Lipsă de încredere în exprimare',
    ],
    realProblemNote: 'Nu este lipsă de inteligență.',

    benefitsByCategory: {
      'Curaj & exprimare': [
        'Capătă mai mult curaj să vorbească',
        'Își exprimă ideile mai clar',
        'Învață să gestioneze emoțiile de expunere',
        'Devine mai prezent și mai sigur',
        'Vorbește mai clar și mai organizat',
      ],
      'Tehnică': [
        'Învață să transmită emoție și mesaj',
        'Nu se mai blochează atât de ușor',
        'Capătă încredere în grup',
        'Învață să susțină prezentări',
        'Devine mai convingător',
        'Își dezvoltă prezența și vocea',
        'Învață storytelling',
        'Învață să improvizeze',
      ],
      'Pentru viața reală': [
        'Începe să își folosească vocea cu încredere',
        'Capătă experiență practică',
        'Învață să vorbească în fața oamenilor fără panică',
        'Își dezvoltă leadershipul prin comunicare',
        'Pleacă cu mai mult curaj și expresivitate',
      ],
    },

    parentSignals: [
      '„știe, dar nu spune"',
      '„îi este frică să vorbească"',
      '„se blochează la prezentări"',
      '„vorbește foarte încet"',
      '„îi este rușine să se exprime"',
      '„are emoții foarte mari"',
    ],

    discoveryQuestions: [
      'Cum se simte adolescentul vostru când trebuie să vorbească în fața altora?',
      'V-ar plăcea să aibă mai mult curaj și impact în exprimare?',
      'Simțiți că are idei bune, dar nu le exprimă?',
      'Cum credeți că l-ar ajuta în viitor să știe să comunice și să vorbească cu încredere?',
      'V-ar plăcea să învețe să vorbească fără să se blocheze de emoții?',
    ],

    awarenessQuestion: 'Cum credeți că l-ar afecta în carieră / relații / viață dacă rămâne cu această frică de exprimare?',

    whatWeDoIntro: 'Nu citim despre public speaking. Vorbim. În fiecare zi. În scenarii reale.',
    whatWeDoExamples: [
      'Discursuri scurte zilnice',
      'Storytelling pe teme alese',
      'Improvizație și răspuns la întrebări neașteptate',
      'Feedback structurat de la grup și formator',
      'Filmare și revizionare proprie',
    ],

    realExamples: [
      { title: 'Exemplul 1', text: 'Adolescenți care nu vorbeau deloc în prima zi au ținut discursuri de 5 minute la final.' },
      { title: 'Exemplul 2', text: 'Mulți au început să răspundă voluntar la oră după tabără — pentru prima dată.' },
      { title: 'Exemplul 3', text: 'Câțiva au început să facă conținut video / TikTok cu încredere.' },
    ],

    presentationPhrase: 'Tabăra de Public Speaking îi ajută pe adolescenți să își folosească vocea, ideile și emoțiile cu mai mult curaj și impact în viața reală.',

    transitionToOffer: 'Din ce mi-ați spus, văd că tabăra asta i-ar deschide o ușă mare. Vă explic concret cum lucrăm.',

    noVsYesBenefits: {
      no: ['„cursuri de oratorie"'],
      yes: [
        '„nu mai îngheață când e privit"',
        '„își spune ideile clar"',
        '„capătă curaj să se exprime"',
      ],
    },

    importantNote: 'Public speaking e curaj, nu tehnică. Tehnica vine după.',

    objections: [
      { obj: '„E timid din fire"', answer: 'Timiditatea nu e fixă. E lipsă de exercițiu într-un cadru sigur.' },
      { obj: '„Nu îi place să vorbească"', answer: 'Aici nu trebuie să-i placă din start. Trebuie să descopere că poate.' },
    ],

    doNotSay: [
      '„îl transformăm într-un orator"',
      '„rezolvă toată timiditatea"',
    ],

    periods: [{ age: '14–18', dates: '16–21 aug', occupied: 30, total: 50 }],
  },

  lifestart: {
    name: 'Life Start',
    tagline: 'Nivel 2 → 3 · pregătire pentru viața reală',
    tag: 'Pentru 18+', category: 'tabere', thumb: 'thumb-lifestart', icon: 'ti-walk',
    price: '4.500 lei', discounted: '3.850 lei cu -15%',
    location: 'Zona Brașov', capacity: 'Max 48 tineri', shortDates: '23–28 aug',
    productPageUrl: 'https://pasaportpentrusucces.ro/tabere/tabara-care-te-pregateste-pentru-viata/',

    whatIsIt: 'Programul care îi pregătește pe adolescenți pentru viața reală. Face parte din Nivelul 2 — Competențele Viitorului și face legătura către Nivelul 3 — Leadership. Life Start îi ajută să înțeleagă cum funcționează lumea adulților și cum să devină mai independenți.',

    forWho: [
      'Vor mai multă independență',
      'Se apropie de viața de adult',
      'Au nevoie de organizare și direcție',
      'Nu știu cum funcționează lumea reală',
      'Vor să fie mai autonomi',
      'Vor să înțeleagă responsabilitatea',
      'Au potențial, dar nu au structură',
      'Vor să se pregătească pentru viitor',
    ],

    realProblem: [
      'Lipsă de autonomie',
      'Lipsă de experiență practică',
      'Lipsă de responsabilitate',
      'Lipsă de pregătire pentru viața reală',
    ],
    realProblemNote: 'Nu este lipsă de inteligență.',

    benefitsByCategory: {
      'Maturitate & autonomie': [
        'Devine mai autonom',
        'Învață responsabilitatea',
        'Înțelege consecințele deciziilor',
        'Devine mai organizat',
        'Începe să funcționeze mai matur',
      ],
      'Skills practice': [
        'Înțelege cum funcționează lumea reală',
        'Învață să ia decizii',
        'Își dezvoltă disciplina',
        'Învață să își gestioneze timpul',
        'Înțelege importanța inițiativei',
      ],
      'Pentru viitor': [
        'Începe să funcționeze mai independent',
        'Înțelege responsabilitatea personală',
        'Capătă experiență practică',
        'Învață adaptabilitate',
        'Își dezvoltă mindsetul de adult responsabil',
        'Învață să colaboreze',
        'Înțelege cum să construiască și să ducă lucrurile până la capăt',
        'Devine mai sigur pe el',
        'Capătă claritate și structură',
        'Pleacă mai pregătit pentru viața reală',
      ],
    },

    parentSignals: [
      '„nu este pregătit pentru viața reală"',
      '„depinde foarte mult de noi"',
      '„nu își asumă responsabilități"',
      '„nu știe să se organizeze"',
      '„nu știe ce înseamnă consecințele"',
      '„îi este greu să ia decizii"',
    ],

    discoveryQuestions: [
      'V-ați dori ca adolescentul vostru să fie mai autonom și mai responsabil?',
      'Cum se descurcă acum cu organizarea și asumarea?',
      'Simțiți că este pregătit pentru lumea reală?',
      'Cum credeți că l-ar ajuta să capete experiență practică și responsabilitate?',
      'V-ar plăcea să înceapă să funcționeze mai matur și mai independent?',
    ],

    awarenessQuestion: 'Cum credeți că o să se descurce când va trebui să ia decizii singur, fără voi alături?',

    whatWeDoIntro: 'Simulăm responsabilități reale de adult: bani, decizii, organizare, cariera. Cu mentori care le arată cum.',
    whatWeDoExamples: [
      'Simulări de decizii sub presiune',
      'Înțelegere CV / interview / job',
      'Organizare proprie (timp, resurse)',
      'Discuții despre cariere reale',
      'Construire plan personal',
    ],

    realExamples: [
      { title: 'Exemplul 1', text: 'Tineri care intrau cu „nu știu ce vreau" au ieșit cu un plan de 6-12 luni concret.' },
      { title: 'Exemplul 2', text: 'Mulți părinți au spus că au început să-și asume singuri lucruri pe care înainte le pasau lor.' },
      { title: 'Exemplul 3', text: 'Unii au început primul lor job sau proiect imediat după.' },
    ],

    presentationPhrase: 'Life Start este programul care îi ajută pe adolescenți să facă trecerea dintre copilărie și viața reală, prin autonomie, responsabilitate și experiențe practice.',

    transitionToOffer: 'Cred că Life Start e exact ce-i trebuie acum, înainte să intre complet în lumea adultă.',

    noVsYesBenefits: {
      no: ['„cursuri de viață"'],
      yes: [
        '„învață să ia decizii sub presiune"',
        '„înțelege cum funcționează lumea adulților"',
        '„capătă instrumente practice de viață"',
      ],
    },

    importantNote: 'Tranziția spre adult nu se face accidental. Se construiește.',

    objections: [
      { obj: '„Învață singur"', answer: 'Învață — dar cu ce cost și în cât timp? Aici accelerăm și structurăm.' },
      { obj: '„Are timp"', answer: 'Are — dar deciziile mari încep să apară. E mai bine pregătit dinainte.' },
    ],

    doNotSay: [
      '„devine adult în 6 zile"',
      '„rezolvă toate problemele de viață"',
    ],

    periods: [{ age: '18+', dates: '23–28 aug', occupied: 4, total: 50 }],
  },

  examene: {
    name: 'Tabăra de Examene',
    tagline: 'Nivel 2 · gestionare emoții, concentrare, presiune',
    tag: 'Toamnă', category: 'tabere', thumb: 'thumb-examene', icon: 'ti-school',
    price: '5.500 lei', discounted: '4.800 lei cu reducere',
    location: 'Zona Brașov', capacity: 'Max 48 copii', shortDates: '25–30 oct',
    productPageUrl: 'https://pasaportpentrusucces.ro/tabere/tabara-pregatire-pentru-examene/',

    whatIsIt: 'Programul în care adolescenții învață cum să gestioneze emoțiile, concentrarea și presiunea examenelor. Face parte din Nivelul 2 — Competențele Viitorului.',

    forWho: [
      'Se stresează foarte tare înainte de examene',
      'Se blochează la teste',
      'Au emoții mari',
      'Învață, dar nu reușesc să arate ce știu',
      'Procrastinează',
      'Nu sunt organizați',
      'Își pierd motivația',
      'Au overthinking și anxietate',
    ],

    realProblem: [
      'Gestionarea emoțiilor',
      'Concentrare',
      'Organizare mentală',
      'Frică de greșeală',
      'Presiune și overthinking',
    ],
    realProblemNote: 'Nu este doar despre învățat.',

    benefitsByCategory: {
      'Emoțional': [
        'Înțelege cum funcționează emoțiile în examene',
        'Învață să gestioneze stresul',
        'Nu se mai blochează atât de ușor',
        'Își crește încrederea înainte de examen',
        'Își controlează mai bine dialogul interior',
        'Nu mai intră atât de mult în panică',
        'Învață să se autoregleze emoțional',
      ],
      'Tehnică de învățare': [
        'Învață tehnici de concentrare',
        'Devine mai organizat',
        'Înțelege cum se produce învățarea',
        'Învață să învețe mai eficient',
        'Își gestionează mai bine timpul',
        'Reduce procrastinarea',
      ],
      'Reziliență': [
        'Înțelege cum să își folosească mintea, nu să lupte cu ea',
        'Devine mai disciplinat',
        'Învață să funcționeze sub presiune',
        'Își dezvoltă reziliența',
        'Își crește claritatea mentală',
        'Capătă mai multă siguranță în el',
        'Intră în examene mai pregătit emoțional și mental',
      ],
    },

    parentSignals: [
      '„știe, dar nu poate arăta la examen"',
      '„intră în panică"',
      '„învață pe ultima sută de metri"',
      '„nu se poate concentra"',
      '„se consumă emoțional"',
      '„își pierde încrederea înainte de examen"',
    ],

    discoveryQuestions: [
      'Cum reacționează adolescentul vostru înainte de teste sau examene?',
      'V-ați dori să aibă mai multă liniște și încredere în perioadele de examen?',
      'Simțiți că problema este doar materia sau și emoțiile?',
      'Cum credeți că l-ar ajuta să știe să își gestioneze mintea și emoțiile în momentele de presiune?',
      'V-ar plăcea să învețe cum să învețe, nu doar ce să învețe?',
    ],

    awarenessQuestion: 'Dacă rămâne cu această reacție la examene, cum credeți că va trece prin Bacalaureat / admitere / orice examen mare?',

    whatWeDoIntro: 'Lucrăm pe ambele: tehnici de învățare + gestionare emoțională. Ambele sunt necesare.',
    whatWeDoExamples: [
      'Simulări de examen sub presiune',
      'Tehnici de respirație și calmare',
      'Metode de învățare eficientă',
      'Gestionare timp și prioritizare',
      'Restructurare gânduri negative',
    ],

    realExamples: [
      { title: 'Exemplul 1', text: 'Adolescenți care se blocau la examen au reușit să intre cu calm la BAC și au luat note mai mari decât în simulări.' },
      { title: 'Exemplul 2', text: 'Mulți și-au schimbat metoda de învățare și au învățat în jumătate de timp.' },
      { title: 'Exemplul 3', text: 'Părinții au spus că în perioada de examene a fost prima dată când casa nu a fost în tensiune.' },
    ],

    presentationPhrase: 'Tabăra de Examene îi ajută pe adolescenți să își gestioneze emoțiile, concentrarea și presiunea, astfel încât să poată arăta ceea ce știu cu adevărat.',

    transitionToOffer: 'Cu Bac-ul / examenele care vin, programul ăsta îi dă cadrul potrivit. Vă explic exact cum lucrăm.',

    noVsYesBenefits: {
      no: ['„meditații pentru BAC"'],
      yes: [
        '„nu se mai blochează la examen"',
        '„știe ce să facă cu panica"',
        '„învață cum să învețe, nu doar ce"',
      ],
    },

    importantNote: 'Examenul e un test emoțional, nu doar academic. Lucrăm pe ambele.',

    objections: [
      { obj: '„Învață deja"', answer: 'Învață — dar poate să arate la examen ce știe? Asta e diferența.' },
      { obj: '„E doar emoție"', answer: 'Exact. Și emoția poate fi gestionată cu tehnici concrete.' },
    ],

    doNotSay: [
      '„garantăm 10 la BAC"',
      '„rezolvă toată anxietatea"',
    ],

    periods: [{ age: '13–18', dates: '25–30 oct', occupied: 16, total: 50 }],
  },

  parinte: {
    name: 'Curs Părinte de Adolescent',
    tagline: '6 întâlniri bilunare LIVE online · pentru părinți',
    tag: 'Pentru părinți', category: 'online', thumb: 'thumb-parinte', icon: 'ti-users-group',
    price: '2.950 lei', discounted: '2.050 lei cu -30%',
    location: 'Online live (Zoom)', capacity: 'Grup mic, interactiv', shortDates: 'Start 11 oct',
    productPageUrl: 'https://pasaportpentrusucces.ro/ghiduri-resurse/parinte-de-adolescent/',

    whatIsIt: 'Curs structurat pentru părinți care vor să înțeleagă mai bine ce trăiește adolescentul lor și să comunice mai bine acasă. 6 întâlniri bilunare, format LIVE online, grup mic.',

    forWho: [
      'Părinte de adolescent 11–18 ani',
      'Părinte care simte că „nu mai înțelege" copilul',
      'Părinte cu conflicte repetate acasă',
      'Părinte care vrea să prevină problemele',
      'Părinte care a citit cărți dar vrea structură live',
    ],

    realProblem: [
      'Lipsă de înțelegere a etapei de adolescență',
      'Comunicare blocată sau conflictuală',
      'Lipsă de instrumente concrete',
      'Părinți care se simt singuri în proces',
    ],

    benefitsByCategory: {
      'Înțelegere': [
        'Înțelegi mai bine ce trăiește adolescentul tău',
        'Înțelegi de ce reacționează cum reacționează',
      ],
      'Comunicare': [
        'Comunici fără să escaladezi conflictele',
        'Pui limite ferme dar nu rigide',
        'Reconstruiești încrederea după perioade dificile',
      ],
      'Pentru tine': [
        'Te simți mai încrezător ca părinte',
        'Ieși din spirala vinovăției',
      ],
    },

    parentSignals: [
      '„nu mai știu cum să-i vorbesc"',
      '„orice îi spun se ceartă"',
      '„e ca un străin în casa noastră"',
    ],

    discoveryQuestions: [
      'Cum vă simțiți voi ca părinte de adolescent?',
      'Ce ar fi un succes pentru voi din acest curs?',
      'Sunteți deschis să discutați și voi cu adolescentul?',
      'Aveți timp pentru 6 întâlniri bilunare?',
    ],

    awarenessQuestion: 'Dacă rămân lucrurile așa, cum credeți că va arăta relația în următorii ani?',

    whatWeDoIntro: 'Format live, interactiv. Nu prelegeri. Discuții, exerciții, întrebări reale.',
    whatWeDoExamples: [
      'Sesiuni live cu Simona',
      'Studii de caz pe situații reale',
      'Materiale între întâlniri',
      'Comunitate de părinți',
    ],

    realExamples: [
      { title: 'Exemplul 1', text: 'Părinți care intrau cu „nu mai pot" au plecat cu instrumente concrete pentru fiecare situație.' },
      { title: 'Exemplul 2', text: 'Mulți au spus că pentru prima dată au înțeles de ce copilul reacționează așa.' },
    ],

    presentationPhrase: 'Curs Părinte de Adolescent vă dă instrumentele să înțelegeți și să comunicați cu adolescentul vostru, fără să mai treceți zilnic prin război emoțional.',

    transitionToOffer: 'Vă spun exact ce conține cursul și voi simțiți dacă e momentul potrivit.',

    noVsYesBenefits: {
      no: ['„curs de parenting"'],
      yes: [
        '„instrumente pentru situații reale"',
        '„nu mai sunteți singuri în proces"',
      ],
    },

    importantNote: 'Cursul completează tabăra. Părinte informat + copil exersat = schimbare reală.',

    objections: [
      { obj: '„Nu am timp"', answer: 'Bilunar înseamnă 2 ore la 2 săptămâni. Mai puțin decât cearta de azi.' },
      { obj: '„Citesc cărți"', answer: 'Cărțile dau idei. Cursul dă structură + practică + comunitate.' },
    ],

    doNotSay: [
      '„rezolvă toate problemele de acasă"',
      '„veți deveni părintele perfect"',
    ],

    periods: [{ age: 'Părinți', dates: 'Start 11 oct 2026', occupied: 0, total: 30 }],
  },

  ie: {
    name: 'Inteligența Emoțională pentru Adolescenți',
    tagline: 'Curs digital · 3 module + extensii M4-M7',
    tag: 'Curs digital', category: 'cursuri', thumb: 'thumb-curs', icon: 'ti-device-laptop',
    price: '149 lei', discounted: 'Pachet complet 509 lei',
    location: 'Online (acces oricând)', capacity: 'Acces individual', shortDates: 'Permanent',
    productPageUrl: 'https://pasaportpentrusucces.ro/curs-incredere-in-sine/',

    whatIsIt: 'Curs digital introductiv în inteligența emoțională, pentru adolescenți. Acces oricând. Investiție mică, ideală ca primă probă PPS.',

    forWho: [
      'Părinte care vrea „o probă" înainte de tabără',
      'Adolescent care preferă format digital',
      'Familii cu buget mai mic',
      'Adolescent autonom care învață singur',
      'Părinte care vrea suport între tabere',
    ],

    realProblem: [
      'Acces limitat la conținut PPS',
      'Buget redus pentru o tabără completă',
      'Curiozitate, dar fără angajament mare',
    ],

    benefitsByCategory: {
      'Învățare': [
        'Adolescentul învață să-și recunoască emoțiile',
        'Tehnici concrete pentru gestionarea stresului',
        'Module suplimentare M4-M7: Comunicare, Organizare, Examene, Bullying',
      ],
      'Acces': [
        'Acces oricând — fără program fix',
        'Investiție mică pentru introducere în PPS',
      ],
    },

    parentSignals: [
      '„vreau ceva pentru el dar nu sunt sigur de tabără"',
      '„avem buget redus dar vrem să încercăm"',
    ],

    discoveryQuestions: [
      'Ar fi deschis copilul vostru la un curs online?',
      'Ce module v-ar interesa cel mai mult?',
      'Aveți timp să-l urmărească regulat?',
      'Ați vrea să încercați înainte de o tabără?',
    ],

    awarenessQuestion: 'Cum credeți că ar reacționa la format digital?',

    whatWeDoIntro: 'Module video scurte cu exerciții practice. Adolescentul învață în ritmul lui.',
    whatWeDoExamples: [
      '3 module de bază',
      '4 module opționale',
      'Exerciții practice între module',
    ],

    realExamples: [
      { title: 'Exemplul 1', text: 'Mulți părinți au început cu cursul digital și apoi au înscris copilul la tabără.' },
    ],

    presentationPhrase: 'Cursul digital e o probă bună înainte de tabără — copilul vede ce înseamnă PPS și voi vedeți dacă funcționează.',

    transitionToOffer: 'Vă pot trimite link-ul direct sau, dacă vreți să mergeți direct pe tabără, vă spun cum funcționează acolo.',

    noVsYesBenefits: {
      no: ['„curs de dezvoltare personală"'],
      yes: [
        '„adolescentul învață să-și înțeleagă emoțiile"',
        '„format care i se potrivește"',
      ],
    },

    importantNote: 'Cursul digital e bun ca rampă spre tabere, nu ca substitut.',

    objections: [
      { obj: '„Nu va deschide cursul"', answer: 'Modulele sunt scurte, format prietenos. Plus că-i dați acces, nu obligația.' },
    ],

    doNotSay: [
      '„înlocuiește tabăra"',
      '„rezolvă toate problemele"',
    ],

    periods: [{ age: '12–18', dates: 'Acces permanent', occupied: 0, total: 999 }],
  },

  carte: {
    name: 'Agenda EQ — 4peace',
    tagline: 'Carte/agendă pentru adolescenți',
    tag: 'Carte', category: 'cursuri', thumb: 'thumb-carte', icon: 'ti-book',
    price: '237 lei', discounted: '',
    location: 'Livrare prin curier', capacity: '—', shortDates: 'În stoc',
    productPageUrl: 'https://pasaportpentrusucces.ro/magazin/',

    whatIsIt: 'Agenda interactivă de inteligență emoțională pentru adolescenți. Format scriere + exerciții. Cadou ideal sau introducere blândă.',

    forWho: [
      'Părinte care vrea să facă un cadou util',
      'Adolescent care preferă să scrie',
      'Familii cu buget mic',
      'Părinte care vrea să introducă tema EQ acasă',
      'Cadou pentru ziua de naștere/Crăciun',
    ],

    realProblem: [
      'Vrei un instrument concret, nu doar conversații',
      'Buget redus dar interes ridicat',
    ],

    benefitsByCategory: {
      'Pentru adolescent': [
        'Instrument zilnic de autocunoaștere',
        'Format prietenos pentru adolescenți',
        'Exerciții simple și relevante',
      ],
      'Pentru familie': [
        'Cadou ideal pentru copii care nu vor curs',
        'Suport pentru a începe conversația acasă',
        'Investiție mică, impact pe termen lung',
      ],
    },

    parentSignals: [
      '„caut un cadou care să însemne ceva"',
      '„e introvertit, scrie mult"',
    ],

    discoveryQuestions: [
      'Copilul vostru ține un jurnal sau scrie?',
      'Ar accepta un astfel de cadou?',
      'Vreți să introduceți tema acasă înainte de tabără?',
      'Aveți buget redus dar vreți ceva relevant?',
    ],

    awarenessQuestion: '—',

    whatWeDoIntro: 'Agenda e creată de echipa PPS. Folosită cu succes în mii de familii.',
    whatWeDoExamples: [
      'Exerciții zilnice',
      'Spațiu de scriere',
      'Întrebări de reflecție',
    ],

    realExamples: [
      { title: 'Exemplul 1', text: 'Mulți părinți au cumpărat-o ca cadou și apoi au continuat cu o tabără.' },
    ],

    presentationPhrase: 'Agenda EQ e un instrument concret pe care adolescentul îl folosește singur, în ritmul lui.',

    transitionToOffer: 'Pot să vă trimit link-ul de comandă sau, dacă preferați un program complet, vă recomand și o tabără.',

    noVsYesBenefits: {
      no: ['„o carte de self-help"'],
      yes: [
        '„agenda creată de echipa PPS"',
        '„format pentru adolescenți, nu pentru adulți"',
      ],
    },

    importantNote: 'E o intrare blândă în lumea PPS. Nu un substitut pentru tabără.',

    objections: [
      { obj: '„Nu citește/nu scrie"', answer: 'Atunci poate că un curs digital sau direct o tabără ar fi mai potrivite.' },
    ],

    doNotSay: [
      '„rezolvă toate problemele"',
      '„înlocuiește un program"',
    ],

    periods: [{ age: '12–18', dates: 'În stoc', occupied: 0, total: 999 }],
  },
},

SCRIPTS: [
  { title: 'Deschiderea apelului', phase: 'sales', phaseLabel: 'Apel',
    quote: 'Bună ziua! Mă numesc [Numele tău] și sun din partea Pașaport pentru Succes. V-ați înscris recent pentru informații despre programele noastre pentru adolescenți. Aveți 3 minute să vă spun pe scurt ce oferim și să văd cum vă pot ajuta?',
    note: 'Tonul e cald, nu recitat. Nu întrebi dacă ai deranjat — prezumi că e ok și treci la subiect.' },
  { title: 'Calificare — 3 întrebări cheie', phase: 'sales', phaseLabel: 'Apel',
    quote: '1. Ce vârstă are copilul? 2. Ce v-a atras la PPS — ați văzut ceva specific sau v-a recomandat cineva? 3. Care e lucrul pe care ați vrea cel mai mult să se schimbe la el/ea în perioada asta?',
    note: 'Nu întrebi toate odată. Le pui natural, ascultând răspunsul înainte de următoarea.' },
  { title: 'Descoperire reală', phase: 'sales', phaseLabel: 'Apel',
    quote: 'Înțeleg din ce mi-ați spus că [problema identificată]. Vreau să înțeleg mai bine înainte să vă propun ceva — cum arată asta în viața de zi cu zi a copilului? Ce se întâmplă concret?',
    note: 'Nu pitch-ui imediat. Pune întrebări specifice pentru a înțelege contextul real al familiei.' },
  { title: 'Escaladare către Adina sau Dana', phase: 'escalate', phaseLabel: 'Escaladare',
    quote: 'Apreciez foarte mult discuția noastră. Cred că [Adina/Dana] poate să vă explice mai în detaliu și să vă răspundă la întrebări specifice. Când aveți 20 de minute în cursul săptămânii ca să vorbiți cu ea?',
    note: 'Folosește DOAR când lead-ul are potențial mare dar simți că nu poți închide tu. Nu e procedură standard — e excepție pentru lead-uri sensibile.' },
  { title: 'Obiecție: „e scump"', phase: 'objection', phaseLabel: 'Obiecție',
    quote: 'Înțeleg că investiția contează. În această perioadă (mai 2026) avem o ofertă de -10% valabilă până la sfârșitul lunii. Dar dincolo de preț: ce ar fi cel mai important pentru voi să vedeți schimbat la copil în perioada următoare?',
    note: 'Nu spui „aceasta e reducerea maximă". Redirectezi spre valoare și spre problema lor reală.' },
  { title: 'Obiecție: „mai stau să mă gândesc"', phase: 'objection', phaseLabel: 'Obiecție',
    quote: 'Bineînțeles, e o decizie importantă. Ca să vă ajut să gândiți mai clar: care e lucrul principal care vă face să ezitați? De obicei e vorba de timing, buget sau nu sunteți siguri că se potrivește. La care vă referiți voi?',
    note: 'Nu lași obiecția în aer. Clarifici ce anume stă în spatele ei — fiecare obiecție are o cauză reală.' },
  { title: 'Obiecție: „nu cred că vrea să meargă"', phase: 'objection', phaseLabel: 'Obiecție',
    quote: 'E o îngrijorare normală. Mulți copii ezită înainte, dar pleacă mulțumiți și cer să revină. Ați vrea să vă trimit 2-3 testimoniale de la copii care au avut aceeași ezitare?',
    note: 'Numerele sunt reale — verifică-le în materialele de la Adina înainte. Nu inventa procente.' },
  { title: 'Închidere blândă', phase: 'sales', phaseLabel: 'Apel',
    quote: 'Având în vedere ce mi-ați spus, cred că tabăra de [produs] e cea mai potrivită. Avem locuri în seria [data]. Cum facem mai departe — vă trimit acum link-ul de înscriere sau preferați să vorbim cu copilul mai întâi?',
    note: 'Oferi două opțiuni clare, ambele pozitive. Nu „vreți sau nu vreți" — ci „cum facem".' },
],

PARENT_RESOURCES: [
  { emoji: '💚', title: 'Povești reale (testimoniale)',
    desc: 'Pagina cu povești reale de la părinți și adolescenți care au trecut prin programele PPS. Cel mai puternic combustibil pentru ezitare — trimite-l înainte sau după apel.',
    link: 'https://pasaportpentrusucces.ro/povesti-reale/',
    cta: 'Deschide pagina' },
  { emoji: '🏞️', title: 'Pagina principală PPS',
    desc: 'Pagina de start a site-ului. Pentru părinții care vor să exploreze tot ecosistemul PPS, nu doar un produs.',
    link: 'https://pasaportpentrusucces.ro/incepe-aici/',
    cta: 'Deschide pagina' },
  { emoji: '🗺️', title: 'Traseul adolescentului prin PPS',
    desc: 'Cele 4 niveluri PPS prezentate pentru părinți. Util când părintele vrea să înțeleagă „cum se leagă totul".',
    link: 'https://pasaportpentrusucces.ro/traseul-adolescentului/',
    cta: 'Deschide pagina' },
],

// Ghiduri PDF pentru părinți (separate de webinarii și WhatsApp)
GHIDURI_PARINTI: [
  { emoji: '📘', title: 'Ce spui când nu mai știi ce să spui',
    desc: 'Ghid practic pentru părinți cu adolescenți cu care comunicarea e blocată. Formulări concrete, situații tipice.',
    link: 'https://drive.google.com/file/d/1ss7lR6Jl64dTf_JL7vGTVOk2Bn0t2JlW/view',
    when: 'Trimite părinților care spun „nu mai pot vorbi cu el" sau „nu știu ce să-i spun"' },
  { emoji: '🎯', title: '4 talente și puncte forte',
    desc: 'Ghid pentru părinți care vor să descopere punctele forte reale ale copilului lor — dincolo de note și performanță școlară.',
    link: 'https://drive.google.com/file/d/1cx4vD5IUJ86-4YHgys9gC8xC6hhD3csB/view',
    when: 'Trimite părinților interesați de Tabăra de Vocație sau care zic „nu știu la ce e bun"' },
  { emoji: '🚪', title: '5 pași dacă e retras',
    desc: 'Ghid pentru părinți cu adolescenți timizi, retrași sau care s-au închis în ultima perioadă.',
    link: 'https://drive.google.com/file/d/1xKGpfoHz34ycKFwJCKQEAYfNU1j8Vlwt/view',
    when: 'Trimite părinților interesați de Tabăra de Încredere în Sine sau care zic „s-a închis în el"' },
  { emoji: '🧠', title: 'De ce adolescentul tău reacționează așa',
    desc: 'Ghid despre ce se întâmplă în creierul adolescentului. Ajută părintele să înțeleagă în loc să se înfurie.',
    link: 'https://drive.google.com/file/d/1AIej5BOFQCEV5rjIKhLmTX2_Xh-9_Ug-/view',
    when: 'Trimite părinților care zic „nu-l înțeleg" sau care au conflicte repetate acasă' },
],

// Webinarii Simona — 3 înregistrări care se trimit părinților
WEBINARII: [
  {
    emoji: '🎯',
    title: 'Încrederea în sine în era AI',
    when: 'Trimis părinților care au copii ce nu știu cum să se descurce în lumea care se schimbă rapid',
    desc: 'Despre cum se construiește încrederea în sine în era AI. Ce competențe au nevoie adolescenții pentru viitorul digital, cum diferă generația lor și ce pot face părinții ca să-i pregătească.',
    forWhom: 'Părinți curioși despre AI/tehnologie + impactul asupra copiilor lor. Bun pentru părinți „analitici".',
    link: 'https://vimeo.com/1181532282',
  },
  {
    emoji: '👨‍👩‍👧',
    title: 'Conectăm Generații',
    when: 'Trimis părinților cu probleme de comunicare cu adolescentul',
    desc: 'Despre relația părinte-copil în adolescență. Cum se reconstruiește comunicarea când pare blocată, exerciții practice, ce să faci când copilul „nu mai vorbește cu tine".',
    forWhom: 'Părinți care simt că „nu mai pot vorbi cu copilul lor". Perfect ca rampă spre programul ConnectGen.',
    link: 'https://vimeo.com/1181537870',
  },
  {
    emoji: '🦋',
    title: 'Curajul și autonomia adolescenților',
    when: 'Trimis pentru EZITARE sau pentru părinți cu adolescenți „dependenți" / „revoltați"',
    desc: 'Cum dezvolți curajul și autonomia adolescentului. Cum oferi limite ferme dar nu sufocante. Povești și exemple concrete de transformare.',
    forWhom: 'Părinți cu adolescenți care nu-și asumă responsabilitatea SAU care se revoltă des. Le dă încrederea că se poate.',
    link: 'https://vimeo.com/1181528749',
  },
],

// Mesaje WhatsApp — template-uri pe care sellerul le copiază și personalizează
WHATSAPP_MESSAGES: [
  {
    emoji: '👋',
    title: 'După primul apel — mulțumire & continuare',
    when: 'Imediat după ce ai vorbit prima dată cu părintele',
    text: 'Bună ziua, {NUME_PARINTE}! Mulțumesc pentru timpul acordat azi. V-am pregătit câteva materiale despre programul nostru pe care le puteți parcurge în liniște. Vă scriu în următoarele zile să stabilim un moment pentru următorul pas. Numai bine, [Numele tău] · Pașaport pentru Succes',
  },
  {
    emoji: '📅',
    title: 'Confirmare apel programat',
    when: 'În ziua dinaintea apelului programat',
    text: 'Bună ziua, {NUME_PARINTE}! Vă confirm apelul de mâine la ora {ORA}. Va dura aprox 20-30 min. Pregătiți-vă să-mi povestiți puțin despre {NUME_COPIL} ca să vă pot ghida cel mai bine. Pe curând! [Numele tău]',
  },
  {
    emoji: '🎬',
    title: 'Trimitere webinar pentru context',
    when: 'După calificare, când vrei să-i dai mai mult context înainte de apelul programat',
    text: 'Bună ziua, {NUME_PARINTE}! V-am pregătit acest webinar al Simonei despre {SUBIECT_RELEVANT} — vă va da o imagine bună despre cum gândim la PPS. {LINK_WEBINAR} · Îl puteți viziona când aveți timp, durează ~45 min. Vorbim curând!',
  },
  {
    emoji: '💚',
    title: 'Trimitere povești reale',
    when: 'Pentru părinți care ezită — au nevoie de social proof',
    text: 'Bună ziua, {NUME_PARINTE}! Înțeleg că este o decizie importantă. V-am pregătit pagina cu povești reale ale părinților și adolescenților care au trecut prin program: https://pasaportpentrusucces.ro/povesti-reale/ — citiți-le în liniște și apoi vorbim. Numai bine!',
  },
  {
    emoji: '⏰',
    title: 'Ofertă cu termen limitat',
    when: 'Când există campanie activă și părintele a primit oferta verbal',
    text: 'Bună ziua, {NUME_PARINTE}! Vă confirm în scris oferta discutată: tabăra de {NUME_TABARA}, perioada {PERIOADA}, preț cu reducere {PRET_REDUCERE} (în loc de {PRET_STANDARD}). Oferta este valabilă până la {DATA_LIMITA}. Dacă decideți, îmi spuneți și vă trimit linkul de înscriere. Numai bine!',
  },
  {
    emoji: '🔄',
    title: 'Follow-up la 3 zile',
    when: 'Când nu a răspuns sau a zis „mai vedem"',
    text: 'Bună ziua, {NUME_PARINTE}! Mă gândeam la voi. Știu că e o decizie importantă, dar vreau să mă asigur că aveți toate informațiile. Există ceva specific la care v-ați blocat sau o întrebare la care n-am răspuns? Sunt aici. [Numele tău]',
  },
  {
    emoji: '✅',
    title: 'Confirmare înscriere',
    when: 'Imediat după ce a făcut înscrierea sau plata',
    text: 'Bună ziua, {NUME_PARINTE}! Bine ați venit în familia PPS! 🎉 Înscrierea pentru {NUME_COPIL} la {NUME_TABARA} ({PERIOADA}) este confirmată. În următoarele zile veți primi pe email un pachet cu informații despre tabără. Pentru orice întrebare, scrieți-mi aici. Numai bine!',
  },
  {
    emoji: '👨‍👩‍👧',
    title: 'Trimitere link tabără pe site',
    when: 'Când părintele cere „mai multe detalii oficiale"',
    text: 'Bună ziua, {NUME_PARINTE}! Aici găsiți pagina oficială cu detalii complete despre tabără: {LINK_TABARA}. Conține programul zi-cu-zi, beneficiile, testimonialele și pozele. Citiți cu liniște și apoi vorbim. Numai bine!',
  },
],

// Conținut intern pentru materiale din Învățare (modal)
LEARNING_CONTENT: {
  'povestea-pps': {
    title: 'Povestea din spate · de ce există PPS',
    body: `<p>Pașaport pentru Succes a fost fondat din observația că adolescenții români sunt foarte bine pregătiți academic, dar slab pregătiți pentru viața reală — emoții, relații, decizii, comunicare.</p>
<p><strong>Peste 34.000 de adolescenți</strong> au trecut prin programele PPS de la înființare. Datele noastre arată că 95% pleacă din tabără cu schimbări concrete, observabile și acasă.</p>
<p><strong>De ce contează ce faci tu:</strong> fiecare apel pe care îl dai este șansa unui copil să intre într-un program care l-ar putea transforma. Nu vinzi o tabără. Aduci o oportunitate.</p>
<p style="margin-top:14px;"><a href="https://pasaportpentrusucces.ro/de-ce-noi/" target="_blank" rel="noopener" style="color:var(--accent); font-weight:600;">→ Pagina oficială „De ce noi"</a></p>`,
  },
  'regula-baza': {
    title: 'Regula de bază · ce vindem cu adevărat',
    body: `<p style="font-size:16px; font-style:italic; padding:16px; background:var(--accent-bg); border-left:3px solid var(--accent); border-radius:8px;">Nu vindem tabăra. Vindem transformarea potrivită pentru copil.</p>
<p>Asta e diferența. Tabăra e mediul. Transformarea e produsul.</p>
<p><strong>Practic:</strong></p>
<ul style="padding-left:20px; line-height:1.8;">
  <li>Părintele nu cumpără 6 zile în Brașov. Cumpără un copil mai încrezător la întoarcere.</li>
  <li>Dacă programul nu se potrivește, nu vindem. Recomandăm altul sau spunem onest „poate altă dată".</li>
  <li>Un „nu" onest e mai valoros decât o vânzare nepotrivită — copilul nu va beneficia, părintele nu va recomanda.</li>
</ul>`,
  },
  'reguli-raportare': {
    title: 'Reguli de raportare · ce completezi după fiecare apel',
    body: `<p>Apelul fără raportare nu există. Podio e sursa de adevăr.</p>
<p><strong>După FIECARE apel completezi în Podio:</strong></p>
<ul style="padding-left:20px; line-height:1.8;">
  <li>Status lead (calificat / necalificat / re-contact / nu răspunde)</li>
  <li>Vârsta copilului + ce probleme au menționat părinții</li>
  <li>Sursa lead-ului (webinar, social, recomandare, follow-up)</li>
  <li>Programul recomandat + obiecții ridicate</li>
  <li>Următorul pas (apel programat / follow-up / trimitere materiale)</li>
  <li>Data și ora următorului contact</li>
</ul>
<p><strong>Follow-up:</strong> dacă lead-ul nu răspunde, urmează regula 1-3-7 — primul follow-up la 1 zi, al doilea la 3 zile, ultimul la 7 zile. După aceea îl marchezi „cold".</p>`,
  },
  'comision': {
    title: 'Structura comisionului',
    body: `<p>Cere PDF-ul oficial cu structura comisionului de la <strong>Sebi</strong> sau <strong>Adina</strong> — conține detaliile sensibile pe care nu le punem în dashboard.</p>
<p><strong>În rezumat:</strong></p>
<ul style="padding-left:20px; line-height:1.8;">
  <li>Comision per produs vândut, calculat pe valoarea netă (fără taxa de plată în rate)</li>
  <li>Plata se face lunar, pe luna anterioară, după ce s-au confirmat încasările</li>
  <li>Există bonus de performanță pentru ținte lunare atinse</li>
</ul>
<p style="margin-top:14px; padding:14px; background:var(--accent2-bg); border-left:3px solid var(--accent2); border-radius:8px;"><strong>Contactează:</strong> Adina (formare) sau Sebi (acces tehnic la documente).</p>`,
  },
  'tutorial-podio': {
    title: 'Tutorial Podio · cum notezi un apel',
    body: `<p>Tutorialul video al Podio este intern. Pentru acces, contactează-l pe <strong>Sebi</strong> care îți va da credențialele și-ți va arăta exact câmpurile.</p>
<p><strong>Pe scurt, în Podio completezi:</strong></p>
<ul style="padding-left:20px; line-height:1.8;">
  <li>Câmpurile obligatorii (status, vârstă copil, problemă)</li>
  <li>Notițe libere despre conversație (ce a spus părintele cu cuvintele lui)</li>
  <li>Programare next step (data + tip de contact)</li>
  <li>Tag-uri pentru filtrare ulterioară</li>
</ul>
<p style="margin-top:14px;"><strong>Important:</strong> notezi în 5-10 minute după apel, cât e proaspăt. Mai târziu uiți detalii esențiale.</p>`,
  },
},

DEMO_CALLS: [
  { quality: 'good', label: 'Bun', title: 'Conversie pe Tabăra Încredere', desc: 'Sellerul identifică rapid problema, califică corect și închide în 4 minute. Tonul e natural.', duration: '4:12' },
  { quality: 'good', label: 'Bun', title: 'Apel pe lead de recomandare', desc: 'Descoperire profundă, recomandă produsul potrivit (nu cel scump). Părintele mulțumește la final.', duration: '11:30' },
  { quality: 'medium', label: 'Mediu', title: 'Apel cu follow-up necesar', desc: 'Lead interesat dar nehotărât. Sellerul forțează închiderea în loc să asculte — pierde controlul.', duration: '8:45' },
  { quality: 'learn', label: 'De învățat', title: 'Obiecție „e scump" nerezolvată', desc: 'Sellerul s-a blocat. Ascultă și vezi cum NU se face — apoi compară cu scriptul aprobat.', duration: '6:33' },
  { quality: 'learn', label: 'De învățat', title: 'Pitch fără descoperire', desc: 'Sellerul începe cu prezentarea înainte să întrebe nimic. Părintele se închide. Lecția: descoperire mereu prima.', duration: '7:22' },
],

// LIMBAJ COMUN — meta-ghid Simona
LIMBAJ: {
  mesajCentral: {
    main: 'Noi nu facem doar tabere. Noi construim un sistem de competențe pentru generația Z și Alpha (next generation).',
    alt: 'Nu este doar o tabără, este un sistem de competențe pentru viitor.',
  },

  ppsIn10Sec: [
    {
      label: 'Varianta 1 · rapidă',
      text: 'Este un program în care copiii nu doar ascultă, ci exersează concret competențe de viață — încredere, emoții, comunicare, relații — exact în situații similare cu cele din viața reală.',
    },
    {
      label: 'Varianta 2 · mai emoțională',
      text: 'Îi ajutăm pe copii să nu se mai blocheze, să aibă curaj, să înțeleagă ce simt și să știe cum să reacționeze în viața reală.',
    },
    {
      label: 'Varianta 3 · pentru părinți analitici',
      text: 'Este un sistem structurat pe mai multe niveluri, care dezvoltă competențe esențiale pentru adaptarea copilului în lumea actuală: emoțional, social și decizional.',
    },
  ],

  diferentaTabere: {
    nu: 'Noi suntem mai buni decât alte tabere',
    da: [
      'Diferența este că noi nu lucrăm ca o tabără de distracție, ci ca un program în care copiii exersează comportamente și reacții reale.',
      'La noi nu este doar experiență, este antrenament pentru viața reală.',
      'Copiii nu pleacă doar cu amintiri, ci cu niște mecanisme pe care le folosesc după.',
      'Noi simulăm situații reale: respingere, emoții, comunicare, decizii — și îi învățăm ce să facă în acele momente.',
    ],
  },

  competenteTraduse: {
    nu: ['inteligență emoțională', 'dezvoltare personală', 'comunicare eficientă'],
    da: {
      'Emoțional': [
        'nu se mai blochează',
        'nu mai plânge când e criticat',
        'învață ce să facă atunci când îi este frică',
      ],
      'Social': [
        'își face mai ușor prieteni',
        'nu se mai lasă influențat',
        'știe să spună nu',
      ],
      'Mental': [
        'nu mai intră în overthinking',
        'înțelege ce se întâmplă în mintea lui',
        'ia decizii mai clar',
      ],
      'Acțiune': [
        'își spune punctul de vedere',
        'intră în situații pe care înainte le evita',
        'își asumă mai mult',
      ],
    },
  },

  cumVorbimDespreProbleme: {
    nu: [
      'copilul are o problemă gravă',
      'dacă nu faceți asta, o să fie rău',
      'o să ajungă X sau Y',
    ],
    da: [
      'Mulți părinți observă la copii…',
      'Este o etapă foarte frecventă la vârsta asta…',
      'Ce este important este că poate fi lucrat…',
      'Dacă rămâne așa, în timp poate să creeze dificultăți în…',
    ],
    rule: 'Problema se spune calm. Consecința vine de la părinte. Noi doar ghidăm.',
  },

  formulaProblemaSolutie: {
    formula: 'Din ce mi-ați spus, pare că cea mai mare provocare este… Exact pe zona asta lucrăm noi în programul X.',
    exemplu: 'Din ce mi-ați spus, pare că se blochează în situații de evaluare. Exact genul acesta de situații le simulăm și lucrăm în tabără, astfel încât copilul să învețe ce să facă în momentul acela.',
  },

  niveluriPPS: [
    { num: '1', name: '4PEACE · Bază', desc: 'Începem cu baza — încredere în sine și emoții.' },
    { num: '2', name: 'Competențe Viitorului', desc: 'Comunicare, relații, decizii, vocație, examene, public speaking.' },
    { num: '3', name: 'Leadership', desc: 'Adolescentul învață să conducă: pe el, proiecte, oameni.' },
    { num: '4', name: 'Comunitate · Recurring', desc: 'Părinții și copiii rămân conectați după program.' },
  ],

  cumVorbimDespreTabara: [
    'Tabăra este locul în care copilul exersează intens aceste lucruri.',
    'Este un mediu controlat în care poate greși, poate încerca și poate învăța fără presiune.',
    'Nu este teorie. Este practică, joc, simulare și feedback.',
    'Este ca un antrenament accelerat pentru viața reală.',
  ],

  comunitate: [
    'După program, părinții și copiii rămân conectați la comunitatea noastră.',
    'Acolo primesc suport, răspunsuri și activități periodice.',
    'Nu este doar un eveniment, ci un ecosistem.',
    'Copilul nu rămâne singur după cele 6 zile.',
  ],

  cumVorbimDespreaPret: {
    rule: 'Nu intrăm direct cu prețul înainte de valoare.',
    ordine: ['Înțelegere', 'Nevoie', 'Soluție', 'Valoare', 'Preț'],
    formulare: 'Vă spun exact cum funcționează înscrierea și costul, ca să vedeți dacă vi se potrivește.',
    note: 'Calm. Clar. Fără justificări lungi.',
  },

  formulaObiectii: {
    rule: 'Nu contrazicem. Nu argumentăm agresiv.',
    pasi: [
      'Înțeleg…',
      'Are sens…',
      'Mulți părinți simt asta…',
      'Pot să vă explic cum văd eu situația?',
    ],
  },

  ceNuSpunem: [
    'copilul nu are nicio problemă (oprește acțiunea)',
    'noi suntem cei mai buni',
    'alte tabere sunt slabe',
    'garantăm rezultate',
    'o să se schimbe complet în 6 zile',
    'promisiuni vagi despre comunitate',
    'explicații prea lungi fără întrebări',
  ],

  frazeCheie: [
    'Nu este doar o tabără, este un sistem de competențe pentru viitor.',
    'Copiii nu doar ascultă, ci exersează.',
    'Simulăm situații reale din viața lor.',
    'Învățăm copilul ce să facă în momentul în care…',
    'Nu lucrăm pe teorie, lucrăm pe comportament.',
    'Copilul pleacă cu instrumente, nu doar cu informație.',
    'Este un mediu în care poate greși și învăța fără presiune.',
    'Este un proces, nu doar un eveniment.',
  ],

  esenta: 'Îi ajutăm pe copii să nu se mai simtă pierduți, să aibă încredere în ei și să știe ce să facă în situațiile reale din viața lor.',
},

};
