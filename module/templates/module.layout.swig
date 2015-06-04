{% extends '<%= rootDir %>/_layouts/base.swig' %}

{# Provides layout level markup #}
{% block layout %}
<div class="layout-wrapper <% if (name) { %><%= _.slugify(name.toLowerCase()) %><% } %>">
  {% block content %}{% endblock %}
</div>
{% endblock %}
