{% extends '<%= rootDir %><%= useLayout %>.swig' %}

{% block content %}
<p><%= _.slugify(name.toLowerCase()) %> page</p>
{% endblock %}
