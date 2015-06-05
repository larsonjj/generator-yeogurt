{% macro content() %}
<div class="<%= _.slugify(name.toLowerCase()) %>">
  <p>This is an example paragraph for the <%= _.slugify(name.toLowerCase()) %> module</p>
</div>
{% endmacro %}
