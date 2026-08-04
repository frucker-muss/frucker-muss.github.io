# SITE_SNAPSHOT.md

> Snapshot completo do repositório `frucker-muss/frucker-muss.github.io`, gerado em 2026-08-02.

---

## ESTRUTURA DE ARQUIVOS

```
$ find . -type f -not -path "./.git/*"
./.claude/settings.local.json
./CNAME
./_config.yml
./_layouts/cronica.html
./_layouts/default.html
./assets/1785149425259.png
./assets/css/cronica.css
./assets/css/site.css
./familia.html
./familia/arvore.html
./familia/documentos.html
./familia/georg-rucker.md
./familia/georg-uma-cronica.md
./familia/mapa.html
./familia/vincentius-joseph-rucker.md
./familia/vincenz-uma-cronica.html
./index.html
```

---

## CONTEÚDO DOS ARQUIVOS

## .claude/settings.local.json
```json
{
  "permissions": {
    "allow": [
      "Bash(ruby -v)",
      "Bash(gem list *)",
      "Bash(echo \"exit:$?\")",
      "Bash(mkdir -p /tmp/preview)",
      "Bash(mkdir -p __TRACKED_VAR__/preview_site)",
      "Bash(python3 *)",
      "Bash(git add *)",
      "Bash(git commit *)",
      "Bash(git push *)"
    ]
  }
}
```

## CNAME
```
rucker.life
```

## _config.yml
```yaml
title: Rucker.life
description: Família
# Remova ou comente a linha abaixo para evitar sobreposição de estilos
# theme: jekyll-theme-architect
```

## _layouts/cronica.html
```html
---
layout: default
---
<article class="cronica">
  <header class="cronica-header">
    <h1>{{ page.title }}</h1>
    {% if page.subtitle %}<p class="cronica-subtitle">{{ page.subtitle }}</p>{% endif %}
  </header>

  <div class="cronica-body">
    {{ content }}
  </div>

  <!-- BOTÕES DE INTERAÇÃO -->
  <div style="text-align: center; margin: 3rem 0 1rem; border-top: 1px solid #2a2a2a; padding-top: 2rem; display: flex; flex-direction: column; gap: 1rem; align-items: center;">

    <!-- Botão WhatsApp -->
    <a href="https://api.whatsapp.com/send?text=Leia:%20{{ page.title | url_encode }}%20-%20https://rucker.life{{ page.url }}"
       target="_blank"
       rel="noopener noreferrer"
       style="display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 12px 24px; background-color: #121212; border: 1px solid #25D366; color: #25D366; border-radius: 6px; text-decoration: none; font-family: -apple-system, sans-serif; font-size: 1.05rem; font-weight: bold; width: 100%; max-width: 350px;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
      Compartilhar
    </a>

    <!-- Botão Google Forms -->
    <a href="https://forms.gle/zbPuMirz1jVDKdae7"
       target="_blank"
       rel="noopener noreferrer"
       style="display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 12px 24px; background-color: transparent; border: 1px solid #d4af6a; color: #d4af6a; border-radius: 6px; text-decoration: none; font-family: -apple-system, sans-serif; font-size: 1.05rem; font-weight: bold; width: 100%; max-width: 350px;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
      </svg>
      Adicionar Relato à História
    </a>

  </div>

</article>
```

