<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Alma em Contas — Energia & Intenção</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Manrope:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="icon" type="image/png" href="images/logo-gold.png"/>
<style>
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
  body{font-family:'Manrope',sans-serif;font-weight:300;background:var(--cream);color:var(--earth);line-height:1.6;overflow-x:hidden}
  img{max-width:100%;display:block}
  a{color:inherit;text-decoration:none}
  button{background:none;border:none;color:inherit;cursor:pointer;font:inherit}

  :root{
    --cream:#f5f0ea;--cream-2:#ede6dc;--cream-3:#e4dbd0;
    --earth:#3d3530;--earth-dim:#7a6e66;
    --rose:#c1957d;--rose-bright:#dca89e;--rose-dark:#8d6c60;
    --sage:#6f705b;--sage-bright:#787961;--sage-light:#9a9b82;
    --rule:rgba(193,149,125,0.25);
    --serif:'Cormorant Garamond',Georgia,serif;--sans:'Manrope',sans-serif;
    --max:1360px;--gutter:clamp(20px,4vw,48px);
    --ease:cubic-bezier(.2,.7,.2,1);--ease-out:cubic-bezier(.16,1,.3,1);
  }

  /* NAV */
  .nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:18px var(--gutter);display:flex;align-items:center;justify-content:space-between;transition:all .5s var(--ease)}
  .nav.scrolled{background:rgba(245,240,234,.93);backdrop-filter:blur(12px);padding:12px var(--gutter);border-bottom:1px solid var(--rule);box-shadow:0 2px 20px rgba(61,53,48,.06)}
  .nav__logo{height:44px;width:auto;display:block}
  .nav__logo img{height:100%;width:auto}
  .nav__links{display:flex;gap:28px;align-items:center}
  .nav__links a{font-size:11px;letter-spacing:.28em;text-transform:uppercase;font-weight:500;color:var(--earth);opacity:.7;transition:opacity .3s;position:relative;padding:4px 0}
  .nav__links a:hover{opacity:1}
  .nav__links a::after{content:'';position:absolute;left:0;bottom:0;height:1px;width:0;background:var(--rose);transition:width .4s}
  .nav__links a:hover::after{width:100%}
  .nav__links a.nav__dfantato{color:var(--sage);opacity:1;font-size:10px}
  @media(max-width:640px){.nav__links a:nth-child(2){display:none}}

  /* HERO */
  .hero{min-height:100vh;min-height:100svh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:110px var(--gutter) 80px;text-align:center;position:relative;overflow:hidden;background:linear-gradient(160deg, var(--cream) 0%, var(--cream-2) 60%, #e8ddd3 100%)}
  .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 30%,rgba(193,149,125,.12) 0%,transparent 65%);pointer-events:none}
  .hero__logo{max-width:min(420px,75vw);margin:0 auto 36px;opacity:0;animation:fadeUp 1.4s var(--ease-out) .3s forwards}
  .hero__logo img{width:100%;height:auto}
  .hero__tagline{font-family:var(--serif);font-style:italic;font-weight:300;font-size:clamp(18px,2.2vw,26px);color:var(--earth-dim);opacity:0;animation:fadeUp 1.2s var(--ease-out) .9s forwards;max-width:520px;line-height:1.5}
  .hero__tagline em{color:var(--rose-dark);font-style:italic}
  .hero__divider{width:60px;height:1px;background:var(--rose);margin:28px auto;opacity:0;animation:fadeUp 1s var(--ease-out) 1.1s forwards}
  .hero__sub{font-size:11px;letter-spacing:.4em;text-transform:uppercase;color:var(--earth-dim);opacity:0;animation:fadeUp 1s var(--ease-out) 1.3s forwards}
  .hero__cta{display:inline-flex;align-items:center;gap:12px;margin-top:44px;padding:15px 34px;border:1px solid var(--rose);font-size:11px;letter-spacing:.36em;text-transform:uppercase;font-weight:500;color:var(--earth);background:transparent;transition:all .5s var(--ease);position:relative;overflow:hidden;opacity:0;animation:fadeUp 1s var(--ease-out) 1.5s forwards}
  .hero__cta::before{content:'';position:absolute;inset:0;background:var(--rose);transform:translateY(101%);transition:transform .5s var(--ease);z-index:-1}
  .hero__cta:hover{color:#fff}
  .hero__cta:hover::before{transform:translateY(0)}
  .hero__scroll{position:absolute;bottom:28px;left:50%;transform:translateX(-50%);font-size:9px;letter-spacing:.4em;text-transform:uppercase;color:var(--earth-dim);display:flex;flex-direction:column;align-items:center;gap:8px;animation:floaty 3s ease-in-out infinite}
  .hero__scroll::after{content:'';width:1px;height:28px;background:linear-gradient(var(--rose),transparent)}
  @keyframes floaty{0%,100%{transform:translate(-50%,0)}50%{transform:translate(-50%,6px)}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}

  /* SOBRE */
  .sobre{background:var(--cream-2);padding:clamp(80px,12vh,130px) var(--gutter);border-top:1px solid var(--rule)}
  .sobre__inner{max-width:800px;margin:0 auto;text-align:center}
  .sobre__tag{font-size:10px;letter-spacing:.5em;text-transform:uppercase;color:var(--rose);font-weight:500;margin-bottom:24px;display:flex;align-items:center;justify-content:center;gap:14px}
  .sobre__tag::before,.sobre__tag::after{content:'';width:22px;height:1px;background:var(--rose);opacity:.6}
  .sobre__text{font-family:var(--serif);font-style:italic;font-size:clamp(20px,2.5vw,28px);line-height:1.55;color:var(--earth)}
  .sobre__text em{color:var(--rose-dark);font-style:italic}

  /* GALERIA */
  .section{padding:clamp(80px,12vh,130px) var(--gutter)}
  .section--alt{background:var(--cream-2)}
  .container{max-width:var(--max);margin:0 auto}
  .section__head{margin-bottom:60px}
  .section__tag{font-size:10px;letter-spacing:.45em;text-transform:uppercase;color:var(--rose);font-weight:500;margin-bottom:18px;display:flex;align-items:center;gap:12px}
  .section__tag::before{content:'';width:18px;height:1px;background:var(--rose);opacity:.6}
  .section__title{font-family:var(--serif);font-weight:400;font-size:clamp(32px,4.5vw,54px);color:var(--earth);line-height:1.1}
  .section__title em{font-style:italic;color:var(--rose-dark)}
  .section__desc{margin-top:14px;font-size:14px;color:var(--earth-dim);max-width:560px;line-height:1.7}

  /* CATEGORIA JAPAMALA */
  .cat-japamala{background:var(--cream);border:1px solid var(--rule);padding:48px;margin-bottom:60px;position:relative;overflow:hidden}
  .cat-japamala::before{content:'';position:absolute;top:-40px;right:-40px;width:200px;height:200px;background:radial-gradient(circle,rgba(193,149,125,.1) 0%,transparent 70%);pointer-events:none}
  .cat-japamala__head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:36px;padding-bottom:20px;border-bottom:1px solid var(--rule);flex-wrap:wrap}
  .cat-japamala__title{font-family:var(--serif);font-weight:400;font-size:clamp(26px,3.2vw,40px);color:var(--earth)}
  .cat-japamala__title em{font-style:italic;color:var(--rose-dark)}
  .cat-japamala__desc{font-size:13px;color:var(--earth-dim);max-width:340px;line-height:1.65}

  /* GRIDS */
  .grid{display:grid;gap:20px;grid-template-columns:repeat(auto-fill,minmax(260px,1fr))}
  .grid--wide{grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}

  /* CARDS */
  .piece{position:relative;overflow:hidden;background:var(--cream-3);border:1px solid var(--rule);cursor:pointer;transition:all .6s var(--ease-out);opacity:0;transform:translateY(24px)}
  .piece.in{opacity:1;transform:translateY(0)}
  .piece__img{width:100%;aspect-ratio:1/1;object-fit:cover;transition:transform 1.2s var(--ease-out),filter .6s;background:var(--cream-2)}
  .piece__body{padding:18px}
  .piece__name{font-family:var(--serif);font-style:italic;font-size:19px;color:var(--earth);font-weight:400;margin-bottom:4px}
  .piece__meta{font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--rose-dark);font-weight:500}
  .piece__num{position:absolute;top:12px;right:12px;font-family:var(--serif);font-size:11px;color:var(--rose);background:rgba(245,240,234,.88);backdrop-filter:blur(4px);padding:3px 9px;border:1px solid rgba(193,149,125,.3)}
  .piece:hover{border-color:var(--rose);box-shadow:0 8px 40px rgba(193,149,125,.15)}
  .piece:hover .piece__img{transform:scale(1.04)}
  .piece__badge{position:absolute;top:12px;left:12px;z-index:2;padding:5px 11px;font-size:9px;letter-spacing:.25em;text-transform:uppercase;font-weight:600;background:rgba(245,240,234,.9);border:1px solid var(--earth-dim);color:var(--earth-dim)}
  .piece--sold{opacity:.8}
  .piece--sold .piece__img{filter:grayscale(.4)}

  /* VER MAIS */
  .ver-mais-wrap{text-align:center;padding:44px 0 10px}
  .ver-mais-btn{display:inline-flex;align-items:center;gap:12px;padding:13px 30px;font-size:11px;letter-spacing:.3em;text-transform:uppercase;font-weight:500;border:1px solid var(--rule);color:var(--earth-dim);transition:all .4s;background:transparent;cursor:pointer}
  .ver-mais-btn:hover{border-color:var(--rose);color:var(--rose)}

  /* LOADER */
  .loader{display:flex;justify-content:center;padding:80px;color:var(--earth-dim);font-size:11px;letter-spacing:.3em;text-transform:uppercase}
  .loader::after{content:'';width:12px;height:12px;margin-left:12px;border:1px solid var(--rose);border-right-color:transparent;border-radius:50%;animation:spin .8s linear infinite}
  @keyframes spin{to{transform:rotate(360deg)}}

  /* CONTATO */
  .contact{background:linear-gradient(160deg, var(--cream-3) 0%, var(--cream-2) 100%);text-align:center;padding:clamp(90px,14vh,140px) var(--gutter);border-top:1px solid var(--rule)}
  .contact__logo{max-width:min(300px,60vw);margin:0 auto 44px}
  .contact__logo img{width:100%}
  .contact__title{font-family:var(--serif);font-weight:400;font-size:clamp(28px,4vw,46px);color:var(--earth);margin-bottom:18px}
  .contact__title em{font-style:italic;color:var(--rose-dark)}
  .contact__text{font-family:var(--serif);font-style:italic;font-size:18px;color:var(--earth-dim);margin-bottom:48px;line-height:1.6;max-width:500px;margin-left:auto;margin-right:auto}
  .contact__btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
  .btn{display:inline-flex;align-items:center;gap:12px;padding:17px 32px;font-size:11px;letter-spacing:.36em;text-transform:uppercase;font-weight:500;border:1px solid;transition:all .5s}
  .btn svg{width:16px;height:16px}
  .btn--whats{background:var(--rose);color:#fff;border-color:var(--rose)}
  .btn--whats:hover{background:var(--rose-bright);border-color:var(--rose-bright)}
  .btn--insta{background:transparent;color:var(--earth);border-color:var(--earth-dim)}
  .btn--insta:hover{border-color:var(--rose);color:var(--rose)}

  /* FOOTER */
  .footer{background:var(--earth);padding:44px var(--gutter) 36px;color:rgba(245,240,234,.7)}
  .footer__inner{max-width:var(--max);margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap}
  .footer__brand{font-family:var(--serif);font-style:italic;font-size:18px;color:rgba(245,240,234,.9)}
  .footer__brand em{color:var(--rose-bright)}
  .footer__meta{font-size:10px;letter-spacing:.25em;text-transform:uppercase}
  .footer__note{font-size:10px}
  .footer__note a{color:var(--rose-bright);text-decoration:underline;text-underline-offset:3px}

  /* MODAL */
  .piece-modal{position:fixed;inset:0;background:rgba(61,53,48,.88);backdrop-filter:blur(10px);z-index:200;display:none;align-items:center;justify-content:center;padding:30px 20px;opacity:0;transition:opacity .4s}
  .piece-modal.active{display:flex;opacity:1}
  .piece-modal__box{max-width:1060px;width:100%;max-height:92vh;background:var(--cream);border:1px solid var(--rule);display:grid;grid-template-columns:1.1fr 1fr;overflow:hidden;position:relative;transform:scale(.96);transition:transform .5s;box-shadow:0 30px 80px rgba(61,53,48,.3)}
  .piece-modal.active .piece-modal__box{transform:scale(1)}
  @media(max-width:820px){.piece-modal__box{grid-template-columns:1fr;max-height:95vh;overflow-y:auto}}
  .piece-modal__close{position:absolute;top:14px;right:14px;z-index:5;width:36px;height:36px;border:1px solid var(--rule);border-radius:50%;background:rgba(245,240,234,.9);display:flex;align-items:center;justify-content:center;color:var(--earth);cursor:pointer;transition:all .3s}
  .piece-modal__close:hover{border-color:var(--rose);color:var(--rose);transform:rotate(90deg)}
  .piece-modal__img{background:var(--cream-2);overflow:hidden;min-height:280px}
  .piece-modal__img img{width:100%;height:100%;object-fit:cover;max-height:92vh}
  @media(max-width:820px){.piece-modal__img{aspect-ratio:1/1}}
  .piece-modal__body{padding:44px 38px;display:flex;flex-direction:column;gap:18px;overflow-y:auto;max-height:92vh;background:var(--cream)}
  @media(max-width:820px){.piece-modal__body{padding:28px 22px;max-height:none}}
  .piece-modal__num{font-size:10px;letter-spacing:.3em;color:var(--rose);font-weight:600}
  .piece-modal__cat{font-size:10px;letter-spacing:.35em;text-transform:uppercase;color:var(--earth-dim)}
  .piece-modal__title{font-family:var(--serif);font-weight:400;font-size:clamp(26px,3vw,40px);color:var(--earth);font-style:italic;line-height:1.1}
  .piece-modal__material{font-family:var(--serif);font-style:italic;font-size:14px;color:var(--rose-dark);margin-top:-6px}
  .piece-modal__divider{height:1px;background:var(--rule)}
  .piece-modal__desc{font-size:14px;line-height:1.75;color:var(--earth)}
  .piece-modal__desc:empty{display:none}
  .piece-modal__preco{font-family:var(--serif);font-size:22px;color:var(--earth)}
  .piece-modal__preco em{color:var(--rose-dark);font-style:italic;font-size:14px;margin-right:5px}
  .piece-modal__status{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;font-size:10px;letter-spacing:.25em;text-transform:uppercase;font-weight:600;border:1px solid;align-self:flex-start}
  .piece-modal__status--available{color:var(--sage);border-color:var(--sage);background:rgba(111,112,91,.06)}
  .piece-modal__status--sold{color:var(--earth-dim);border-color:rgba(122,110,102,.4)}
  .piece-modal__status::before{content:'';width:5px;height:5px;border-radius:50%;background:currentColor}
  .piece-modal__btn{display:inline-flex;align-items:center;justify-content:center;gap:12px;width:100%;padding:16px 22px;font-size:11px;letter-spacing:.3em;text-transform:uppercase;font-weight:600;border:1px solid;transition:all .4s;cursor:pointer;margin-top:8px}
  .piece-modal__btn svg{width:16px;height:16px}
  .piece-modal__btn--whats{background:var(--rose);color:#fff;border-color:var(--rose)}
  .piece-modal__btn--whats:hover{background:var(--rose-bright);transform:translateY(-2px)}
  .piece-modal__sold-note{font-family:var(--serif);font-style:italic;font-size:13px;color:var(--earth-dim);text-align:center;padding:10px;margin-top:8px}

  .reveal{opacity:0;transform:translateY(28px);transition:all .9s var(--ease-out)}
  .reveal.in{opacity:1;transform:translateY(0)}

  @media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;transition-duration:.01ms!important}}
