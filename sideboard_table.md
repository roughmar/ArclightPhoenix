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
                    {% assign cards_in_start = post.content | split: "### Cards In" | last %}
                    {% assign cards_in_content = cards_in_start | split: "### Cards Out" | first %}
                    <ul>
                        {% for line in cards_in_content | newline_to_br | split: '<br />' %}
                            {% if line contains '-' %}
                                <li>{{ line | remove: '-' | strip }}</li>
                            {% endif %}
                        {% endfor %}
                    </ul>
                </td>
                <td>
                    {% assign cards_out_start = post.content | split: "### Cards Out" | last %}
                    {% assign cards_out_content = cards_out_start | split: "### Notes" | first %}
                    <ul>
                        {% for line in cards_out_content | newline_to_br | split: '<br />' %}
                            {% if line contains '-' %}
                                <li>{{ line | remove: '-' | strip }}</li>
                            {% endif %}
                        {% endfor %}
                    </ul>
                </td>
                <td>
                    {% assign notes_content = post.content | split: "### Notes" | last %}
                    <ul>
                        {% for line in notes_content | newline_to_br | split: '<br />' %}
                            {% if line contains '-' %}
                                <li>{{ line | remove: '-' | strip }}</li>
                            {% endif %}
                        {% endfor %}
                    </ul>
                </td>
            </tr>
        {% endfor %}
    </tbody>
</table>
