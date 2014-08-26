{# [dash:data]
    {
        "status": "development",
        "category": "page",
        "label": "Home",
        "link": "../../index.html"
    }
    [/dash] #}
{# Homepage Markup #}
{% extends './layouts/base.swig' %}

{% block content %}
<div class="main-container">
    <h1>Welcome to Yeogurt!</h1>
    <p>
        Take a look at the <a href="https://github.com/larsonjj/generator-yeogurt#yeogurt-generator---">documentation</a> and start mixing up something awesome.
    </p>
    <p>
        <img src="/images/yeogurt-swirl.png" width="75px" class="logo" />
    </p>
    <p class="links">
        <a href="/docs/dashboard/index.html">Dashboard</a>
    </p>
</div>
<code class="version">v0.10.0</code>
{% endblock %}