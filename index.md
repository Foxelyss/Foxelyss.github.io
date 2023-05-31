---
layout: home
title: "RedSharpObject's personal blog!"
---

# Posts

<div class="postsList">
    {% for post in site.posts %}
    <div class="miscElement roundedBorder">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        Posted on {{ post.date }}
    </div>
    {% endfor %}
</div>