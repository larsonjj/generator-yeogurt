<% if (useDashboard) { %>{# [dash:data]
    {
        "status": "development",
        "category": "page",
        "label": "Home",
        "link": "../index.html"
    }
    [/dash] #}
<% } %>{# Homepage Markup #}
{% extends './templates/base.swig' %}

{# use the 'block body' if you need to set a page-level class on the <body> tag #}
{% block body %}
    {% set bodyClass = 'homepage' %}
    {% parent %}
{% endblock %}

{% block content %}
<div class="main-container">
    {{ heading.content({type:'h1', class:'heading', text: 'Welcome to Yeogurt!'}) }}
    <p>
        Take a look at the <a href="https://github.com/larsonjj/generator-yeogurt#yeogurt-generator---">documentation</a> and start mixing up something awesome.
    </p>
    <p>
        <img src="images/yeogurt-swirl.png" width="75px" class="logo" />
    </p><% if (useDashboard || useDocker || useKss) { %>
    <p class="links">
        <% if (useDashboard) { %><a href="dashboard/index.html">Dashboard</a><% } %><% if (useKss) { %>
        <a href="docs/styleguide/index.html">Styleguide</a><% } %><% if (useDocker) { %>
        <a href="docs/api/README.md.html">API</a><% } %>
    </p><% } %>
</div>
<code class="version">v<%= pkg.version %></code>
{% endblock %}