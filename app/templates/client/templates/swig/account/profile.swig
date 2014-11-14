{% extends '../layouts/one-column.swig' %}

{% block content %}

<img src="{{publicInfo.picture || 'https://gravatar.com/avatar/?s=200&d=retro'}}" alt="profile image" />

<p>
    {% if publicInfo.firstName && publicInfo.lastName %}
        <h3>{{publicInfo.firstName}} {{publicInfo.lastName}}</h3>
    {% elseif publicInfo.firstName %}
        <h3>{{publicInfo.firstName}}</h3>
    {% endif %}
    <h4>{{publicInfo.username}}</h4>
</p>

<hr>

<p>Email: {{publicInfo.email}}</p>

{% if publicInfo.location %}
<p>Location: {{publicInfo.location}}</p>

{% if publicInfo.gender %}
<p>Gender: {{publicInfo.gender}}</p>

{% if publicInfo.website %}
<p>Website: {{publicInfo.website}}</p>

{% endblock %}