## _layouts/default.html
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#121212">
  <title>{% if page.title %}{{ page.title }} · {% endif %}{{ site.title }}</title>
  <style>
  :root {
    --bg: #121212;
    --surface: #1a1a1a;
    --border: #2a2a2a;
    --text: #e8e4da;
    --text-soft: #b8b2a3;
    --text-mute: #8a8578;
    --gold: #d4af6a;
  }

  * { box-sizing: border-box; }
  html { -webkit-text-size-adjust: 100%; }

  body {
    margin: 0;
    background-color: #121212;
    color: #e8e4da;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 1.05rem;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }

  img { max-width: 100%; height: auto; }
  a { color: #d4af6a; text-decoration: none; }
  a:hover { text-decoration: underline; }

  /* ---------- Cabeçalho ---------- */
  .site-header {
    border-bottom: 1px solid #2a2a2a;
    padding: 1.2rem 1.4rem;
    text-align: center;
  }
  .site-header-title {
    font-size: 1.25rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #b8b2a3;
    font-weight: bold;
    text-decoration: none;
  }
  .site-header-title:hover { color: #d4af6a; text-decoration: none; }

  /* ---------- Conteúdo ---------- */
  .page-content {
    max-width: 900px;
    margin: 0 auto;
    padding: 2.5rem 1.4rem 4rem;
  }
  .page-content h1, .page-content h2 {
    font-family: Georgia, serif;
    color: #f2efe6;
    line-height: 1.25;
    text-align: center;
  }
  .page-content hr {
    border: none;
    border-top: 1px solid #2a2a2a;
    margin: 3rem 0;
  }

  /* ---------- Grade de cartões ---------- */
  .home-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.4rem;
    margin: 0 auto;
  }
  .home-grid--single {
    max-width: 640px;
    grid-template-columns: 1fr;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 170px;
    padding: 2rem 1.6rem;
    background-color: #1a1a1a;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 1px solid #2a2a2a;
    border-radius: 10px;
    color: #e8e4da;
    text-align: center;
    text-decoration: none;
    transition: border-color 0.2s ease, transform 0.2s ease;
  }
  .card:hover {
    border-color: #d4af6a;
    transform: translateY(-2px);
    text-decoration: none;
  }
  .card h3 {
    margin: 0 0 0.4rem;
    font-size: 1.7rem;
    color: #f2efe6;
    font-family: Georgia, serif;
    line-height: 1.2;
  }
  .card p {
    margin: 0;
    color: #b8b2a3;
    font-size: 1rem;
    line-height: 1.5;
  }
  .card--family { min-height: 240px; }

  /* ---------- Crônicas ---------- */
  .cronica {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 0 1.5rem;
    font-family: Georgia, 'Times New Roman', serif;
    color: #e8e4da;
    line-height: 1.75;
    font-size: 1.15rem;
  }
  .cronica-header h1 {
    font-family: Georgia, serif;
    font-size: 2.4rem;
    color: #f2efe6;
    margin-bottom: 0.3rem;
    line-height: 1.2;
    text-align: center;
  }
  .cronica-subtitle {
    font-style: italic;
    color: #b8b2a3;
    font-size: 1.1rem;
    margin-top: 0;
    margin-bottom: 2.4rem;
    text-align: center;
  }
  .cronica-body h3 {
    text-align: center;
    color: #d4af6a;
    font-size: 1.4rem;
    margin: 3.2rem 0 2rem;
    letter-spacing: 0.1em;
  }
  .cronica-body p {
    margin-bottom: 1.5rem;
    text-align: left;
    hyphens: auto;
  }
  .cronica-body em { color: #c9c3b4; }
  .cronica-body strong { color: #f2efe6; }
  .cronica-body blockquote {
    border-left: 3px solid #d4af6a;
    text-align: left;
    font-style: italic;
    font-size: 1.05rem;
    margin: 2.5rem 0;
    padding: 1.2rem 1.6rem;
    background: #1a1a1a;
    border-radius: 6px;
    line-height: 1.7;
    color: #d8d3c5;
  }
  .cronica-body hr {
    border: none;
    border-top: 1px solid #333;
    margin: 3rem 0;
  }
  .cronica-body a {
    color: #d4af6a;
    text-decoration: underline;
    text-decoration-color: rgba(212, 175, 106, 0.4);
    text-underline-offset: 3px;
  }
  .cronica-footnote {
    font-size: 0.95rem;
    color: #8a8578;
    border-top: 1px solid #2a2a2a;
    padding-top: 1.4rem;
    margin-top: 3rem;
    line-height: 1.6;
  }

  /* ---------- Celular ---------- */
  @media (max-width: 480px) {
    .page-content { padding: 1.8rem 1.1rem 3rem; }
    .home-grid { gap: 1.1rem; }
    .card { min-height: 150px; padding: 1.6rem 1.3rem; }
    .card--family { min-height: 200px; }
    .card h3 { font-size: 1.5rem; }
    .cronica { font-size: 1.05rem; }
    .cronica-header h1 { font-size: 2rem; }
  }
  </style>
</head>
<body>
  <header class="site-header">
    <a href="{{ '/' | relative_url }}" class="site-header-title">Rucker.life</a>
  </header>

  <main class="page-content">
    {{ content }}
  </main>
</body>
</html>
```

## assets/css/cronica.css
```css
/* Configuração base da crônica */
.cronica {
  max-width: 700px;
  margin: 0 auto;
  padding: 2.5rem 1.4rem 3.5rem;
  background-color: #121212;
  font-family: Georgia, 'Times New Roman', serif;
  color: #e8e4da;
  line-height: 1.75; /* Reduzido levemente para agrupar melhor as frases */
  font-size: 1.15rem; /* Tamanho base ideal para desktop */
}

/* Cabeçalho */
.cronica-header h1 {
  font-family: Georgia, serif;
  font-size: 2.4rem;
  color: #f2efe6;
  margin-bottom: 0.3rem;
  line-height: 1.2;
  text-align: center;
}

.cronica-subtitle {
  font-style: italic;
  color: #b8b2a3;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 2.4rem;
  text-align: center;
}

/* Corpo do texto */
.cronica-body h3 {
  text-align: center;
  color: #d4af6a;
  font-size: 1.4rem;
  margin: 3.2rem 0 2rem;
  letter-spacing: 0.1em;
}

.cronica-body p {
  margin-bottom: 1.5rem;
  text-align: left; /* Substituído o 'justify' para eliminar buracos entre as palavras */
  hyphens: auto;
}

.cronica-body em {
  color: #c9c3b4;
}

.cronica-body strong {
  color: #f2efe6;
}

/* Citações com melhoria visual */
.cronica-body blockquote {
  border-left: 3px solid #d4af6a; /* Adicionada uma barra lateral sutil para destacar a citação */
  text-align: left;
  font-style: italic;
  font-size: 1.05rem;
  margin: 2.5rem 0;
  padding: 1.2rem 1.6rem;
  background: #1a1a1a;
  border-radius: 6px;
  line-height: 1.7;
  color: #d8d3c5;
}

.cronica-body hr {
  border: none;
  border-top: 1px solid #333;
  margin: 3rem 0;
}

.cronica-body a {
  color: #d4af6a;
  text-decoration: underline;
  text-decoration-color: rgba(212, 175, 106, 0.4); /* Sublinhado sutil para não poluir o visual */
  text-underline-offset: 3px;
}

/* Rodapé das crônicas */
.cronica-footnote {
  font-size: 0.95rem; /* Ajustado para acompanhar a redução da fonte principal */
  color: #8a8578;
  border-top: 1px solid #2a2a2a;
  padding-top: 1.4rem;
  margin-top: 3rem;
  line-height: 1.6;
}

/* Otimização rigorosa para celulares */
@media (max-width: 480px) {
  .cronica {
    font-size: 1.05rem; /* Fonte matemática e tecnicamente ideal para smartphones */
    padding: 1.5rem 1.2rem 3rem; /* Menos margem lateral para aproveitar 100% da tela */
  }
  .cronica-header h1 {
    font-size: 2rem;
  }
}
```

## assets/css/site.css
```css
CNAME
_config.yml
index.html
familia.md
_layouts/default.html
_layouts/cronica.html
assets/1785149425259.png
assets/css/site.css
assets/css/cronica.css
familia/georg-rucker.md
familia/georg-uma-cronica.md
familia/vincentius-joseph-rucker.md
```

## familia.html
```html
---
layout: default
title: "Família Rücker"
---

<style>
  .colab-footer {
    border-top: 1px solid #2a2a2a;
    margin-top: 2.5rem;
    padding: 1.1rem 1.4rem;
    text-align: center;
  }
  .colab-footer .colab-galho {
    display: block;
    margin: 0 auto 0.6rem;
    opacity: 0.8;
  }
  .colab-footer p {
    max-width: 460px;
    margin: 0 auto 0.6rem;
    font-size: 0.85rem;
    line-height: 1.5;
    color: #8a8578;
  }
  .colab-footer a {
    display: inline-block;
    font-size: 0.85rem;
    color: #d4af6a;
    border: 1px solid rgba(212, 175, 106, 0.4);
    border-radius: 6px;
    padding: 0.35rem 0.9rem;
    text-decoration: none;
  }
  .colab-footer a:hover {
    border-color: #d4af6a;
    background: rgba(212, 175, 106, 0.08);
  }
</style>

<!-- Texto introdutório centralizado -->
<p style="font-size: 1.15rem; color: #b8b2a3; text-align: center; max-width: 600px; margin: 0 auto 2.5rem;">
  Registros documentais, trajetórias e crônicas da imigração da família Rücker, desde a região da Silésia no século XVIII até o sul do Brasil.
</p>

<!-- ============================================================
     FERRAMENTAS FIXAS — Árvore Genealógica e Mapa das Migrações.
     ============================================================ -->
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; max-width: 880px; margin: 0 auto;">

  <!-- Cartão: Árvore Genealógica -->
  <a href="{{ '/familia/arvore.html' | relative_url }}" class="card" style="padding: 1.3rem 1.4rem; text-align: left; justify-content: flex-start; border: 2px solid rgba(212, 175, 106, 0.55); background-color: rgba(212, 175, 106, 0.06); min-height: auto;">
    <span style="font-size: 0.7rem; color: #d4af6a; text-transform: uppercase; letter-spacing: 0.09em; margin-bottom: 0.35rem; display: block; font-weight: bold;">Interativo</span>
    <h3 style="margin-bottom: 0.4rem; font-size: 1.25rem; border: none;">Árvore Genealógica</h3>
    <p style="font-size: 0.9rem; line-height: 1.45;">Seis gerações navegáveis, de Georg (1789) à pesquisa de hoje — com fonte e grau de certeza em cada informação.</p>
  </a>

  <!-- Cartão: Mapa das Migrações -->
  <a href="{{ '/familia/mapa.html' | relative_url }}" class="card" style="padding: 1.3rem 1.4rem; text-align: left; justify-content: flex-start; border: 2px solid rgba(212, 175, 106, 0.55); background-color: rgba(212, 175, 106, 0.06); min-height: auto;">
    <span style="font-size: 0.7rem; color: #d4af6a; text-transform: uppercase; letter-spacing: 0.09em; margin-bottom: 0.35rem; display: block; font-weight: bold;">Interativo</span>
    <h3 style="margin-bottom: 0.4rem; font-size: 1.25rem; border: none;">Mapa das Migrações</h3>
    <p style="font-size: 0.9rem; line-height: 1.45;">Cinco etapas narradas, de um vale da Silésia em 1816 aos dois destinos no sul do Brasil — com meio de transporte e distância de cada trecho.</p>
  </a>

  <!-- Cartão: Documentos (Acervo Visual) -->
  <a href="{{ '/familia/documentos.html' | relative_url }}" class="card" style="padding: 1.3rem 1.4rem; text-align: left; justify-content: flex-start; border: 2px solid rgba(212, 175, 106, 0.55); background-color: rgba(212, 175, 106, 0.06); min-height: auto;">
    <span style="font-size: 0.7rem; color: #d4af6a; text-transform: uppercase; letter-spacing: 0.09em; margin-bottom: 0.35rem; display: block; font-weight: bold;">Interativo</span>
    <h3 style="margin-bottom: 0.4rem; font-size: 1.25rem; border: none;">Documentos</h3>
    <p style="font-size: 0.9rem; line-height: 1.45;">Acervo visual: retratos de família, sepulturas e documentos escritos, com grau de certeza de cada leitura.</p>
  </a>

</div>

<!-- Separador com rótulo -->
<div style="display: flex; align-items: center; gap: 1rem; max-width: 900px; margin: 2.6rem auto 1.8rem;">
  <div style="flex: 1; height: 1px; background: #2a2a2a;"></div>
  <span style="font-size: 0.78rem; color: #8a8578; text-transform: uppercase; letter-spacing: 0.14em; white-space: nowrap;">Artigos</span>
  <div style="flex: 1; height: 1px; background: #2a2a2a;"></div>
</div>

<!-- ============================================================
     ARTIGOS — crônicas e perfis históricos.
     ============================================================ -->
<div class="home-grid">

  <!-- Cartão: Georg (Perfil Histórico) -->
  <a href="{{ '/familia/georg-rucker.html' | relative_url }}" class="card" style="padding: 1.5rem; text-align: left; justify-content: flex-start;">
    <span style="font-size: 0.75rem; color: #8a8578; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; display: block; font-weight: bold;">Perfil Histórico</span>
    <h3 style="margin-bottom: 0.5rem; font-size: 1.5rem; border: none;">Georg Rücker</h3>
    <p style="font-size: 0.95rem;">Da servidão hereditária à ação individual no nascente capitalismo silesiano.</p>
  </a>

  <!-- Cartão: Georg (Crônica) -->
  <a href="{{ '/familia/georg-uma-cronica.html' | relative_url }}" class="card" style="padding: 1.5rem; text-align: left; justify-content: flex-start; border-color: rgba(212, 175, 106, 0.3);">
    <span style="font-size: 0.75rem; color: #d4af6a; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; display: block; font-weight: bold;">Crônica Literária</span>
    <h3 style="margin-bottom: 0.5rem; font-size: 1.5rem; border: none;">Georg - Uma Crônica</h3>
    <p style="font-size: 0.95rem;">Um olhar narrativo sobre a vida nas encostas da Montanha Negra.</p>
  </a>

  <!-- Cartão: Vincentius -->
  <a href="{{ '/familia/vincentius-joseph-rucker.html' | relative_url }}" class="card" style="padding: 1.5rem; text-align: left; justify-content: flex-start;">
    <span style="font-size: 0.75rem; color: #8a8578; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; display: block; font-weight: bold;">Perfil Histórico</span>
    <h3 style="margin-bottom: 0.5rem; font-size: 1.5rem; border: none;">Vincentius Joseph Rücker</h3>
    <p style="font-size: 0.95rem;">A ascensão na Prússia e a fuga rumo à liberdade no Atlântico (1827–1908).</p>
  </a>

  <!-- Cartão: Vincentius (Crônica) -->
  <a href="{{ '/familia/vincenz-uma-cronica.html' | relative_url }}" class="card" style="padding: 1.5rem; text-align: left; justify-content: flex-start; border-color: rgba(212, 175, 106, 0.3);">
    <span style="font-size: 0.75rem; color: #d4af6a; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; display: block; font-weight: bold;">Crônica Literária</span>
    <h3 style="margin-bottom: 0.5rem; font-size: 1.5rem; border: none;">Vincentius - Uma Crônica</h3>
    <p style="font-size: 0.95rem;">A renúncia de um Forstmeister e a fuga que cruzou um oceano.</p>
  </a>

</div>

<hr style="margin-top: 3rem; border-color: #2a2a2a;">

<p style="font-size: 1.05rem; text-align: center;"><a href="{{ '/' | relative_url }}">← Voltar para a página inicial</a></p>

<footer class="colab-footer">
  <svg class="colab-galho" width="100" height="22" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 18C30 22 45 14 65 15C85 16 95 8 124 12" stroke="#d4af6a" stroke-width="1" stroke-linecap="round"/>
    <path d="M28 20C24 24 20 26 15 26" stroke="#d4af6a" stroke-width="0.8" stroke-linecap="round"/>
    <path d="M46 16C44 11 42 8 44 4" stroke="#d4af6a" stroke-width="0.8" stroke-linecap="round"/>
    <path d="M78 13C81 9 86 7 92 8" stroke="#d4af6a" stroke-width="0.8" stroke-linecap="round"/>
    <path d="M100 10C102 15 106 18 112 18" stroke="#d4af6a" stroke-width="0.8" stroke-linecap="round"/>
    <circle cx="15" cy="26" r="1.4" fill="#d4af6a"/>
    <circle cx="44" cy="4" r="1.4" fill="#d4af6a"/>
    <circle cx="92" cy="8" r="1.4" fill="#d4af6a"/>
    <circle cx="112" cy="18" r="1.4" fill="#d4af6a"/>
  </svg>
  <p>Reconheceu um nome ou tem uma foto, documento ou correção para o acervo?</p>
  <a href="https://forms.gle/MAY913vupvStXXgP7" target="_blank" rel="noopener noreferrer">Colaborar →</a>
</footer>
```

## familia/arvore.html
```html
---
layout: default
title: "Árvore Genealógica (v6.0)"
---

<p class="arv-intro">
  Base de Dados Consolidada v6.0 (02/08/2026). Navegue pelas gerações da família Rücker, desde Georg (1789) até os ramos de Santa Catarina e Paraná, e uma linha de pesquisa em aberto. Cruzamento com o livro comemorativo do centenário de Maratá e depoimentos orais da família. Informações classificadas por grau de evidência documental.
</p>

<style>
.rkr{
  --ouro:#d4af6a;
  --sage:#8a9e86;
  --terra:#c0714f;
  --mudo:#8a8578;
  --soft:#b8b2a3;
  --claro:#f2efe6;
  --borda:#2a2a2a;
  --superficie:#1a1a1a;
  --mono:ui-monospace,"SFMono-Regular","Roboto Mono",Menlo,Consolas,monospace;
  color:#e8e4da;
}
.rkr *{box-sizing:border-box;}
.rkr p,.rkr h2,.rkr h3,.rkr h4,.rkr ol,.rkr li{margin:0;padding:0;list-style:none;}

.arv-intro{
  color:#b8b2a3;max-width:620px;margin:0 auto 2.4rem;text-align:center;font-size:1.1rem;
}

.rkr-controles{display:flex;flex-wrap:wrap;gap:0.6rem;justify-content:center;margin-bottom:1.2rem;}
.rkr-btn{font-family:var(--mono);font-size:0.72rem;letter-spacing:.08em;text-transform:uppercase;
  background:transparent;color:var(--soft);border:1px solid rgba(212,175,106,.4);border-radius:6px;
  padding:0.5rem 1rem;cursor:pointer;transition:border-color .2s,color .2s,background .2s;}
.rkr-btn:hover{border-color:var(--ouro);color:var(--ouro);background:rgba(212,175,106,.08);}
.rkr-btn[aria-pressed="true"]{background:var(--ouro);border-color:var(--ouro);color:#121212;}
.rkr-btn:focus-visible{outline:2px solid var(--ouro);outline-offset:2px;}

.rkr-legenda{display:flex;flex-wrap:wrap;gap:0.6rem 1.2rem;justify-content:center;
  font-family:var(--mono);font-size:0.68rem;color:var(--mudo);margin:0 auto 2.6rem;max-width:720px;}
.rkr-legenda span{display:flex;align-items:center;gap:0.45rem;}
.rkr-ponto{width:9px;height:9px;border-radius:50%;display:inline-block;flex:0 0 9px;}
.rkr-ponto.doc{background:var(--ouro);}
.rkr-ponto.ext{background:var(--sage);}
.rkr-ponto.epi{background-image:linear-gradient(90deg,var(--ouro) 50%,#555 50%);border:1px solid var(--ouro);}
.rkr-ponto.inf{background-image:linear-gradient(90deg,var(--ouro) 50%,transparent 50%);border:1px solid var(--ouro);}
.rkr-ponto.hip{background:transparent;border:1px dashed var(--mudo);}
.rkr-ponto.conf{background:var(--terra);}
.rkr-ponto.abt{background:transparent;border:1px dashed var(--sage);}

.rkr-arvore{display:flex;flex-direction:column;align-items:center;}
.rkr-ger{display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;width:100%;}
.rkr-elo{width:1px;height:28px;background:var(--borda);}
.rkr-gerlabel{font-family:var(--mono);font-size:0.66rem;letter-spacing:.18em;text-transform:uppercase;
  color:var(--mudo);margin:1.5rem 0 0.9rem;width:100%;text-align:center;}

.rkr-cartao{background:var(--superficie);border:1px solid var(--borda);border-radius:10px;
  width:min(270px,100%);padding:1.1rem;text-align:left;cursor:pointer;display:flex;gap:0.85rem;
  align-items:flex-start;font-family:inherit;color:#e8e4da;
  transition:border-color .2s ease,transform .2s ease,background .2s ease;}
.rkr-cartao:hover,.rkr-cartao:focus-visible{border-color:var(--ouro);transform:translateY(-2px);}
.rkr-cartao:focus-visible{outline:2px solid var(--ouro);outline-offset:3px;}
.rkr-cartao[data-linha="direta"]{border-color:rgba(212,175,106,.5);background:rgba(212,175,106,.05);}
.rkr-cartao[data-linha="aberta"]{border-style:dashed;border-color:rgba(138,158,134,.6);}
.rkr-cartao[aria-current="true"]{border-color:var(--ouro);background:rgba(212,175,106,.1);}

.rkr-chapa{width:42px;height:50px;flex:0 0 42px;background:#e8e0ce;border-radius:3px;
  display:flex;align-items:center;justify-content:center;font-family:Georgia,serif;font-weight:bold;
  font-size:1rem;color:#121212;filter:invert(1) hue-rotate(180deg);transition:filter .5s ease;}
.rkr-cartao:hover .rkr-chapa,.rkr-cartao:focus-visible .rkr-chapa,.rkr-cartao[aria-current="true"] .rkr-chapa{filter:none;}

.rkr-nome{font-family:Georgia,serif;font-size:1.15rem;color:var(--claro);line-height:1.25;display:block;}
.rkr-vida{font-family:var(--mono);font-size:0.66rem;color:var(--mudo);margin-top:0.4rem;display:block;line-height:1.45;}
.rkr-papel{font-size:0.9rem;color:var(--soft);margin-top:0.5rem;line-height:1.5;display:block;}

/* ---- painel de detalhe, agora INLINE dentro da grade da geração ---- */
.rkr-detalhe{
  flex:1 1 100%;
  max-width:100%;
  margin-top:0.2rem;
  border:1px solid var(--ouro);
  border-radius:10px;
  background:var(--superficie);
  padding:1.4rem 1.3rem;
  animation:rkrAbrir .18s ease-out;
}
@keyframes rkrAbrir{ from{opacity:0; transform:translateY(-6px);} to{opacity:1; transform:translateY(0);} }
.rkr-detalhe-topo{display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;flex-wrap:wrap;}
.rkr-detalhe h2{font-family:Georgia,serif;font-size:1.5rem;color:var(--claro);line-height:1.2;text-align:left;margin:0;}
.rkr-detalhe-sub{font-family:var(--mono);font-size:0.66rem;color:var(--ouro);letter-spacing:.1em;text-transform:uppercase;margin-top:0.35rem;}
.rkr-fechar{background:none;border:1px solid var(--borda);border-radius:6px;color:var(--soft);
  font-family:var(--mono);font-size:0.66rem;padding:0.4rem 0.8rem;cursor:pointer;flex:0 0 auto;}
.rkr-fechar:hover{border-color:var(--ouro);color:var(--ouro);}

.rkr-bloco{margin-top:1.4rem;}
.rkr-bloco h3{font-family:var(--mono);font-size:0.64rem;letter-spacing:.16em;text-transform:uppercase;
  color:var(--mudo);padding-bottom:0.5rem;border-bottom:1px solid var(--borda);margin:0 0 0.7rem;}
.rkr-fato{display:grid;grid-template-columns:12px 1fr;gap:0.8rem;padding:0.55rem 0;align-items:start;}
.rkr-fato+.rkr-fato{border-top:1px dotted rgba(138,133,120,.28);}
.rkr-fato .rkr-ponto{margin-top:8px;}
.rkr-rot{font-family:var(--mono);font-size:0.62rem;letter-spacing:.08em;text-transform:uppercase;color:var(--mudo);display:block;margin-bottom:0.2rem;}
.rkr-val{font-size:0.96rem;color:#e8e4da;display:block;line-height:1.55;}
.rkr-src{font-family:var(--mono);font-size:0.64rem;color:var(--mudo);margin-top:0.35rem;display:block;line-height:1.55;}
.rkr.filtrado .rkr-fato[data-status="inf"],.rkr.filtrado .rkr-fato[data-status="hip"]{opacity:.2;}

.rkr-secao{margin-top:3.4rem; width: 100%;}
.rkr-secao h2{font-family:Georgia,serif;font-size:1.6rem;color:var(--claro);margin:0 0 0.4rem;text-align:center;}
.rkr-secao-nota{font-size:0.95rem;color:var(--mudo);max-width:600px;margin:0 auto 1.8rem;text-align:center;}

.rkr-desamb{border-top:1px solid var(--terra);}
.rkr-item{border-bottom:1px solid var(--borda);padding:1.4rem 0;display:grid;grid-template-columns:86px 1fr;gap:1.1rem;}
.rkr-tag{font-family:var(--mono);font-size:0.62rem;letter-spacing:.08em;color:var(--terra);
  border:1px solid var(--terra);border-radius:4px;padding:4px 6px;height:fit-content;text-align:center;}
.rkr-item h4{font-family:Georgia,serif;font-size:1.2rem;color:var(--claro);line-height:1.3;margin:0;}
.rkr-versus{display:grid;gap:0.6rem;margin:0.9rem 0;}
.rkr-lado{border-left:2px solid var(--borda);padding-left:0.85rem;font-size:0.95rem;color:var(--soft);}
.rkr-lado b{font-family:var(--mono);font-size:0.62rem;letter-spacing:.1em;text-transform:uppercase;
  color:var(--mudo);display:block;font-weight:normal;margin-bottom:0.2rem;}
.rkr-regra{font-size:0.95rem;color:#e8e4da;border-left:2px solid var(--ouro);padding-left:0.85rem;margin-bottom:0.7rem;}
.rkr-regra b{font-family:var(--mono);font-size:0.62rem;letter-spacing:.1em;text-transform:uppercase;
  color:var(--ouro);display:block;font-weight:normal;margin-bottom:0.2rem;}
.rkr-arbitro{font-family:var(--mono);font-size:0.7rem;color:var(--mudo);border-left:2px solid var(--sage);padding-left:0.85rem;line-height:1.7;}

@media (max-width:480px){
  .rkr-cartao{width:100%;}
  .rkr-item{grid-template-columns:1fr;gap:0.6rem;}
  .rkr-tag{width:fit-content;}
  .rkr-detalhe{padding:1.1rem 1rem;}
  .rkr-detalhe h2{font-size:1.3rem;}
}
@media (prefers-reduced-motion:reduce){.rkr *{transition:none!important;animation:none!important;}}
</style>

<div class="rkr" id="rkrRaiz">

  <div class="rkr-controles">
    <button class="rkr-btn" id="rkrFiltro" aria-pressed="false" type="button">Ocultar Hipóteses / Inferências</button>
  </div>

  <div class="rkr-legenda">
    <span><i class="rkr-ponto doc"></i> Documentado</span>
    <span><i class="rkr-ponto epi"></i> Epigráfico / Lápide</span>
    <span><i class="rkr-ponto inf"></i> Inferido / Derivado</span>
    <span><i class="rkr-ponto hip"></i> Hipótese / Oral</span>
    <span><i class="rkr-ponto conf"></i> Conflito Desambiguado</span>
    <span><i class="rkr-ponto abt"></i> Pesquisa Aberta</span>
  </div>

  <div class="rkr-arvore" id="rkrArvore"></div>

  <section class="rkr-secao">
    <h2>Notas de Desambiguação & Arbitragem</h2>
    <p class="rkr-secao-nota">Regras aplicadas para sanar divergências e homofonias nos registros (v6.0).</p>
    <div class="rkr-desamb" id="rkrDesamb"></div>
  </section>

</div>

<script>
(function(){
  var DADOS = {
    desambiguacoes: {
      desamb01: {
        tag: "DESAMB 01",
        titulo: "Anton, Ambros August e August Ambros: Três indivíduos distintos",
        lados: [
          ["Erro Frequente", "Considerar Anton como variação de Augusto."],
          ["Fato Consolidado", "São três irmãos. Anton (46), Ambros August (28) e August Ambros (28 declarados) embarcaram em 1898."]
        ],
        regra: "A REGRA R1 ESTABELECE QUE NÃO SE DEVE FUNDIR OS IRMÃOS. Nomes do meio devem ser respeitados.",
        arbitro: "Lista de Hamburgo (1898) / Base v6.0"
      },
      desamb05: {
        tag: "DESAMB 05",
        titulo: "A prole de August Ambros e a posição de Walter",
        lados: [
          ["Ramo Direto", "August Ambros tem 15 filhos contados fotograficamente em 1925."],
          ["Walter", "Foi alocado equivocadamente na linha direta em árvores antigas."]
        ],
        regra: "Walter pertence ao ramo de SC (filho de Ambros August). Quatorze filhos nomeados + Adolf fecham os quinze de August Ambros, confirmando a tradição oral.",
        arbitro: "Validação fotográfica de 1925 / Base v6.0"
      },
      desamb11: {
        tag: "DESAMB 11",
        titulo: "Homonímia de prenomes entre as descendências dos dois irmãos",
        lados: [
          ["Risco", "Um mesmo prenome aparece nas duas linhagens (August Ambros e Ambros August), levando a atribuições cruzadas incorretas em registros antigos."],
          ["Regra Geral", "Qualquer prenome presente na descendência de um irmão deve ser tratado como possível também na descendência do outro, até prova em contrário."]
        ],
        regra: "NUNCA ATRIBUIR UM DESCENDENTE A UM RAMO APENAS PELO PRENOME. Exigir data, cônjuge ou fonte fotográfica/epigráfica que amarre a pessoa ao ramo correto.",
        arbitro: "Regra geral de método arquivístico / Base v6.0"
      },
      desamb12: {
        tag: "DESAMB 12",
        titulo: "Quase-homofonia no Ramo SC (Geração V/VI)",
        lados: [
          ["Cunhadas", "Ivone Rücker (casada com Leonardo) vs Irene Rücker (casada com Sérgio Adriano)."],
          ["Primos", "Edelmar Rücker (filho de Leonardo) vs Idelmar Rücker (filho de Sérgio Adriano)."]
        ],
        regra: "Não atribuir registros unicamente pela grafia. Discriminação por paternidade ou matrimônio é mandatória.",
        arbitro: "Regra L13 de método arquivístico / Base v6.0"
      }
    },
    pessoas: [
      {
        id: "georg", ger: "Geração I", linha: "direta", iniciais: "GR",
        nome: "Georg Rücker", vida: "n. 1789, Johannesberg",
        papel: "O Patriarca na Silésia Prussiana",
        sub: "Casamentos com Maria Volkmer e Johanna Hannig",
        blocos: [
          {
            t: "Registros Básicos",
            f: [
              { r: "Nascimento", v: "1789, Johannesberg (hoje Janowa Góra, Polônia)", s: "doc", src: "Arquivo-base" }
            ]
          }
        ]
      },
      {
        id: "vincentius", ger: "Geração II", linha: "direta", iniciais: "VJ",
        nome: "Vincentius Joseph Rücker", vida: "09/10/1827 - 21/07/1908",
        papel: "Forstmeister. Liderou a emigração para o Brasil aos 70 anos.",
        sub: "Cônjuge: Beata Larisch (falecida na Europa)",
        blocos: [
          {
            t: "Registros",
            f: [
              { r: "Óbito", v: "21/07/1908, São Pedro do Maratá", s: "epi", src: "Lápide Física" }
            ]
          }
        ]
      },
      {
        id: "g3_an", ger: "Geração III", linha: "colateral", iniciais: "AN",
        nome: "Anton Rücker", vida: "n. c. 1852",
        papel: "Filho mais velho de Vincentius. Embarcou solteiro em 1898.",
        sub: "[G3-AN]",
        blocos: [
          { t: "Registros", f: [ { r: "Paradeiro", v: "Desconhecido pós-1898", s: "inf", src: "Acervo v6.0" } ] }
        ]
      },
      {
        id: "g3_am", ger: "Geração III", linha: "colateral", iniciais: "AM",
        nome: "Ambros August Rücker", vida: "07/01/1870 - 01/10/1955",
        papel: "Ramo SC/PR.",
        sub: "Cônjuge: Amalia Rathmann",
        blocos: [
          { t: "Registros", f: [
            { r: "Datas", v: "07/01/1870 - 01/10/1955", s: "epi", src: "Lápides e Registros" },
            { r: "Ofício", v: "Fotografia era competência compartilhada entre os dois irmãos — August Ambros e Ambros August", s: "doc", src: "Cruzamento fotográfico / Livro do Centenário" }
          ] }
        ]
      },
      {
        id: "g3_aa", ger: "Geração III", linha: "direta", iniciais: "AA",
        nome: "August Ambros Rücker", vida: "11/03/1865 - 15/05/1947",
        papel: "Linha Direta. Embarcou solteiro, casou no Brasil.",
        sub: "Cônjuge: Philippine Saft",
        blocos: [
          { t: "Registros", f: [
            { r: "Prole", v: "15 Filhos confirmados (DESAMB 05)", s: "doc", src: "Foto de 1925 / Base v6.0" },
            { r: "Ofício", v: "Fotografia era competência compartilhada entre os dois irmãos — August Ambros e Ambros August", s: "doc", src: "Cruzamento fotográfico / Livro do Centenário" }
          ] }
        ]
      },
      {
        id: "g4_direct", ger: "Geração IV · Filhos de August Ambros", linha: "direta", iniciais: "15",
        nome: "Os 15 Filhos de August Ambros", vida: "Nascidos entre 1900 e 1925",
        papel: "Geração IV - A Disseminação Cultural",
        sub: "Ramo Direto (RS)",
        blocos: [
          {
            t: "Irmãos Nomeados (1 a 8)",
            f: [
              { r: "G4-01", v: "Paulo Vicente Rücker", s: "doc", src: "Base v6.0" },
              { r: "G4-02", v: "Maria Emma Rücker", s: "doc", src: "Base v6.0" },
              { r: "G4-03", v: "Gottfried Anton Rücker (12/01/1904 - 18/02/1949)", s: "epi", src: "Base v6.0" },
              { r: "G4-04", v: "Bertholdo Rücker", s: "doc", src: "Base v6.0" },
              { r: "G4-05", v: "Aloísio Rücker", s: "doc", src: "Base v6.0" },
              { r: "G4-06", v: "Ewaldo Rücker", s: "doc", src: "Base v6.0" },
              { r: "G4-07", v: "Hedwig Rücker", s: "doc", src: "Base v6.0" },
              { r: "G4-08", v: "Luisa Victória Rücker", s: "doc", src: "Base v6.0" }
            ]
          },
          {
            t: "Irmãos Nomeados (9 a 16)",
            f: [
              { r: "G4-09", v: "Rudolfo Rücker", s: "doc", src: "Base v6.0" },
              { r: "G4-10", v: "[Entrada Revogada - Walter pertence a SC]", s: "conf", src: "DESAMB 05" },
              { r: "G4-11", v: "Adolf Rücker (09/11/1912 - 11/01/1914)", s: "epi", src: "Base v6.0" },
              { r: "G4-12", v: "José Rücker (03/04/1914 - 21/01/2006)", s: "epi", src: "Base v6.0" },
              { r: "G4-13", v: "Adalberto Rücker (n. 1915)", s: "doc", src: "Base v6.0" },
              { r: "G4-14", v: "Augusto Guilherme Rücker (23/08/1916 - 25/05/1997)", s: "epi", src: "Base v6.0" },
              { r: "G4-15", v: "Siegmundo Rücker (23/05/1918 - 01/03/1986). Fotógrafo comercial — Foto Rücker, Estrela. Cônjuge: Cecy Dexheimer", s: "epi", src: "Base v6.0 / DESAMB local" },
              { r: "G4-16", v: "Albano Rücker. Cônjuge: Bárbara Herta Rücker (1925-1994)", s: "doc", src: "Base v6.0 / Lápide pareada" }
            ]
          }
        ]
      },
      {
        id: "g4_colateral", ger: "Geração IV · Filhos de Ambros August", linha: "colateral", iniciais: "SC",
        nome: "O Ramo Colateral", vida: "Descendentes de Ambros e Amalia",
        papel: "Estabelecidos no eixo PR/SC",
        sub: "Irmãos de Herberto",
        blocos: [
          {
            t: "Filhos Identificados",
            f: [
              { r: "G4-WR", v: "Walter (Valter) Rücker", s: "doc", src: "Base v6.0" },
              { r: "G4-HR", v: "Herberto Rücker ('Opa' Herbert) (18/01/1906 - 06/08/1999). Cônjuge: Olydia Regina Orth (1913-1979)", s: "epi", src: "Confirmado com luz rasante (Base v6.0)" },
              { r: "G4-SG", v: "Siegmund Rücker", s: "doc", src: "Base v6.0" },
              { r: "G4-MX", v: "Max (Maximiliano) Rücker", s: "doc", src: "Base v6.0" },
              { r: "G4-AL", v: "Albano Rücker (SC)", s: "doc", src: "Base v6.0" }
            ]
          }
        ]
      },
      {
        id: "g5_herberto", ger: "Geração V · Prole de Herberto e Olydia", linha: "colateral", iniciais: "HO",
        nome: "Filhos de Herberto e Olydia", vida: "14 Filhos (8 nomeados)",
        papel: "Expansão do ramo SC",
        sub: "Geração V",
        blocos: [
          {
            t: "Filhos Conhecidos",
            f: [
              { r: "G5", v: "Leonardo Rucker (16/03/1945 - 27/11/2023). Cônjuge: Ivone Rücker", s: "epi", src: "Base v6.0" },
              { r: "G5", v: "Sérgio Adriano Rucker (08/09/1946 - 28/03/2015). Cônjuge: Irene", s: "epi", src: "Base v6.0" },
              { r: "G5", v: "Bruno Rücker", s: "doc", src: "Base v6.0" },
              { r: "G5", v: "Francisco Rücker", s: "doc", src: "Livro do Centenário / Base v6.0" },
              { r: "G5", v: "José Rücker ('Seu José')", s: "doc", src: "Base v6.0" },
              { r: "G5", v: "Inês Rücker (c. Bertoldo Lerner)", s: "doc", src: "Base v6.0" },
              { r: "G5", v: "Jacinta Rücker", s: "doc", src: "Base v6.0" },
              { r: "G5", v: "Maria Rücker", s: "doc", src: "Base v6.0" }
            ]
          }
        ]
      },
      {
        id: "g6_desc", ger: "Gerações VI e VII", linha: "colateral", iniciais: "D",
        nome: "Descendência Contemporânea", vida: "Ramo de Leonardo e Sérgio",
        papel: "Gerações Recentes",
        sub: "Gerações VI/VII",
        blocos: [
          {
            t: "Linha de Leonardo",
            f: [
              { r: "G6", v: "Edelmar Rücker (n. 13/06/1985). Cônjuge: Suelen Kerber Rücker", s: "doc", src: "Base v6.0" },
              { r: "G7", v: "Wesley (Filho de Edelmar)", s: "doc", src: "Base v6.0" }
            ]
          },
          {
            t: "Linha de Sérgio Adriano",
            f: [
              { r: "G6", v: "Izanir Rücker", s: "doc", src: "Base v6.0" },
              { r: "G6", v: "Idelmar Rücker", s: "doc", src: "Base v6.0" }
            ]
          }
        ]
      },
      {
        id: "ricardo_tp", ger: "Pesquisa Aberta · Convergência Não Confirmada", linha: "aberta", iniciais: "RT",
        nome: "Ricardo Rücker (Três Passos)", vida: "1904 - 1995",
        papel: "Imigrante silesiano, fundador do Hospital São José em Três Passos, RS. Parentesco com a linhagem principal NÃO comprovado.",
        sub: "Convergência sob investigação",
        blocos: [
          {
            t: "Elementos de Convergência",
            f: [
              { r: "Hospedagem", v: "Em 1924, hospedou-se na casa de 'August Rücker' em Maratá", s: "hip", src: "Pesquisa web / não verificado em fonte primária" },
              { r: "Origem", v: "Ambas as famílias originárias da mesma microrregião do vale de Kłodzko, Silésia", s: "hip", src: "Pesquisa web / não verificado em fonte primária" },
              { r: "Pendências", v: "Requer verificação paroquial e notarial. Leads: Jardim Temático Genealógico Rückert-Thal (Três Passos) e Jornal Atos e Fatos", s: "hip", src: "Base v6.0 — linha de pesquisa aberta" }
            ]
          }
        ]
      }
    ]
  };

  var raiz = document.getElementById('rkrArvore');
  var desamb = document.getElementById('rkrDesamb');
  var btnFiltro = document.getElementById('rkrFiltro');
  var raizGlobal = document.getElementById('rkrRaiz');
  var abertoId = null;

  function renderizarArvore() {
    var html = '';
    var gerAtual = '';

    DADOS.pessoas.forEach(function(p) {
      if (p.ger && p.ger !== gerAtual) {
        if (gerAtual !== '') html += '</div><div class="rkr-elo"></div>';
        html += '<div class="rkr-gerlabel">' + p.ger + '</div><div class="rkr-ger" id="ger-' + gerId(p.ger) + '">';
        gerAtual = p.ger;
      }

      var attrLinha = p.linha === 'direta' ? ' data-linha="direta"' : (p.linha === 'aberta' ? ' data-linha="aberta"' : '');
      html += '<button class="rkr-cartao" data-id="' + p.id + '"' + attrLinha + ' aria-current="false">' +
                '<div class="rkr-chapa">' + p.iniciais + '</div>' +
                '<div>' +
                  '<span class="rkr-nome">' + p.nome + '</span>' +
                  '<span class="rkr-vida">' + p.vida + '</span>' +
                  '<span class="rkr-papel">' + p.papel + '</span>' +
                '</div>' +
              '</button>';
    });
    if (gerAtual !== '') html += '</div>';
    raiz.innerHTML = html;
  }

  function gerId(nome) {
    return nome.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase();
  }

  function montarDetalheHTML(pessoa) {
    var fHtml = '<div class="rkr-detalhe-topo">' +
                  '<div><h2>' + pessoa.nome + '</h2><div class="rkr-detalhe-sub">' + pessoa.sub + '</div></div>' +
                  '<button class="rkr-fechar" type="button" data-fechar="1">Fechar</button>' +
                '</div>';

    if (pessoa.blocos) {
      pessoa.blocos.forEach(function(b) {
        fHtml += '<div class="rkr-bloco"><h3>' + b.t + '</h3>';
        b.f.forEach(function(f) {
          fHtml += '<div class="rkr-fato" data-status="' + f.s + '">' +
                     '<i class="rkr-ponto ' + f.s + '"></i><div><span class="rkr-rot">' + f.r + '</span><span class="rkr-val">' + f.v + '</span><span class="rkr-src">' + f.src + '</span></div>' +
                   '</div>';
        });
        fHtml += '</div>';
      });
    }
    return fHtml;
  }

  function fecharDetalheAberto() {
    var atual = raiz.querySelector('.rkr-detalhe');
    if (atual) atual.remove();
    raiz.querySelectorAll('.rkr-cartao').forEach(function(b){ b.setAttribute('aria-current','false'); });
    abertoId = null;
  }

  function abrirDetalhe(btn, pessoa) {
    fecharDetalheAberto();

    var painel = document.createElement('div');
    painel.className = 'rkr-detalhe';
    painel.setAttribute('role', 'region');
    painel.setAttribute('aria-live', 'polite');
    painel.innerHTML = montarDetalheHTML(pessoa);

    // Insere o painel logo depois do cartão clicado, dentro da mesma grade (.rkr-ger).
    // Como o painel usa flex-basis 100%, ele quebra para a linha seguinte,
    // aparecendo imediatamente abaixo da linha em que o cartão está.
    btn.insertAdjacentElement('afterend', painel);

    btn.setAttribute('aria-current', 'true');
    abertoId = pessoa.id;

    painel.querySelector('[data-fechar="1"]').addEventListener('click', function(e){
      e.stopPropagation();
      fecharDetalheAberto();
    });

    // Rolagem suave só o suficiente para garantir que o painel fique visível,
    // sem saltar para longe do cartão.
    requestAnimationFrame(function(){
      var rect = painel.getBoundingClientRect();
      var foraDaTela = rect.bottom > window.innerHeight || rect.top < 0;
      if (foraDaTela) {
        painel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  function renderizarDesambiguacao() {
    var html = '';
    for (var key in DADOS.desambiguacoes) {
      if (DADOS.desambiguacoes.hasOwnProperty(key)) {
        var d = DADOS.desambiguacoes[key];
        var ladosHtml = '';
        d.lados.forEach(function(l) { ladosHtml += '<div class="rkr-lado"><b>' + l[0] + '</b>' + l[1] + '</div>'; });

        html += '<div class="rkr-item">' +
                  '<div class="rkr-tag">' + d.tag + '</div>' +
                  '<div>' +
                    '<h4>' + d.titulo + '</h4>' +
                    '<div class="rkr-versus">' + ladosHtml + '</div>' +
                    '<div class="rkr-regra"><b>Regra Adotada</b>' + d.regra + '</div>' +
                    '<div class="rkr-arbitro">' + d.arbitro + '</div>' +
                  '</div>' +
                '</div>';
      }
    }
    desamb.innerHTML = html;
  }

  function iniciarEventos() {
    raiz.addEventListener('click', function(ev){
      var btn = ev.target.closest('.rkr-cartao');
      if (!btn) return;

      var id = btn.getAttribute('data-id');

      // Clicar de novo no mesmo cartão fecha o painel (comportamento de toggle).
      if (id === abertoId) {
        fecharDetalheAberto();
        return;
      }

      var pessoa = DADOS.pessoas.find(function(p){ return p.id === id; });
      if (!pessoa) return;

      abrirDetalhe(btn, pessoa);
    });

    btnFiltro.addEventListener('click', function() {
      var p = btnFiltro.getAttribute('aria-pressed') === 'true';
      btnFiltro.setAttribute('aria-pressed', !p);
      raizGlobal.classList.toggle('filtrado', !p);
      btnFiltro.textContent = p ? "Ocultar Hipóteses / Inferências" : "Mostrar todos os dados";
    });
  }

  renderizarArvore();
  renderizarDesambiguacao();
  iniciarEventos();
})();
</script>
```

## familia/documentos.html
```html
---
layout: default
title: "Acervo Visual"
---

<p class="rkd-intro">
  Retratos, sepulturas e documentos escritos que sustentam a Árvore Genealógica. Cada item traz o grau de certeza da leitura — toque em um card para abrir em tela cheia, com zoom e deslocamento.
</p>

<style>
.rkd{
  --ouro:#d4af6a;
  --sage:#8a9e86;
  --terra:#c0714f;
  --mudo:#8a8578;
  --soft:#b8b2a3;
  --claro:#f2efe6;
  --borda:#2a2a2a;
  --superficie:#1a1a1a;
  --mono:ui-monospace,"SFMono-Regular","Roboto Mono",Menlo,Consolas,monospace;
  color:#e8e4da;
}
.rkd *{box-sizing:border-box;}
.rkd p,.rkd h2,.rkd h3{margin:0;padding:0;}
.rkd-intro{color:#b8b2a3;max-width:620px;margin:0 auto 2rem;text-align:center;font-size:1.1rem;}

.rkd-legenda{display:flex;flex-wrap:wrap;gap:0.6rem 1.2rem;justify-content:center;
  font-family:var(--mono);font-size:0.68rem;color:var(--mudo);margin:0 auto 2.4rem;max-width:640px;}
.rkd-legenda span{display:flex;align-items:center;gap:0.45rem;}
.rkd-ponto{width:9px;height:9px;border-radius:50%;display:inline-block;flex:0 0 9px;}
.rkd-ponto[data-status="confirmado"]{background:var(--ouro);}
.rkd-ponto[data-status="resolvido"]{background:var(--sage);}
.rkd-ponto[data-status="naoverificado"]{background:var(--terra);}

.rkd-secao{margin-top:2.8rem;}
.rkd-secao:first-of-type{margin-top:0;}
.rkd-secao h2,.rkd-secao h3{font-family:Georgia,serif;font-size:1.5rem;color:var(--claro);text-align:center;margin-bottom:0.4rem;}
.rkd-secao-nota{font-size:0.9rem;color:var(--mudo);text-align:center;max-width:560px;margin:0 auto 1.4rem;line-height:1.6;}

.rkd-grade{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:1rem;}

.rkd-vazio{color:var(--mudo);font-size:0.88rem;font-style:italic;border:1px dashed var(--borda);
  border-radius:10px;padding:1.7rem 1.2rem;text-align:center;}

.rkd-card{position:relative;display:block;width:100%;padding:0;text-align:left;
  font-family:inherit;color:inherit;background:var(--superficie);border:1px solid var(--borda);
  border-radius:10px;overflow:hidden;cursor:pointer;transition:border-color .2s ease,transform .2s ease;}
.rkd-card:hover,.rkd-card:focus-visible{border-color:var(--ouro);transform:translateY(-2px);}
.rkd-card:focus-visible{outline:2px solid var(--ouro);outline-offset:2px;}

.rkd-thumb{display:block;width:100%;aspect-ratio:4/3;object-fit:cover;background:#0f0f0f;}

.rkd-badge{position:absolute;top:8px;right:8px;font-family:var(--mono);font-size:0.58rem;
  letter-spacing:.06em;text-transform:uppercase;padding:3px 7px;border-radius:4px;
  background:rgba(18,18,18,.85);border:1px solid;line-height:1.4;}
.rkd-badge[data-status="confirmado"]{color:var(--ouro);border-color:var(--ouro);}
.rkd-badge[data-status="resolvido"]{color:var(--sage);border-color:var(--sage);}
.rkd-badge[data-status="naoverificado"]{color:var(--terra);border-color:var(--terra);}

.rkd-legenda-card{display:block;padding:0.6rem 0.7rem;font-size:0.84rem;color:var(--soft);line-height:1.4;}

/* ---------- Lightbox ---------- */
.rkd-lightbox{position:fixed;inset:0;background:rgba(8,8,8,.94);z-index:1000;
  display:none;flex-direction:column;}
.rkd-lightbox[aria-hidden="false"]{display:flex;}
.rkd-lb-topo{display:flex;justify-content:space-between;align-items:center;
  padding:0.9rem 1.1rem;gap:1rem;flex:0 0 auto;}
.rkd-lb-titulo{font-family:Georgia,serif;color:var(--claro);font-size:1.05rem;line-height:1.3;}
.rkd-lb-acoes{display:flex;gap:0.5rem;flex:0 0 auto;}
.rkd-lb-btn{font-family:var(--mono);font-size:0.72rem;background:transparent;color:var(--soft);
  border:1px solid rgba(212,175,106,.4);border-radius:6px;padding:0.35rem 0.75rem;cursor:pointer;}
.rkd-lb-btn:hover{border-color:var(--ouro);color:var(--ouro);}

.rkd-lb-palco{position:relative;flex:1 1 auto;overflow:hidden;display:flex;
  align-items:center;justify-content:center;touch-action:none;cursor:grab;min-height:0;}
.rkd-lb-palco.arrastando{cursor:grabbing;}
.rkd-lb-img{max-width:90%;max-height:90%;user-select:none;-webkit-user-drag:none;will-change:transform;}

.rkd-lb-nav{position:absolute;top:50%;transform:translateY(-50%);background:rgba(18,18,18,.65);
  border:1px solid var(--borda);color:var(--soft);width:42px;height:42px;border-radius:50%;
  font-size:1.5rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;}
.rkd-lb-nav:hover{border-color:var(--ouro);color:var(--ouro);}
.rkd-lb-nav:disabled{opacity:0.2;cursor:default;}
.rkd-lb-prev{left:1rem;}
.rkd-lb-next{right:1rem;}

.rkd-lb-legenda{flex:0 0 auto;text-align:center;color:var(--mudo);font-size:0.85rem;
  padding:0.8rem 1.1rem 1.2rem;max-width:640px;margin:0 auto;}

@media (max-width:480px){
  .rkd-grade{grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:0.7rem;}
  .rkd-lb-nav{width:36px;height:36px;font-size:1.25rem;}
  .rkd-lb-titulo{font-size:0.92rem;}
}
@media (prefers-reduced-motion:reduce){.rkd *{transition:none!important;}}
</style>

<div class="rkd" id="rkdRaiz">

  <div class="rkd-legenda">
    <span><i class="rkd-ponto" data-status="confirmado"></i> Dado confirmado</span>
    <span><i class="rkd-ponto" data-status="resolvido"></i> Resolvido</span>
    <span><i class="rkd-ponto" data-status="naoverificado"></i> Leitura não verificada</span>
  </div>

  <div id="rkdGalerias"></div>

  <p style="text-align:center;margin-top:2.8rem;"><a href="{{ '/familia.html' | relative_url }}">← Voltar para Família</a></p>

</div>

<div class="rkd-lightbox" id="rkdLightbox" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Visualizador de imagem">
  <div class="rkd-lb-topo">
    <span class="rkd-lb-titulo" id="rkdLbTitulo"></span>
    <div class="rkd-lb-acoes">
      <button class="rkd-lb-btn" id="rkdLbReset" type="button" title="Redefinir zoom">100%</button>
      <button class="rkd-lb-btn" id="rkdLbFechar" type="button" aria-label="Fechar">Fechar ✕</button>
    </div>
  </div>
  <div class="rkd-lb-palco" id="rkdLbPalco">
    <img class="rkd-lb-img" id="rkdLbImg" src="" alt="" draggable="false">
    <button class="rkd-lb-nav rkd-lb-prev" id="rkdLbPrev" type="button" aria-label="Item anterior">‹</button>
    <button class="rkd-lb-nav rkd-lb-next" id="rkdLbNext" type="button" aria-label="Próximo item">›</button>
  </div>
  <p class="rkd-lb-legenda" id="rkdLbLegenda"></p>
</div>

<script>
(function(){
"use strict";

// Cada item: { id, titulo, status: "confirmado"|"resolvido"|"naoverificado",
//              thumb: caminho da miniatura, full: caminho da imagem em tela cheia (opcional, usa thumb),
//              legenda: texto exibido no lightbox }. Preencher "itens" das subseções depois que as imagens existirem.
var SECOES = [
  {
    titulo: "Fontes",
    nota: "Registros documentais e epigráficos usados como fonte primária na reconstrução genealógica — certidões, lápides, cartas, listas de embarque e demais evidências do acervo.",
    subsecoes: [
      {
        chave: "fontes-primarias",
        titulo: "Fontes Primárias",
        nota: "Certidões, listas de embarque, registros oficiais e epigrafia funerária — evidência direta (DOC, DOC-2, EPI).",
        itens: []
      },
      {
        chave: "outros-documentos",
        titulo: "Outros Documentos",
        nota: "Cartas, transcrições de entrevistas e materiais complementares de valor interpretativo (INF, TO, TO-ARQUIVISTA).",
        itens: []
      }
    ]
  },
  {
    titulo: "Álbum de Família",
    nota: "Registro fotográfico da família, nem sempre com valor probatório isolado — retratos, reuniões e eventos.",
    subsecoes: [
      { chave: "retratos-identificados", titulo: "Retratos Identificados", itens: [] },
      { chave: "retratos-nao-identificados", titulo: "Retratos Não Identificados", itens: [] },
      { chave: "fotos-grupo-eventos", titulo: "Fotos de Grupo e Eventos", itens: [] }
    ]
  }
];

var STATUS_LABEL = {
  confirmado: "Confirmado",
  resolvido: "Resolvido",
  naoverificado: "Leitura não verificada"
};

// Mapa achatado chave-da-subseção → subseção, usado pelo lightbox para localizar itens.
var SUBSECOES = {};
SECOES.forEach(function(secao) {
  secao.subsecoes.forEach(function(sub) { SUBSECOES[sub.chave] = sub; });
});

var raizGalerias = document.getElementById('rkdGalerias');

function montarCardHTML(subKey, item, idx) {
  return '<button class="rkd-card" type="button" data-sub="' + subKey + '" data-idx="' + idx + '">' +
           '<span class="rkd-badge" data-status="' + item.status + '">' + (STATUS_LABEL[item.status] || '') + '</span>' +
           '<img class="rkd-thumb" src="' + item.thumb + '" alt="' + (item.titulo || '') + '" loading="lazy">' +
           '<span class="rkd-legenda-card">' + (item.titulo || '') + '</span>' +
         '</button>';
}

function renderizarSubsecao(sub) {
  var itens = sub.itens || [];
  var html = '<div class="rkd-secao"><h3>' + sub.titulo + '</h3>';
  if (sub.nota) html += '<p class="rkd-secao-nota">' + sub.nota + '</p>';
  if (itens.length === 0) {
    html += '<p class="rkd-vazio">Nenhum item adicionado ainda — galeria em preparação.</p>';
  } else {
    html += '<div class="rkd-grade">';
    itens.forEach(function(item, idx) { html += montarCardHTML(sub.chave, item, idx); });
    html += '</div>';
  }
  html += '</div>';
  return html;
}

function renderizarSecao(secao) {
  var html = '<section class="rkd-secao"><h2>' + secao.titulo + '</h2>';
  if (secao.nota) html += '<p class="rkd-secao-nota">' + secao.nota + '</p>';
  secao.subsecoes.forEach(function(sub) { html += renderizarSubsecao(sub); });
  html += '</section>';
  return html;
}

function renderizarTudo() {
  var html = '';
  SECOES.forEach(function(secao) { html += renderizarSecao(secao); });
  raizGalerias.innerHTML = html;
}

/* ---------- Lightbox: estado e navegação ---------- */
var lightbox = document.getElementById('rkdLightbox');
var palco = document.getElementById('rkdLbPalco');
var img = document.getElementById('rkdLbImg');
var tituloEl = document.getElementById('rkdLbTitulo');
var legendaEl = document.getElementById('rkdLbLegenda');
var btnFechar = document.getElementById('rkdLbFechar');
var btnReset = document.getElementById('rkdLbReset');
var btnPrev = document.getElementById('rkdLbPrev');
var btnNext = document.getElementById('rkdLbNext');

var galAtual = null, indiceAtual = 0, elementoAnterior = null;
var scale = 1, posX = 0, posY = 0;
var activePointers = {};
var isPanning = false, dragStart = null;
var pinchStartDist = 0, pinchStartScale = 1;

function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }
function distancia(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }

function aplicarTransform() {
  img.style.transform = 'translate(' + posX + 'px,' + posY + 'px) scale(' + scale + ')';
  btnReset.textContent = Math.round(scale * 100) + '%';
}

function resetZoom() {
  scale = 1; posX = 0; posY = 0;
  aplicarTransform();
}

function aplicarZoomEm(clientX, clientY, novaEscala) {
  var rect = img.getBoundingClientRect();
  var cx = clientX - (rect.left + rect.width / 2);
  var cy = clientY - (rect.top + rect.height / 2);
  var ratio = novaEscala / scale;
  posX = posX - cx * (ratio - 1);
  posY = posY - cy * (ratio - 1);
  scale = novaEscala;
  if (scale <= 1) { scale = 1; posX = 0; posY = 0; }
  aplicarTransform();
}

function carregarItem() {
  var item = SUBSECOES[galAtual].itens[indiceAtual];
  img.src = item.full || item.thumb;
  img.alt = item.titulo || '';
  tituloEl.textContent = item.titulo || '';
  legendaEl.textContent = item.legenda || '';
  var itens = SUBSECOES[galAtual].itens;
  btnPrev.disabled = itens.length <= 1;
  btnNext.disabled = itens.length <= 1;
  resetZoom();
}

function navegar(delta) {
  var itens = SUBSECOES[galAtual].itens;
  if (itens.length <= 1) return;
  indiceAtual = (indiceAtual + delta + itens.length) % itens.length;
  carregarItem();
}

function abrirLightbox(subKey, idx) {
  var itens = SUBSECOES[subKey] && SUBSECOES[subKey].itens;
  if (!itens || !itens.length) return;
  galAtual = subKey;
  indiceAtual = idx;
  elementoAnterior = document.activeElement;
  carregarItem();
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  btnFechar.focus();
}

function fecharLightbox() {
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  img.src = '';
  activePointers = {};
  isPanning = false;
  if (elementoAnterior && typeof elementoAnterior.focus === 'function') elementoAnterior.focus();
}

raizGalerias.addEventListener('click', function(ev) {
  var btn = ev.target.closest('.rkd-card');
  if (!btn) return;
  abrirLightbox(btn.getAttribute('data-sub'), parseInt(btn.getAttribute('data-idx'), 10));
});

btnFechar.addEventListener('click', fecharLightbox);
btnReset.addEventListener('click', resetZoom);
btnPrev.addEventListener('click', function() { navegar(-1); });
btnNext.addEventListener('click', function() { navegar(1); });

lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) fecharLightbox();
});

document.addEventListener('keydown', function(e) {
  if (lightbox.getAttribute('aria-hidden') === 'true') return;
  if (e.key === 'Escape') fecharLightbox();
  else if (e.key === 'ArrowLeft') navegar(-1);
  else if (e.key === 'ArrowRight') navegar(1);
  else if (e.key === '+' || e.key === '=') aplicarZoomEm(window.innerWidth / 2, window.innerHeight / 2, clamp(scale * 1.2, 1, 6));
  else if (e.key === '-') aplicarZoomEm(window.innerWidth / 2, window.innerHeight / 2, clamp(scale / 1.2, 1, 6));
});

palco.addEventListener('wheel', function(e) {
  e.preventDefault();
  var fator = e.deltaY < 0 ? 1.15 : 1 / 1.15;
  aplicarZoomEm(e.clientX, e.clientY, clamp(scale * fator, 1, 6));
}, { passive: false });

palco.addEventListener('dblclick', function(e) {
  if (scale > 1) { resetZoom(); }
  else { aplicarZoomEm(e.clientX, e.clientY, 2.5); }
});

palco.addEventListener('pointerdown', function(e) {
  if (e.target !== img) return;
  palco.setPointerCapture(e.pointerId);
  activePointers[e.pointerId] = { x: e.clientX, y: e.clientY };
  var ids = Object.keys(activePointers);
  if (ids.length === 1) {
    isPanning = true;
    dragStart = { x: e.clientX, y: e.clientY, posX: posX, posY: posY };
    palco.classList.add('arrastando');
  } else if (ids.length === 2) {
    isPanning = false;
    var pts = ids.map(function(id) { return activePointers[id]; });
    pinchStartDist = distancia(pts[0], pts[1]);
    pinchStartScale = scale;
  }
});

palco.addEventListener('pointermove', function(e) {
  if (!activePointers[e.pointerId]) return;
  activePointers[e.pointerId] = { x: e.clientX, y: e.clientY };
  var ids = Object.keys(activePointers);
  if (ids.length === 2) {
    var pts = ids.map(function(id) { return activePointers[id]; });
    var dist = distancia(pts[0], pts[1]);
    var novaEscala = clamp(pinchStartScale * (dist / pinchStartDist), 1, 6);
    var meio = { x: (pts[0].x + pts[1].x) / 2, y: (pts[0].y + pts[1].y) / 2 };
    aplicarZoomEm(meio.x, meio.y, novaEscala);
  } else if (ids.length === 1 && isPanning) {
    posX = dragStart.posX + (e.clientX - dragStart.x);
    posY = dragStart.posY + (e.clientY - dragStart.y);
    aplicarTransform();
  }
});

function encerrarPonteiro(e) {
  delete activePointers[e.pointerId];
  var ids = Object.keys(activePointers);
  isPanning = ids.length === 1;
  if (isPanning) {
    var p = activePointers[ids[0]];
    dragStart = { x: p.x, y: p.y, posX: posX, posY: posY };
  }
  palco.classList.remove('arrastando');
}
palco.addEventListener('pointerup', encerrarPonteiro);
palco.addEventListener('pointercancel', encerrarPonteiro);

renderizarTudo();
})();
</script>
```

## familia/georg-rucker.md
```markdown
---
layout: cronica
title: "Georg Rücker"
subtitle: "Da servidão hereditária à ação individual no nascente capitalismo silesiano"
---

### 1. A submissão feudal e as origens (1789 – 1806)

Georg nasceu em 1789 em Johannesberg, inserido na base da pirâmide socioeconômica da Silésia prussiana. Classificado juridicamente como *Inwohner*, ele pertencia a uma classe de trabalhadores despossuídos de terras ou imóveis, que viviam como sublocatários em propriedades alheias. Submetido ao sistema da *Erbuntertänigkeit* (servidão hereditária) sob o Senhorio de Seitenberg, propriedade do nobre Franz Bernhard von Mutius, Georg não possuía isonomia ou direitos individuais básicos. A sua existência era atrelada à terra, dependendo da venda diária de trabalho braçal e sem a liberdade de migrar, casar ou escolher livremente um ofício sem a autorização de seu senhor feudal.

### 2. O colapso do sistema e a emancipação jurídica (1806 – 1815)

A derrota militar prussiana para as tropas napoleônicas em 1806 expôs a fragilidade do Estado e forçou uma modernização institucional rigorosa. Através do Édito de Outubro de 1807, fruto das reformas de Stein-Hardenberg, a monarquia decretou o fim da servidão, o que tornou Georg, em 11 de novembro de 1810, legalmente um homem livre aos 21 anos de idade. Contudo, a liberdade jurídica não foi acompanhada de capital ou de distribuição de propriedades. Como *Inwohner*, ele permaneceu na mesma condição material de proletário agrário dependente de contratos e diárias de trabalho. Entre 1810 e 1816, Georg manteve-se em Johannesberg por pragmatismo, período em que se casou com Maria Volkmer e constituiu família no ambiente que já conhecia.

### 3. O desastre climático e a decisão pela sobrevivência (1816)

A verdadeira transição de Georg para a economia do trabalho livre e assalariado ocorreu sob a pressão do colapso climático de 1816, conhecido como o "Ano Sem Verão", provocado pela erupção do vulcão Tambora. Geadas em pleno verão destruíram as lavouras de altitude em Johannesberg, eliminando a capacidade de contratação dos camponeses locais e instalando a fome. Exercendo a sua recém-adquirida liberdade de movimentação, Georg tomou uma decisão estritamente racional e migrou 15 a 20 quilômetros vale abaixo, para Wölfelsgrund. Esta realocação geográfica representou o abandono da dependência agrícola rumo à infraestrutura capitalista emergente, onde a força mecânica do rio movia moinhos e serrarias hidráulicas imunes às quebras de safra, gerando demanda constante por mão de obra.

### 4. A resiliência familiar e a realidade do trabalho livre (1816 – final da vida)

Em Wölfelsgrund, Georg estabeleceu-se como trabalhador florestal braçal (*Waldarbeiter*) e diarista (*Tagelöhner*), operando no corte e processamento de madeira. A vida operária era austera e a tragédia atingiu a família em setembro de 1823: seu quarto filho morreu nove dias após o nascimento e sua esposa, Maria Volkmer, faleceu em decorrência de complicações do parto. Viúvo aos 34 anos e com três filhas pequenas, Georg enfrentou uma crise insustentável para um trabalhador assalariado. O seu segundo casamento com Johanna Hannig, ocorrido apenas dois meses depois, foi uma resposta econômica e estrutural necessária para a manutenção de uma casa e sobrevivência mútua. Dessa união nasceu, em 9 de outubro de 1827, Vincentius Joseph Rücker. Georg encerrou seus dias na Europa, trabalhando nas florestas da Silésia, tendo sido a primeira geração da família a romper correntes seculares e desbravar as duras realidades da responsabilidade individual.

---

<p class="cronica-footnote"><em>Genealogia da família Rücker — de Johannesberg ao nascente capitalismo industrial da Silésia.</em></p>

<p style="font-size: 1.05rem;"><a href="{{ '/familia.html' | relative_url }}">← Voltar para Família</a></p>
```

## familia/georg-uma-cronica.md
```markdown
---
layout: cronica
title: "Georg - Uma Crônica"
subtitle: "Johannesberg, Silésia · 1789"
---

Vou te contar sobre o Georg.

Não o Georg que aparece nos documentos — aquele que existe apenas como uma linha de tinta em papel amarelado de arquivo, registrado entre um batismo e um óbito de paróquia. Vou te contar sobre o Georg de carne e osso, aquele que acordava de manhã com o cheiro de resina de abeto no ar e a neve pesando sobre o telhado, aquele que um dia olhou para a montanha à sua frente e decidiu atravessá-la.

Ele nasceu em 1789, num vilarejo chamado Johannesberg, encravado nas encostas da Montanha Negra, na Silésia. Hoje esse lugar se chama Janowa Góra e fica na Polônia. Naquela época, era Prússia. Mas para Georg, provavelmente era apenas o mundo — porque era o único mundo que ele conhecia.

### ✦

Johannesberg era o tipo de lugar que se esquece de existir no verão e lembra com violência no inverno.

As casas eram de madeira, com telhados inclinados para não acumular neve demais. As estradas eram de pedra solta que virava lama no degelo de março. O vilarejo ficava a mais de setecentos metros de altitude, numa encosta íngreme do Maciço do Śnieżnik, e o frio chegava em outubro e às vezes ainda estava ali em maio. O centeio crescia difícil nos campos pedregosos. A batata era o que salvava o inverno.

A família de Georg não tinha terra. Eram *Inwohner* — uma palavra alemã que significa, mais ou menos, moradores de terra alheia. Viviam provavelmente num cômodo alugado, dependendo de contratos de trabalho para comer. O pai trabalhava nas florestas do senhorio nos meses quentes: derrubava árvores, carregava toras, produzia carvão vegetal nas clareiras. No inverno, a família inteira operava teares manuais, fiando linho bruto para entregar a intermediários em troca de trocados. Era o trabalho que impedia os pobres das montanhas de morrerem de fome entre dezembro e março.

Georg cresceu nessa cadência. Florestas no verão, tear no inverno, a montanha sempre ali.

### ✦

Há uma coisa que preciso te explicar sobre o mundo em que Georg nasceu, porque sem entender isso, o resto da história não faz sentido completo.

Ele nasceu servo.

Não no sentido dramático dos escravizados — era uma coisa mais burocrática, mais prussiana, mais fria. Chamavam de *Erbuntertänigkeit*: submissão hereditária. Você a herdava dos seus pais como herdava o sobrenome. Significava que Georg não podia escolher onde morar sem autorização do senhor do domínio. Não podia se casar sem permissão por escrito. Não podia mudar de ofício sem aprovação. O senhorio da região — a família von Mutius, que havia comprado aquelas terras no próprio ano do nascimento de Georg — era, legalmente, a sua tutora involuntária.

Isso era o mundo normal. Todos os seus vizinhos viviam da mesma forma. Não era exceção, era o ar que se respirava.

Mas esse ar ia mudar.

### ✦

Em 1807, o rei da Prússia, derrotado por Napoleão e humilhado em Jena, assinou um decreto que seus ministros reformadores haviam redigido. O texto era direto: a partir de novembro de 1810, não existiriam mais servos no reino prussiano. Apenas pessoas livres.

Georg tinha vinte e um anos quando isso entrou em vigor.

Imagina o que é isso. A sua família, por gerações, não havia podido simplesmente levantar e ir embora. E de repente — pela assinatura de um homem que mora a centenas de quilômetros, num palácio que você nunca vai ver — você pode. Não tem mais senhorio. Não tem mais autorização a pedir. Sua força de trabalho é sua, para vender a quem pagar melhor.

Georg ficou em Johannesberg por mais uns anos. Havia trabalho, havia o que conhecia. Mas a liberdade estava lá, esperando ele precisar dela.

### ✦

Em 1816, Georg precisou dela.

Naquele ano, do outro lado do mundo, um vulcão chamado Tambora havia entrado em erupção na Indonésia. A nuvem de cinzas que lançou na atmosfera era tão densa que bloqueou parte da luz do sol em toda a Europa. O verão de 1816 não aconteceu. Em julho, havia geada nas madrugadas. Em agosto, neve caiu sobre os campos que deveriam estar dourados de centeio maduro.

A colheita morreu em pé.

Para Georg, *Inwohner* sem terra, sem estoque, sem reservas — a conta era simples e impiedosa. Ficar era passar fome. Partir era a única alternativa racional.

Ele tinha vinte e sete anos. Pegou o que podia carregar nas costas e começou a descer a montanha em direção ao vale vizinho, Wölfelsgrund, onde um rio chamado Wölfel corria com força suficiente para mover serrarias e onde havia, portanto, trabalho.

### ✦

Wölfelsgrund era quinze ou vinte quilômetros de distância — pela montanha, uma jornada de um dia inteiro. Mas era outro mundo.

O vale era profundo e protegido, cortado pelo rio. A água movia moinhos e serrarias desde o século XVII. Havia demanda constante por braços: para derrubar as árvores nas encostas, para arrastar as toras até o rio, para empilhar as tábuas na saída das serrarias. Era uma economia de madeira e água, mais robusta do que a agricultura de altitude que havia colapsado em Johannesberg.

Georg se registrou nas autoridades locais — o Estado prussiano exigia isso dos migrantes — e começou a trabalhar. Não como servo. Como trabalhador livre, com contrato e salário, num mercado que precisava dos seus músculos e pagava por eles.

E foi em Wölfelsgrund que ele encontrou Maria Volkmer.

### ✦ Maria

Maria era de Kamnitz, outra localidade do condado. Não sabemos exatamente como eles se conheceram — talvez a fome de 1816 tivesse trazido muita gente de vilarejos diferentes para o mesmo vale, em busca do mesmo trabalho, e foi assim que dois estranhos acabaram no mesmo lugar ao mesmo tempo. O que os registros nos dizem é que eles se casaram por volta de 1815 ou 1816 e que a vida começou a ser construída.

Em 1816, nasceu Maria Therezia Beata. Em 1819, Anna Maria Johanna. Em 1821, Beata Maria Josefa. Três meninas em cinco anos, criadas numa casa de trabalhadores rurais no vale do Wölfel, em meio ao cheiro de serragem e ao barulho do rio.

Sobre o que Georg sentiu por Maria, os arquivos não guardam nada. Os registros paroquiais são sóbrios — eles registram, não narram. Mas é possível imaginar: a casa pequena com as três meninas, as refeições no escasso, os invernos longos que fechavam o vale, e os dois no centro disso tudo, segurando o que tinham construído.

Em 2 de setembro de 1823, Maria deu à luz o quarto filho.

O bebê viveu nove dias.

Em 10 de setembro de 1823, Maria Volkmer morreu.

### ✦

Complicações no parto, diz o registro. Uma frase seca para uma coisa que devia ser o fim do mundo.

Georg ficou com três meninas: a mais velha com sete anos, a do meio com quatro, a caçula com dois. Em Wölfelsgrund de 1823, sem avós por perto, sem rede de proteção, sem ninguém além dos vizinhos — um homem sozinho com três filhas pequenas não tinha como segurar tudo ao mesmo tempo.

Há um detalhe naquele dia de setembro que os registros preservaram por acaso, e que diz algo sobre a família que Georg carregava consigo mesmo sem saber. O padre que veio administrar os últimos sacramentos a Maria Volkmer chamava-se Carolus Rücker. Padre Carl Rücker. Um Rücker. Provavelmente um primo, um tio mais velho, algum parente cuja ligação exata o tempo apagou — mas um Rücker exercendo o sacerdócio naquela mesma paróquia. A família tinha raízes mais fundas naquele chão do que a vida de Georg deixava aparecer.

Dois meses depois da morte de Maria, em 23 de novembro de 1823, Georg se casou novamente.

### ✦ Johanna

O nome dela era Johanna Hannig. Nasceu em 1791, em Kieslingswalde — mais uma localidade do condado, mais uma pessoa que o mundo do trabalho e da migração havia trazido para o vale de Wölfelsgrund.

Ela entrou numa casa com três filhas que não eram suas: uma de sete anos, uma de quatro, uma de dois. Entrou num mundo já formado, com as marcas de outra mulher ainda quentes. E ficou.

É difícil não pensar no que isso exigiu dela. E é difícil não pensar no que Georg estava pedindo — não com palavras, mas com a simples realidade de quem era e o que precisava. Dois meses de luto e depois isso: recomeçar, de novo, com outra pessoa, com filhas pequenas olhando sem entender direito o que estava acontecendo.

A vida não esperava.

Em 1825, nasceu Anna Maria. Em 9 de outubro de 1827, nasceu Vincentius Joseph Rücker — o menino que décadas depois, já velho e viúvo, cruzaria o oceano e chegaria ao Rio Grande do Sul com o sobrenome que Georg havia carregado pelas montanhas da Silésia. Em 1830, nasceu Joseph Anton.

Georg tinha agora seis filhos. Três de Maria, três de Johanna. Uma casa cheia, barulhenta, com os cheiros de gente e de madeira verde e do rio correndo lá fora.

### ✦

O que mais podemos dizer sobre Georg Rücker?

Que ele trabalhou a vida inteira com as mãos. Que nunca teve terra própria. Que sobreviveu à maior crise climática do século porque tinha as pernas livres para sair de onde estava — uma liberdade que seus pais nunca tiveram. Que perdeu uma esposa e um filho e achou força para continuar. Que construiu uma família duas vezes.

Que o filho que ele teria com Johanna, aquele menino nascido em outubro de 1827, seria o elo que levaria o nome Rücker para o outro lado do mundo.

Não sabemos quando Georg morreu. Os registros silenciam sobre isso. Em algum ponto da história, ele simplesmente para de aparecer nos documentos — e esse silêncio é a única despedida que os arquivos lhe concedem.

Mas ele existiu. Isso os documentos garantem. Ele caminhou nas encostas da Montanha Negra, trabalhou nas serrarias do vale, foi pai de filhos que tiveram filhos que tiveram filhos — até que um dia, numa linha de chegada que ele nunca viu, o nome que era dele chegou ao Brasil.

---

> **Johannesberg, 1789 — Wölfelsgrund, século XIX**<br>
> **Georg Rücker**<br>
> *servo, homem livre, lenhador, pai*<br>
> *patriarca de uma família que não sabe ao certo*<br>
> *o quanto lhe deve*

---

<p class="cronica-footnote"><em>Nota: Os fatos desta crônica — datas de nascimento e morte, nomes das esposas e filhos, a presença do Padre Carolus Rücker no falecimento de Maria Volkmer — são extraídos de registros documentais da família e dos arquivos paroquiais do Condado de Habelschwerdt. O contexto histórico é documentado: a servidão prussiana (Erbuntertänigkeit), o Édito de Outubro de 1807, a crise climática de 1816 causada pelo vulcão Tambora, e a economia madeireira de Wölfelsgrund. O que não está nos arquivos — os sentimentos, os cheiros, o cotidiano — foi imaginado com o cuidado de quem respeita o que não sabe.</em></p>

<p style="font-size: 1.05rem;"><a href="{{ '/familia.html' | relative_url }}">← Voltar para Família</a></p>
```

## familia/mapa.html
```html
---
layout: default
title: "Mapa das Migrações"
---

<p class="rkm-intro">
  Sete etapas, de um vale da Silésia em 1816 até os dois destinos no sul do Brasil. Diagrama esquemático — não é um mapa geográfico real, mas a sequência e a natureza de cada trecho da viagem.
</p>

<style>
.rkm{
  --ouro:#d4af6a;
  --sage:#8a9e86;
  --terra:#c0714f;
  --mudo:#8a8578;
  --soft:#b8b2a3;
  --claro:#f2efe6;
  --borda:#2a2a2a;
  --superficie:#1a1a1a;
  --mono:ui-monospace,"SFMono-Regular","Roboto Mono",Menlo,Consolas,monospace;
  color:#e8e4da;
}
.rkm *{box-sizing:border-box;}
.rkm p,.rkm h2,.rkm h3{margin:0;padding:0;}
.rkm-intro{color:#b8b2a3;max-width:620px;margin:0 auto 2rem;text-align:center;font-size:1.1rem;}

.rkm-legenda{display:flex;flex-wrap:wrap;gap:0.55rem 1.15rem;justify-content:center;
  font-family:var(--mono);font-size:0.68rem;color:var(--mudo);margin:0 auto 1.6rem;max-width:760px;}
.rkm-legenda span{display:flex;align-items:center;gap:0.45rem;}
.rkm-traco{width:20px;height:0;flex:0 0 20px;border-top-width:2px;border-top-style:solid;}
.rkm-ponto{width:9px;height:9px;border-radius:50%;display:inline-block;flex:0 0 9px;}
.rkm-ponto.comum{background:var(--ouro);}
.rkm-ponto.rs{background:var(--terra);}
.rkm-ponto.pr{background:var(--sage);}

.rkm-palco{display:grid;grid-template-columns:1.5fr 1fr;gap:0;border:1px solid var(--borda);
  border-radius:10px;overflow:hidden;background:var(--superficie);}
.rkm-esq{padding:1rem;border-right:1px solid var(--borda);}
.rkm-svg{width:100%;height:auto;display:block;}
.rkm-svg text{font-family:var(--mono);font-size:11px;fill:var(--soft);}
.rkm-svg .rot{stroke-width:3;fill:none;}
.rkm-svg .no{cursor:pointer;stroke:#121212;stroke-width:2;}
.rkm-svg .no:hover, .rkm-svg .no[data-on="1"]{stroke:var(--claro);}
.rkm-svg .nolab{font-family:Georgia,serif;font-size:12px;fill:var(--claro);}

.rkm-dir{padding:1.2rem 1.1rem 1.3rem;min-height:280px;}
.rkm-dir h3{font-family:var(--mono);font-size:0.66rem;letter-spacing:.16em;text-transform:uppercase;
  color:var(--mudo);padding-bottom:0.5rem;border-bottom:1px solid var(--borda);margin:0 0 0.8rem;}
.rkm-selo{display:inline-block;margin-bottom:.8rem;font-family:var(--mono);font-size:0.6rem;
  letter-spacing:.1em;text-transform:uppercase;border-radius:4px;padding:2px 7px;
  color:var(--ouro);border:1px solid var(--ouro);}
.rkm-selo[data-t="aberta"]{color:var(--sage);border-color:var(--sage);}
.rkm-ctx{font-size:0.93rem;color:var(--soft);line-height:1.65;}
.rkm-ctx+.rkm-ctx{margin-top:.6rem;}
.rkm-vazio{color:var(--mudo);font-size:0.9rem;font-style:italic;}

.rkm-secao{margin-top:3rem;}
.rkm-secao h2{font-family:Georgia,serif;font-size:1.6rem;color:var(--claro);margin:0 0 .4rem;text-align:center;}
.rkm-secao-nota{font-size:0.95rem;color:var(--mudo);max-width:620px;margin:0 auto 1.6rem;text-align:center;line-height:1.6;}
.rkm-metodo{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:.8rem;}
.rkm-cartao{display:block;background:#161616;border:1px solid var(--borda);border-radius:10px;
  padding:0.9rem 1rem;text-decoration:none;color:#e8e4da;
  transition:border-color .2s ease,transform .2s ease;}
.rkm-cartao:hover{border-color:var(--ouro);transform:translateY(-2px);}
.rkm-cartao s{display:block;text-decoration:none;font-family:var(--mono);font-size:0.62rem;
  letter-spacing:.1em;text-transform:uppercase;color:var(--ouro);margin-bottom:.35rem;font-weight:bold;}
.rkm-cartao b{display:block;font-family:Georgia,serif;font-size:1.05rem;font-weight:normal;
  color:var(--claro);line-height:1.25;margin-bottom:.3rem;}
.rkm-cartao span{display:block;font-size:0.85rem;line-height:1.5;color:var(--soft);}

@media (max-width:820px){
  .rkm-palco{grid-template-columns:1fr;}
  .rkm-esq{border-right:0;border-bottom:1px solid var(--borda);}
}
@media (prefers-reduced-motion:reduce){.rkm *{transition:none!important;}}
</style>

<div class="rkm" id="rkmRaiz">

  <div class="rkm-legenda">
    <span><i class="rkm-traco" style="border-top-color:#2b2b28;border-top-style:dashed"></i> Trem</span>
    <span><i class="rkm-traco" style="border-top-color:#4a7f9e;border-top-style:dotted"></i> Vapor oceânico</span>
    <span><i class="rkm-traco" style="border-top-color:#6ba3bd"></i> Vapor fluvial</span>
    <span><i class="rkm-traco" style="border-top-color:#a06a45"></i> Carreta</span>
    <span><i class="rkm-traco" style="border-top-color:#a06a45;border-top-style:dotted"></i> A pé</span>
    <span><i class="rkm-ponto comum"></i> Tronco comum</span>
    <span><i class="rkm-ponto rs"></i> Ramo de Maratá — August Ambros (RS)</span>
    <span><i class="rkm-ponto pr"></i> Ramo de Porto União — Ambros August (SC)</span>
  </div>

  <div class="rkm-palco">
    <div class="rkm-esq">
      <svg class="rkm-svg" id="rkmSvg" viewBox="0 0 900 380" xmlns="http://www.w3.org/2000/svg"></svg>
    </div>
    <aside class="rkm-dir" id="rkmCtx">
      <p class="rkm-vazio">Toque em um ponto do diagrama para ver o contexto da etapa.</p>
    </aside>
  </div>

  <div class="rkm-secao">
    <h2>Como este diagrama foi montado</h2>
    <p class="rkm-secao-nota">É um esquema — a posição dos pontos indica ordem e ramificação, não localização geográfica real. As distâncias e trajetos exatos não são reproduzidos.</p>
    <div class="rkm-metodo">
      <a class="rkm-cartao" href="{{ '/familia/arvore.html' | relative_url }}">
        <s>Interativo</s><b>Árvore Genealógica</b>
        <span>Gerações navegáveis, com fonte e grau de certeza em cada informação.</span>
      </a>
      <a class="rkm-cartao" href="{{ '/familia.html' | relative_url }}">
        <s>Acervo</s><b>Artigos e crônicas</b>
        <span>Perfis históricos e crônicas literárias da imigração Rücker.</span>
      </a>
      <a class="rkm-cartao" href="https://forms.gle/MAY913vupvStXXgP7" target="_blank" rel="noopener">
        <s>Colaborar</s><b>Falta documento</b>
        <span>Reconheceu um nome, tem foto ou correção? O acervo aceita contribuições.</span>
      </a>
    </div>
  </div>

</div>

<script>
(function(){
"use strict";

var COR = { comum:"#d4af6a", rs:"#c0714f", pr:"#8a9e86" };
var MODO = {
  trem:      { stroke:"#2b2b28", dash:"6,5" },
  vapor:     { stroke:"#4a7f9e", dash:"1,5" },
  fluvial:   { stroke:"#6ba3bd", dash:"none" },
  carreta:   { stroke:"#a06a45", dash:"none" },
  pe:        { stroke:"#a06a45", dash:"1,5" }
};

var NOS = [
  { id:"johannesberg", x:50,  y:60,  ramo:"comum", nome:"Johannesberg", sub:"Silésia prussiana",
    ctx:["Georg Rücker nasce em 1789 em Johannesberg — o patriarca da linhagem que emigraria oitenta anos depois."] },
  { id:"wolfelsgrund", x:60,  y:150, ramo:"comum", nome:"Wölfelsgrund", sub:"hoje Międzygórze, Polônia — condado de Kłodzko",
    ctx:["A poucos quilômetros de Johannesberg, no mesmo vale. Ponto de referência para a origem de toda a família — inclusive de Ricardo Rücker, de Três Passos (ver nota de pesquisa aberta abaixo)."] },
  { id:"hamburgo", x:260, y:70, ramo:"comum", nome:"Hamburgo", sub:"embarque, 1898 — 3ª classe",
    ctx:["Anton (46), Ambros August (28) e August Ambros (28 declarados) embarcam juntos, solteiros, em 1898 — os três irmãos que a Lista de Hamburgo confirma como indivíduos distintos (DESAMB 01)."] },
  { id:"riogrande", x:460, y:230, ramo:"comum", nome:"Rio Grande", sub:"porto de desembarque",
    ctx:["Fim da travessia atlântica. Início do trecho fluvial rumo ao interior do Rio Grande do Sul."] },
  { id:"portoalegre", x:540, y:190, ramo:"comum", nome:"Porto Alegre", sub:"baldeação fluvial",
    ctx:["Ponto de baldeação entre o vapor de rio maior e as embarcações menores que seguem para o Vale do Caí."] },
  { id:"cai", x:610, y:150, ramo:"comum", nome:"São Sebastião do Caí", sub:"fim da navegação",
    ctx:["Aqui termina o trecho navegável. Dali em diante, o restante da viagem é feito por terra, de carreta."] },
  { id:"doisirmaos", x:690, y:170, ramo:"comum", nome:"Dois Irmãos", sub:"Colônia 16 — chegada em 1898",
    ctx:["Ponto de chegada da família em 1898. É também o ponto em que a linhagem se divide: os descendentes de August Ambros seguem para Maratá, os de Ambros August para Porto União."] },
  { id:"marata", x:820, y:90, ramo:"rs", nome:"Maratá", sub:"São Pedro do Maratá — ramo August Ambros",
    ctx:["August Ambros se estabelece aqui com Philippine Saft. Origem dos 15 filhos confirmados fotograficamente em 1925 (DESAMB 05).",
         "O livro comemorativo do centenário de Maratá confirmou o sobrenome de solteira de Olydia Regina (Orth) e a data exata da leva migratória de 1921 registrada pela comunidade: 8 de setembro de 1921."] },
  { id:"portouniao", x:820, y:290, ramo:"pr", nome:"Porto União", sub:"ramo Ambros August (SC)",
    ctx:["Ambros August se estabelece aqui com Amalia Rathmann. Origem do ramo colateral (Herberto, Walter, Siegmund, Max, Albano).",
         "Curiosidade não comprovada: em 1924, um Ricardo Rücker — nascido em 1904 em Lauterbach, no mesmo condado de Kłodzko — hospedou-se na casa de 'August Rücker' em Maratá antes de seguir a pé até Porto União. Parentesco não confirmado; ver Árvore Genealógica, seção de pesquisa aberta."] }
];

var ROTAS = [
  { de:"johannesberg", para:"wolfelsgrund", modo:"pe", ramo:"comum" },
  { de:"wolfelsgrund", para:"hamburgo", modo:"trem", ramo:"comum" },
  { de:"hamburgo", para:"riogrande", modo:"vapor", ramo:"comum" },
  { de:"riogrande", para:"portoalegre", modo:"fluvial", ramo:"comum" },
  { de:"portoalegre", para:"cai", modo:"fluvial", ramo:"comum" },
  { de:"cai", para:"doisirmaos", modo:"carreta", ramo:"comum" },
  { de:"doisirmaos", para:"marata", modo:"carreta", ramo:"rs" },
  { de:"doisirmaos", para:"portouniao", modo:"trem", ramo:"pr" }
];

function porId(id){ return NOS.filter(function(n){return n.id===id;})[0]; }

function montarSVG(){
  var svg = document.getElementById('rkmSvg');
  var html = '';

  ROTAS.forEach(function(r){
    var a = porId(r.de), b = porId(r.para);
    var m = MODO[r.modo];
    var corRamo = COR[r.ramo];
    html += '<line class="rot" x1="'+a.x+'" y1="'+a.y+'" x2="'+b.x+'" y2="'+b.y+'" ' +
            'stroke="'+corRamo+'" stroke-dasharray="'+(m.dash==='none'?'':m.dash)+'" />';
  });

  NOS.forEach(function(n){
    html += '<circle class="no" data-id="'+n.id+'" data-on="0" cx="'+n.x+'" cy="'+n.y+'" r="7" fill="'+COR[n.ramo]+'"></circle>';
    var anchor = n.x > 700 ? 'end' : 'start';
    var dx = n.x > 700 ? -12 : 12;
    html += '<text class="nolab" x="'+(n.x+dx)+'" y="'+(n.y+4)+'" text-anchor="'+anchor+'">'+n.nome+'</text>';
  });

  svg.innerHTML = html;

  svg.querySelectorAll('.no').forEach(function(circ){
    circ.addEventListener('click', function(){
      svg.querySelectorAll('.no').forEach(function(c){ c.setAttribute('data-on','0'); });
      circ.setAttribute('data-on','1');
      mostrarContexto(circ.getAttribute('data-id'));
    });
  });
}

function mostrarContexto(id){
  var n = porId(id);
  var ctx = document.getElementById('rkmCtx');
  if (!n) return;
  var seloTipo = n.id === 'portouniao' || n.id === 'wolfelsgrund' ? '' : '';
  var html = '<span class="rkm-selo">'+(n.ramo==='comum'?'Tronco comum':(n.ramo==='rs'?'Ramo Maratá (RS)':'Ramo Porto União (SC)'))+'</span>';
  html += '<h3 style="font-family:Georgia,serif;font-size:1.3rem;color:var(--claro);border:none;padding:0;margin:0 0 .2rem;">'+n.nome+'</h3>';
  html += '<p style="font-family:var(--mono);font-size:0.68rem;color:var(--mudo);margin-bottom:1rem;">'+n.sub+'</p>';
  n.ctx.forEach(function(p){ html += '<p class="rkm-ctx">'+p+'</p>'; });
  ctx.innerHTML = html;
}

montarSVG();
})();
</script>
```

## familia/vincentius-joseph-rucker.md
```markdown
---
layout: cronica
title: "Vincentius Joseph Rücker"
subtitle: "Do Bürgerthum prussiano à fuga pelo Atlântico"
---

### 1. A ascensão social (1827 – meados do século XIX)

Vicente nasceu em 1827 em Wölfelsgrund, filho de Georg Rücker — um homem que começara a vida como servo sem terras. A trajetória do filho, porém, seguiria outro rumo. Na primeira metade do século XIX, a Silésia prussiana via nascer uma nova camada social, o chamado *Bürgerthum*: industriais, professores, funcionários públicos — um Terceiro Estado que se afirmava entre a nobreza e o povo. Foi nesse espaço que Vicente encontrou seu lugar. Diferente do pai, que vendera apenas força braçal, ele reuniu educação e qualificação suficientes para ingressar nessa elite administrativa tão cobiçada, onde ascender à burocracia do Estado ou aos altos cargos dos latifúndios aristocráticos era o caminho mais seguro para o prestígio.

Ao tornar-se *Forstmeister*, Vicente deixava de ser apenas um trabalhador para se tornar um representante da autoridade e da ordem prussianas. As florestas da Silésia eram uma das grandes fontes de riqueza do território, essenciais ao fornecimento de madeira e combustível numa época de explosão industrial e mineira. Protegê-las nos Sudetos exigia um oficial com poder de polícia e porte de armas — e Vicente passou a encarnar, ao mesmo tempo, a lei e a ciência do manejo florestal, num império que prezava a disciplina e a burocracia acima de quase tudo.

### 2. A lei prussiana e o incidente decisivo (anos 1890)

Casado com Beata Larisch e já consolidado como oficial respeitado, Vicente viu essa vida ruir por um episódio jurídico trágico. Ao delegar a seus filhos a ronda florestal, estes acabaram matando um caçador furtivo — e a família se chocou de frente com o rígido aparato de justiça do Império Alemão. A Prússia era um *Rechtsstaat*, um Estado de cumprimento estrito da lei, com controle policial centralizado e monopólio da força exclusivamente militar e burocrático. Cidadãos comuns que exerciam força letal, mesmo em defesa da propriedade, não podiam esperar clemência.

Somava-se a isso o temido recrutamento obrigatório do *Landwehr*, que impunha anos de serviço duro no rigoroso sistema militar prussiano. Para os filhos de Vicente, o horizonte era um julgamento criminal capaz de destruir o nome da família, seguido de prisão ou de serviço militar forçado e punitivo.

### 3. A "Febre Brasileira" como rota de fuga (1898)

Para salvar os filhos — Anton, Ambrósio Augusto e Augusto Ambrósio —, Vicente, já viúvo e com setenta anos, tomou uma decisão extrema: abandonar todo o prestígio conquistado e deixar a Alemanha. Não emigrava por miséria — possuía capital próprio —, mas seguia uma rota já bem traçada pela geopolítica do período. Desde 1871 o Brasil promovia ativamente políticas de imigração para substituir a mão de obra escrava, branquear a população e ocupar as fronteiras do sul.

Esse movimento, partindo da Europa Central, ficaria conhecido na Silésia como a **"Febre Brasileira"** (*gorączka brazylijska*). Muitos silesianos prussianos já haviam formado colônias no sul do Brasil — Paraná, Santa Catarina, Rio Grande do Sul —, fugindo de perseguições políticas, da germanização forçada e das dificuldades econômicas. Sabendo dessas colônias, onde a terra era farta e o braço da polícia prussiana não alcançava, Vicente encontrou ali o porto seguro que buscava.

### 4. O ocaso do patriarca no Brasil (1898–1908)

No fim de 1898, a travessia do Atlântico marcou o fim da vida europeia de Vicente. Deixou para trás a filha Maria e o túmulo da esposa Beata Larisch; com os filhos, chegou ao Brasil e se estabeleceu primeiro em Dois Irmãos, depois em Maratá, no Rio Grande do Sul. A vida nas colônias do sul, voltada à agricultura familiar e ao desbravamento da fronteira, contrastava fortemente com a burocracia palaciana e o manejo científico das florestas europeias onde fizera carreira. Ainda assim, Vicente viveu a última década de sua vida como homem livre — vendo os filhos escaparem da punição e prosperarem no novo continente.

Morreu aos oitenta anos, em 21 de julho de 1908, e foi sepultado no Cemitério de São Pedro do Maratá. O nome gravado em granito escuro — **"Vizenz Rücker"** — é o testemunho final de um antigo *Forstmeister* do Império Prussiano que trocou tudo o que havia construído pelo bem mais precioso que um pai pode oferecer: a vida e a liberdade dos filhos.

---

<p class="cronica-footnote"><em>Genealogia da família Rücker — de Wölfelsgrund, Silésia, ao Rio Grande do Sul.</em></p>

<p style="font-size: 1.05rem;"><a href="{{ '/familia.html' | relative_url }}">← Voltar para Família</a></p>
```

## familia/vincenz-uma-cronica.html
```html
---
layout: cronica
title: "Vincenz - Uma Crônica"
subtitle: "A renúncia de um Forstmeister e a fuga que cruzou um oceano."
---

<p>Há homens que fazem da própria vida um monumento. Outros, quando chega a hora decisiva, aceitam vê-lo ruir para salvar aquilo que nenhuma pedra pode guardar: a família.</p>

<p>Vincentius Joseph Rücker nasceu em 1827, em Wölfelsgrund, na Silésia prussiana, quando a Europa ainda despertava das guerras napoleônicas. Seu pai, Georg Rücker, conhecera o peso da servidão e da pobreza. Pertencia à velha ordem do campo, onde o destino parecia escrito antes mesmo do nascimento. Mas o século XIX era um tempo de mudanças silenciosas. Entre a aristocracia e o povo surgia um novo grupo de homens que ascendiam não pelo sangue, mas pelo estudo, pelo mérito e pelo serviço ao Estado. Era o <em>Bürgerthum</em> prussiano.</p>

<p>Vicente foi um desses homens.</p>

<p>Enquanto o pai vendia o vigor dos braços, o filho aprendeu a dominar os livros, as leis e a ciência das florestas. Tornou-se <em>Forstmeister</em>, guarda das matas dos Sudetos, administrador de uma das maiores riquezas do reino. Na Prússia, uma floresta não era apenas um conjunto de árvores; era patrimônio do Estado, combustível para minas, matéria-prima para fábricas, riqueza estratégica de um império que transformava disciplina em virtude nacional.</p>

<p>Vestindo o uniforme, carregando armas e autoridade, Vicente passou a representar muito mais do que a proteção das matas. Era um homem da lei. Um servidor do Estado. Um símbolo daquela ordem meticulosa que fazia da burocracia quase uma religião.</p>

<p>Durante décadas, tudo parecia seguir o curso esperado. Casou-se com Beata Larisch, constituiu família, conquistou respeito. Parecia que a ascensão iniciada por um filho de servo alcançara finalmente seu ponto mais alto.</p>

<p>Mas a História raramente permite finais tranquilos.</p>

<p>Já nos anos 1890, um único episódio bastou para colocar abaixo tudo o que uma vida inteira havia construído.</p>

<p>Numa ronda florestal delegada aos filhos, um caçador furtivo perdeu a vida. Não importavam as circunstâncias; na Prússia, a lei era severa e o Estado não admitia que civis exercessem a força letal. O mesmo sistema jurídico que durante tantos anos protegera a autoridade de Vicente agora se voltava contra sua própria família.</p>

<p>A perspectiva era cruel.</p>

<p>Julgamentos.<br>
Prisão.<br>
Desonra.</p>

<p>E, para os jovens, o recrutamento obrigatório do <em>Landwehr</em>, onde anos de disciplina militar poderiam transformar um erro em sentença para toda a vida.</p>

<p>Foi então que o velho <em>Forstmeister</em> enfrentou a maior decisão de sua existência.</p>

<p>Não escolheu proteger sua reputação.<br>
Não escolheu defender a carreira.<br>
Nem tentou preservar o prestígio conquistado diante do Estado que servira durante décadas.</p>

<p><strong>Escolheu os filhos.</strong></p>

<p>Em 1898, aos setenta anos, viúvo de Beata Larisch, Vincentius abandonou a Silésia. Deixou para trás a casa, a posição social, os colegas de profissão, a filha Maria e até o túmulo da esposa. Levou consigo apenas aquilo que julgava indispensável: Anton, Ambrósio Augusto e Augusto Ambrósio.</p>

<p>Naqueles anos, milhares de famílias da Europa Central falavam de um país distante onde havia terras, colônias alemãs e liberdade. Chamavam aquele movimento de "Febre Brasileira". Para muitos era esperança econômica. Para Vicente, era sobretudo uma rota de fuga.</p>

<p>O Atlântico tornou-se a fronteira entre duas vidas.</p>

<p>De um lado ficou o oficial prussiano, habituado às florestas ordenadas, aos mapas precisos e à disciplina do Estado.</p>

<p>Do outro surgiu o colono do sul do Brasil, vivendo entre picadas, lavouras e matas muito diferentes daquelas que aprendera a administrar na Europa.</p>

<p>Primeiro Dois Irmãos.<br>
Depois Maratá.</p>

<p>Pouco restava da antiga autoridade do <em>Forstmeister</em>. O uniforme desapareceu. As condecorações perderam o sentido. A língua alemã misturava-se aos sotaques dos imigrantes. A vida tornava-se simples.</p>

<p>Mas havia uma paz que nenhuma carreira poderia oferecer.</p>

<p>Os filhos estavam vivos.<br>
Livres.<br>
E isso bastava.</p>

<p>Em 21 de julho de 1908, aos oitenta anos, Vincentius Joseph Rücker encerrou sua caminhada em terras brasileiras. Foi sepultado no Cemitério de São Pedro do Maratá. Sobre a lápide, o granito escuro registrou apenas "Vizenz Rücker", como tantas vezes acontece com os imigrantes cujos nomes atravessam oceanos e acabam moldados por novas línguas.</p>

<p>Quem passa diante daquele túmulo talvez veja apenas mais um sobrenome alemão entre tantos do Rio Grande do Sul.</p>

<p>Poucos imaginam que ali repousa um homem que conheceu duas pátrias e duas vidas.</p>

<p>Na primeira, foi servidor fiel de um dos Estados mais disciplinados da Europa.</p>

<p>Na segunda, tornou-se apenas um pai envelhecido, disposto a perder tudo para que os filhos pudessem recomeçar.</p>

<p>E talvez seja essa a verdadeira medida de sua grandeza.</p>

<p>Porque há homens lembrados pelos cargos que ocuparam.<br>
Outros, pelas riquezas que acumularam.</p>

<p><strong>Vincentius Joseph Rücker merece ser lembrado por aquilo que abandonou.</strong></p>

<p>No fim da vida, compreendeu que nenhuma honra concedida por um império vale tanto quanto a liberdade dos próprios filhos. E foi por essa liberdade que atravessou o oceano, deixando para trás o mundo que conhecia para construir, no silêncio das colônias do sul do Brasil, o último e mais nobre capítulo de sua história.</p>
```

## index.html
```html
---
layout: default
title: Início
---

<div class="home-grid home-grid--single">

  <!-- 1. Cartão Família com Mapa de Fundo -->
  <a href="{{ '/familia.html' | relative_url }}" class="card card--family" style="background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('{{ '/assets/1785149425259.png' | relative_url }}');">
    <h3>Família</h3>
    <p>Genealogia e registros históricos.</p>
  </a>

  <!-- 2. Cartão Outros — em construção -->
  <a href="{{ '/projetos.html' | relative_url }}" class="card" style="border-style: dashed; opacity: 0.85;">
    <span style="font-size: 0.7rem; color: #8a8578; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.3rem;">Em construção</span>
    <h3>Outros</h3>
    <p>Novos projetos a caminho. Volte em breve.</p>
  </a>

</div>
```

---

## ASSETS (apenas listagem)

| Arquivo | Tamanho |
|---|---|
| `assets/1785149425259.png` | 2.491.525 bytes (≈ 2,4 MB) — imagem de fundo do card "Família" na home |

---

## RESUMO TÉCNICO

- **Gerador do site**: Jekyll (site estático hospedado via GitHub Pages). Não há `Gemfile`/`Gemfile.lock` no repositório, então a versão do Jekyll/plugins é a padrão fornecida pelo ambiente de build do GitHub Pages (não fixada explicitamente no projeto).
- **Versão**: nenhuma versão de Jekyll é fixada no repo. `_config.yml` contém apenas `title` e `description`; a linha `theme: jekyll-theme-architect` está comentada (tema desabilitado — o site usa CSS próprio inline nos layouts, não um tema Jekyll de terceiros).
- **Hospedagem**: GitHub Pages, repositório `frucker-muss/frucker-muss.github.io` (padrão de nome `usuario.github.io` = site de usuário/organização).
- **Domínio**: `rucker.life`, configurado via arquivo `CNAME` (domínio customizado apontando para o GitHub Pages).
- **Estrutura Jekyll**: dois layouts (`_layouts/default.html` e `_layouts/cronica.html`, este último estende `default`), páginas em Markdown (`.md`) e HTML na raiz e em `familia/`.
- **Dependências externas / bibliotecas**:
  - Nenhum framework JS (sem jQuery, React, etc.) — todo o JavaScript interativo (árvore genealógica, mapa SVG, galeria/lightbox) é vanilla JS embutido diretamente nas páginas via `<script>`.
  - Nenhuma biblioteca CSS externa (sem Bootstrap/Tailwind) — CSS todo escrito à mão, inline em `<style>` nos layouts/páginas e em `assets/css/`.
  - Nenhuma fonte web externa (Google Fonts, etc.) — tipografia usa fontes do sistema (`Georgia`, `'Times New Roman'`, serif; monoespaçada via `ui-monospace`/`SFMono-Regular`/`Roboto Mono`/`Menlo`/`Consolas`).
  - Ícones: SVGs inline (ícone do WhatsApp, ícone do Google Forms, ramo decorativo) — nenhuma biblioteca de ícones externa.
  - Integrações externas via links: WhatsApp (`api.whatsapp.com/send`) para compartilhamento, e Google Forms (`forms.gle`) para coleta de relatos/colaborações da família.
  - `assets/css/cronica.css` e `assets/css/site.css` existem como arquivos separados, mas o conteúdo CSS efetivamente usado está duplicado inline dentro de `_layouts/default.html` e `_layouts/cronica.html` (os arquivos `.css` parecem não estar sendo referenciados/linkados em nenhum `<link>` nas páginas atuais).
