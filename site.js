// ============================================================
// D'FANTATO WOOD — site.js
// ============================================================

const PECAS_INDEX = [
  'abridor-ibex',
  'bowl-familia',
  'bowl-raizes',
  'bowl-rustico',
  'cavalo-solitario',
  'crina-ao-vento',
  'elm-ibex-001',
  'ibex-aguas',
  'tabua-charcuterie',
  'travessa-lua',
  'travessa-onda',
  'xadrez-turquesa',
];

const JATAMALA_INDEX = []; // Preenchido pelo admin conforme novas peças forem criadas

const LIMITE_CATEGORIA = 8; // Mostrar "Ver mais" acima desse número

const ORDEM_CATEGORIAS = [
  { nome: 'Esculturas', desc: 'Formas que emergem da madeira. Cada escultura é entalhada respeitando o formato original do tronco.' },
  { nome: 'Obras Decorativas', desc: 'Discos e bolachas em corte transversal, revelando os anéis do tempo. Acabamentos em resina, prata e detalhes autorais numerados.' },
  { nome: 'Bowls e Travessas', desc: 'A mesa posta com arte. Peças torneadas e esculpidas à mão, cada uma com o desenho natural da madeira como protagonista.' },
  { nome: 'Tábuas e Acessórios', desc: 'Pequenos rituais, grandes peças. Objetos do dia a dia elevados pelo cuidado artesanal.' },
];

let SITE_CONFIG = {
  whatsapp_numero: '5548988746307',
  instagram_url: 'https://www.instagram.com/__dfantato/',
  cidade: 'Tubarão / SC',
  mensagem_whatsapp: 'Olá! Tenho interesse na peça *{nome}*. Poderia me passar mais informações?',
};

let PECAS = [];

// ============================================================
// PARSERS
// ============================================================
function parseFrontmatter(text) {
  const match = text.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return null;
  const obj = {};
  match[1].split('\n').forEach(line => {
    const m = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!m) return;
    let val = m[2].trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1,-1);
    if (val === 'true') val = true;
    else if (val === 'false') val = false;
    else if (val === 'null' || val === '') val = null;
    else if (/^-?\d+\.?\d*$/.test(val)) val = parseFloat(val);
    obj[m[1]] = val;
  });
  return obj;
}

function parseSimpleYaml(text) {
  const obj = {};
  text.split('\n').forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;
    const m = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!m) return;
    let val = m[2].trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1,-1);
    obj[m[1]] = val;
  });
  return obj;
}

// ============================================================
// CARREGAMENTO
// ============================================================
async function carregarConfig() {
  try {
    const res = await fetch('_data/site.yml');
    if (!res.ok) return;
    const cfg = parseSimpleYaml(await res.text());
    SITE_CONFIG = { ...SITE_CONFIG, ...cfg };
  } catch (e) {}
}

async function carregarTodasPecas(indices, pasta) {
  const promises = indices.map(async slug => {
    try {
      const res = await fetch(`${pasta}/${slug}.md`);
      if (!res.ok) return null;
      const data = parseFrontmatter(await res.text());
      if (!data) return null;
      data.slug = slug;
      return data;
    } catch { return null; }
  });
  return (await Promise.all(promises)).filter(Boolean);
}

async function carregarLogoSVG() {
  try {
    const res = await fetch('images/logo-filled.svg');
    if (!res.ok) throw new Error();
    const svgText = await res.text();
    const clean = svgText.replace(/<\?xml[^>]+\?>/, '').replace(/<!--[\s\S]*?-->/g, '').trim();
    ['hero-signature','contact-signature'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = clean;
    });
  } catch {
    ['hero-signature','contact-signature'].forEach((id,i) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = `<img src="images/logo-${i===0?'white':'gold'}.png" alt="D'Fantato Wood"/>`;
    });
  }
}

