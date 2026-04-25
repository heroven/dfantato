# Tutorial — Site D'Fantato Wood com Admin

Vamos colocar o site no ar com painel admin funcionando. **Tempo total: 20-30 minutos.**

---

## O que você vai ter no final

- Site público em `dfantato.com.br`
- Admin em `dfantato.com.br/admin` com login pelo Google ou GitHub
- Pode adicionar/editar/excluir peças pelo celular ou computador
- **Custo: R$ 0,00** (tudo grátis pra sempre)

---

## Pré-requisitos

- Conta no GitHub (gratuita) — se não tem, crie em **github.com**
- Conta no Netlify (gratuita) — você já tem
- Domínio `dfantato.com.br` — você já tem

**Você NÃO vai precisar:**
- ❌ Supabase (descartamos)
- ❌ Banco de dados
- ❌ Chaves de API
- ❌ Conhecimento técnico

---

## ETAPA 1 — Subir o código pro GitHub (10 min)

### 1.1 Cria um repositório novo no GitHub

1. Entra em **github.com** e faz login
2. No canto superior direito, clica no **"+"** → **"New repository"**
3. Preenche:
   - **Repository name**: `dfantato-wood`
   - **Description**: pode deixar em branco
   - **Public** ✅ (mantém público)
   - **NÃO** marque "Add a README" nem nada (deixa as opções desmarcadas)
4. Clica em **"Create repository"**

Vai abrir uma tela com instruções. **Não fecha essa aba**, vamos voltar nela.

### 1.2 Sobe os arquivos

**Forma mais simples — pelo navegador:**

1. Na tela do repositório recém-criado, procura o link **"uploading an existing file"** (no meio da página, num parágrafo cinza)
2. Clica nele
3. Vai abrir uma área de upload
4. **Descompacta o ZIP** que eu vou te entregar (`dfantato-final.zip`)
5. **Seleciona TODOS os arquivos e pastas dentro** (não a pasta inteira, o conteúdo dela) e arrasta pra área de upload do GitHub
6. Espera o upload terminar (uns 2-5 minutos por causa das fotos)
7. Lá embaixo na página, em **"Commit changes"**:
   - Mensagem: `Versão inicial do site`
   - Clica no botão verde **"Commit changes"**

Pronto. O código está no GitHub.

---

## ETAPA 2 — Conectar Netlify ao GitHub (5 min)

### 2.1 Apaga o site antigo do Netlify

No painel do Netlify, no projeto antigo (que você tava tentando configurar):

1. **Project settings** (engrenagem) → vai descendo até o final → **Delete this project**
2. Confirma a exclusão

### 2.2 Cria um projeto novo conectado ao GitHub

1. No Netlify, clica em **"Add new site"** → **"Import from Git"** (ou **"Import an existing project"**)
2. Escolhe **"Deploy with GitHub"**
3. Vai te pedir pra autorizar o Netlify acessar seu GitHub — autoriza
4. Vai aparecer uma lista dos seus repositórios. Clica em **`dfantato-wood`**
5. Vai aparecer uma tela de configuração com os campos:
   - **Branch**: `main`
   - **Build command**: deixa em branco
   - **Publish directory**: deixa em branco (ou coloca `.`)
6. Clica em **"Deploy site"**
7. Aguarda 1-2 minutos
8. ✅ Quando terminar, vai aparecer uma URL tipo `https://nome-aleatorio.netlify.app`

**Testa essa URL:** abre no navegador, deve aparecer seu site com a assinatura dourada e as 12 peças.

---

## ETAPA 3 — Conectar o domínio dfantato.com.br (já está pronto)

Como você já apontou o DNS pro Netlify nos passos anteriores, **só precisa adicionar o domínio nesse novo projeto**:

1. No painel do novo projeto Netlify, vai em **"Domain management"**
2. Clica em **"Add domain"** ou **"Add a custom domain"**
3. Digita `dfantato.com.br` → **Verify** → **Add domain**
4. Pode aparecer aviso "This domain is already in use" — clica em **"Yes, claim it"** ou **"Transfer"** (porque você já tinha apontado pro outro projeto que apagamos)
5. ✅ Em alguns minutos, `dfantato.com.br` vai mostrar seu novo site

---

## ETAPA 4 — Habilitar o Admin (5 min) — A PARTE MAIS IMPORTANTE

Aqui é onde a mágica acontece. Vamos ativar o **Identity** e **Git Gateway** do Netlify.

### 4.1 Ativar Identity

1. No Netlify, no seu projeto, vai em **"Integrations"** ou **"Site configuration"** → procura **"Identity"**

   *Se não achar Identity:* vai em **Project configuration** → **Identity** (no menu lateral)

