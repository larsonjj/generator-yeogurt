{% extends './base.swig' %}

{% block layout %}
    {# Navigation Bar #}
    {% include '../modules/navbar.swig' %}
    {# Provides layout level markup #}
    <div class="one-column">
        <div class="main-container">
            {# Include flash messages #}
            {% include '../modules/messages.swig' %}
            {% block content %}
            {% endblock %}
        </div>
    </div>
{% endblock %}
