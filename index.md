---
layout: home
title: "Foxelyss's personal blog!"
---

# Posts

<div class="posts-list">
    {% for post in site.posts %}
    <div class="misc-element rounded-border">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        Posted on {{ post.date }}
    </div>
    {% endfor %}
</div>
