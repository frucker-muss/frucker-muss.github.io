# AGENTS.md — Guia para qualquer IA que for editar este site

Este arquivo existe para ser lido por qualquer agente de IA (Claude, GPT, Gemini, etc.)
antes de propor ou aplicar mudanças neste repositório. Não é específico de uma
ferramenta — mantenha o conteúdo genérico e atualizado conforme a estrutura do
site mudar.

Última atualização: 2026-08-25.

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
- **Lotes (seção 9):** não propor mudança que desfaça um lote recém-publicado.
  Pedido novo adapta o lote *aberto*, não o feito.

## 9. Lotes de atualização — racionalidade do processo

Dois eixos, sempre juntos: **o usuário do site** (família, idoso no celular) e
**os tokens do mantenedor**. Um lote que deixa a família melhor mas obriga a
refazer HTML na semana seguinte é lote mal calculado.

### Estados

| Estado | O que fazer com pedido novo |
|---|---|
| **Feito** | Congelado. Só bug. Não restilizar amanhã o que publicou hoje. |
| **Aberto** (o próximo a implementar) | Molde vivo. O pedido **entra aqui** se couber na fundação. Recalcula o lote; não empilha "lote 17". |
| **Fila** | Ideia que não cabe no aberto sem estourar a conversa **ou** sem a fundação que o aberto ainda vai deixar. Fica para depois, já desenhada para *usar* o que o aberto entregar. |

Mudar de ideia é permitido. Enquanto o lote **não foi implementado**, ele se
adapta. Depois de no ar, só mexe com ordem explícita ("desfaz o lote N") ou
correção.

### Como calcular um lote (antes de escrever código)

1. **Uma conversa nova, um lote, um PR.** Histórico velho queima crédito — não
   continuar o lote seguinte na conversa que acabou de publicar o anterior.
2. **Fundação, não enfeite.** O lote de hoje deixa o formato que o de amanhã
   preenche. Não entrega UI que o próximo vai jogar fora.
3. **Teste do dia seguinte:** "se ele pedir X amanhã, eu vou ter que desfazer
   o que publiquei hoje?" Se sim, ou X entra no lote aberto *agora*, ou o lote
   aberto já nasce no formato final e X vai para a fila — nunca o meio-termo
   que se rasga.
4. **Cabe no plano.** Se não cabe numa sessão, parte no mesmo alicerce
   (`2a` plumbing / `2b` conteúdo), nunca um redesenho.
5. **Pedido novo no meio do caminho:** absorve no **aberto** se for a mesma
   fundação; senão vai para a fila, dito em voz alta ("isso é 2c, não 2").
6. **Não fura lote em implementação.** Recalcular a fila é barato; misturar
   dois lotes no mesmo PR é caro e gera retrabalho.

Exemplo desta fila: o **2** já entrega o schema de ficha (`id`, `thumb`,
`pessoas`, `status`) que o **2c** vai preencher. O **2 não** constrói o toque
do idoso no celular — isso é 2c. Assim o 2c não reescreve `documentos.html`.

### Fila atual

Trabalhar **um lote por conversa nova**.

Público: família, inclusive **idosos no celular**. Foto antiga ruim com **10+
pessoas** tem que dar para apontar um rosto de cada vez, com dedo grosso, e
mandar sem terminar a foto. Sem conta, sem "gerar código", sem arrastar
retângulo preciso.

Demanda: alta no começo, depois estabiliza. O mantenedor **aprova lote**, não
edita HTML a cada recado.

| Lote | Estado | O que é | Fundação que deixa |
|---|---|---|---|
| **1** | feito (2026-08-25) | Home com um caminho, 404, favicon. Outros deixa de ser link. | Home estável; não reabrir no 2. |
| **2** | **aberto** | Fotos sem gerar código: JPG em `assets/img/documentos/` aparece sozinho; título/pessoas em `_data/acervo.json`. Schema de ficha já no formato do 2c. Sem UI de toque. | Catálogo fora do HTML. |
| **2c** | fila (depois do 2) | Idoso toca a foto → recado **já vinculado** → WhatsApp/e-mail/`acervorucker@gmail.com` com código curto → mantenedor **só aprova**. 1 de 10 nomes basta. "Não sei" vale. Duas opiniões na fila até ele escolher. | Fila de identificação, sem backend. |
| **3** | fila | Árvore mais usável (índice de pessoas, busca) e o que ainda faltar de crônica. | — |

Pedidos futuros (busca na galeria, Drive automático, etc.) **não furam o 2**.
Entram no aberto se forem a mesma fundação (JSON/pasta); senão na fila, no
lugar sequencial que não desfaça o 2.

**Não fazer 2c antes do 2:** sem catálogo fora do HTML, o "código para aprovar"
volta a ser JavaScript frágil.

Privacidade (seção 2): nunca expor WhatsApp/telefone pessoal do administrador.
Canal público: `acervorucker@gmail.com` / Google Forms. O 2c pode pré-preencher
mensagem de WhatsApp **da família para o canal do acervo**, não o número pessoal.

Site estático: não há backend. "Aprovar" = mesclar a ficha no `acervo.json` e
publicar. A foto já está na pasta; a identificação é que entra na fila.
