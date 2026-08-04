# Relatório Fase 0 — Leitura do repositório antes de qualquer mudança

Data: 2026-08-03

Relatório gerado lendo diretamente os arquivos do repositório (não por suposição). Cobre os 4 pontos pedidos: estrutura de `DADOS.pessoas`, schema de `itens` em documentos, padrão de descoberta das páginas individuais, e status de publicação de `mapa.html`/`documentos.html`.

---

## 1. Estrutura de `DADOS.pessoas` em `familia/arvore.html`

Objeto `DADOS` (dentro de um IIFE, `familia/arvore.html:160-377`) tem duas chaves: `desambiguacoes` (objeto, chave→registro) e `pessoas` (**array**, não objeto).

Cada item de `pessoas` tem exatamente estes campos:

```js
{
  id: "georg",              // string, usada em data-id do card e como chave de busca (DADOS.pessoas.find)
  ger: "Geração I",         // string — texto exibido como rótulo de seção; agrupamento é feito comparando ger !== gerAtual em sequência (não por índice numérico)
  linha: "direta",          // "direta" | "colateral" | "aberta" — controla estilo do card (borda dourada / tracejada)
  iniciais: "GR",           // 2 letras, mostradas na "chapa" do card
  nome: "Georg Rücker",
  vida: "n. 1789, Johannesberg",
  papel: "...",             // descrição curta sob o nome no card
  sub: "...",               // subtítulo mostrado no painel de detalhe (rkr-detalhe-sub)
  blocos: [
    {
      t: "Registros Básicos",   // título da subseção
      f: [
        { r: "Nascimento", v: "1789, ...", s: "doc", src: "Arquivo-base" }
        // r = rótulo, v = valor/texto, s = status (doc|epi|inf|hip|conf|abt), src = fonte
      ]
    }
  ]
}
```

- `blocos.f[].s` deve ser um dos 6 status da legenda (`doc`, `epi`, `inf`, `hip`, `conf`, `abt`) — é a chave usada tanto na classe CSS (`.rkr-ponto.doc` etc.) quanto no filtro (`data-status`).
- **Não há campo de parentesco explícito** (sem `paiId`/`filhos`/`conjugeId`). A árvore é uma lista linear agrupada por `ger`; relações de parentesco só existem como texto livre em `papel`/`sub`/`blocos`. Se for adicionar uma pessoa nova esperando um campo estrutural de parentesco para linkar automaticamente pai/filho, **não existe** — é tudo prosa.
- IDs atuais no array: `georg`, `vincentius`, `g3_an`, `g3_am`, `g3_aa`, `g4_direct`, `g4_colateral`, `g5_herberto`, `g6_desc`, `ricardo_tp`.

---

## 2. Schema de `itens` em `familia/documentos.html`

Estrutura: `SECOES` (array) → cada seção tem `subsecoes` (array) → cada subseção tem `itens` (array). O comentário no código (`documentos.html:132-134`) documenta o schema pretendido:

```js
{
  id: ...,        // mencionado no comentário, mas NÃO é lido em nenhum lugar do código atual (nem montarCardHTML, nem carregarItem usam item.id)
  titulo: "...",  // usado como alt da miniatura, legenda do card e título no lightbox
  status: "confirmado" | "resolvido" | "naoverificado",  // só esses 3 valores têm badge/cor definida
  thumb: "caminho/miniatura.jpg",
  full: "caminho/imagem-grande.jpg",  // opcional — se ausente, usa thumb
  legenda: "texto exibido embaixo no lightbox"
}
```

**Sinal de alerta**: `id` está no comentário mas é campo morto — o código indexa itens por posição (`data-idx`), não por `id`. Incluir `id` não quebra nada, mas também não faz nada.

**Todas as 5 subseções** (`fontes-primarias`, `outros-documentos`, `retratos-identificados`, `retratos-nao-identificados`, `fotos-grupo-eventos`) **estão com `itens: []`** — zero fotos carregadas ainda. Confirmado no histórico do git: nunca houve item real commitado, sempre vazio.

---

## 3. Como as páginas individuais são descobertas

Divergência importante em relação a uma premissa razoável: **`familia/georg-rucker.html` e `familia/vincentius-joseph-rucker.html` não existem como arquivos `.html`** no repositório. O que existe é:

```
familia/georg-rucker.md               (front matter: layout: cronica)
familia/vincentius-joseph-rucker.md   (front matter: layout: cronica)
```

Isso é um site Jekyll (repo `frucker-muss.github.io`, GitHub Pages nativo, sem workflow custom em `.github/workflows`). Jekyll compila `.md` com front matter para `.html` no mesmo caminho — por isso o link em `familia.html:86` (`{{ '/familia/georg-rucker.html' | relative_url }}`) funciona em produção, mesmo o arquivo-fonte sendo `.md`.

Padrão de descoberta real: **card estático em `familia.html`**, dentro da seção "Artigos" (`familia.html:83-113`), com `<a href="...">` apontando direto para a URL final. Não há geração dinâmica nem link a partir de `arvore.html` (os cards da árvore não linkam para as páginas de perfil/crônica — são conteúdos paralelos e desconectados).

Inconsistência de convenção que vale notar: `georg-uma-cronica.md` é `.md`, mas o par `vincenz-uma-cronica.html` é `.html` (ambos com o mesmo front matter `layout: cronica`, portanto funcionalmente idênticos — é só inconsistência de extensão no repo, não afeta o build). Se for criar uma página nova, o padrão dominante para "Perfil Histórico" e "Crônica Literária" é `.md` com `layout: cronica`.

---

## 4. Status de publicação de `mapa.html` e `documentos.html`

**Ambos já estão publicados em produção**, não "em construção" no sentido de estarem fora do ar:

- `git status` mostra local `main` == `origin/main` (nada a enviar, só `SITE_SNAPSHOT.md` não versionado).
- Commits `Create mapa.html`, `Update mapa.html`, `Create documentos.html` já estão no histórico de `main` e já foram enviados ao remoto.
- Ambos têm card de entrada em `familia.html` (linhas 58-69), então são navegáveis a partir da home de família.

O que está "em construção" é **conteúdo**, não a página: `documentos.html` está no ar mas com todas as galerias vazias (mostrando "Nenhum item adicionado ainda — galeria em preparação"). `mapa.html` está completo e funcional (diagrama SVG com 9 nós e 8 rotas já preenchidos).
