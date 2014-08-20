{# <%= name %> <%= view %> #}<% if (view === 'module') { %>
<% if (useDashboard) { %>{# [dash:data]
    {
        "status": "development",
        "category": "module",
        "label": "<%= _.titleize(name) %>",
        "link": "../dashboard/generated/<%= name %>.html"
    }
    [/dash] #}
{# [dash:swig]
    {% import 'client/templates/<%= folder ? cleanFolderPath(folder) + '/' : ''%><%= name || 'example' %>.swig' as <%= _.camelize(name) || 'example' %> %}

    {{ <%= _.camelize(name) || 'example' %>.content() }}
    [/dash] #}

<% } %>{% macro content() %}
    <div class="<%= _.slugify(name.toLowerCase()) %>"></div>
        <p>This is an example paragraph</p>
{% endmacro %}<% } else if (view === 'layout') { %>
{% extends 'base.swig' %}

{% block layout %}

    {# Provides layout level markup #}
    <div class="layout-wrapper"><% if (name) { %>(class="<%= _.slugify(name.toLowerCase()) %>")<% } %></div>
        {% block content %}{% endblock %}

{% endblock %}
<% } else if (view === 'page') { %><% if (useDashboard) { %>
{# [dash:data]
    {
        "status": "development",
        "category": "page",
        "label": "<%= _.titleize(name) %>",
        "link": "../<%= _.slugify(name.toLowerCase()) %>.html"
    }
    [/dash] #}
<% } %><% if (!useTemplate) { %>
{% extends './layouts/base.swig' %}<% } else { %>
{% extends './layouts/<%= useTemplate %>.swig' %}<% } %>

{# use the 'block body' if you need to set a page-level class on the <body> tag #}
{% block body %}
    {% set bodyClass = '<%= _.slugify(name.toLowerCase()) %>' %}
    {% parent %}
{% endblock %}

{% block content %}
    {{ heading.content({type:'h1', class:'heading', text: 'Sample Heading'}) }}
    <p><%= name || 'empty' %> page</p>
{% endblock %}<% } %>
