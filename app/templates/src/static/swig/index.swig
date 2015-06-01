{# Homepage Markup #}<% if (useDashboard) { %>
{# [dash:data]
  {
    "status": "development",
    "category": "page",
    "label": "Home",
    "link": "../../index.html"
  }
  [/dash] #}<% } %>
{% extends '_layouts/base.swig' %}

{% block content %}
<div class="main-container">
  <div class="yeogurt-info">
    <h1>Welcome to Yeogurt!</h1>
    <p>
      Take a look at the <a href="https://github.com/larsonjj/generator-yeogurt#yeogurt-generator---">documentation</a> and start mixing up something awesome.
    </p>
    <p>
      <img src="/images/yeogurt-swirl.png" width="75px" class="logo" />
    </p>
  </div>
</div>
<code class="version">v<%= pkg.version %></code>
{% endblock %}
