# Guia de Processo — Acervo Visual (rucker.life)

Este documento descreve o passo a passo completo para tratar uma foto, identificar as pessoas e publicá-la no acervo visual do site `rucker.life`. Serve tanto para o Nando seguir sozinho quanto para orientar qualquer assistente de IA (Claude, Gemini, etc.) que vá ajudar nessa tarefa.

**Regra de ouro:** se uma IA estiver te ajudando e ela sugerir um passo que não está aqui — desconfie. Peça pra ela justificar ou volte pra este guia.

---

## 0. Contexto que toda IA precisa saber antes de começar

- O site **rucker.life** é um site **estático** (Jekyll + GitHub Pages). Não tem banco de dados, não tem backend.
- Toda a informação de "quem é quem" numa foto **fica em `_data/acervo.json`**. A galeria (`familia/documentos.html`) só lê esse arquivo e os JPGs da pasta. **Não** fica em metadado EXIF da imagem, nem no HTML, nem no nome do arquivo.
- Cada foto é um objeto no array `itens` de `_data/acervo.json`, com esse formato:

```js
{
  id: "identificador-unico-sem-espacos",
  thumb: "/assets/img/documentos/nome-do-arquivo.jpg",
  titulo: "Título curto da foto",
  legenda: "Texto que aparece embaixo da foto no site.",
  categoria: "fotos",
  tipo: "Retratos Identificados",
  data: "1946-06-26",       // ou null
  decada: "1940",           // ou null
  local: "São Pedro do Maratá",
  status: "naoverificado",  // ou "resolvido" ou "confirmado"
  pessoas: [
    { genId: "G4-15", nome: "Nome completo da pessoa", x: 51, y: 14, w: 8, h: 10 }
  ]
}
```

- `x`, `y`, `w`, `h` são porcentagens (0–100) da posição/tamanho de uma **área retangular** em volta da pessoa (formato atual, desde ago/2026). Fotos antigas podem ter só `x`/`y` sem `w`/`h` — isso é um formato legado (ponto único) que o site ainda entende, mas não use esse formato em fotos novas.
- `genId` é o identificador genealógico da pessoa (ex: `G4-15`), vindo do arquivo `ACERVO_RUCKER_v5_1.docx`. Se a pessoa não estiver documentada lá ainda, `genId: null`.

---

## 1. Localizar a foto

- Fotos ficam no Google Drive (pastas "Rückers" / "site") ou já tratadas na pasta local `Desktop\Photos\Tratadas`.
- Priorize fotos que já têm **nomes escritos nelas** (legendas originais da família) — são as mais fáceis de identificar com segurança.

## 2. Tratar a imagem

Regra padrão (a não ser que você peça o contrário):

1. Aplicar a orientação EXIF correta primeiro (antes de qualquer outra coisa), pra imagem não ficar torta.
2. Recortar bordas inúteis (mesa, fundo de couro, moldura do porta-retrato) — **só** o que é fundo, nunca conteúdo da foto em si.
3. Se pedido explicitamente "sem tratamento" ou "só recorte" → não aplicar nitidez, contraste ou upscale, só o recorte.
4. Se pedido "melhorar qualidade" → aplicar autocontraste leve, nitidez moderada (unsharp mask), e se a imagem for pequena, aumentar resolução com Lanczos (isso não cria detalhe novo, só evita pixelização no zoom do site).
5. **Sempre remover metadados EXIF/XMP/IPTC** ao salvar — essa informação não é usada pelo site e não deve ser injetada nela (foi o erro do Gemini: tentar guardar identificação no EXIF em vez do código).
6. Salvar como JPEG, qualidade 85–92, nome de arquivo descritivo (ex: `enterro-vo-pina.jpg`), minúsculo, sem espaço (usar hífen).

## 3. Marcar as pessoas na foto

Use a ferramenta **`marcador-fotos-rucker.html`** (arquivo local, abre direto no navegador, não precisa de internet):

