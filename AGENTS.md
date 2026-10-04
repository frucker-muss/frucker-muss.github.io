# AGENTS.md — Guia para qualquer IA que for editar este site

Este arquivo existe para ser lido por qualquer agente de IA (Claude, GPT, Gemini, etc.)
antes de propor ou aplicar mudanças neste repositório. Não é específico de uma
ferramenta — mantenha o conteúdo genérico e atualizado conforme a estrutura do
site mudar.

Última atualização: 2026-10-04.

## 0. Ao voltar

`ideia: …` → uma linha: **fila**. Lotes 1, 2, 2c, 3 e **3s** publicados. Não misturar com eles.
Construir lote novo só em **chat novo**, quando pedir o lote.

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
- **Dois eixos de leitura** (só em `metodologia.html`, não na árvore): **gênero**
  (como ler: ficha, crônica, foto, áudio, mapa) e **base** (o que sustenta:
  documental, tradição oral, hipótese, folclore). Documental ≠ verdadeiro.
- **Privacidade**: nunca expor WhatsApp/telefone pessoal do administrador do site;
  e-mail pessoal dele nunca aparece publicamente — só o canal dedicado
  `acervorucker@gmail.com` / formulário Google Forms de colaboração.
- **Não reescrever prosa de crônica literária** (arquivos `*-uma-cronica.*`,
  `previa-*.html`) sem confirmação explícita do usuário — é texto autoral.

## 3. Mapa de páginas

- `index.html` — home: título "Rücker · Musskopf", seção "Acervos" com os dois
  acervos empilhados (paterno primeiro, materno depois — a ordem é convenção,
  não hierarquia; a lista é empilhada justamente para caber uma terceira linha
  no futuro) e placeholder "Outros" (em construção, **não é link**).
- `_layouts/default.html` — o cabeçalho de todas as páginas diz
  **"Rücker · Musskopf"**, não "Rucker.life" (04/10/2026). O domínio já é
  rucker.life; repetir o nome paterno no topo de toda página contradiz a
  paridade entre os dois acervos. Não reintroduzir o wordmark antigo.
  Pendência conhecida: `og:image` global ainda é `og-familia-rucker.jpg`, então
  qualquer página Musskopf compartilhada mostra a arte dos Rücker.
- `familia.html` — hub da família, duas seções:
  - Fileira de topo, cards "Interativo" (borda dourada): **Árvore Genealógica**,
    **Mapa das Migrações**, **Documentos**, **Pessoas**, **Crônicas**, **Causos**, **Escutas**.
  - Seção "Artigos" (`.home-grid`): um card por pessoa, com badge **"Pessoas"**
    (perfil factual) e/ou **"Crônica Literária"** (narrativa). Uma mesma pessoa
    pode ter os dois cards lado a lado quando existem as duas versões.
- `familia/arvore.html` — árvore genealógica interativa. Dados em
  `DADOS.pessoas` (array; ver `RELATORIO_FASE0.md` para o schema completo de
  cada campo). Lote **3** (2026-08-26): busca por nome; gerações recolhíveis
  (I–III abertas); no painel, links para crônica/perfil e para
  `documentos.html?foto=`. Link discreto no final para `metodologia.html`.
  Cita a base genealógica como fonte (campo `src` de cada fato) — ver
  "Fonte canônica" abaixo para qual versão usar.

## 2.1 Fonte canônica do acervo genealógico

A única fonte de verdade para fatos genealógicos (datas, filiação, cônjuges,
trajetória) é o documento **`ACERVO_RUCKER_v5_13.md`** (consolidado em
27/08/2026, salvo no Google Drive do Nando). Ele substitui todas as versões
anteriores (v5.8 até v5.12) e o rótulo "v6.0" que ainda podia aparecer em
`familia/arvore.html` — esse "v6.0" era um snapshot paralelo feito só para
popular a árvore, desalinhado da numeração v5.x real, e já foi corrigido.

Ao adicionar ou revisar qualquer fato em `familia/arvore.html` (ou em
qualquer outra página), citar a fonte no campo `src` como `"Base v5.13"` (ou
`"Acervo v5.13"`), nunca `"v6.0"`, `"v5.8"` ou outra versão antiga. Se uma
versão mais nova do acervo for consolidada depois (v5.14, v6.0 real etc.),
atualizar este parágrafo e repetir a busca/substituição das citações antigas
em `familia/arvore.html` — não deixar duas numerações concorrentes no ar.

O `ACERVO_RUCKER_v5_13.md` usa suas próprias etiquetas de evidência
([DOC], [EPI], [HIP], [TO], [ABERTO] etc. — ver seção 2 das regras
editoriais deste arquivo) — essas etiquetas nunca aparecem literalmente nas
páginas públicas; a árvore traduz para os 6 status já existentes
(`doc`/`epi`/`inf`/`hip`/`conf`/`abt`).
- `familia/metodologia.html` — notas de desambiguação/arbitragem (DESAMB
  01, 05, 11, 12, 13, 14) e selos de gênero/base (lote **3s**, 2026-08-27).
  Conteúdo técnico, só para quem quiser se aprofundar no método.
