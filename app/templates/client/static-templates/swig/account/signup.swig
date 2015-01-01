{% extends '../layouts/one-column.swig' %}

{% block content %}

<h3>Sign up</h3>
<form id="signup-form" method="post" action="/user">
    <input type="hidden" name="_csrf" value="{{_csrf}}" />

    <p>
        <label for="username">Username:</label>
        <input type="username" name="username" id="username" placeholder="Username" autofocus="autofocus" />
    </p>

    <p>
        <label for="email">Email:</label>
        <input type="text" name="email" id="email" placeholder="Email" />
    </p>

    <p>
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Password" />
    </p>

    <p>
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
    </p>

    <button>Signup</button>
</form>

{% endblock %}
