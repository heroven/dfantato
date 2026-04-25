// ============================================================
// D'FANTATO WOOD — Lógica do Site
// ============================================================
// Carrega peças automaticamente da pasta /pecas/
// Carrega configurações de /_data/site.yml
// ============================================================

// Lista das peças (gerada automaticamente quando o site é construído)
// Esta lista é atualizada toda vez que você adiciona/remove peças no admin
const PECAS_INDEX = [
  'cavalo-solitario',
  'crina-ao-vento',
  'ibex-aguas',
  'elm-ibex-001',
  'xadrez-turquesa',
  'travessa-onda',
  'bowl-raizes',
  'bowl-familia',
  'bowl-rustico',
  'travessa-lua',
  'tabua-charcuterie',
  'abridor-ibex',
];

const ORDEM_CATEGORIAS = [
  { nome: 'Esculturas', desc: 'Formas que emergem da madeira. Cada escultura é entalhada respeitando o formato original do tronco — a árvore decide a obra.' },
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
// PARSER DE FRONTMATTER (sem dependências externas)
// ============================================================
function parseFrontmatter(text) {
  const match = text.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return null;

  const raw = match[1];
  const obj = {};

  raw.split('\n').forEach(line => {
    const m = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!m) return;
    const key = m[1];
    let val = m[2].trim();

    // Remove aspas
    if ((val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }

    // Booleans
    if (val === 'true') val = true;
    else if (val === 'false') val = false;
    // Null
    else if (val === 'null' || val === '') val = null;
    // Numbers
    else if (/^-?\d+\.?\d*$/.test(val)) val = parseFloat(val);

    obj[key] = val;
  });

  return obj;
}

// ============================================================
// PARSER DE YAML (simples para o config do site)
// ============================================================
function parseSimpleYaml(text) {
  const obj = {};
  text.split('\n').forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;
    const m = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!m) return;
    let val = m[2].trim();
    if ((val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (val === 'true') val = true;
    else if (val === 'false') val = false;
    else if (/^-?\d+\.?\d*$/.test(val)) val = parseFloat(val);
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
    const text = await res.text();
    const cfg = parseSimpleYaml(text);
    SITE_CONFIG = { ...SITE_CONFIG, ...cfg };
  } catch (err) {
    console.warn('Usando configuração padrão.');
  }
}

async function carregarPecas() {
  const promises = PECAS_INDEX.map(async slug => {
    try {
      const res = await fetch(`pecas/${slug}.md`);
      if (!res.ok) return null;
      const text = await res.text();
      const data = parseFrontmatter(text);
      if (!data) return null;
      data.slug = slug;
      return data;
    } catch (err) {
      console.error(`Erro ao carregar peça ${slug}:`, err);
      return null;
    }
  });

  const results = await Promise.all(promises);
  PECAS = results.filter(p => p !== null);
}

async function carregarLogoSVG() {
  try {
    const res = await fetch('images/logo-filled.svg');
    if (!res.ok) throw new Error('SVG não encontrado');
    const svgText = await res.text();
    const cleanSvg = svgText.replace(/<\?xml[^>]+\?>/, '').replace(/<!--[\s\S]*?-->/g, '').trim();
    const heroSig = document.getElementById('hero-signature');
    const contactSig = document.getElementById('contact-signature');
    if (heroSig) heroSig.innerHTML = cleanSvg;
    if (contactSig) contactSig.innerHTML = cleanSvg;
  } catch (err) {
    const heroSig = document.getElementById('hero-signature');
    const contactSig = document.getElementById('contact-signature');
    if (heroSig) heroSig.innerHTML = '<img src="images/logo-white.png" alt="D\'Fantato Wood"/>';
    if (contactSig) contactSig.innerHTML = '<img src="images/logo-gold.png" alt="D\'Fantato Wood"/>';
  }
}

// ============================================================
// RENDERIZAÇÃO
// ============================================================
function renderGaleria() {
  const container = document.getElementById('galeria-container');

  if (PECAS.length === 0) {
    container.innerHTML = '<div class="empty">Nenhuma peça no momento.</div>';
    return;
  }

  container.innerHTML = '';

  // Destaques (só os disponíveis)
  const destaques = PECAS.filter(p => p.destaque)
    .sort((a, b) => (a.ordem_destaque || 999) - (b.ordem_destaque || 999));

  if (destaques.length > 0) {
    const banner = document.createElement('div');
    banner.className = 'featured-banner';
    banner.innerHTML = `
      <div class="featured-banner__head"><h3>Em Destaque</h3></div>
      <div class="grid grid--featured" id="grid-destaques"></div>
    `;
    container.appendChild(banner);
    const grid = banner.querySelector('#grid-destaques');
    destaques.forEach((p, i) => grid.appendChild(criarCardPeca(p, i, true)));
  }

  // Categorias
  ORDEM_CATEGORIAS.forEach((cat, catIdx) => {
    const pecasCat = PECAS.filter(p => p.categoria === cat.nome);
    if (pecasCat.length === 0) return;

    const catEl = document.createElement('div');
    catEl.className = 'category';
    catEl.innerHTML = `
      <div class="category__head">
        <div>
          <div class="category__num">${romano(catIdx + 1)} — 0${catIdx + 1}</div>
          <h3 class="category__title">${escapeHtml(cat.nome)}</h3>
        </div>
        <p class="category__desc">${escapeHtml(cat.desc)}</p>
      </div>
      <div class="grid"></div>
    `;
    const grid = catEl.querySelector('.grid');
    pecasCat.forEach((p, i) => grid.appendChild(criarCardPeca(p, i, false)));
    container.appendChild(catEl);
  });

  ativarReveal();
}

function criarCardPeca(peca, idx, isFeatured) {
  const art = document.createElement('article');
  art.className = 'piece';
  if (peca.vendida) art.classList.add('piece--sold');
  art.style.transitionDelay = `${Math.min(idx, 6) * 0.08}s`;

  const foto = peca.foto || 'images/logo-fantato.png';

  let badge = '';
  if (peca.vendida) {
    badge = `<div class="piece__badge piece__badge--sold">Vendida</div>`;
  } else if (isFeatured) {
    badge = `<div class="piece__badge">Destaque</div>`;
  }

  art.innerHTML = `
    ${badge}
    <img class="piece__img" src="${escapeHtml(foto)}" alt="${escapeHtml(peca.titulo)}" loading="lazy"/>
    <div class="piece__overlay">
      <h4 class="piece__name">${escapeHtml(peca.titulo)}</h4>
      <p class="piece__meta">${escapeHtml(peca.tipo_madeira || '')}</p>
    </div>
  `;

  art.addEventListener('click', () => abrirModalPeca(peca));
  return art;
}

// ============================================================
// MODAL
// ============================================================
function abrirModalPeca(peca) {
  document.getElementById('piece-modal-img').src = peca.foto || '';
  document.getElementById('piece-modal-img').alt = peca.titulo;
  document.getElementById('piece-modal-cat').textContent = peca.categoria || '';
  document.getElementById('piece-modal-title').textContent = peca.titulo;

  const madeiraEl = document.getElementById('piece-modal-madeira');
  if (peca.tipo_madeira) {
    madeiraEl.textContent = peca.tipo_madeira;
    madeiraEl.style.display = '';
  } else {
    madeiraEl.style.display = 'none';
  }

  document.getElementById('piece-modal-desc').textContent = peca.descricao || '';

  const precoWrap = document.getElementById('piece-modal-preco-wrap');
  if (peca.preco && !peca.vendida) {
    document.getElementById('piece-modal-preco').innerHTML =
      `<em>A partir de</em>R$ ${formatarPreco(peca.preco)}`;
    precoWrap.style.display = '';
  } else {
    precoWrap.style.display = 'none';
  }

  const statusWrap = document.getElementById('piece-modal-status-wrap');
  const ctaWrap = document.getElementById('piece-modal-cta');

  if (!peca.vendida) {
    statusWrap.innerHTML = `<div class="piece-modal__status piece-modal__status--available">Disponível</div>`;

    const msgTemplate = SITE_CONFIG.mensagem_whatsapp || 'Olá! Tenho interesse na peça *{nome}*. Poderia me passar mais informações?';
    let msg = msgTemplate.replace('{nome}', peca.titulo);
    if (peca.tipo_madeira && !msg.includes(peca.tipo_madeira)) {
      msg = msg.replace(peca.titulo, `${peca.titulo} (${peca.tipo_madeira})`);
    }
    const whatsUrl = `https://wa.me/${SITE_CONFIG.whatsapp_numero}?text=${encodeURIComponent(msg)}`;

    ctaWrap.innerHTML = `
      <a href="${whatsUrl}" target="_blank" rel="noopener" class="piece-modal__btn piece-modal__btn--whats">
        Tenho Interesse Nesta Peça
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>
      </a>
    `;
  } else {
    statusWrap.innerHTML = `<div class="piece-modal__status piece-modal__status--sold">Vendida</div>`;
    ctaWrap.innerHTML = `
      <div class="piece-modal__sold-note">
        Esta peça já encontrou seu lar.<br/>
        <a href="#contato" id="link-encomendar" style="color:var(--gold);text-decoration:underline;text-underline-offset:4px">Encomende uma peça exclusiva</a>
      </div>
    `;
    setTimeout(() => {
      const link = document.getElementById('link-encomendar');
      if (link) link.addEventListener('click', (e) => {
        e.preventDefault();
        fecharModalPeca();
        setTimeout(() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' }), 300);
      });
    }, 50);
  }

  const modal = document.getElementById('piece-modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function fecharModalPeca() {
  document.getElementById('piece-modal').classList.remove('active');
  document.body.style.overflow = '';
}

// ============================================================
// CONTATO
// ============================================================
function aplicarLinksContato() {
  const whatsGeral = `https://wa.me/${SITE_CONFIG.whatsapp_numero}`;
  document.getElementById('btn-whatsapp').href = whatsGeral;
  document.getElementById('footer-whats').href = whatsGeral;

  const insta = SITE_CONFIG.instagram_url || '#';
  document.getElementById('btn-instagram').href = insta;
  document.getElementById('footer-insta').href = insta;

  if (SITE_CONFIG.cidade) {
    document.getElementById('footer-meta').textContent = `© MMXXVI · Ateliê Marcos Fantato · ${SITE_CONFIG.cidade}`;
  }
}

// ============================================================
// UTILITÁRIOS
// ============================================================
function formatarPreco(v) {
  return Number(v).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function romano(n) {
  return ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][n] || n.toString();
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

function ativarReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal, .piece').forEach(el => io.observe(el));
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40), { passive: true });

const pieceModal = document.getElementById('piece-modal');
document.getElementById('piece-modal-close').addEventListener('click', fecharModalPeca);
pieceModal.addEventListener('click', (e) => { if (e.target === pieceModal) fecharModalPeca(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && pieceModal.classList.contains('active')) fecharModalPeca(); });

(async function init() {
  await Promise.all([
    carregarConfig(),
    carregarPecas(),
    carregarLogoSVG(),
  ]);
  aplicarLinksContato();
  renderGaleria();

  // Parallax do hero
  const sig = document.querySelector('.hero__signature');
  if (sig && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y < 800) {
            sig.style.transform = `translateY(${y * 0.18}px) scale(${1 - y * 0.0002})`;
            sig.style.opacity = Math.max(0, 1 - y * 0.0018);
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  setTimeout(ativarReveal, 100);
})();
