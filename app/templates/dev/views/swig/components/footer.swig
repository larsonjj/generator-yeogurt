<% if (useDashboard) { %>{# [dash:data]
    {
        "status": "development",
        "category": "component",
        "label": "Footer",
        "link": "../dashboard/generated/footer.html"
    }
    [/dash] #}
{# [dash:swig]
    {{ footer.content() }}
    [/dash] #}
<% } %>{#
    Footer Mixin
    Define markup that makes up footer component
#}
{% macro content() %}
<footer>
    <p>This is an example footer</p>
</footer>
{% endmacro %}