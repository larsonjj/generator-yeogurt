<% if (useDashboard) { %>{# [dash:data]
    {
        "status": "development",
        "category": "tag",
        "label": "Welcome Message",
        "link": "../dashboard/generated/h1.html"
    }
    [/dash] #}
{# [dash:swig]
    {{ h1.content() }}
    [/dash] #}
<% } %>{#
    h1 Element
    Defines mixin for creating h1 tags
#}
{% macro content(content) %}

    {% set content          = content           || {}               %}
    {% set content.text     = content.text      || 'Default Text'   %}

    <h1 class="heading">{{ content.text }}</h1>

{% endmacro %}