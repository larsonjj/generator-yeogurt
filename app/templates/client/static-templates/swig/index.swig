{# Homepage Markup #}<% if (useDashboard) { %>
{# [dash:data]
  {
    "status": "development",
    "category": "page",
    "label": "Home",
    "link": "../../index.html"
  }
  [/dash] #}<% } %>
{% extends '../layout/base.swig' %}

{% block content %}
<div class="main-container">
  <div class="yeogurt-info">
    <h1>Welcome to Yeogurt!</h1>
    <p>
      Take a look at the <a href="https://github.com/larsonjj/generator-yeogurt#yeogurt-generator---">documentation</a> and start mixing up something awesome.
    </p>
    <p>
      <img src="/assets/images/yeogurt-swirl.png" width="75px" class="logo" />
    </p><% if (useDashboard || useJsdoc || useKss) { %>
    <p class="links"><% if (useDashboard) { %>
      <a href="/docs/dashboard/index.html">Dashboard</a><% } %><% if (useKss) { %>
      <a href="/docs/styleguide/index.html">Styleguide</a><% } %><% if (useJsdoc) { %>
      <a href="/docs/jsdoc/index.html">API</a><% } %>
    </p><% } %>
  </div>
</div>
<code class="version">v<%= pkg.version %></code>
{% endblock %}
