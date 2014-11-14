{% extends '../layouts/one-column.swig' %}

{% block content %}

<h3>Forgot Password</h3>
<form method="post" action="/forgot">
    <input type="hidden" name="_csrf" value="{{_csrf}}" />

    <p>Enter your Username or email address below and we will send you password reset instructions.</p>

    <p>
        <label for="username">Username or Email:</label>
        <input type="username" name="username" id="username" placeholder="Enter your username or email" autofocus="autofocus" />
    </p>

    <button>Reset Password</button>
</form>

{% endblock %}
