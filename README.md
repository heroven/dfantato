# D'Fantato Wood

Site oficial do ateliê de Marcos Aparecido Fantato.

## Estrutura

- `index.html` — site principal
- `site.js` — JavaScript do site
- `admin/` — painel de administração (Decap CMS)
- `pecas/` — arquivos das peças (um `.md` por peça)
- `images/` — imagens do site
- `images/uploads/` — fotos enviadas pelo admin
- `_data/site.yml` — configurações gerais (WhatsApp, Instagram, etc.)

## Como editar

Acesse `dfantato.com.br/admin` e faça login.

Você pode:
- Adicionar/editar/remover peças
- Marcar peças como vendidas ou em destaque
- Trocar fotos
- Editar configurações de contato

## Como funciona tecnicamente

Cada peça é um arquivo Markdown na pasta `pecas/`. Quando você adiciona uma peça pelo admin:

1. O Decap CMS cria um novo arquivo `.md` no GitHub
2. Uma GitHub Action atualiza o índice em `site.js` automaticamente
3. Netlify faz o deploy do site atualizado
4. Em ~1 minuto, a peça aparece no `dfantato.com.br`
