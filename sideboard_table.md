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
                    {% assign in_cards = post.content | split: "### Cards In" | last | split: "### Cards Out" | first %}
                    <ul>
                        {% for card in in_cards | split: '\n' %}
                            {% if card contains '- ' %}
                                <li>{{ card | remove: '-' | strip }}</li>
                            {% endif %}
                        {% endfor %}
                    </ul>
                </td>
                <td>
                    {% assign out_cards = post.content | split: "### Cards Out" | last | split: "### Notes" | first %}
                    <ul>
                        {% for card in out_cards | split: '\n' %}
                            {% if card contains '- ' %}
                                <li>{{ card | remove: '-' | strip }}</li>
                            {% endif %}
                        {% endfor %}
                    </ul>
                </td>
                <td>
                    {% assign notes = post.content | split: "### Notes" | last %}
                    <ul>
                        {% for note in notes | split: '\n' %}
                            {% if note contains '- ' %}
                                <li>{{ note | remove: '-' | strip }}</li>
                            {% endif %}
                        {% endfor %}
                    </ul>
                </td>
            </tr>
        {% endfor %}
    </tbody>
</table>