</style>
</head>
<body>

<nav class="nav" id="nav">
  <div class="nav__logo">
    <img src="images/alma-em-contas.svg" alt="Alma em Contas"/>
  </div>
  <div class="nav__links">
    <a href="#colecao">Coleção</a>
    <a href="#japamala">Japamala</a>
    <a href="#contato">Contato</a>
    <a href="index.html" class="nav__dfantato">D'Fantato Wood</a>
  </div>
</nav>

<header class="hero" id="top">
  <div class="hero__logo"><img src="images/alma-em-contas.svg" alt="Alma em Contas"/></div>
  <p class="hero__tagline">Cada conta carrega uma <em>intenção</em> — criadas com amor, intenção e cuidado para quem busca energia e equilíbrio.</p>
  <div class="hero__divider"></div>
  <p class="hero__sub">Pulseiras · Colares · Malas</p>
  <a href="#colecao" class="hero__cta">
    Ver a Coleção
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><path d="M12 5v14M6 13l6 6 6-6"/></svg>
  </a>
  <div class="hero__scroll">Descobrir</div>
</header>

<section class="sobre">
  <div class="sobre__inner reveal">
    <div class="sobre__tag">Nossa Essência</div>
    <p class="sobre__text">Cada peça nasce de uma <em>intenção genuína</em> — do amor por cristais, das energias que nos envolvem e da crença de que o que usamos no corpo deve nos elevar.</p>
  </div>
