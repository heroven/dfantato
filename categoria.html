<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Coleção — D'Fantato Wood</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="icon" type="image/png" href="images/logo-gold.png"/>
<style>
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
  body{font-family:'Manrope',sans-serif;font-weight:300;background:var(--ink);color:var(--bone);line-height:1.6;overflow-x:hidden;min-height:100vh}
  img{max-width:100%;display:block}
  a{color:inherit;text-decoration:none}
  :root{
    --ink:#0b0806;--ink-2:#141110;--ink-3:#1d1816;
    --bone:#ede3d0;--bone-dim:#a89d88;
    --gold:#c9a66b;--gold-bright:#e4c78c;
    --rule:rgba(201,166,107,0.18);
    --serif:'Fraunces',Georgia,serif;--sans:'Manrope',sans-serif;
    --max:1360px;--gutter:clamp(20px,4vw,48px);
    --ease:cubic-bezier(.2,.7,.2,1);--ease-out:cubic-bezier(.16,1,.3,1);
  }

  .nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:18px var(--gutter);display:flex;align-items:center;justify-content:space-between;background:rgba(11,8,6,0.92);backdrop-filter:blur(14px);border-bottom:1px solid var(--rule)}
  .nav__mark{font-family:var(--serif);font-style:italic;font-weight:300;font-size:20px;color:var(--bone);display:flex;align-items:baseline}
  .nav__mark em{color:var(--gold);margin:0 1px}
  .nav__mark span{font-family:var(--sans);font-size:10px;letter-spacing:.4em;text-transform:uppercase;font-weight:400;opacity:.6;margin-left:10px}
  .nav__back{display:inline-flex;align-items:center;gap:8px;font-size:11px;letter-spacing:.3em;text-transform:uppercase;color:var(--bone-dim);transition:color .3s}
  .nav__back:hover{color:var(--gold)}
  .nav__back svg{width:14px;height:14px}

  .page-header{padding:120px var(--gutter) 60px;max-width:var(--max);margin:0 auto}
  .page-header__eyebrow{font-size:10px;letter-spacing:.5em;text-transform:uppercase;color:var(--gold);display:inline-flex;align-items:center;gap:12px;margin-bottom:20px}
  .page-header__eyebrow::before{content:'';width:22px;height:1px;background:var(--gold);opacity:.6}
  .page-header__title{font-family:var(--serif);font-weight:300;font-size:clamp(36px,5vw,64px);color:var(--bone);line-height:1.05}
  .page-header__title em{font-style:italic;color:var(--gold)}
  .page-header__count{margin-top:16px;font-size:13px;color:var(--bone-dim)}

  .gallery-page{padding:0 var(--gutter) 100px;max-width:var(--max);margin:0 auto}
  .grid-full{display:grid;gap:24px;grid-template-columns:repeat(auto-fill,minmax(280px,1fr))}

  .piece{position:relative;overflow:hidden;background:var(--ink-2);border:1px solid var(--rule);cursor:pointer;transition:all .7s var(--ease-out);opacity:0;transform:translateY(30px)}
  .piece.in{opacity:1;transform:translateY(0)}
  .piece__img{width:100%;aspect-ratio:4/5;object-fit:cover;transition:transform 1.4s var(--ease-out),filter .7s;background:var(--ink-3)}
  .piece__overlay{position:absolute;inset:0;background:linear-gradient(transparent 50%,rgba(11,8,6,.92) 100%);padding:26px;display:flex;flex-direction:column;justify-content:flex-end;opacity:.85;transition:opacity .5s}
  .piece__name{font-family:var(--serif);font-style:italic;font-size:22px;color:var(--bone);font-weight:300;margin-bottom:6px;transform:translateY(8px);transition:transform .5s}
  .piece__meta{font-size:10px;letter-spacing:.32em;text-transform:uppercase;color:var(--gold);font-weight:500;transform:translateY(8px);opacity:0;transition:all .5s .05s}
  .piece:hover{border-color:var(--gold)}
  .piece:hover .piece__img{transform:scale(1.06);filter:brightness(1.05)}
  .piece:hover .piece__overlay{opacity:1}
  .piece:hover .piece__name,.piece:hover .piece__meta{transform:translateY(0)}
  .piece:hover .piece__meta{opacity:1}
  .piece__badge{position:absolute;top:14px;left:14px;z-index:2;padding:6px 12px;font-size:9px;letter-spacing:.32em;text-transform:uppercase;font-weight:600;background:rgba(11,8,6,.85);backdrop-filter:blur(6px);border:1px solid var(--gold);color:var(--gold)}
  .piece__badge--sold{border-color:var(--bone-dim);color:var(--bone-dim)}
  .piece--sold{opacity:.85}
  .piece--sold .piece__img{filter:grayscale(.4) brightness(.8)}

  .loader{display:flex;justify-content:center;padding:80px;color:var(--bone-dim);font-size:12px;letter-spacing:.3em;text-transform:uppercase}
  .loader::after{content:'';width:14px;height:14px;margin-left:14px;border:1px solid var(--gold);border-right-color:transparent;border-radius:50%;animation:spin .8s linear infinite}
  @keyframes spin{to{transform:rotate(360deg)}}

  /* MODAL */
  .piece-modal{position:fixed;inset:0;background:rgba(11,8,6,.92);backdrop-filter:blur(10px);z-index:200;display:none;align-items:center;justify-content:center;padding:30px 20px;opacity:0;transition:opacity .4s}
  .piece-modal.active{display:flex;opacity:1}
  .piece-modal__box{max-width:1100px;width:100%;max-height:92vh;background:var(--ink-2);border:1px solid var(--rule);display:grid;grid-template-columns:1.1fr 1fr;overflow:hidden;position:relative;transform:scale(.96);transition:transform .5s var(--ease-out);box-shadow:0 30px 80px rgba(0,0,0,.6)}
  .piece-modal.active .piece-modal__box{transform:scale(1)}
  @media(max-width:820px){.piece-modal__box{grid-template-columns:1fr;max-height:95vh;overflow-y:auto}}
  .piece-modal__close{position:absolute;top:16px;right:16px;z-index:5;width:40px;height:40px;border:1px solid var(--rule);border-radius:50%;background:rgba(11,8,6,.85);display:flex;align-items:center;justify-content:center;color:var(--bone);cursor:pointer;transition:all .3s}
  .piece-modal__close:hover{border-color:var(--gold);color:var(--gold);transform:rotate(90deg)}
  .piece-modal__img{background:var(--ink-3);display:flex;align-items:center;justify-content:center;overflow:hidden;min-height:280px}
  .piece-modal__img img{width:100%;height:100%;object-fit:cover;max-height:92vh}
  @media(max-width:820px){.piece-modal__img{aspect-ratio:4/5}}
  .piece-modal__body{padding:44px 40px;display:flex;flex-direction:column;gap:22px;overflow-y:auto;max-height:92vh}
  @media(max-width:820px){.piece-modal__body{padding:30px 26px;max-height:none}}
  .piece-modal__cat{font-size:10px;letter-spacing:.4em;text-transform:uppercase;color:var(--gold);font-weight:500}
  .piece-modal__title{font-family:var(--serif);font-weight:300;font-size:clamp(28px,3.5vw,44px);line-height:1.1;color:var(--bone);font-style:italic}
  .piece-modal__madeira{font-family:var(--serif);font-style:italic;font-size:16px;color:var(--gold-bright);margin-top:-8px}
  .piece-modal__divider{height:1px;background:var(--rule);margin:4px 0}
  .piece-modal__desc{font-size:15px;line-height:1.75;color:var(--bone)}
  .piece-modal__desc:empty{display:none}
  .piece-modal__preco{font-family:var(--serif);font-size:24px;color:var(--bone)}
  .piece-modal__preco em{color:var(--gold);font-style:italic;font-size:16px;margin-right:6px}
  .piece-modal__status{display:inline-flex;align-items:center;gap:10px;padding:10px 18px;font-size:10px;letter-spacing:.32em;text-transform:uppercase;font-weight:600;border:1px solid;align-self:flex-start}
  .piece-modal__status--available{color:var(--gold);border-color:var(--gold);background:rgba(201,166,107,.08)}
  .piece-modal__status--sold{color:var(--bone-dim);border-color:var(--bone-dim)}
  .piece-modal__status::before{content:'';width:6px;height:6px;border-radius:50%;background:currentColor}
  .piece-modal__cta{margin-top:14px}
  .piece-modal__btn{display:inline-flex;align-items:center;justify-content:center;gap:14px;width:100%;padding:18px 28px;font-size:11px;letter-spacing:.36em;text-transform:uppercase;font-weight:600;border:1px solid;transition:all .4s;cursor:pointer}
  .piece-modal__btn svg{width:18px;height:18px}
  .piece-modal__btn--whats{background:var(--gold);color:var(--ink);border-color:var(--gold)}
  .piece-modal__btn--whats:hover{background:var(--gold-bright);transform:translateY(-2px)}
  .piece-modal__sold-note{font-family:var(--serif);font-style:italic;font-size:13px;color:var(--bone-dim);text-align:center;padding:10px}
  .piece{cursor:pointer}
