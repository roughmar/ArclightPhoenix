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
                    {% assign content = post.content | split: '### Cards In' %}
                    {% assign cards_in_section = content[1] | split: '### Cards Out' %}
                    {% assign cards_in = cards_in_section[0] %}
                    <ul>
                        {% for line in cards_in | newline_to_br | split: '<br />' %}
                            {% if line contains '-' %}
                                <li>{{ line | remove: '-' | strip }}</li>
                            {% endif %}
                        {% endfor %}
                    </ul>
                </td>
                <td>
                    {% assign content = post.content | split: '### Cards Out' %}
                    {% assign cards_out_section = content[1] | split: '### Notes' %}
                    {% assign cards_out = cards_out_section[0] %}
                    <ul>
                        {% for line in cards_out | newline_to_br | split: '<br />' %}
                            {% if line contains '-' %}
                                <li>{{ line | remove: '-' | strip }}</li>
                            {% endif %}
                        {% endfor %}
                    </ul>
                </td>
                <td>
                    {% assign notes_section = post.content | split: '### Notes' %}
                    {% if notes_section.size > 1 %}
                        {% assign notes = notes_section[1] %}
                        <ul>
                            {% for line in notes | newline_to_br | split: '<br />' %}
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