</section>

<section class="section" id="colecao">
  <div class="container">

    <!-- JAPAMALA como categoria destacada -->
    <div class="cat-japamala reveal" id="japamala">
      <div class="cat-japamala__head">
        <div>
          <h2 class="cat-japamala__title"><em>Japa</em>mala</h2>
          <p class="cat-japamala__desc">Colares de meditação com 108 contas. Cada mala é feita à mão com pedras naturais carregadas de intenção.</p>
        </div>
      </div>
      <div class="grid grid--wide" id="grid-japamala">
        <div class="loader">Carregando</div>
      </div>
      <div id="ver-mais-japamala"></div>
    </div>

    <!-- Outras peças gerais -->
    <div class="section__head reveal">
      <div class="section__tag">Coleção</div>
      <h2 class="section__title">Alma em <em>Contas</em></h2>
      <p class="section__desc">Pulseiras, colares e acessórios feitos com cristais e pedras naturais.</p>
    </div>
    <div class="grid" id="grid-alma">
      <div class="loader">Carregando</div>
    </div>
    <div id="ver-mais-alma"></div>

  </div>
</section>

<section class="contact" id="contato">
  <div class="contact__logo reveal">
    <img src="images/alma-em-contas.svg" alt="Alma em Contas"/>
  </div>
  <h2 class="contact__title reveal">Solicite sua <em>peça.</em></h2>
  <p class="contact__text reveal">Cada criação é única. Entre em contato para encomendas personalizadas ou dúvidas.</p>
  <div class="contact__btns reveal">
    <a id="btn-whatsapp" href="#" target="_blank" class="btn btn--whats">
      WhatsApp
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>
    </a>
    <a id="btn-instagram" href="#" target="_blank" class="btn btn--insta">
      Instagram
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>
    </a>
  </div>
