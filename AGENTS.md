# AGENTS.md — Guia para qualquer IA que for editar este site

Este arquivo existe para ser lido por qualquer agente de IA (Claude, GPT, Gemini, etc.)
antes de propor ou aplicar mudanças neste repositório. Não é específico de uma
ferramenta — mantenha o conteúdo genérico e atualizado conforme a estrutura do
site mudar.

Última atualização: 2026-08-25.

## 0. Ao voltar

`ideia: …` → uma linha: **2**, **2c** ou **fila**. Não implementar.
Construir só em **chat novo**, quando pedir o lote.

## 1. O que é este site

Site estático Jekyll, hospedado no GitHub Pages, repositório
`frucker-muss/frucker-muss.github.io`, domínio próprio `rucker.life` (via `CNAME`).
Conteúdo: acervo genealógico público da família Rücker (imigração da Silésia
prussiana para RS/SC/PR no Brasil, a partir de 1898). Todo o site é em **português
do Brasil**.

Público-alvo: a família, não genealogistas. Precisão factual importa muito, mas
linguagem de processo/metodologia de pesquisa não deve poluir a experiência de quem
só quer conhecer a própria história — ver seção 2.

## 2. Regras editoriais (não negociáveis)

- **pt-BR sempre**, em todo conteúdo novo.
- **Nenhum ramo da família é tratado como "colateral" ou secundário a outro.** Todos
  os ramos descendem de um tronco comum (Vincentius Joseph Rücker) em pé de
  igualdade. Nunca reintroduzir "colateral" ou linguagem hierárquica equivalente
  entre ramos (nem em texto visível, nem em ids/variáveis internas do código).
- **Notas de desambiguação, badges de confiança/status do método de pesquisa
  (tags "DESAMB NN", linguagem de arbitragem/regras de atribuição) NÃO aparecem
  inline nas páginas públicas** (árvore, mapa, documentos, crônicas, perfis). Esse
  conteúdo vive em `familia/metodologia.html`, linkada de forma discreta (link
  pequeno, cor neutra/mudo, sem se impor visualmente) a partir de onde fizer
  sentido — hoje, ao final de `familia/arvore.html`.
- **Privacidade**: nunca expor WhatsApp/telefone pessoal do administrador do site;
  e-mail pessoal dele nunca aparece publicamente — só o canal dedicado
  `acervorucker@gmail.com` / formulário Google Forms de colaboração.
- **Não reescrever prosa de crônica literária** (arquivos `*-uma-cronica.*`,
  `previa-*.html`) sem confirmação explícita do usuário — é texto autoral.

## 3. Mapa de páginas

- `index.html` — home: frase de entrada + um caminho ("Entrar no acervo") e
  placeholder "Outros" (em construção, **não é link**). Lote 1 (2026-08-25).
- `familia.html` — hub da família, duas seções:
  - Fileira de topo, cards "Interativo" (borda dourada): **Árvore Genealógica**,
    **Mapa das Migrações**, **Documentos**, **Pessoas**, **Crônicas**, **Causos**.
  - Seção "Artigos" (`.home-grid`): um card por pessoa, com badge **"Pessoas"**
    (perfil factual) e/ou **"Crônica Literária"** (narrativa). Uma mesma pessoa
    pode ter os dois cards lado a lado quando existem as duas versões.
- `familia/arvore.html` — árvore genealógica interativa. Dados em
  `DADOS.pessoas` (array; ver `RELATORIO_FASE0.md` para o schema completo de
  cada campo). Link discreto no final para `metodologia.html`.
- `familia/metodologia.html` — notas de desambiguação/arbitragem (hoje: DESAMB
  01, 05, 11, 12). Conteúdo técnico, só para quem quiser se aprofundar no método.
- `familia/mapa.html` — mapa esquemático de migração (SVG), dados em array de
  nós/rotas.
