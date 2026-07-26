---
layout: default
title: Família
---

# Família
Registros e história da família Rücker.

<div class="posts-list" style="margin-top: 20px;">
  {% for post in site.posts %}
    <div style="margin-bottom: 15px;">
      <a href="{{ post.url | relative_url }}" style="font-size: 1.1em; font-weight: bold;">{{ post.title }}</a>
    </div>
  {% endfor %}
</div>

<hr style="margin: 30px 0; border: none; border-top: 1px solid #eaeaea;">

<p><a href="{{ '/' | relative_url }}">← Voltar para a página inicial</a></p>