</section>

<footer class="footer">
  <div class="footer__inner">
    <div class="footer__brand"><em>Alma</em> em Contas</div>
    <div class="footer__meta" id="footer-meta">© MMXXVI · Alma em Contas · Tubarão / SC</div>
    <div class="footer__note">Também de: <a href="index.html">D'Fantato Wood</a></div>
  </div>
</footer>

<!-- MODAL -->
<div class="piece-modal" id="piece-modal">
  <div class="piece-modal__box">
    <button class="piece-modal__close" id="piece-modal-close">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
    <div class="piece-modal__img"><img id="piece-modal-img" src="" alt=""/></div>
    <div class="piece-modal__body">
      <div class="piece-modal__num" id="piece-modal-num"></div>
      <div class="piece-modal__cat" id="piece-modal-cat"></div>
      <h3 class="piece-modal__title" id="piece-modal-title"></h3>
      <div class="piece-modal__material" id="piece-modal-material"></div>
      <div class="piece-modal__divider"></div>
      <div class="piece-modal__desc" id="piece-modal-desc"></div>
      <div id="piece-modal-preco-wrap" style="display:none"><div class="piece-modal__preco" id="piece-modal-preco"></div></div>
      <div id="piece-modal-status-wrap"></div>
      <div id="piece-modal-cta"></div>
    </div>
  </div>
