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
                    {% capture cards_in_content %}
                        {{ post.content | split: "### Cards In" | last | split: "### Cards Out" | first }}
                    {% endcapture %}
                    {% if cards_in_content contains "-" %}
                        <ul>
                            {% assign cards_in_list = cards_in_content | newline_to_br | split: "<br />" %}
                            {% for line in cards_in_list %}
                                {% if line contains "-" %}
                                    <li>{{ line | remove: "-" | strip }}</li>
                                {% endif %}
                            {% endfor %}
                        </ul>
                    {% else %}
                        <p>No cards in.</p>
                    {% endif %}
                </td>
                <td>
                    {% capture cards_out_content %}
                        {{ post.content | split: "### Cards Out" | last | split: "### Notes" | first }}
                    {% endcapture %}
                    {% if cards_out_content contains "-" %}
                        <ul>
                            {% assign cards_out_list = cards_out_content | newline_to_br | split: "<br />" %}
                            {% for line in cards_out_list %}
                                {% if line contains "-" %}
                                    <li>{{ line | remove: "-" | strip }}</li>
                                {% endif %}
                            {% endfor %}
                        </ul>
                    {% else %}
                        <p>No cards out.</p>
                    {% endif %}
                </td>
                <td>
                    {% capture notes_content %}
                        {{ post.content | split: "### Notes" | last }}
                    {% endcapture %}
                    {% if notes_content contains "-" %}
                        <ul>
                            {% assign notes_list = notes_content | newline_to_br | split: "<br />" %}
                            {% for line in notes_list %}
                                {% if line contains "-" %}
                                    <li>{{ line | remove: "-" | strip }}</li>
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
