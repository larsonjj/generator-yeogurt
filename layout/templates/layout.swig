{% extends '<%= rootDir %>base.swig' %}

{# Provides layout level markup #}
{% block layout %}
<div class="layout-wrapper <% if (name) { %><%= _.slugify(name.toLowerCase()) %><% } %>">
  {% block <%= _.slugify(name.toLowerCase()) %> %}{% endblock %}
</div>
{% endblock %}
