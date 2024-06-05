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
                    {% capture content %}
                        {{ post.content | split: "### Cards In" | last }}
                    {% endcapture %}
                    {% capture content %}
                        {{ content | split: "### Cards Out" | first }}
                    {% endcapture %}
                    {% assign cards_in_list = content | newline_to_br | split: '<br />' %}
                    <ul>
                        {% for line in cards_in_list %}
                            {% if line contains '-' %}
                                <li>{{ line | remove: '-' | strip }}</li>
                            {% endif %}
                        {% endfor %}
                    </ul>
                </td>
                <td>
                    {% capture content %}
                        {{ post.content | split: "### Cards Out" | last }}
                    {% endcapture %}
                    {% capture content %}
                        {{ content | split: "### Notes" | first }}
                    {% endcapture %}
                    {% assign cards_out_list = content | newline_to_br | split: '<br />' %}
                    <ul>
                        {% for line in cards_out_list %}
                            {% if line contains '-' %}
                                <li>{{ line | remove: '-' | strip }}</li>
                            {% endif %}
                        {% endfor %}
                    </ul>
                </td>
                <td>
                    {% capture content %}
                        {{ post.content | split: "### Notes" | last }}
                    {% endcapture %}
                    {% assign notes_list = content | newline_to_br | split: '<br />' %}
                    <ul>
                        {% for line in notes_list %}
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
