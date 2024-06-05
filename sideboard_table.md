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
                    {% if cards_in_section.size > 1 %}
                        {% assign cards_in_content = cards_in_section[1] | split: '### Cards Out' %}
                        {% capture cards_in_debug %}
                            {{ cards_in_content[0] }}
                        {% endcapture %}
                        <p>{{ cards_in_debug }}</p> <!-- Debug output -->
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
                    {% if cards_out_section.size > 1 %}
                        {% assign cards_out_content = cards_out_section[1] | split: '### Notes' %}
                        {% capture cards_out_debug %}
                            {{ cards_out_content[0] }}
                        {% endcapture %}
                        <p>{{ cards_out_debug }}</p> <!-- Debug output -->
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
                    {% if notes_section.size > 1 %}
                        {% capture notes_debug %}
                            {{ notes_section[1] }}
                        {% endcapture %}
                        <p>{{ notes_debug }}</p> <!-- Debug output -->
                        {% assign notes_content = notes_section[1] | newline_to_br | split: '<br />' %}
                        <ul>
                            {% for line in notes_content %}
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
