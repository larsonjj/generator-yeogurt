{# <%= name %> <%= type %> #}<% if (type === 'module') { %>
<% if (useDashboard) { %>{# [dash:data]
    {
        "status": "development",
        "category": "module",
        "label": "<%= _.titleize(name) %>",
        "link": "generated/<%= _.slugify(name.toLowerCase()) %>.html"
    }
    [/dash] #}
{# [dash:swig]
    {% import '<%= templateFile %>.swig' as <%= name || 'example' %> %}

    {{ <%= name || 'example' %>.content() }}
    [/dash] #}

<% } %>{% macro content() %}
    <div class="<%= _.slugify(name.toLowerCase()) %>"></div>
        <p>This is an example paragraph</p>
{% endmacro %}<% } else if (type === 'layout') { %>
{% extends 'base.swig' %}

{# Provides layout level markup #}
<div class="layout-wrapper"><% if (name) { %>(class="<%= _.slugify(name.toLowerCase()) %>")<% } %></div>
    {% block content %}{% endblock %}

<% } else if (type === 'page') { %><% if (useDashboard) { %>
{# [dash:data]
    {
        "status": "development",
        "category": "page",
        "label": "<%= _.titleize(name) %>",
        "link": "<%= rootDir %><%= _.slugify(name.toLowerCase()) %>.html"
    }
    [/dash] #}
<% } %>
{% extends './<%= rootDir.replace('../../', '') %><%= useLayout %>.swig' %}

{% block content %}
    <p><%= name || 'empty' %> page</p>
{% endblock %}<% } %>
