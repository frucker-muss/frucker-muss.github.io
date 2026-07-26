---
layout: default
title: Família
---

<h1>Família</h1>
<p>Registros e história da família Rücker.</p>

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <small>— {{ post.date | date: "%d/%m/%Y" }}</small>
    </li>
  {% endfor %}
</ul>

<p><a href="{{ '/' | relative_url }}">← Voltar para a página inicial</a></p>
