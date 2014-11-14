{% extends '../layouts/one-column.swig' %}

{% block content %}
<h3>Complete Social Sign up</h3>
<form id="signup-form" method="post">

    <input type="hidden" name="_csrf" value="{{_csrf}}" />

    <input type="hidden" name="firstName" value="{{newUser.firstName}}" />
    <input type="hidden" name="lastName" value="{{newUser.lastName}}" />
    <input type="hidden" name="gender" value="{{newUser.gender}}" />
    <input type="hidden" name="picture" value="{{newUser.picture}}" />
    <input type="hidden" name="location" value="{{newUser.location}}" />

    {% if newUser.facebook %}
    <input type="hidden" name="facebook" value="{{newUser.facebook}}" />
    <input type="hidden" name="facebookToken" value="{{newUser.facebookToken}}" />
    {% endif %}

    {% if newUser.twitter %}
    <input type="hidden" name="twitter" value="{{newUser.twitter}}" />
    <input type="hidden" name="twitterToken" value="{{newUser.twitterToken}}" />
    <input type="hidden" name="twitterSecret" value="{{newUser.twitterSecret}}" />
    {% endif %}

    <p>
        <label for="username">Username:</label>
        <input type="username" name="username" id="username" placeholder="Username" autofocus="autofocus" value="{{newUser.username}}" />
    </p>

    <p>
        <label for="email">Email:</label>
        <input type="text" name="email" id="email" placeholder="Email" value="{{newUser.email}}" />
    </p>

    <button>Signup</button>
</form>
{% endblock %}