</style>
</head>
<body>

<nav class="nav">
  <a href="index.html" class="nav__mark">D<em>'</em>Fantato <span>Wood</span></a>
  <a href="index.html#colecao" class="nav__back">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>
    Voltar
  </a>
</nav>

<div class="page-header">
  <div class="page-header__eyebrow" id="page-eyebrow">A Coleção</div>
  <h1 class="page-header__title" id="page-title">Carregando <em>peças...</em></h1>
  <p class="page-header__count" id="page-count"></p>
</div>

<div class="gallery-page">
  <div class="grid-full" id="gallery-grid">
    <div class="loader">Carregando</div>
  </div>
</div>

<!-- MODAL -->
<div class="piece-modal" id="piece-modal">
  <div class="piece-modal__box">
    <button class="piece-modal__close" id="piece-modal-close">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
    <div class="piece-modal__img"><img id="piece-modal-img" src="" alt=""/></div>
    <div class="piece-modal__body">
      <div class="piece-modal__cat" id="piece-modal-cat"></div>
      <h3 class="piece-modal__title" id="piece-modal-title"></h3>
      <div class="piece-modal__madeira" id="piece-modal-madeira"></div>
      <div class="piece-modal__divider"></div>
      <div class="piece-modal__desc" id="piece-modal-desc"></div>
      <div id="piece-modal-preco-wrap" style="display:none"><div class="piece-modal__preco" id="piece-modal-preco"></div></div>
      <div id="piece-modal-status-wrap"></div>
      <div class="piece-modal__cta" id="piece-modal-cta"></div>
    </div>
  </div>
