<% if (useDashboard) { %>{# [dash:data]
    {
        "status": "development",
        "category": "page",
        "label": "Home",
        "link": "../index.html"
    }
    [/dash] #}
<% } %>{# Homepage Markup #}
{% extends './layouts/base.swig' %}

{# use the 'block body' if you need to set a page-level class on the <body> tag #}
{% block body %}
    {% set bodyClass = 'homepage' %}
    {% parent %}
{% endblock %}

{% block content %}
<div class="main-container">
    <h1>Welcome to Yeogurt!</h1>
    <p>
        Take a look at the <a href="https://github.com/larsonjj/generator-yeogurt#yeogurt-generator---">documentation</a> and start mixing up something awesome.
    </p>
    <p>
        <img src="images/yeogurt-swirl.png" width="75px" class="logo" />
    </p><% if (useDashboard || useJsdoc || useKss) { %>
    <p class="links">
        <% if (useDashboard) { %><a href="dashboard/index.html">Dashboard</a><% } %><% if (useKss) { %>
        <a href="docs/styleguide/index.html">Styleguide</a><% } %><% if (useJsdoc) { %>
        <a href="docs/api/index.html">API</a><% } %>
    </p><% } %>
</div>
<code class="version">v<%= pkg.version %></code>
{% endblock %}