- `familia/documentos.html` — galeria de fotos/documentos. Hoje o catálogo ainda
  vive em JavaScript gerado na mão (`ITENS`). **Lote 2** (pendente): fotos em
  `assets/img/documentos/`, metadados em `_data/acervo.json` — **nunca** editar
  esta página para adicionar foto.
- `familia/pessoas.html` — índice de perfis individuais (hoje: Georg Rücker,
  Vincentius Joseph Rücker). Badge "Pessoas".
- `familia/cronicas.html` — índice de crônicas literárias (hoje: Georg,
  Vincentius, Ambrósio Augusto). Badge "Crônica Literária".
- `familia/causos.html` — índice de causos. Já existe pelo menos um causo
  publicado (`o-causo-do-berlet.html`).
- `familia/georg-rucker.md`, `familia/vincentius-joseph-rucker.md` — perfis
  individuais (`layout: cronica` — o nome do layout é reaproveitado para
  qualquer artigo de texto corrido, não é exclusivo de crônicas literárias).
- `familia/georg-uma-cronica.md`, `familia/vincenz-uma-cronica.html`,
  `familia/ambrosio-augusto-uma-cronica.html` — crônicas literárias.
- `familia/previa-albano-rucker.html` — prévia não listada (`robots: noindex`),
  envio pessoal a um parente específico. **Não** deve aparecer em nenhum índice
  público (nem `cronicas.html`, nem `pessoas.html`, nem `familia.html`).
- `ferramentas/marcador.html` — ferramenta offline de marcação de pessoas em
  fotos, linkada no rodapé de `familia.html`.

Inconsistência conhecida (histórica, não é bug): a extensão `.md` vs `.html`
varia entre páginas de crônica/perfil (ex.: `georg-uma-cronica.md` vs
`vincenz-uma-cronica.html`) — ambas com `layout: cronica`, funcionalmente
idênticas; o Jekyll compila as duas para `.html` no build. Ao criar uma página
nova desse tipo, `.md` é o padrão dominante, mas não vale a pena migrar as
existentes só por consistência de extensão.

## 4. Layouts (`_layouts/`)

- `default.html` — chrome do site inteiro: header, variáveis de CSS globais,
  sistema `.home-grid`/`.card`, tipografia. `page.title`/`page.description` viram
  meta tags Open Graph/Twitter automaticamente.
- `cronica.html` — layout de artigo de texto corrido: título + subtítulo + corpo
  + botões de compartilhar (WhatsApp / Google Forms) no final. Usado tanto para
  crônicas literárias quanto para perfis "Pessoas" — o layout não distingue os
  dois tipos; a classificação editorial acontece só no card que linka para a
  página (`familia.html`/`pessoas.html`/`cronicas.html`).

## 5. Convenção visual dos cards

Paleta usada quase toda via CSS custom properties e estilo inline:
`--ouro #d4af6a` (dourado, destaque/interativo), `--terra #c0714f`,
`--sage #8a9e86`, `--mudo #8a8578` (cinza discreto — usar para links/notas
secundárias, ex. o link de metodologia), `--soft #b8b2a3`, `--claro #f2efe6`,
`--borda #2a2a2a`, `--superficie #1a1a1a`.

Duas famílias de card em `familia.html`:

1. **Cards "Interativo"** (fileira de topo): borda dourada 2px, fundo
   `rgba(212,175,106,.06)`, badge pequena dourada uppercase "Interativo". Para
   ferramentas/páginas navegáveis.
2. **Cards de "Artigos"** (`.home-grid`): borda padrão de `.card`, badge cinza
   (`#8a8578`) "Pessoas" para perfil factual, badge dourada (`#d4af6a`)
   "Crônica Literária" para narrativa.

O site usa estilo inline (`style="..."`) extensivamente em vez de classes CSS
dedicadas para variações pontuais dentro de `familia.html` — é o padrão já
estabelecido. Ao adicionar um card novo, copiar um card existente do mesmo tipo
e ajustar título/texto/href é mais seguro do que criar CSS novo.

