{% macro content() %}
<div class="<%= _.slugify(name.toLowerCase()) %>">
  <p>This is an example paragraph</p>
</div>
{% endmacro %}
