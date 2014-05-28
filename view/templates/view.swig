{# <%= name %> <%= view %> #}<% if (view === 'component') { %>
<% if (useDashboard) { %>{# [dash:data]
    {
        "status": "development",
        "category": "<%= view %>",
        "label": "<%= name %>",
        "link": "../dashboard/generated/<%= name %>.html"
    }
    [/dash] #}
{# [dash:swig]
    +<%= name || 'example' %>()
    [/dash] #}

<% } %>mixin <%= name || 'example' %>()
    <div class="<%= _.slugify(name.toLowerCase()) %>"></div>
        <p>This is an example paragraph</p><% } else if (view === 'template') { %>
{% extends 'base.swig' %}

{% block template %}
    {# Define header block from base template #}
    {% block header %}
        {{ header.content() }}
    {% endblock %}

    {# Provides template level styling #}
    <div id="template-wrapper" class="template-wrapper"><% if (name) { %>(class="<%= _.slugify(name.toLowerCase()) %>")<% } %></div>
        {% block content %}{% endblock %}

    {# Define footer block from base template #}
    {% block footer %}
        {{ footer.content() }}
    {% endblock %}
{% endblock %}
<% } else if (view === 'page') { %><% if (useDashboard) { %>
{# [dash:data]
    {
        "status": "development",
        "category": "<%= view ? view : 'page' %>",
        "label": "<%= _.titleize(name) %>",
        "link": "<% if (view === 'page') { %>../<%= _.slugify(name.toLowerCase()) %>.html<% } else { %>../views/<%= view %>s/<%= _.slugify(name.toLowerCase()) %>.html<% } %>"
    }
    [/dash] #}
<% } %><% if (!useTemplate) { %>{% extends './templates/base.swig' %}<% } else { %>{% extends './templates/<%= useTemplate %>.swig' %}<% } %>

{# use the 'block body' if you need to set a page-level class on the <body> tag #}
{% block body %}
    {% set bodyClass = '<%= _.slugify(name.toLowerCase()) %>' %}
    {% parent %}
{% endblock %}

{% block content %}
    {{ heading.content({type:'h1', class:'heading', text: 'Sample Heading'}) }}
    <p><%= name || 'empty' %> page<% } %></p>
{% endblock %}
