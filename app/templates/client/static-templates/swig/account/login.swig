{% extends '../layouts/default.swig' %}

{% block content %}

<h3>Sign in</h3>
<form method="post" action="/login">
    <input type="hidden" name="_csrf" value="{{_csrf}}" />

    <p>
        <label for="username">Username or Email:</label>
        <input type="text" name="username" id="username" placeholder="Enter your username or email" autofocus="autofocus" />
    </p>

    <p>
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Password" />
    </p>

    <button>Login</button>
    <p><a href="/forgot">Forgot your password?</a></p>

    <hr/>

    <p><a href="/auth/facebook">Sign in with Facebook</a></p>
    <p><a href="/auth/twitter">Sign in with Twitter</a></p>
</form>
{% endblock %}
