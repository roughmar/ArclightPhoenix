---
layout: default
title: "Sideboard Guide Table"
---

# Sideboard Guide Table

<table>
    <thead>
        <tr>
            <th>Deck</th>
            <th>Cards In</th>
            <th>Cards Out</th>
            <th>Notes</th>
        </tr>
    </thead>
    <tbody>
        {% assign sideboard_guides = site.posts | where: "tags", "sideboard-guide" %}
        {% for post in sideboard_guides %}
            <tr>
                <td>{{ post.title }}</td>
                <td>
                    {% assign cards_in_section = post.content | split: '### Cards In' %}
                    <p>Debug: {{ cards_in_section }}</p>
                    {% if cards_in_section.size > 1 %}
                        {% assign cards_in_content = cards_in_section[1] | split: '### Cards Out' %}
                        <p>Debug Cards In Content: {{ cards_in_content[0] }}</p>
                        {% assign cards_in_list = cards_in_content[0] | newline_to_br | split: '<br />' %}
                        <ul>
                            {% for line in cards_in_list %}
                                {% if line contains '-' %}
                                    <li>{{ line | remove: '-' | strip }}</li>
                                {% endif %}
                            {% endfor %}
                        </ul>
                    {% else %}
                        <p>No cards in. Debug info: {{ post.content }}</p>
                    {% endif %}
                </td>
                <td>
                    {% assign cards_out_section = post.content | split: '### Cards Out' %}
                    <p>Debug: {{ cards_out_section }}</p>
                    {% if cards_out_section.size > 1 %}
                        {% assign cards_out_content = cards_out_section[1] | split: '### Notes' %}
                        <p>Debug Cards Out Content: {{ cards_out_content[0] }}</p>
                        {% assign cards_out_list = cards_out_content[0] | newline_to_br | split: '<br />' %}
                        <ul>
                            {% for line in cards_out_list %}
                                {% if line contains '-' %}
                                    <li>{{ line | remove: '-' | strip }}</li>
                                {% endif %}
                            {% endfor %}
                        </ul>
                    {% else %}
                        <p>No cards out. Debug info: {{ post.content }}</p>
                    {% endif %}
                </td>
                <td>
                    {% assign notes_section = post.content | split: '### Notes' %}
                    <p>Debug: {{ notes_section }}</p>
                    {% if notes_section.size > 1 %}
                        <p>Debug Notes Content: {{ notes_section[1] }}</p>
                        {% assign notes_list = notes_section[1] | newline_to_br | split: '<br />' %}
                        <ul>
                            {% for line in notes_list %}
                                {% if line contains '-' %}
                                    <li>{{ line | remove: '-' | strip }}</li>
                                {% endif %}
                            {% endfor %}
                        </ul>
                    {% else %}
                        <p>No notes available. Debug info: {{ post.content }}</p>
                    {% endif %}
                </td>
            </tr>
        {% endfor %}
    </tbody>
</table>