- `familia/mapa.html` — mapa esquemático de migração (SVG), dados em array de
  nós/rotas.
- `familia/documentos.html` — galeria de fotos/documentos. O catálogo **não**
  vive neste HTML. Fichas em `assets/data/acervo.json` (cópia em
  `_data/acervo.json`); lista da pasta em `assets/data/documentos-arquivos.json`;
  JPGs em `assets/img/documentos/`. Arquivo listado sem ficha ainda aparece.
  **Nunca** editar esta página para adicionar foto. Lote 2 (2026-08-26).
  Lote **2c** (2026-08-26): no visualizador, o botão **Quem é esta pessoa?**
  gera um código `RK2C-…` (um nome por vez; “Não sei” vale) e envia por
  `acervorucker@gmail.com` ou Google Forms. A ficha só muda quando o
  mantenedor aprovar e editar o JSON — a família não mexe no GitHub.
- `familia/pessoas.html` — índice de perfis individuais (hoje: Georg Rücker,
  Vincentius Joseph Rücker). Badge "Pessoas".
- `familia/cronicas.html` — índice de crônicas literárias (hoje: Georg,
  Vincentius, Ambrósio Augusto). Badge "Crônica Literária".
- `familia/causos.html` — índice de causos. Já existe pelo menos um causo
  publicado (`o-causo-do-berlet.html`).
- `familia/escutas.html` — índice de áudios (lote **escutas**, 2026-08-29).
  Primeiro episódio: `familia/o-professor-siegmund-rucker.html`. Player com
  transcrição sincronizada; JSON em `assets/data/escuta-siegmund.json`; áudio
  em `assets/audio/o-professor-siegmund-rucker.m4a`. Gênero **áudio** (já
  previsto na metodologia). Não reescrever a transcrição sem ouvir o arquivo.
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

### Acervo Musskopf (lote **musskopf-1**, 2026-10-04)

O site passa a abrigar **dois acervos em pé de igualdade**: Rücker (linha
paterna, Silésia prussiana, travessia de 1898) e Musskopf (linha materna,
Palatinado renano, travessia de 1828). Nenhum dos dois é principal. A
estrutura de URLs é simétrica:

- `musskopf.html` — hub do acervo Musskopf, espelho de `familia.html`.
  Mesma mecânica: `layout: default`, classe `.card` do layout, acento por
  estilo inline, `<style>` local só para o rodapé.
- `musskopf/travessia.html`, `musskopf/mapa.html`, `musskopf/pessoas.html`
  — com conteúdo (lote **musskopf-2**, 2026-10-04), redigido a partir do
  `ACERVO_Musskopf.docx`. Classes próprias prefixadas `.m-` definidas em
  `<style>` local de cada página; não há CSS novo no layout global.
- `musskopf/arvore.html` — árvore genealógica interativa (lote **musskopf-3**,
  2026-10-04). Mesmo motor de `familia/arvore.html`: o arquivo é uma cópia dela
  com `DADOS.pessoas` trocado, `--ouro` redefinido para o sálvia `#8a9e86` e
  `PAGINAS` vazio (ainda não há crônicas/perfis Musskopf para linkar). Doze
  gerações, de Nickel Muskopf à pesquisa de hoje. A geração do usuário não é
  nomeada — aparece como "A pesquisa de hoje", por decisão dele.
  Se a árvore Rücker ganhar recurso novo no motor, replicar aqui à mão: os dois
  arquivos são irmãos por cópia, não compartilham código.
- `musskopf/documentos.html`, `musskopf/cronicas.html` — ainda stubs navegáveis
  (kicker "Em preparo").

**Postura editorial do acervo Musskopf** (decisão do usuário, 04/10/2026):
publicar mesmo com fonte em disputa, e deixar a divergência visível em vez de
escondê-la ou de segurar a publicação. Toda página de conteúdo termina com um
bloco `.m-ressalva` dizendo isso e convidando à correção por e-mail. Divergência
entre fontes vai no corpo do texto, em `.m-pendente`, em português corrente —
nunca como badge, tag ou jargão de método (vale a seção 2).
- `musskopf/travessia.html` não tem equivalente Rücker: a viagem de 1828 na
  galera *Fortuna* é o episódio mais documentado dessa linha.

**Acento por acervo**: dourado `#d4af6a` = Rücker, sálvia `#8a9e86` =
Musskopf. O sálvia já existia na paleta (seção 5) e passa a ter função
semântica. Ao criar página Musskopf nova, copiar um card de `musskopf.html`
e trocar texto/href — nunca criar CSS novo.

