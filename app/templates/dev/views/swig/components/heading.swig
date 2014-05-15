<% if (useDashboard) { %>{# [dash:data]
    {
        "status": "development",
        "category": "helper",
        "label": "Heading",
        "link": "../dashboard/generated/heading.html"
    }
    [/dash] #}
{# [dash:swig]
    {{ heading.content({type:'h1', text:'H1 Header'}) }}
    {{ heading.content({type:'h2', text:'H2 Header'}) }}
    {{ heading.content({type:'h3', text:'H3 Header'}) }}
    {{ heading.content({type:'h4', text:'H4 Header'}) }}
    {{ heading.content({type:'h5', text:'H5 Header'}) }}
    {{ heading.content({type:'h6', text:'H6 Header'}) }}
    [/dash] #}
<% } %>{#
    Heading Element
    Defines mixin for creating header tags (h1, h2, h3, etc)
#}
{% macro content(content) %}

    {% set content          = content           || {}               %}
    {% set content.type     = content.type      || 'h1'             %}
    {% set content.class    = content.class     || '';              %}
    {% set content.text     = content.text      || 'Empty Header';  %}

    {% if content.type === "h1" %}
        <h1 class="{{content.class}}">
            {{ content.text }}
        </h1>
    {% elseif content.type === "h2" %}
        <h2 class="{{content.class}}">
            {{ content.text }}
        </h2>
    {% elseif content.type === "h3" %}
        <h3 class="{{content.class}}">
            {{ content.text }}
        </h3>
    {% elseif content.type === "h4" %}
        <h4 class="{{content.class}}">
            {{ content.text }}
        </h4>
    {% elseif content.type === "h5" %}
        <h5 class="{{content.class}}">
            {{ content.text }}
        </h5>
    {% elseif content.type === "h6" %}
        <h6 class="{{content.class}}">
            {{ content.text }}
        </h6>
    {% endif %}

{% endmacro %}