## 6. Workflow de deploy e teste

- **Não há toolchain Jekyll local** nesta máquina (sem `bundle`/`jekyll`/`node`
  instalados) — não dá para rodar `jekyll serve` localmente. Build e preview
  reais só acontecem no GitHub Pages, depois de um `git push` para `main`.
- Rodar `git status` **antes** de editar: pode haver edição local pendente, não
  commitada, de trabalho em andamento do usuário (ex.: ajustes manuais em
  `arvore.html`). Nunca misturar essa edição alheia no seu commit — isole via
  `git add <arquivos específicos>` (nunca `git add -A`/`.`) e avise o usuário
  que ela continua pendente.
- Depois de `git push origin main`, o GitHub Pages leva tipicamente de 1 a 3
  minutos para reconstruir. Para testar: navegar/buscar a URL live com um
  cache-busting query string (`?cb=N`) e, se ainda vier conteúdo antigo, esperar
  ~90–100s e checar de novo.
- **Nunca fazer `git push` sem confirmação explícita do usuário na conversa** —
  é uma ação que publica em estado compartilhado/público (o site ao vivo).

## 7. Referências mais profundas no repositório

- `RELATORIO_FASE0.md` — auditoria técnica detalhada do schema de dados de
  `arvore.html` (`DADOS.pessoas`) e `documentos.html` (`SECOES`/`subsecoes`/
  `itens`), datada de 2026-08-03. Ainda válida para esses schemas de dados, mas
  **desatualizada** quanto ao mapa de páginas (não menciona `pessoas.html`,
  `cronicas.html`, `causos.html`, `metodologia.html`, criadas depois) e ainda
  cita a terminologia "colateral", já removida. Para o mapa de páginas atual,
  usar a seção 3 deste arquivo, não aquele relatório.
- `GUIA-PROCESSO-FOTOS-ACERVO.md` — processo de curadoria de fotos para
  `documentos.html`.
- `SITE_SNAPSHOT.md` — snapshot bruto de conteúdo do site em um ponto no tempo;
  pode estar desatualizado, não usar como fonte de verdade sobre o estado atual.

## 8. Antes de propor uma mudança estrutural

- Rodar grep para checar se o termo/padrão que está prestes a ser introduzido já
  existe em outro lugar do site, evitando duplicar uma convenção com nome
  diferente.
- Se a mudança tocar linguagem sobre ramos da família ou conteúdo de
  método/pesquisa, revisar a seção 2 antes de escrever qualquer texto.
- Se for adicionar uma página nova ao hub (`familia.html`), decidir se ela é
  "Interativo" (ferramenta/navegação) ou "Artigo" (texto corrido) e seguir o
  padrão de card correspondente (seção 5).
- Ao terminar uma mudança estrutural (nova página, novo tipo de card, nova
  seção do hub), **atualizar este arquivo** para refletir o novo estado —
  ele só é útil se ficar correto.

## 9. Lotes

**Feito** — no ar; só bug. **Aberto** — pedido novo entra aqui. **Fila** — depois, usando o que o aberto deixar.

Um lote = um chat novo = um PR. O de hoje não pode obrigar a refazer HTML amanhã.

| | | |
|---|---|---|
| **1** feito | Home, 404, favicon | não reabrir |
| **2** aberto | Foto na pasta aparece; ficha em `_data/acervo.json` | catálogo fora do HTML |
| **2c** fila | Idoso toca a foto no celular → você aprova um código | precisa do 2 |
| **3** fila | Árvore mais fácil | depois |

O **2** já deixa o formato da ficha (`id`, quem aparece, status). O **2c** só preenche — sem toque de idoso no 2, sem JS gerado no HTML.

Família, inclusive idoso no celular: um toque, um nome, “não sei” vale. Canal: `acervorucker@gmail.com` / Forms — nunca WhatsApp pessoal (seção 2).