</div>

<script src="site.js"></script>
<script>
// Categoria page logic — sobreescreve o init do site.js
document.addEventListener('DOMContentLoaded', async () => {});

(async function catInit() {
  const params = new URLSearchParams(location.search);
  const catSlug = params.get('c') || '';
  const catNome = params.get('n') || 'Coleção';

  document.title = `${catNome} — D'Fantato Wood`;
  document.getElementById('page-title').innerHTML = `${escapeHtml(catNome).replace(/(\w+)\s*$/, '<em>$1</em>')}`;

  await Promise.all([carregarConfig(), carregarLogoSVG()]);
  PECAS = await carregarTodasPecas(PECAS_INDEX, 'pecas');
  aplicarContato();

  // Filter by category or show destaques
  let filtradas;
  if (catSlug === 'destaques') {
    filtradas = PECAS.filter(p => p.destaque).sort((a,b) => (a.ordem_destaque||999)-(b.ordem_destaque||999));
    document.getElementById('page-eyebrow').textContent = 'Em Destaque';
    document.getElementById('page-title').innerHTML = 'Peças em <em>Destaque</em>';
  } else {
    // Match by category name
    filtradas = PECAS.filter(p => {
      const slug = p.categoria ? p.categoria.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') : '';
      return slug === catSlug || p.categoria === catNome;
    });
  }

  document.getElementById('page-count').textContent = `${filtradas.length} peça${filtradas.length !== 1 ? 's' : ''}`;

  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = '';

  if (filtradas.length === 0) {
    grid.innerHTML = '<p style="color:var(--bone-dim);font-family:var(--serif);font-style:italic;font-size:18px;padding:40px 0">Nenhuma peça nesta categoria ainda.</p>';
    return;
  }

  filtradas.forEach((p, i) => {
    const art = document.createElement('article');
    art.className = 'piece' + (p.vendida ? ' piece--sold' : '');
    art.style.transitionDelay = `${Math.min(i,8)*0.06}s`;
    const foto = p.foto || 'images/logo-fantato.png';
    let badge = p.vendida ? `<div class="piece__badge piece__badge--sold">Vendida</div>` : '';
    art.innerHTML = `${badge}<img class="piece__img" src="${escapeHtml(foto)}" alt="${escapeHtml(p.titulo)}" loading="lazy"/><div class="piece__overlay"><h4 class="piece__name">${escapeHtml(p.titulo)}</h4><p class="piece__meta">${escapeHtml(p.tipo_madeira||'')}</p></div>`;
    art.addEventListener('click', () => abrirModal(p));
    grid.appendChild(art);
  });

  setTimeout(ativarReveal, 100);
})();
</script>
</body>
</html>