</div>

<script>
// ============================================================
// ALMA EM CONTAS — Configuração
// ============================================================
// Esses índices são atualizados automaticamente pelo GitHub Action
const JAPAMALA_INDEX = [];
const ALMA_INDEX = [];

const LIMITE = 8;

let CFG = {
  alma_whatsapp_numero: '5548988746307',
  alma_instagram_url:   'https://www.instagram.com/__dfantato/',
  cidade: 'Tubarão / SC',
};

let JAPAMALA = [];
let ALMA_PECAS = [];
let mostrando = { japamala: false, alma: false };

// ============================================================
// UTILS
// ============================================================
function parseYaml(t) {
  const o={};
  t.split('\n').forEach(l=>{
    l=l.trim();if(!l||l.startsWith('#'))return;
    const m=l.match(/^([a-zA-Z_]+):\s*(.*)$/);if(!m)return;
    let v=m[2].trim();
    if((v.startsWith('"')&&v.endsWith('"'))||(v.startsWith("'")&&v.endsWith("'")))v=v.slice(1,-1);
    o[m[1]]=v;
  });
  return o;
}

function parseFM(t) {
  const m=t.match(/^---\s*\n([\s\S]*?)\n---/);if(!m)return null;
  const o={};
  m[1].split('\n').forEach(l=>{
    const r=l.match(/^([a-zA-Z_]+):\s*(.*)$/);if(!r)return;
    let v=r[2].trim();
    if((v.startsWith('"')&&v.endsWith('"'))||(v.startsWith("'")&&v.endsWith("'")))v=v.slice(1,-1);
    if(v==='true')v=true;else if(v==='false')v=false;else if(v==='null'||v==='')v=null;
    else if(/^-?\d+\.?\d*$/.test(v))v=parseFloat(v);
    o[r[1]]=v;
  });
  return o;
}

