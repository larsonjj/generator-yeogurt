{% extends './base.swig' %}

{% block layout %}
    {# Navigation Bar #}
    {% include '../partials/navbar.swig' %}
    {# Provides layout level markup #}
    <div class="one-column">
        <div class="main-container">
            {# Include flash messages #}
            {% include '../partials/messages.swig' %}
            {% block content %}
            {% endblock %}
        </div>
    </div>
{% endblock %}