1. Abra o arquivo no navegador.
2. Suba a foto **já tratada** (passo 2).
3. Clique e arraste um retângulo em volta de cada pessoa (rosto + um pouco do corpo).
4. Preencha o nome de cada pessoa na lista ao lado (o campo "genId" pode ficar em branco — a IA preenche depois).
5. Preencha os campos: ID, Título, Subcategoria, Status, Legenda (pode deixar a legenda em branco também, a IA escreve uma versão melhor).
6. Clique em **"Gerar código"** → **"Copiar código"**.

## 4. Cruzar os nomes com o Acervo genealógico

Isso é feito pela IA (Claude), não por você manualmente:

1. Cole o código gerado no passo 3 numa conversa com o Claude.
2. Peça: *"cruze esses nomes com o Acervo e me devolva o código com os genId preenchidos"*.
3. A IA deve procurar cada nome no arquivo `ACERVO_RUCKER_v5_1.docx` (ou na versão mais nova, se houver) e preencher `genId` sempre que encontrar uma correspondência segura. Nomes não encontrados ficam `genId: null` e o `nome` marcado como "(a confirmar)".
4. A IA também melhora o título e a legenda com base no que encontrar no Acervo (data, local, contexto histórico), sem inventar informação que não esteja documentada ou que você não tenha confirmado.

## 5. Publicar no site

1. Coloque o JPG em `assets/img/documentos/` (nome em minúsculas, hífen, sem espaço). Sem ficha, a foto **já aparece** no acervo com título tirado do arquivo.
2. Acrescente a ficha correspondente em `_data/acervo.json` (array `itens`). **Não** edite `familia/documentos.html` para adicionar foto.
3. Confirme que o campo `thumb` aponta para o mesmo caminho do arquivo.
4. No PowerShell, dentro da pasta do repositório:
   ```
   git status
   ```
   Confirme que aparece `On branch main` e os arquivos certos como modificados.
   ```
   git add .
   git commit -m "descrição curta do que mudou"
   git push
   ```
5. Espere 1–2 minutos (GitHub Pages reconstrói o site) e confira em `https://rucker.life/familia/documentos.html` com **Ctrl+F5**.

---

## 6. Lote 2c — sugestão da família (celular)

Parente não edita GitHub. No visualizador da galeria:

1. Toca **Quem é esta pessoa?**
2. Escreve **um** nome, ou toca **Não sei**.
3. Aparece um código `RK2C-…` já ligado à foto.
4. Envia por e-mail (`acervorucker@gmail.com`) ou pelo formulário.

O mantenedor recebe o código + nome, confere, e **só então** atualiza a ficha em `_data/acervo.json` (nunca o HTML).

---

## Checklist rápido (cole isso no início de uma conversa nova com qualquer IA)

```
Contexto do projeto rucker.life:
- Site estático Jekyll/GitHub Pages, SEM backend/banco de dados.
- Dados de identificação de pessoas em fotos ficam em _data/acervo.json —
  NUNCA em EXIF da imagem, NUNCA em familia/documentos.html.
- Foto nova: JPG em assets/img/documentos/ + ficha no JSON. Pasta sem ficha
  ainda aparece.
- Formato de cada pessoa: { genId, nome, x, y, w, h } (retângulo em %, não ponto).
  Sem x/y a pessoa fica na ficha e não ganha marcador.
- Antes de publicar, confirmar que a branch local é "main" (git branch).
- Genealogia de referência: ACERVO_RUCKER_v5_1.docx (genId no formato G3-AA, G4-15 etc).
```

## Erros já cometidos (não repetir)

| Erro | O que aconteceu | Como evitar |
|---|---|---|
| Injetar dados no EXIF | Gemini gravou nome/data como metadado da imagem, sem efeito nenhum no site | Dados de pessoa sempre no array `ITENS`, nunca em EXIF |
| Editar `documentos.html` para adicionar foto | O catálogo voltaria para o HTML e o próximo lote quebraria | Só `_data/acervo.json` + JPG na pasta |
| Publicar em branch errada | Trabalho feito numa branch separada nunca chegava no site publicado | Confirmar com `git branch` que está em `main` antes de publicar |
| Adivinhar coordenadas x/y | Estimativa visual de posição gerava marcadores mal posicionados/apertados | Usar a ferramenta `marcador-fotos-rucker.html` (clique real, não estimativa) |

---

*Última atualização: 26/08/2026*
