{% extends './base.swig' %}

{% block layout %}
    {# Navigation Bar #}
    {% include '../partials/navbar.swig' %}
    {# Provides layout level markup #}
    <div class="one-column">
        <div class="main-container">
            <div class="messages">
                {# Include flash messages #}
                {% include '../partials/messages.swig' %}
            </div>
            <div class="content">
                {% block content %}
                {% endblock %}
            </div>
        </div>
    </div>
{% endblock %}