function esc(s){if(!s)return'';return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function fPreco(v){return Number(v).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});}

async function loadPecas(index, pasta) {
  const r = await Promise.all(index.map(async slug => {
    try {
      const res = await fetch(`${pasta}/${slug}.md`);
      if(!res.ok)return null;
      const d = parseFM(await res.text());
      if(!d)return null;
      d.slug=slug; return d;
    } catch { return null; }
  }));
  return r.filter(Boolean);
}

// ============================================================
// RENDER
// ============================================================
function renderGrid(pecas, gridId, verMaisId, prefix, cat, mostrandoKey) {
  const grid = document.getElementById(gridId);
  const vmc = document.getElementById(verMaisId);
  grid.innerHTML=''; vmc.innerHTML='';

  if (pecas.length === 0) {
    grid.innerHTML=`<p style="color:var(--earth-dim);font-family:var(--serif);font-style:italic;font-size:17px;padding:30px 0;grid-column:1/-1">Em breve novidades.</p>`;
    return;
  }

  const vis = mostrando[mostrandoKey] ? pecas : pecas.slice(0, LIMITE);

  vis.forEach((p, i) => {
    const num = i+1;
    const art = document.createElement('article');
    art.className = 'piece' + (p.vendida?' piece--sold':'');
    art.style.transitionDelay = `${Math.min(i,8)*0.07}s`;
    const foto = p.foto || 'images/logo-fantato.png';
    const badge = p.vendida ? `<div class="piece__badge">Vendida</div>` : '';
    const numBadge = `<div class="piece__num">${prefix}-${String(num).padStart(3,'0')}</div>`;
    art.innerHTML = `
      ${badge}${numBadge}
      <img class="piece__img" src="${esc(foto)}" alt="${esc(p.titulo)}" loading="lazy"/>
      <div class="piece__body">
        <div class="piece__name">${esc(p.titulo)}</div>
        ${p.material ? `<div class="piece__meta">${esc(p.material)}</div>` : ''}
      </div>
    `;
    art.addEventListener('click', () => abrirModal(p, num, prefix, cat));
    grid.appendChild(art);
  });

  if (!mostrando[mostrandoKey] && pecas.length > LIMITE) {
    const btn = document.createElement('div');
    btn.className='ver-mais-wrap';
    btn.innerHTML=`<button class="ver-mais-btn">Ver todas as ${pecas.length} peças<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>`;
    btn.querySelector('button').addEventListener('click',()=>{mostrando[mostrandoKey]=true;renderGrid(pecas,gridId,verMaisId,prefix,cat,mostrandoKey);});
    vmc.appendChild(btn);
  }

  ativarReveal();
}