// ============================================================
// RENDER GALERIA PRINCIPAL
// ============================================================
function renderGaleria() {
  const container = document.getElementById('galeria-container');
  if (!container) return;

  if (PECAS.length === 0) {
    container.innerHTML = '<div class="empty">Nenhuma peça no momento.</div>';
    return;
  }

  container.innerHTML = '';

  // Destaques
  const destaques = PECAS.filter(p => p.destaque)
    .sort((a,b) => (a.ordem_destaque||999) - (b.ordem_destaque||999));

  if (destaques.length > 0) {
    const banner = document.createElement('div');
    banner.className = 'featured-banner';
    banner.innerHTML = `<div class="featured-banner__head"><h3>Em Destaque</h3></div><div class="grid grid--featured" id="grid-destaques"></div>`;
    container.appendChild(banner);
    const destaques_visiveis = destaques.slice(0, LIMITE_CATEGORIA);
    destaques_visiveis.forEach((p,i) => banner.querySelector('#grid-destaques').appendChild(criarCard(p,i,true)));
    if (destaques.length > LIMITE_CATEGORIA) {
      banner.appendChild(criarVerMais('destaques', 'Em Destaque', destaques.length));
    }
  }

  // Categorias
  ORDEM_CATEGORIAS.forEach((cat, catIdx) => {
    const todas = PECAS.filter(p => p.categoria === cat.nome);
    if (todas.length === 0) return;

    const visiveis = todas.slice(0, LIMITE_CATEGORIA);
    const catEl = document.createElement('div');
    catEl.className = 'category';
    catEl.innerHTML = `
      <div class="category__head">
        <div>
          <div class="category__num">${romano(catIdx+1)} — 0${catIdx+1}</div>
          <h3 class="category__title">${escapeHtml(cat.nome)}</h3>
        </div>
        <p class="category__desc">${escapeHtml(cat.desc)}</p>
      </div>
      <div class="grid"></div>
    `;
    const grid = catEl.querySelector('.grid');
    visiveis.forEach((p,i) => grid.appendChild(criarCard(p,i,false)));
    if (todas.length > LIMITE_CATEGORIA) {
      catEl.appendChild(criarVerMais(slugify(cat.nome), cat.nome, todas.length));
    }
    container.appendChild(catEl);
  });

  ativarReveal();
}

function criarVerMais(slug, nome, total) {
  const btn = document.createElement('div');
  btn.className = 'ver-mais-wrap';
  btn.innerHTML = `
    <a href="categoria.html?c=${encodeURIComponent(slug)}&n=${encodeURIComponent(nome)}" class="ver-mais-btn">
      Ver todas as ${total} peças de ${escapeHtml(nome)}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </a>
  `;
  return btn;
}

function criarCard(peca, idx, isFeatured) {
  const art = document.createElement('article');
  art.className = 'piece' + (peca.vendida ? ' piece--sold' : '');
  art.style.transitionDelay = `${Math.min(idx,6)*0.08}s`;
  const foto = peca.foto || 'images/logo-fantato.png';
  let badge = '';
  if (peca.vendida) badge = `<div class="piece__badge piece__badge--sold">Vendida</div>`;
  else if (isFeatured) badge = `<div class="piece__badge">Destaque</div>`;
  art.innerHTML = `
    ${badge}
    <img class="piece__img" src="${escapeHtml(foto)}" alt="${escapeHtml(peca.titulo)}" loading="lazy"/>
    <div class="piece__overlay">
      <h4 class="piece__name">${escapeHtml(peca.titulo)}</h4>
      <p class="piece__meta">${escapeHtml(peca.tipo_madeira||'')}</p>
    </div>
  `;
  art.addEventListener('click', () => abrirModal(peca));
  return art;
}

