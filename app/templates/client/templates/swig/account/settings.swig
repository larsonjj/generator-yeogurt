{% extends '../layouts/one-column.swig' %}

{% block content %}

<h3>Account Information</h3>

<form action="/user/{{user.username}}/username" method="post">
    <input type="hidden" name="_csrf" value="{{_csrf}}" />

    <p>
        <label for="username">Username:</label>
        <input type="text" name="username" id="username" value="{{user.username}}" />
    </p>

    <button>Change username</button>
</form>

<h3>Profile Information</h3>

<form action="/user/{{user.username}}/profile?_method=PUT" method="post">
    <input type="hidden" name="_csrf" value="{{_csrf}}" />

    <p>
        <label for="email">Email:</label>
        <input type="text" name="email" id="email" value="{{user.email}}" />
    </p>

    <p>
        <label for="firstName">First Name:</label>
        <input type="text" name="firstName" id="firstName" value="{{user.firstName}}" />
    </p>

    <p>
        <label for="lastName">Last Name:</label>
        <input type="text" name="lastName" id="lastName" value="{{user.lastName}}" />
    </p>

    <p>
        <label for="gender">Gender:</label>
        <label>
            <input type="radio" name="gender" value="male" {% if user.gender == 'male' %}checked="true"{% endif %} /><span>Male</span>
        </label>
        <label>
            <input type="radio" name="gender" value="female" {% if user.gender == 'female' %}checked="true"{% endif %} /><span>Female</span>
        </label>
    </p>

    <p>
        <label for="location">Location:</label>
        <input type="text" name="location" id="location" value="{{user.location}}" />
    </p>

    <p>
        <label for="website">Website:</label>
        <input type="text" name="website" id="website" value="{{user.website}}" />
    </p>

    <p>
        <label for="gravatar">Gravatar:</label><img width="100" height="100" class="profile" src="{{user.picture || 'https://gravatar.com/avatar/?s=200&d=retro'}}" />
    </p>

    <button>Update Profile</button>
</form>

<h3>Change Password</h3>

<form action="/user/{{user.username}}/password?_method=PUT" method="post">
    <input type="hidden" name="_csrf" value="{{_csrf}}" />

    <p>
        <label for="password">New Password:</label>
        <input type="password" name="password" id="password" />
    </p>

    <p>
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" name="confirmPassword" id="confirmPassword" />
    </p>

    <button>Change Password</button>
</form>

<h3>Delete Account</h3>

<p>You can delete your account, but keep in mind this action is irreversible.</p>

<form action="/user/?_method=DELETE" method="post">
    <input type="hidden" name="_csrf" value="{{_csrf}}" />
    <button>Delete my account</button>
</form>

<h3>Linked Accounts</h3>

{% if user.facebook %}
<p><a href="/auth/unlink/facebook">Unlink your Facebook account</a></p>
{% else %}
<p><a href="/auth/facebook">Link your Facebook account</a></p>
{% endif %}

{% if user.twitter %}
<p><a href="/auth/unlink/twitter">Unlink your Twitter account</a></p>
{% else %}
<p><a href="/auth/twitter">Link your Twitter account</a></p>
{% endif %}

{% endblock %}