2. Clica em **"Enable Identity"**
3. Vai abrir uma tela de configuração

### 4.2 Configurar o Identity

1. Em **"Registration preferences"**:
   - Escolhe **"Invite only"** (importante! senão qualquer um pode tentar criar conta)

2. Em **"External providers"**:
   - Clica em **"Add provider"** → **Google**
   - Clica em **"Enable Google"** (deixa as configurações padrão)

3. Em **"Git Gateway"** (mais embaixo na mesma página):
   - Clica em **"Enable Git Gateway"**
   - Autoriza acessar seu repositório (pode pedir confirmação no GitHub)

### 4.3 Convidar você mesmo como usuário

1. Ainda em Identity, vai em **"Identity"** (a aba principal)
2. Clica em **"Invite users"**
3. Digita o seu e-mail (use o **mesmo** que você usa no Google)
4. Clica em **"Send"**
5. Você vai receber um e-mail com link de confirmação — clica nele
6. Abre uma página pedindo pra criar senha — **OU** você pode clicar em **"Continue with Google"** pra logar com sua conta Google direto

✅ Pronto! Conta criada.

---

## ETAPA 5 — Acessar o painel admin

1. Acessa `dfantato.com.br/admin` (ou `[seu-site].netlify.app/admin` enquanto o domínio não estiver pronto)
2. Aparece uma tela escura com botão **"Login with Netlify Identity"**
3. Clica → entra com Google (ou e-mail/senha)
4. ✅ **Você está dentro do admin!**

Vai ver:
- Lista das 12 peças de exemplo
- Botão **"New Peça"** para criar nova
- Aba **"Configurações Gerais"** para mudar WhatsApp/Instagram

---

## Como usar o admin

### Adicionar uma peça nova

1. Clica em **"Peças"** no menu
2. Clica em **"New Peça"** (botão azul, canto superior)
3. Preenche:
   - **Foto da Peça**: arrasta a foto ou clica para escolher
   - **Nome**: ex: "Bowl Esmeralda"
   - **Categoria**: escolhe da lista
   - **Tipo de Madeira**: ex: "Imbuia recuperada"
   - **Descrição**: conta a história da peça
   - **Preço**: deixa em branco para "sob consulta"
   - **Em Destaque**: marca se quiser que apareça primeiro
   - **Ordem do Destaque**: 1, 2, 3... (menor = aparece mais à frente)
   - **Vendida**: deixa desmarcado
4. Clica em **"Publish"** → **"Publish now"**
5. Aguarda 1 minuto e a peça aparece em `dfantato.com.br`

### Marcar peça como vendida

1. Abre a peça na lista
2. Marca **"Vendida"** ✅
3. **Publish**
4. No site, ela vai aparecer com selo "Vendida" e sem o botão WhatsApp

### Mudar o WhatsApp ou Instagram

1. Vai em **"Configurações Gerais"**
2. Clica em **"Site e Contato"**
3. Edita os campos
4. **Publish**

---

## Como funciona por trás (explicação curta)

- Cada peça é um **arquivo de texto** (Markdown) na pasta `pecas/` do GitHub
- Quando você adiciona pelo admin, o Decap CMS cria um novo arquivo
- O Netlify detecta a mudança e republica o site automaticamente em ~1 minuto
- Suas fotos vão pra pasta `images/uploads/`

**Tudo é versionado no GitHub** — você pode ver todo histórico de mudanças, voltar no tempo, etc. Mas você não precisa entender disso, só funciona.

---

## Problemas comuns

**"Login with Netlify Identity" não aparece** — Identity não foi ativado direito. Volta na ETAPA 4.

**Loga mas dá erro "Failed to load config.yml"** — verifica se o arquivo `admin/config.yml` foi enviado no GitHub.

**Adiciono peça mas não aparece no site** — espera 2-3 minutos, o Netlify precisa republicar. Se não aparecer, vai em **"Deploys"** no Netlify e vê se o último deploy deu certo.

**Não recebi o e-mail de convite** — confere a caixa de spam. Se não chegou, vai em Identity → Users → reinvita.

**A foto da peça aparece quebrada** — verifica se você fez upload da foto pelo admin (e não colocou só um link). O Decap CMS cuida do upload automaticamente.

---

## Resumo final

✅ Site no ar  
✅ Admin funcionando  
✅ Login com Google  
✅ Pode passar acesso pro Marcos só convidando o e-mail dele em **Identity → Invite users**

**Quando der qualquer problema, me chama. Mas dessa vez vai funcionar.**
