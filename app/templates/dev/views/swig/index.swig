<% if (useDashboard) { %>{# [dash:data]
    {
        "status": "development",
        "category": "page",
        "label": "Home",
        "link": "../index.html"
    }
    [/dash] #}
<% } %>{# Homepage Markup #}
{% extends './templates/base.swig' %}

{# use the 'block body' if you need to set a page-level class on the <body> tag #}
{% block body %}
    {% set bodyClass = 'homepage' %}
    {% parent %}
{% endblock %}

{% block content %}
    {{ heading.content({type:'h1', class:'heading', text: 'Test Heading'}) }}
    <p>
        Example page
    </p>
{% endblock %}