// ============================================================
// MODAL
// ============================================================
function abrirModal(peca) {
  document.getElementById('piece-modal-img').src = peca.foto||'';
  document.getElementById('piece-modal-img').alt = peca.titulo;
  document.getElementById('piece-modal-cat').textContent = peca.categoria||'';
  document.getElementById('piece-modal-title').textContent = peca.titulo;
  const madEl = document.getElementById('piece-modal-madeira');
  if (peca.tipo_madeira) { madEl.textContent = peca.tipo_madeira; madEl.style.display=''; }
  else { madEl.style.display='none'; }
  document.getElementById('piece-modal-desc').textContent = peca.descricao||'';
  const precoWrap = document.getElementById('piece-modal-preco-wrap');
  if (peca.preco && !peca.vendida) {
    document.getElementById('piece-modal-preco').innerHTML = `<em>A partir de</em>R$ ${formatarPreco(peca.preco)}`;
    precoWrap.style.display='';
  } else { precoWrap.style.display='none'; }

  const statusWrap = document.getElementById('piece-modal-status-wrap');
  const ctaWrap = document.getElementById('piece-modal-cta');

  if (!peca.vendida) {
    statusWrap.innerHTML = `<div class="piece-modal__status piece-modal__status--available">Disponível</div>`;
    const msgTpl = SITE_CONFIG.mensagem_whatsapp || 'Olá! Tenho interesse na peça *{nome}*. Poderia me passar mais informações?';
    let msg = msgTpl.replace('{nome}', peca.titulo);
    if (peca.tipo_madeira && !msg.includes(peca.tipo_madeira)) msg = msg.replace(peca.titulo, `${peca.titulo} (${peca.tipo_madeira})`);
    const url = `https://wa.me/${SITE_CONFIG.whatsapp_numero}?text=${encodeURIComponent(msg)}`;
    ctaWrap.innerHTML = `<a href="${url}" target="_blank" rel="noopener" class="piece-modal__btn piece-modal__btn--whats">Tenho Interesse Nesta Peça<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg></a>`;
  } else {
    statusWrap.innerHTML = `<div class="piece-modal__status piece-modal__status--sold">Vendida</div>`;
    ctaWrap.innerHTML = `<div class="piece-modal__sold-note">Esta peça já encontrou seu lar.<br/><a href="#contato" id="link-encomendar" style="color:var(--gold);text-decoration:underline;text-underline-offset:4px">Encomende uma peça exclusiva</a></div>`;
    setTimeout(()=>{
      const lnk = document.getElementById('link-encomendar');
      if(lnk) lnk.addEventListener('click',e=>{e.preventDefault();fecharModal();setTimeout(()=>document.getElementById('contato')?.scrollIntoView({behavior:'smooth'}),300);});
    },50);
  }

  document.getElementById('piece-modal').classList.add('active');
  document.body.style.overflow='hidden';
}

function fecharModal() {
  document.getElementById('piece-modal').classList.remove('active');
  document.body.style.overflow='';
}

// ============================================================
// CONTATO
// ============================================================
function aplicarContato() {
  const w = `https://wa.me/${SITE_CONFIG.whatsapp_numero}`;
  const i = SITE_CONFIG.instagram_url||'#';
  ['btn-whatsapp','footer-whats'].forEach(id=>{const el=document.getElementById(id);if(el)el.href=w;});
  ['btn-instagram','footer-insta'].forEach(id=>{const el=document.getElementById(id);if(el)el.href=i;});
  const fm = document.getElementById('footer-meta');
  if(fm && SITE_CONFIG.cidade) fm.textContent=`© MMXXVI · Ateliê Marcos Fantato · ${SITE_CONFIG.cidade}`;
}

// ============================================================
// UTILS
// ============================================================
function formatarPreco(v){return Number(v).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});}
function romano(n){return['','I','II','III','IV','V','VI','VII','VIII','IX','X'][n]||n.toString();}
function slugify(s){return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');}
function escapeHtml(s){if(!s)return'';return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}

function ativarReveal(){
  const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal,.piece').forEach(el=>io.observe(el));
}

// ============================================================
// NAV + MODAL SETUP
// ============================================================
const nav = document.getElementById('nav');
if(nav) window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>40),{passive:true});

const pieceModal = document.getElementById('piece-modal');
if(pieceModal){
  document.getElementById('piece-modal-close')?.addEventListener('click',fecharModal);
  pieceModal.addEventListener('click',e=>{if(e.target===pieceModal)fecharModal();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&pieceModal.classList.contains('active'))fecharModal();});
}

// ============================================================
// INIT
// ============================================================
(async function init(){
  await Promise.all([carregarConfig(), carregarLogoSVG()]);
  PECAS = await carregarTodasPecas(PECAS_INDEX, 'pecas');
  aplicarContato();
  renderGaleria();

  // Hero parallax
  const sig=document.querySelector('.hero__signature');
  if(sig&&window.matchMedia('(prefers-reduced-motion: no-preference)').matches){
    let ticking=false;
    window.addEventListener('scroll',()=>{
      if(!ticking){requestAnimationFrame(()=>{const y=window.scrollY;if(y<800){sig.style.transform=`translateY(${y*.18}px) scale(${1-y*.0002})`;sig.style.opacity=Math.max(0,1-y*.0018);}ticking=false;});ticking=true;}
    },{passive:true});
  }
  setTimeout(ativarReveal,100);
})();
