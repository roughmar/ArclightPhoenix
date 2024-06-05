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
                    {% capture cards_in %}
                        {{ post.content | split: '### Cards In' | last | split: '### Cards Out' | first | newline_to_br }}
                    {% endcapture %}
                    {% if cards_in contains '-' %}
                        <ul>
                            {% assign cards_in_list = cards_in | split: '<br />' %}
                            {% for item in cards_in_list %}
                                {% if item contains '-' %}
                                    <li>{{ item | remove: '-' | strip }}</li>
                                {% endif %}
                            {% endfor %}
                        </ul>
                    {% else %}
                        <p>No cards in.</p>
                    {% endif %}
                </td>
                <td>
                    {% capture cards_out %}
                        {{ post.content | split: '### Cards Out' | last | split: '### Notes' | first | newline_to_br }}
                    {% endcapture %}
                    {% if cards_out contains '-' %}
                        <ul>
                            {% assign cards_out_list = cards_out | split: '<br />' %}
                            {% for item in cards_out_list %}
                                {% if item contains '-' %}
                                    <li>{{ item | remove: '-' | strip }}</li>
                                {% endif %}
                            {% endfor %}
                        </ul>
                    {% else %}
                        <p>No cards out.</p>
                    {% endif %}
                </td>
                <td>
                    {% capture notes %}
                        {{ post.content | split: '### Notes' | last | newline_to_br }}
                    {% endcapture %}
                    {% if notes contains '-' %}
                        <ul>
                            {% assign notes_list = notes | split: '<br />' %}
                            {% for item in notes_list %}
                                {% if item contains '-' %}
                                    <li>{{ item | remove: '-' | strip }}</li>
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
