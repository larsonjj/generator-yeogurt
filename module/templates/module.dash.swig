{# Import must be relative from project root #}
{% import '<%= templateFile %>.swig' as <%= _.slugify(name.toLowerCase()) %> %}

{{ <%= _.slugify(name.toLowerCase()) %>.content() }}
