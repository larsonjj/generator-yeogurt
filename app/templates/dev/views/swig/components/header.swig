<% if (useDashboard) { %>{# [dash:data]
    {
        "status": "development",
        "category": "component",
        "label": "Header",
        "link": "../dashboard/generated/header.html"
    }
    [/dash] #}
{# [dash:swig]
    {{ header.content() }}
    [/dash] #}<% } %>
{#
    Header Mixin
    Define markup that makes up header component
#}
{% macro content() %}
<header>
    <p>This is an example header</p>
</header>
{% endmacro %}