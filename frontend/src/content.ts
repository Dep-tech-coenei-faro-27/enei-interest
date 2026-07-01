export const pageMarkup = `
<header class="navbar" id="navbar">
<div class="container nav-inner">
<a aria-label="ENEI 2027" class="logo" href="#">
<img alt="" aria-hidden="true" class="logo-mark" src="/assets/ENEI-logo.svg"/>
<span>ENEI</span>
</a>
<nav class="nav-links" id="navLinks">
<a href="#sobre">Sobre</a>
<a href="#atividades">Atividades</a>
<a href="#agenda">Agenda</a>
<a href="#equipa">Equipa</a>
<a href="#info">Informação &amp; Ajuda</a>
</nav>
<a class="btn btn-primary nav-cta" href="#interesse">Tenho interesse</a>
<button aria-controls="mobileMenu" aria-expanded="false" aria-label="Menu" class="hamburger" id="hamburger" type="button">
<span></span><span></span><span></span>
</button>
</div>
</header>
<div aria-hidden="true" class="mobile-menu" id="mobileMenu" inert="">
<nav>
<a class="mob-link" href="#sobre">Sobre</a>
<a class="mob-link" href="#atividades">Atividades</a>
<a class="mob-link" href="#agenda">Agenda</a>
<a class="mob-link" href="#equipa">Equipa</a>
<a class="mob-link" href="#info">Informação &amp; Ajuda</a>
<a class="btn btn-primary" href="#interesse">Tenho interesse</a>
</nav>
</div>
<main>
<section class="hero" id="hero">
<div class="hero-overlay"></div>
<div class="container hero-body">
<p class="ctag">&lt;CANDIDATURA: FARO_2027 /&gt;</p>
<h1>ENEI 2027</h1>
<p class="hero-sub">Encontro Nacional de Estudantes de Informática</p>
<p class="hero-date">8 – 11 Abril 2027 · Faro, Algarve</p>
<div class="hero-btns">
<a class="btn btn-outline" href="#sobre">Saber mais</a>
<a class="btn btn-primary" href="#interesse">Tenho interesse</a>
</div>
</div>
<p class="hero-scroll">Desliza para ver mais ↓</p>
</section>
<div class="stats-bar">
<div class="container stats-inner">
<div class="stat-col">
<span class="ctag sm">DATA</span>
<strong class="sv xl">8 – 11 Abr</strong>
<span class="sn">2027 · Quinta a Domingo</span>
</div>
<div class="stat-col">
<span class="ctag sm">LOCAL</span>
<strong class="sv">Faro, Algarve</strong>
<span class="sn">Universidade do Algarve</span>
</div>
<div class="stat-col">
<span class="ctag sm">INSCRIÇÕES</span>
<strong class="sv">Em breve</strong>
<span class="sn">Deixa o teu email para seres o primeiro a saber</span>
<a class="sc" href="#interesse">→ Avisa-me</a>
</div>
</div>
</div>
<section class="section" id="sobre">
<div class="container sobre-grid">
<div class="sobre-text">
<p class="ctag">&lt;SOBRE /&gt;</p>
<h2>O que é o ENEI?</h2>
<p class="body">O Encontro Nacional de Estudantes de Informática é o maior evento académico anual da área em Portugal. Reúne estudantes de universidades de todo o país durante 4 dias de imersão tecnológica, networking, palestras, workshops e muito mais. Em 2027, Faro candidata-se a ser o palco desta experiência.</p>
</div>
<div class="photo-grid">
<div aria-label="Feira de empresas e networking no ENEI" class="ph about-photo about-photo-1" role="img"></div>
<div aria-label="Workshop técnico do ENEI com estudantes a trabalhar em computadores" class="ph about-photo about-photo-2" role="img"></div>
<div aria-label="Palestra e tertúlia no palco principal do ENEI" class="ph about-photo about-photo-3" role="img"></div>
<div aria-label="Convívio noturno dos participantes do ENEI" class="ph about-photo about-photo-4" role="img"></div>
</div>
</div>
</section>
<section class="section dk">
<div class="container">
<div class="ctr">
<p class="ctag">&lt;VALORES /&gt;</p>
<h2>Os nossos pilares</h2>
</div>
<div class="pilares-grid">
<div class="pilar-card">
<div class="p-ico"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4l2.5 2.5"></path></svg></div>
<h3>Conhecimento</h3>
<p>Transferência de saber técnico e crítico em áreas como Inteligência Artificial, Cibersegurança, Engenharia de Software e outras vertentes da Informática, através de workshops, palestras e sessões práticas com profissionais da área.</p>
</div>
<div class="pilar-card">
<div class="p-ico"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 24 24"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"></path></svg></div>
<h3>Networking</h3>
<p>Ligação direta entre estudantes, empresas, profissionais e universidades. O ENEI é uma oportunidade única para construir contactos, descobrir oportunidades e integrar o ecossistema tecnológico nacional.</p>
</div>
<div class="pilar-card">
<div class="p-ico"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle></svg></div>
<h3>Cidadania</h3>
<p>Promoção de Faro e do Algarve como polo tecnológico jovem, moderno e atrativo. Mostrar que o Sul tem capacidade, talento e ambição para organizar eventos de referência nacional na área da Informática.</p>
</div>
</div>
</div>
</section>
<section class="section" id="localizacao">
<div class="container faro-grid">
<div class="faro-imgs">
<div aria-label="Faro, Algarve" class="faro-ph faro-main" role="img"><span class="faro-label">FARO, ALGARVE</span></div>
<div class="faro-row">
<div aria-label="Campus de Gambelas da Universidade do Algarve" class="faro-ph faro-sm" role="img"></div>
<div aria-label="UAlg Tec Campus" class="faro-ph faro-sm" role="img"></div>
</div>
</div>
<div class="faro-text">
<p class="ctag">&lt;LOCALIZAÇÃO /&gt;</p>
<h2>Porquê Faro?</h2>
<ul class="check-list">
<li><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#00AAFF" stroke-width="1.5"></circle><path d="M5 8.5l2 2 4-4" stroke="#00AAFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>Universidade do Algarve prevista como espaço principal das atividades</li>
<li><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#00AAFF" stroke-width="1.5"></circle><path d="M5 8.5l2 2 4-4" stroke="#00AAFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>Escola Secundária Tomás Cabreira confirmada para alojamento</li>
<li><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#00AAFF" stroke-width="1.5"></circle><path d="M5 8.5l2 2 4-4" stroke="#00AAFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>Infraestruturas académicas de excelência para acolher eventos nacionais</li>
<li><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#00AAFF" stroke-width="1.5"></circle><path d="M5 8.5l2 2 4-4" stroke="#00AAFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>Cidade com história, cultura e um ecossistema tecnológico jovem e crescente</li>
</ul>
</div>
</div>
</section>
<section class="section dk" id="atividades">
<div class="container ctr">
<p class="ctag">&lt;ATIVIDADES /&gt;</p>
<h2 class="h-xl">Quatro dias para explorar.</h2>
<p class="body center-t">De 8 a 11 de Abril em Faro. Descobre todas as oportunidades que o ENEI tem para te oferecer, desde sessões técnicas a momentos de networking inesquecíveis.</p>
<div class="filter-pills" id="filterPills" role="group">
<button aria-pressed="true" class="fpill active" data-filter="all" type="button">TODAS</button>
<button aria-pressed="false" class="fpill" data-filter="tecnico" type="button">TÉCNICAS</button>
<button aria-pressed="false" class="fpill" data-filter="social" type="button">SOCIAL</button>
<button aria-pressed="false" class="fpill" data-filter="competicao" type="button">COMPETIÇÃO</button>
</div>
</div>
</section>
<section class="section dk atv-sect">
<div class="container">
<h3 class="grid-h">O que vais encontrar</h3>
<div class="atv-grid" id="atvGrid">
<div class="ac" data-cat="tecnico">
<div class="ac-top">
<div class="ac-ico"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 20 20"><rect height="13" rx="2" width="16" x="2" y="4"></rect><path d="M2 8h16M7 4V2"></path></svg></div>
<span class="badge bt">TÉCNICO+EMPREGO</span>
</div>
<h4>Feira de Empresas</h4>
<p>Encontra o teu próximo empregador ou estágio. Contacto direto com recrutadores e empresas da área tecnológica.</p>
<div class="ac-foot"><svg fill="none" stroke="#5a7080" stroke-width="1.2" viewbox="0 0 16 16"><circle cx="8" cy="6" r="3"></circle><path d="M2 14c0-3 2.5-5 6-5s6 2 6 5"></path></svg><span>RECRUTAMENTO</span></div>
</div>
<div class="ac" data-cat="tecnico">
<div class="ac-top">
<div class="ac-ico"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 20 20"><path d="M11 4.5a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l2.2-2.2A5 5 0 0 1 10.5 13L5.5 18A1.8 1.8 0 0 1 3 15.5l5-5A5 5 0 0 1 14.5 4z"></path></svg></div>
<span class="badge bt">TÉCNICO</span>
</div>
<h4>Workshops</h4>
<p>Sessões práticas e intensivas em grupos reduzidos, guiadas por profissionais. Aprende fazendo.</p>
<div class="ac-foot"><svg fill="none" stroke="#5a7080" stroke-width="1.2" viewbox="0 0 16 16"><circle cx="8" cy="6" r="3"></circle><path d="M2 14c0-3 2.5-5 6-5s6 2 6 5"></path></svg><span>GRUPOS DE 10-15 PESSOAS</span></div>
</div>
<div class="ac" data-cat="tecnico">
<div class="ac-top">
<div class="ac-ico"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 20 20"><path d="M10 2a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path><path d="M5 9v1a5 5 0 0 0 10 0V9M10 16v3M7 19h6"></path></svg></div>
<span class="badge bt">TÉCNICO</span>
</div>
<h4>Palestras</h4>
<p>Apresentações por profissionais, empresas e convidados nacionais e internacionais da área da Informática.</p>
<div class="ac-foot"><svg fill="none" stroke="#5a7080" stroke-width="1.2" viewbox="0 0 16 16"><circle cx="8" cy="6" r="3"></circle><path d="M2 14c0-3 2.5-5 6-5s6 2 6 5"></path></svg><span>AUDITÓRIO PRINCIPAL</span></div>
</div>
<div class="ac" data-cat="tecnico">
<div class="ac-top">
<div class="ac-ico"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 20 20"><path d="M18 8v1a8 8 0 0 1-16 0V8M10 1l-7 5h14z"></path></svg></div>
<span class="badge ba">ACADÉMICO</span>
</div>
<h4>Tertúlias Académicas</h4>
<p>Conversas informais com professores, investigadores e representantes de universidades de todo o país.</p>
<div class="ac-foot"><svg fill="none" stroke="#5a7080" stroke-width="1.2" viewbox="0 0 16 16"><circle cx="8" cy="6" r="3"></circle><path d="M2 14c0-3 2.5-5 6-5s6 2 6 5"></path></svg><span>NETWORKING</span></div>
</div>
<div class="ac" data-cat="social">
<div class="ac-top">
<div class="ac-ico"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 20 20"><path d="M10 2l2 5.5h5.5l-4.5 3.3 1.8 5.5L10 13l-4.8 3.3 1.8-5.5L2.5 7.5H8z"></path></svg></div>
<span class="badge bt">TÉCNICO</span>
</div>
<h4>Tertúlia Digital</h4>
<p>Encontro com criadores de conteúdo, influencers tech e figuras ligadas à tecnologia e ao digital.</p>
<div class="ac-foot"><svg fill="none" stroke="#5a7080" stroke-width="1.2" viewbox="0 0 16 16"><circle cx="8" cy="6" r="3"></circle><path d="M2 14c0-3 2.5-5 6-5s6 2 6 5"></path></svg><span>TECH TRENDS</span></div>
</div>
<div class="ac" data-cat="social">
<div class="ac-top">
<div class="ac-ico"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 20 20"><circle cx="10" cy="10" r="3"></circle><path d="M10 1v2M10 17v2M1 10h2M17 10h2M3.64 3.64l1.42 1.42M14.94 14.94l1.42 1.42M3.64 16.36l1.42-1.42M14.94 5.06l1.42-1.42"></path></svg></div>
<span class="badge bs">SOCIAL</span>
</div>
<h4>Passeio Matinal</h4>
<p>Atividade matinal de convívio e ligação à cidade de Faro e à região algarvia.</p>
<div class="ac-foot"><svg fill="none" stroke="#5a7080" stroke-width="1.2" viewbox="0 0 16 16"><circle cx="8" cy="6" r="3"></circle><path d="M2 14c0-3 2.5-5 6-5s6 2 6 5"></path></svg><span>TODOS OS PARTICIPANTES</span></div>
</div>
<div class="ac" data-cat="competicao">
<div class="ac-top">
<div class="ac-ico"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 20 20"><polyline points="13 17 18 12 13 7"></polyline><polyline points="7 7 2 12 7 17"></polyline></svg></div>
<span class="badge bc">COMPETIÇÃO</span>
</div>
<h4>CTFs</h4>
<p>Competições Capture The Flag ao longo do evento. Desafios, equipas e prémios para os melhores.</p>
<div class="ac-foot"><svg fill="none" stroke="#5a7080" stroke-width="1.2" viewbox="0 0 16 16"><circle cx="8" cy="6" r="3"></circle><path d="M2 14c0-3 2.5-5 6-5s6 2 6 5"></path></svg><span>HACKERS WELCOME</span></div>
</div>
<div class="ac" data-cat="social">
<div class="ac-top">
<div class="ac-ico"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 20 20"><path d="M18 10.5A8 8 0 1 1 9.5 2a7 7 0 0 0 8.5 8.5z"></path></svg></div>
<span class="badge bs">SOCIAL</span>
</div>
<h4>Entrosamento</h4>
<p>Dinâmicas de integração, team building e convívio para aproximar participantes de todo o país.</p>
<div class="ac-foot"><svg fill="none" stroke="#5a7080" stroke-width="1.2" viewbox="0 0 16 16"><circle cx="8" cy="6" r="3"></circle><path d="M2 14c0-3 2.5-5 6-5s6 2 6 5"></path></svg><span>AFTER-HOURS</span></div>
</div>
</div>
</div>
</section>
<section class="section dk" id="agenda">
<div class="container ctr">
<p class="ctag">&lt;AGENDA /&gt;</p>
<h2 class="h-xl">Quatro dias de descoberta.</h2>
<p class="body center-t">8 a 11 de Abril de 2027 — Faro, Algarve</p>
<div class="day-tabs" id="dayTabs" role="tablist">
<button aria-controls="sch-quinta" aria-selected="true" class="dtab active" data-day="quinta" role="tab" type="button"><span class="dtn">QUINTA</span><span class="dtd">8 Abr</span></button>
<button aria-controls="sch-sexta" aria-selected="false" class="dtab" data-day="sexta" role="tab" type="button"><span class="dtn">SEXTA</span><span class="dtd">9 Abr</span></button>
<button aria-controls="sch-sabado" aria-selected="false" class="dtab" data-day="sabado" role="tab" type="button"><span class="dtn">SÁBADO</span><span class="dtd">10 Abr</span></button>
<button aria-controls="sch-domingo" aria-selected="false" class="dtab" data-day="domingo" role="tab" type="button"><span class="dtn">DOMINGO</span><span class="dtd">11 Abr</span></button>
</div>
</div>
</section>
<div class="agenda-sch dk">
<div class="container">
<div class="sch-panel active" id="sch-quinta" role="tabpanel">
<p class="sch-dl">QUINTA-FEIRA · 8 ABR</p>
<div class="sch-list">
<div class="sr"><span class="st">09:00</span><span class="si">Cerimónia de Abertura</span><span class="sb">ABERTURA</span></div>
<div class="sr"><span class="st">10:30</span><span class="si">Keynote Principal: O Futuro da Computação Quântica</span><span class="sb">KEYNOTE</span></div>
<div class="sr"><span class="st">14:00</span><span class="si">Workshops Paralelos — Sessão I</span><span class="sb">WORKSHOP</span></div>
<div class="sr"><span class="st">16:30</span><span class="si">Networking &amp; Stands de Empresas</span><span class="sb">EMPRESAS</span></div>
<div class="sr"><span class="st">21:00</span><span class="si">Evento de Boas-Vindas @ Baixa de Faro</span><span class="sb">SOCIAL</span></div>
</div>
</div>
<div class="sch-panel" id="sch-sexta" role="tabpanel">
<p class="sch-dl">SEXTA-FEIRA · 9 ABR</p>
<div class="sch-list">
<div class="sr"><span class="st">09:30</span><span class="si">Passeio Matinal por Faro</span><span class="sb">SOCIAL</span></div>
<div class="sr"><span class="st">11:00</span><span class="si">Palestras — Sessão I</span><span class="sb">PALESTRAS</span></div>
<div class="sr"><span class="st">14:30</span><span class="si">Workshops Paralelos — Sessão II</span><span class="sb">WORKSHOP</span></div>
<div class="sr"><span class="st">17:00</span><span class="si">Tertúlias Académicas</span><span class="sb">NETWORKING</span></div>
<div class="sr"><span class="st">20:30</span><span class="si">CTFs — Início das Competições</span><span class="sb">COMPETIÇÃO</span></div>
</div>
</div>
<div class="sch-panel" id="sch-sabado" role="tabpanel">
<p class="sch-dl">SÁBADO · 10 ABR</p>
<div class="sch-list">
<div class="sr"><span class="st">10:00</span><span class="si">Palestras — Sessão II</span><span class="sb">PALESTRAS</span></div>
<div class="sr"><span class="st">13:00</span><span class="si">Feira de Empresas</span><span class="sb">EMPRESAS</span></div>
<div class="sr"><span class="st">15:30</span><span class="si">Tertúlia Digital</span><span class="sb">SOCIAL</span></div>
<div class="sr"><span class="st">19:00</span><span class="si">Jantar de Gala</span><span class="sb">SOCIAL</span></div>
</div>
</div>
<div class="sch-panel" id="sch-domingo" role="tabpanel">
<p class="sch-dl">DOMINGO · 11 ABR</p>
<div class="sch-list">
<div class="sr"><span class="st">10:00</span><span class="si">Entrosamento Final</span><span class="sb">SOCIAL</span></div>
<div class="sr"><span class="st">12:00</span><span class="si">CTFs — Resultados &amp; Prémios</span><span class="sb">COMPETIÇÃO</span></div>
<div class="sr"><span class="st">14:00</span><span class="si">Cerimónia de Encerramento</span><span class="sb">ENCERRAMENTO</span></div>
</div>
</div>
</div>
</div>
<section class="section" id="programa">
<div class="container">
<p class="ctag">&lt;PROGRAMA /&gt;</p>
<h2 class="h-xl">Plano de Execução</h2>
<p class="body">Atividades planeadas para 4 dias de imersão tecnológica em Faro.</p>
<div class="tw">
<table class="pt">
<thead><tr><th>ATIVIDADE</th><th>DESCRIÇÃO</th><th>PÚBLICO ALVO</th></tr></thead>
<tbody>
<tr><td><span class="tn">Feira de Empresas</span></td><td>Stands de empresas, networking direto com recrutadores e profissionais da área.</td><td><span class="pp">Todos os participantes</span></td></tr>
<tr><td><span class="tn">Workshops</span></td><td>Sessões técnicas intensivas com grupos reduzidos, orientadas por profissionais.</td><td><span class="pp">Inscrição prévia</span></td></tr>
<tr><td><span class="tn">Palestras</span></td><td>Apresentações no auditório principal por empresas, docentes e convidados.</td><td><span class="pp">Geral</span></td></tr>
<tr><td><span class="tn">Tertúlias Académicas</span></td><td>Conversas informais com professores, investigadores e delegados universitários.</td><td><span class="pp">Estudantes e delegados</span></td></tr>
<tr><td><span class="tn">Tertúlia Digital</span></td><td>Debate e partilha com criadores de conteúdo e figuras ligadas ao digital.</td><td><span class="pp">Entusiastas da tecnologia</span></td></tr>
<tr><td><span class="tn">Passeio Matinal</span></td><td>Atividade de convívio ao ar livre para explorar a cidade de Faro e a região.</td><td><span class="pp">Todos os participantes</span></td></tr>
<tr><td><span class="tn">CTFs</span></td><td>Competições Capture The Flag individuais e por equipas, com prémios.</td><td><span class="pp">Security enthusiasts</span></td></tr>
<tr><td><span class="tn">Entrosamento</span></td><td>Dinâmicas de team building e integração entre participantes de todo o país.</td><td><span class="pp">Todos os participantes</span></td></tr>
</tbody>
</table>
</div>
</div>
</section>
<section class="section dk" id="equipa">
<div class="container ctr">
<p class="ctag">&lt;TEAM /&gt;</p>
<h2>Quem organiza o ENEI 2027?</h2>
<div class="dept-grid">
<div class="dc">
<div class="di"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg></div>
<h4>Logística</h4>
<p>Gestão de espaços, alojamento e infraestruturas do evento.</p>
</div>
<div class="dc">
<div class="di"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 24 24"><path d="M3 11l19-9-9 19-2-8-8-2z"></path></svg></div>
<h4>Marketing &amp; Comunicação</h4>
<p>Identidade visual, redes sociais e comunicação externa.</p>
</div>
<div class="dc">
<div class="di"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
<h4>Departamento Comercial</h4>
<p>Parcerias com empresas, patrocinadores e apoios institucionais.</p>
</div>
<div class="dc">
<div class="di"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg></div>
<h4>Atividades</h4>
<p>Programação técnica, workshops, palestras e momentos sociais.</p>
</div>
<div class="dc">
<div class="di"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
<h4>Tecnologia</h4>
<p>Website, plataformas digitais e suporte tecnológico ao evento.</p>
</div>
</div>
<div class="team-ph">
<svg fill="none" height="40" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 24 24" width="40"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<p class="ctag">&lt;PHOTO /&gt;</p>
<p class="tpl">Foto da equipa</p>
<p class="tps">Placeholder para a foto de grupo da organização.</p>
</div>
<p class="team-bio">A candidatura é liderada por David Gonçalves, em colaboração com o NEEI, NEEC, LESTI, BioEng e outras estruturas da Universidade do Algarve. Uma equipa multidisciplinar com visão, organização e capacidade de execução para receber o ENEI 2027 em Faro.</p>
<div class="neei-row"><img alt="NEEI" class="org-logo-mark org-logo-mark--team" src="/assets/neei-logo.webp"/></div>
</div>
</section>
<section class="section int-hero" id="interesse">
<div class="container ctr">
<p class="ctag">&lt;INTERESSE /&gt;</p>
<h2 class="h-xl">Mostra o teu interesse no ENEI 2027.</h2>
<p class="body center-t">Ainda não há inscrições abertas. Deixa o teu nome e email para demonstrares interesse e ficares a par de todas as novidades.</p>
<div class="ibadges">
<span class="ibadge">Evento a 8–11 Abr 2027</span>
<span class="ibadge acc">Candidatura aberta</span>
</div>
</div>
</section>
<div class="wl-section">
<div class="container wl-grid">
<div class="wl-left">
<h3>Fica a par das novidades.</h3>
<p class="body">Ainda não há inscrições abertas. Deixa o teu nome e email para demonstrares interesse e seres dos primeiros a saber quando abrirmos as candidaturas para o ENEI 2027. Sem spam.</p>
<form id="wlForm">
<div class="ff"><label for="wName">Nome</label><input id="wName" placeholder="Ex: João Silva" required="" type="text"/></div>
<div class="ff"><label for="wEmail">Email</label><input id="wEmail" placeholder="Ex: joao.silva@email.pt" required="" type="email"/></div>
<label class="terms-consent" for="wConsent"><input id="wConsent" required="" type="checkbox"/><span>Aceito ser contactado por email sobre novidades do ENEI 2027 e concordo com os <a href="#">termos de privacidade</a>.</span></label>
<button class="btn btn-primary btn-full" type="submit">Tenho interesse</button>
</form>
</div>
<div class="wl-right">
<h4>Porquê demonstrar interesse?</h4>
<ul class="check-list">
<li><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#00AAFF" stroke-width="1.5"></circle><path d="M5 8.5l2 2 4-4" stroke="#00AAFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>Seres dos primeiros a saber quando abrimos candidaturas</li>
<li><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#00AAFF" stroke-width="1.5"></circle><path d="M5 8.5l2 2 4-4" stroke="#00AAFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>Receberes novidades sobre o programa e oradores</li>
<li><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#00AAFF" stroke-width="1.5"></circle><path d="M5 8.5l2 2 4-4" stroke="#00AAFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>Ajudares a mostrar que existe interesse real por parte do público</li>
<li><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#00AAFF" stroke-width="1.5"></circle><path d="M5 8.5l2 2 4-4" stroke="#00AAFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>Participares num dos maiores eventos de Informática de Portugal</li>
</ul>
</div>
</div>
</div>
<section class="section" id="info">
<div class="container ctr">
<p class="ctag">&lt;INFO /&gt;</p>
<h2 class="h-xl">Como podemos ajudar?</h2>
<p class="body center-t">Encontra respostas às tuas perguntas sobre o ENEI 2027.</p>
<div class="faq-sb">
<svg fill="none" stroke="#8899AA" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 20 20"><circle cx="9" cy="9" r="6"></circle><path d="m15 15 3 3"></path></svg>
<input aria-label="Pesquisar nas perguntas frequentes" id="faqSearch" placeholder="Pesquisa uma pergunta..." type="text"/>
</div>
</div>
</section>
<div class="faq-pills-bar">
<div class="container ctr">
<div class="faq-pills" id="faqPills" role="group">
<button aria-pressed="true" class="fp active" data-faqcat="candidatura" type="button">Candidatura</button>
<button aria-pressed="false" class="fp" data-faqcat="programa" type="button">Programa</button>
<button aria-pressed="false" class="fp" data-faqcat="alojamento" type="button">Alojamento</button>
<button aria-pressed="false" class="fp" data-faqcat="transporte" type="button">Transporte</button>
<button aria-pressed="false" class="fp" data-faqcat="eventos" type="button">Eventos</button>
<button aria-pressed="false" class="fp" data-faqcat="parcerias" type="button">Parcerias</button>
<button aria-pressed="false" class="fp" data-faqcat="documentos" type="button">Documentos</button>
</div>
</div>
</div>
<div class="faq-acc-wrap">
<div class="container faq-layout">
<aside class="faq-side" id="faqSide">
<a class="fs active" data-faqcat="candidatura" href="#">Candidatura</a>
<a class="fs" data-faqcat="programa" href="#">Programa</a>
<a class="fs" data-faqcat="alojamento" href="#">Alojamento</a>
<a class="fs" data-faqcat="transporte" href="#">Transporte</a>
<a class="fs" data-faqcat="eventos" href="#">Eventos</a>
<a class="fs" data-faqcat="parcerias" href="#">Parcerias</a>
<a class="fs" data-faqcat="documentos" href="#">Documentos</a>
</aside>
<div class="faq-con">
<h3 class="faq-ct" id="faqCatTitle">Candidatura</h3>
<div id="faqItems">
<div class="fi open" data-faqcat="candidatura"><button aria-controls="faq-a-1" aria-expanded="true" class="fq" id="faq-q-1" type="button">Quando abre a candidatura?<svg class="fch" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewbox="0 0 20 20"><path d="M5 8l5 5 5-5"></path></svg></button><div aria-hidden="false" aria-labelledby="faq-q-1" class="fa" id="faq-a-1" role="region"><p>A candidatura para organizar o ENEI 2027 está em aberto. Após ser aprovada, as inscrições de participantes serão anunciadas oportunamente. Segue-nos nas redes sociais para ficares a par.</p></div></div>
<div class="fi" data-faqcat="candidatura"><button aria-controls="faq-a-2" aria-expanded="false" class="fq" id="faq-q-2" type="button">Como posso demonstrar interesse?<svg class="fch" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewbox="0 0 20 20"><path d="M5 8l5 5 5-5"></path></svg></button><div aria-hidden="true" aria-labelledby="faq-q-2" class="fa" id="faq-a-2" role="region"><p>Podes deixar o teu nome e email na secção "Tenho Interesse" desta página. Serás notificado assim que as candidaturas oficiais abrirem.</p></div></div>
<div class="fi" data-faqcat="candidatura"><button aria-controls="faq-a-3" aria-expanded="false" class="fq" id="faq-q-3" type="button">O evento é pago?<svg class="fch" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewbox="0 0 20 20"><path d="M5 8l5 5 5-5"></path></svg></button><div aria-hidden="true" aria-labelledby="faq-q-3" class="fa" id="faq-a-3" role="region"><p>Os detalhes sobre o preço de inscrição serão divulgados quando as candidaturas oficiais abrirem. O ENEI tem tradição de manter preços acessíveis para estudantes.</p></div></div>
<div class="fi" data-faqcat="candidatura"><button aria-controls="faq-a-4" aria-expanded="false" class="fq" id="faq-q-4" type="button">Posso retirar o meu interesse?<svg class="fch" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewbox="0 0 20 20"><path d="M5 8l5 5 5-5"></path></svg></button><div aria-hidden="true" aria-labelledby="faq-q-4" class="fa" id="faq-a-4" role="region"><p>Sim, podes contactar-nos em geral@enei2027.pt para retirar o teu interesse e seres removido da nossa lista.</p></div></div>
<div class="fi" data-faqcat="candidatura"><button aria-controls="faq-a-5" aria-expanded="false" class="fq" id="faq-q-5" type="button">Recebo certificado de participação?<svg class="fch" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewbox="0 0 20 20"><path d="M5 8l5 5 5-5"></path></svg></button><div aria-hidden="true" aria-labelledby="faq-q-5" class="fa" id="faq-a-5" role="region"><p>Sim, os participantes no ENEI recebem habitualmente certificado de participação. Os detalhes serão confirmados após aprovação da candidatura.</p></div></div>
<div class="fi" data-faqcat="candidatura"><button aria-controls="faq-a-6" aria-expanded="false" class="fq" id="faq-q-6" type="button">O evento inclui refeições?<svg class="fch" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewbox="0 0 20 20"><path d="M5 8l5 5 5-5"></path></svg></button><div aria-hidden="true" aria-labelledby="faq-q-6" class="fa" id="faq-a-6" role="region"><p>Os detalhes sobre refeições serão divulgados com a abertura das candidaturas. O ENEI costuma incluir refeições como parte do pacote de inscrição.</p></div></div>
<div class="fi" data-faqcat="programa"><button aria-controls="faq-a-7" aria-expanded="false" class="fq" id="faq-q-7" type="button">Quais workshops estarão disponíveis?<svg class="fch" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewbox="0 0 20 20"><path d="M5 8l5 5 5-5"></path></svg></button><div aria-hidden="true" aria-labelledby="faq-q-7" class="fa" id="faq-a-7" role="region"><p>O programa de workshops está a ser desenvolvido. Haverá sessões em IA, Cibersegurança, Engenharia de Software e mais. Será divulgado oportunamente.</p></div></div>
<div class="fi" data-faqcat="alojamento"><button aria-controls="faq-a-8" aria-expanded="false" class="fq" id="faq-q-8" type="button">Onde fico alojado durante o evento?<svg class="fch" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewbox="0 0 20 20"><path d="M5 8l5 5 5-5"></path></svg></button><div aria-hidden="true" aria-labelledby="faq-q-8" class="fa" id="faq-a-8" role="region"><p>A Escola Secundária Tomás Cabreira está confirmada para alojamento dos participantes durante os 4 dias do evento.</p></div></div>
<div class="fi" data-faqcat="transporte"><button aria-controls="faq-a-9" aria-expanded="false" class="fq" id="faq-q-9" type="button">Como chego a Faro?<svg class="fch" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewbox="0 0 20 20"><path d="M5 8l5 5 5-5"></path></svg></button><div aria-hidden="true" aria-labelledby="faq-q-9" class="fa" id="faq-a-9" role="region"><p>Faro tem aeroporto internacional e está bem servida de comboios e autocarros. Mais informações serão fornecidas com a abertura das candidaturas.</p></div></div>
<div class="fi" data-faqcat="parcerias"><button aria-controls="faq-a-10" aria-expanded="false" class="fq" id="faq-q-10" type="button">Como posso ser parceiro do ENEI 2027?<svg class="fch" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewbox="0 0 20 20"><path d="M5 8l5 5 5-5"></path></svg></button><div aria-hidden="true" aria-labelledby="faq-q-10" class="fa" id="faq-a-10" role="region"><p>Para parcerias e patrocínios, contacta-nos em geral@enei2027.pt. Temos pacotes para empresas de todos os tamanhos.</p></div></div>
<div class="fi" data-faqcat="eventos"><button aria-controls="faq-a-11" aria-expanded="false" class="fq" id="faq-q-11" type="button">Que eventos sociais existem?<svg class="fch" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewbox="0 0 20 20"><path d="M5 8l5 5 5-5"></path></svg></button><div aria-hidden="true" aria-labelledby="faq-q-11" class="fa" id="faq-a-11" role="region"><p>O ENEI inclui eventos de integração, passeio matinal por Faro, tertúlia digital e um evento de boas-vindas na Baixa de Faro.</p></div></div>
<div class="fi" data-faqcat="documentos"><button aria-controls="faq-a-12" aria-expanded="false" class="fq" id="faq-q-12" type="button">Onde encontro documentos e informações oficiais?<svg class="fch" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewbox="0 0 20 20"><path d="M5 8l5 5 5-5"></path></svg></button><div aria-hidden="true" aria-labelledby="faq-q-12" class="fa" id="faq-a-12" role="region"><p>Os documentos oficiais, regulamentos e informações detalhadas serão disponibilizados nesta página ou enviados aos participantes quando as inscrições abrirem.</p></div></div>
</div>
</div>
</div>
</div>
<section class="section ainda-s">
<div class="container ainda-g">
<div class="ainda-l">
<h3>Ainda tens dúvidas?</h3>
<p class="body">A nossa equipa está disponível para responder a todas as tuas questões.</p>
<div class="ainda-btns">
<a class="btn btn-outline" href="mailto:geral@enei2027.pt">Enviar email</a>
<a class="btn btn-primary" href="https://instagram.com/enei2027" rel="noopener" target="_blank">Instagram</a>
</div>
</div>
<div class="ainda-r">
<div class="cbox">
<div class="crow"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 20 20"><path d="M3 6l7 5 7-5M3 6h14v10H3z"></path></svg><span>geral@enei2027.pt</span></div>
<div class="crow"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 20 20"><rect height="14" rx="4" width="14" x="3" y="3"></rect><circle cx="10" cy="10" r="3"></circle><circle cx="14.5" cy="5.5" fill="#00AAFF" r=".8"></circle></svg><span>@enei2027</span></div>
<div class="crow"><svg fill="none" stroke="#00AAFF" stroke-linecap="round" stroke-width="1.5" viewbox="0 0 20 20"><path d="M10 2a6 6 0 0 0-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 0 0-6-6z"></path><circle cx="10" cy="8" r="2"></circle></svg><span>Faro, Algarve</span></div>
</div>
</div>
</div>
</section>
</main>
<footer class="footer">
<div class="container footer-g">
<div class="fb">
<div class="fl">
<img alt="" aria-hidden="true" class="footer-logo-mark" src="/assets/ENEI-logo.svg"/>
<span>ENEI</span>
</div>
<p>Encontro Nacional de Estudantes de Informática 2027</p>
</div>
<div class="flinks">
<div class="fc">
<h5>DESCOBRIR</h5>
<ul>
<li><a href="#sobre">Sobre</a></li>
<li><a href="#atividades">Atividades</a></li>
<li><a href="#agenda">Agenda</a></li>
<li><a href="#equipa">Equipa</a></li>
<li><a href="#info">Informação &amp; Ajuda</a></li>
</ul>
</div>
<div class="fc">
<h5>O TEU ENEI</h5>
<ul><li><a href="#interesse">Tenho Interesse</a></li></ul>
</div>
</div>
<div class="fr">
<div class="fc">
<h5>REDES SOCIAIS</h5>
<div class="socials">
<a aria-label="Instagram" class="sico" href="#"><svg fill="none" stroke="currentColor" stroke-width="1.5" viewbox="0 0 24 24"><rect height="20" rx="5" width="20" x="2" y="2"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" fill="currentColor" r=".75"></circle></svg></a>
<a aria-label="X" class="sico" href="#"><svg fill="currentColor" viewbox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a>
<a aria-label="LinkedIn" class="sico" href="#"><svg fill="none" stroke="currentColor" stroke-width="1.5" viewbox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a aria-label="Facebook" class="sico" href="#"><svg fill="none" stroke="currentColor" stroke-width="1.5" viewbox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
<div class="fc">
<h5>ORGANIZAÇÃO</h5>
<img alt="NEEI" class="org-logo-mark org-logo-mark--footer" src="/assets/neei-logo.webp"/>
</div>
</div>
</div>
<div class="fbot">
<div class="container"><p>© 2027 ENEI — Encontro Nacional de Estudantes de Informática. Candidatura por Faro, Algarve.</p></div>
</div>
</footer>
<script src="script.js"></script>
`;