**Fonte canônica Musskopf**: `Dados_Estruturados_Musskopf_v1.1.json`
(Google Drive do Nando), com `ACERVO_Musskopf.docx` como documento de apoio.
Vale aqui a mesma regra da seção 2: as etiquetas internas de evidência
(`confianca`, `contradicoes`, ids de nó) nunca aparecem nas páginas públicas.

**Lacuna conhecida e não resolvida**: a linha materna direta está documentada
em duas pontas que ainda não se tocam. De cima, até Pedro Musskopf (*1869).
De baixo, de Carlos Reinaldo Musskopf e Hulda para frente. O vínculo entre
Pedro e Carlos Reinaldo **não tem documento** e não pode ser desenhado como
elo sólido em nenhuma página pública. Até a certidão de casamento de Silírio
Lothar Musskopf com Erna Lisetta aparecer, essas três gerações finais são um
núcleo separado — ou um traço interrompido, se a convenção visual for criada.

Convenção adotada em `musskopf/arvore.html` (04/10/2026): a quebra aparece no
próprio rótulo da geração — "Geração IX · a ligação com Pedro ainda não tem
documento" — em português corrente, sem badge nem jargão. A única fonte desse
elo é o quadro genealógico da carta de Paulo R. Rücker ao pessoal de Roca
Sales, de dezembro de 2002 (`Carta, ao pessoal de Roca.doc`, Drive), que
desenha Pedro × Philippine Schäffer → Carlos Reinoldo × Hulda Stolte →
Silírio Lothar e irmãos. É documento de família, não registro civil.
A certidão de óbito de Silírio (Estrela, 13/02/2015, livro C-17, fl. 19,
nº 8470) confirma dali para baixo: filiação Carlos Reinaldo e Hulda, filhos
Bruno Walter e Liane Beatriz. Grafia: **Reinoldo** na carta de 2002,
**Reinaldo** no registro civil — a árvore usa a do registro civil.
A esposa de Silírio é **Erna** Lisetta Musskopf — confirmado pelo neto em
04/10/2026. A leitura digitalizada da certidão de 2015 devolve "Era Lisetta",
sem o n; é falha de OCR ou erro do próprio registro, não o nome dela. Não
"corrigir" Erna para Era de novo a partir do texto extraído da certidão.

**Contato**: o rodapé de `musskopf.html` usa `mailto:` para
`acervorucker@gmail.com` com o endereço codificado em entidades HTML, sem
texto visível. `familia.html` ainda usa Google Forms — a divergência é
conhecida e aguarda decisão do usuário.

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
| **2** feito | Foto na pasta aparece; ficha em `assets/data/acervo.json` | não reabrir |
| **2c** feito | Idoso toca a foto no celular → código `RK2C-…`; você aprova no JSON | não reabrir |
| **3** feito | Árvore mais fácil: busca, gerações que abrem, clique → foto/crônica | não reabrir |
| **3s** feito | Selos gênero/base em `familia/metodologia.html` | não reabrir |
| **escutas** feito | Áudio do professor Siegmund Rücker; card Escutas no hub | não reabrir |
| **musskopf-1** feito | Acervo Musskopf: hub + 6 stubs; home com dois acervos | não reabrir |
| **musskopf-2** feito | Conteúdo em Travessia, Mapa e Pessoas; ressalva editorial | não reabrir |
| **musskopf-3** feito | Árvore Musskopf com dados reais; cabeçalho passa a "Rücker · Musskopf" | não reabrir |

O **2** deixou o formato da ficha (`id`, `thumb`, `titulo`, `legenda`, `categoria`, `tipo`, `data`, `decada`, `local`, `status`, `pessoas[]` com `genId`, `nome`, `x,y,w,h`). Miniaturas com `loading="lazy"`. O **2c** só preenche — um toque, um nome, “não sei” vale; canal `acervorucker@gmail.com` / Forms; nunca WhatsApp pessoal (seção 2). Sem restilizar a home.

O **3** não mexe na home nem no catálogo. Busca por nome; gerações I–III abertas, o resto recolhido até tocar; no painel da pessoa, links para perfil/crônica (quando existem) e para fotos do acervo (`documentos.html?foto=`).

O **3s** não mexe na árvore nem no JSON. Só explica gênero e base na metodologia.

### Backlog (2026-08-27)

**Fila** (depois do 3s, sem reabrir 1/2/2c/3): 3–4 fotos na home puxadas do JSON; citação/causo; contadores; três caminhos em Família; filtros da galeria; zoom/pan; hover/transições; modo claro; rodapé com data; mapa interativo; linha do tempo; GEDCOM; lote 4 = JPEG em `04` + ficha em `06`.

Já existe — não refazer: tema escuro/dourado; formulário de contribuição; frase da Silésia na home.
