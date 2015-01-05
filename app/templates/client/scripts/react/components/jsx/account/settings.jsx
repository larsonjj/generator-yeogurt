/**
*   Settings Component Description
*/

'use strict';

var React = require('react');
var OneColumnLayout = require('../layouts/one-column');
var userStore = require('../../stores/user');

var getState = function() {
    return {
        user: userStore.get()
    };
};

var SettingsComponent = React.createClass({
    mixins: [userStore.mixin],
    statics: {
        layout: OneColumnLayout
    },
    render: function() {
        return (
            /* jshint ignore:start */
            <div>
                <h3>Profile Information</h3>

                <form id="profile-form" action="/user?_method=PUT" method="post">

                    <p>
                        <label for="email">Email:</label>
                        <input type="text" name="email" id="email" value="{user.email}" />
                    </p>

                    <p>
                        <label for="firstName">First Name:</label>
                        <input type="text" name="firstName" id="firstName" value="{user.firstName}" />
                    </p>

                    <p>
                        <label for="lastName">Last Name:</label>
                        <input type="text" name="lastName" id="lastName" value="{user.lastName}" />
                    </p>

                    <button>Update Profile</button>
                </form>

                <h3>Change Password</h3>

                <form id="password-form" action="/user/password?_method=PUT" method="post">

                    <p>
                        <label for="password">New Password:</label>
                        <input type="password" name="password" id="password" value='' />
                    </p>

                    <p>
                        <label for="confirmPassword">Confirm Password:</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" value='' />
                    </p>

                    <button>Change Password</button>
                </form>

                <h3>Delete Account</h3>

                <p>You can delete your account, but keep in mind this action is irreversible.</p>

                <form id="delete-form" action="/user" method="post">
                    <button>Delete my account</button>
                </form>
            </div>
            /* jshint ignore:end */
        );
    },
    /**
     * Event handler for 'change' events coming from store mixins.
     */
    onChange: function() {
        this.setState(getState());
    }
});

module.exports = SettingsComponent;
