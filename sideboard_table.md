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
                        {% assign cards_in = cards_in_section[1] | split: '### Cards Out' %}
                        {% assign cards_in_content = cards_in[0] %}
                        <ul>
                            {% for line in cards_in_content | newline_to_br | split: '<br />' %}
                                {% if line contains '-' %}
                                    <li>{{ line | remove: '-' | strip }}</li>
                                {% endif %}
                            {% endfor %}
                        </ul>
                    {% else %}
                        <p>No cards in.</p>
                    {% endif %}
                </td>
                <td>
                    {% assign cards_out_section = post.content | split: '### Cards Out' %}
                    {% if cards_out_section.size > 1 %}
                        {% assign cards_out = cards_out_section[1] | split: '### Notes' %}
                        {% assign cards_out_content = cards_out[0] %}
                        <ul>
                            {% for line in cards_out_content | newline_to_br | split: '<br />' %}
                                {% if line contains '-' %}
                                    <li>{{ line | remove: '-' | strip }}</li>
                                {% endif %}
                            {% endfor %}
                        </ul>
                    {% else %}
                        <p>No cards out.</p>
                    {% endif %}
                </td>
                <td>
                    {% assign notes_section = post.content | split: '### Notes' %}
                    {% if notes_section.size > 1 %}
                        {% assign notes_content = notes_section[1] %}
                        <ul>
                            {% for line in notes_content | newline_to_br | split: '<br />' %}
                                {% if line contains '-' %}
                                    <li>{{ line | remove: '-' | strip }}</li>
                                {% endif %}
                            {% endfor %}
                        </ul>
                    {% else %}
                        <p>No notes available.</p>
                    {% endif %}
                </td>
            </tr>
        {% endfor %}
    </tbody>
</table>