// ============================================================
// MODAL
// ============================================================
function abrirModal(peca, num, prefix, cat) {
  document.getElementById('piece-modal-img').src = peca.foto||'';
  document.getElementById('piece-modal-num').textContent = `${prefix}-${String(num).padStart(3,'0')}`;
  document.getElementById('piece-modal-cat').textContent = cat;
  document.getElementById('piece-modal-title').textContent = peca.titulo;
  const mat = document.getElementById('piece-modal-material');
  if(peca.material){mat.textContent=peca.material;mat.style.display='';}else{mat.style.display='none';}
  document.getElementById('piece-modal-desc').textContent = peca.descricao||'';
  const pw = document.getElementById('piece-modal-preco-wrap');
  if(peca.preco&&!peca.vendida){document.getElementById('piece-modal-preco').innerHTML=`<em>A partir de</em>R$ ${fPreco(peca.preco)}`;pw.style.display='';}else{pw.style.display='none';}
  const sw=document.getElementById('piece-modal-status-wrap');
  const cw=document.getElementById('piece-modal-cta');
  if(!peca.vendida){
    sw.innerHTML=`<div class="piece-modal__status piece-modal__status--available">Disponível</div>`;
    const msg=`Olá! Tenho interesse na peça *${peca.titulo}* — ${cat} ${prefix}-${String(num).padStart(3,'0')} (Alma em Contas). Poderia me passar mais informações?`;
    const url=`https://wa.me/${CFG.alma_whatsapp_numero}?text=${encodeURIComponent(msg)}`;
    cw.innerHTML=`<a href="${url}" target="_blank" rel="noopener" class="piece-modal__btn piece-modal__btn--whats">Tenho Interesse Nesta Peça<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg></a>`;
  } else {
    sw.innerHTML=`<div class="piece-modal__status piece-modal__status--sold">Vendida</div>`;
    cw.innerHTML=`<div class="piece-modal__sold-note">Esta peça já encontrou seu lar.<br/><a href="#contato" style="color:var(--rose-dark);text-decoration:underline" onclick="document.getElementById('piece-modal').classList.remove('active');document.body.style.overflow=''">Encomende uma exclusiva</a></div>`;
  }
  document.getElementById('piece-modal').classList.add('active');
  document.body.style.overflow='hidden';
}

// Modal close
const modal=document.getElementById('piece-modal');
document.getElementById('piece-modal-close').addEventListener('click',()=>{modal.classList.remove('active');document.body.style.overflow='';});
modal.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('active');document.body.style.overflow='';}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('active')){modal.classList.remove('active');document.body.style.overflow='';}});

// Nav scroll
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>40),{passive:true});

function ativarReveal(){
  const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:0.1,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.piece:not(.in),.reveal:not(.in)').forEach(el=>io.observe(el));
}

// ============================================================
// INIT
// ============================================================
async function init() {
  try {
    const r = await fetch('_data/site.yml');
    if(r.ok) CFG = {...CFG, ...parseYaml(await r.text())};
  } catch {}

  // Apply contacts
  document.getElementById('btn-whatsapp').href = `https://wa.me/${CFG.alma_whatsapp_numero}`;
  document.getElementById('btn-instagram').href = CFG.alma_instagram_url||'#';
  if(CFG.cidade) document.getElementById('footer-meta').textContent = `© MMXXVI · Alma em Contas · ${CFG.cidade}`;

  // Load pieces
  [JAPAMALA, ALMA_PECAS] = await Promise.all([
    loadPecas(JAPAMALA_INDEX, 'japamala'),
    loadPecas(ALMA_INDEX, 'alma'),
  ]);

  renderGrid(JAPAMALA,   'grid-japamala', 'ver-mais-japamala', 'JPM', 'Japamala',    'japamala');
  renderGrid(ALMA_PECAS, 'grid-alma',     'ver-mais-alma',     'AEC', 'Alma em Contas', 'alma');

  setTimeout(ativarReveal, 100);
}

init();
</script>
</body>
</html>
