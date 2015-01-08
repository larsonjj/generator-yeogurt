/**
 *   Settings Component Description
 */

'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/default');
var userStore = require('../../stores/user');
var userActions = require('../../actions/user');

// Alias for React DOM
var DOM = React.createElement;

var getState = function() {
    return {
        user: userStore.get()
    };
};

var SettingsComponent = React.createClass({
    mixins: [userStore.mixin],
    getInitialState: function() {
        return getState();
    },
    render: function() {
        var user = this.state.user;

        return (
            DOM(DefaultLayout, null,
                DOM('h3', null, 'Profile Information'),

                DOM('form', {
                        id: 'profile-form',
                        action: '/user?_method=PUT',
                        method: 'post',
                        onSubmit: this.handleSettings
                    },

                    DOM('p', null,
                        DOM('label', {
                            htmlFor: 'email'
                        }, 'Email:'),
                        DOM('input', {
                            type: 'text',
                            name: 'email',
                            id: 'email',
                            defaultValue: user.email
                        })
                    ),

                    DOM('p', null,
                        DOM('label', {
                            htmlFor: 'firstName'
                        }, 'First Name:'),
                        DOM('input', {
                            type: 'text',
                            name: 'firstName',
                            id: 'firstName',
                            defaultValue: user.firstName
                        })
                    ),

                    DOM('p', null,
                        DOM('label', {
                            htmlFor: 'lastName'
                        }, 'Last Name:'),
                        DOM('input', {
                            type: 'text',
                            name: 'lastName',
                            id: 'lastName',
                            defaultValue: user.lastName
                        })
                    ),

                    DOM('button', null, 'Update Profile')
                ),

                DOM('h3', null, 'Change Password'),

                DOM('form', {
                        id: 'password-form',
                        action: '/user/password?_method=PUT',
                        method: 'post',
                        onSubmit: this.handlePassword
                    },

                    DOM('p', null,
                        DOM('label', {
                            htmlFor: 'password'
                        }, 'New Password:'),
                        DOM('input', {
                            type: 'password',
                            name: 'password',
                            id: 'password',
                            defaultValue: ''
                        })
                    ),

                    DOM('p', null,
                        DOM('label', {
                            htmlFor: 'confirmPassword'
                        }, 'Confirm Password:'),
                        DOM('input', {
                            type: 'password',
                            name: 'confirmPassword',
                            id: 'confirmPassword',
                            defaultValue: ''
                        })
                    ),

                    DOM('button', null, 'Change Password')
                ),

                DOM('h3', null, 'Delete Account'),

                DOM('p', null, 'You can delete your account, but keep in mind this action is irreversible.'),

                DOM('form', {
                        id: 'delete-form',
                        action: '/user?_method=DELETE',
                        method: 'post',
                        onSubmit: this.handleDestroy
                    },
                    DOM('button', null, 'Delete my account')
                )
            )
        );
    },
    handleSettings: function(e) {
        e.preventDefault();
        var form = e.currentTarget;
        userActions.updateSettings(form);
    },
    handlePassword: function(e) {
        e.preventDefault();
        var form = e.currentTarget;
        userActions.updatePassword(form);
    },
    handleDestroy: function(e) {
        e.preventDefault();
        var form = e.currentTarget;
        userActions.destroy(form);
    },
    /**
     * Event handler for 'change' events coming from store mixins.
     */
    _onChange: function() {
        this.setState(getState());
    }
});

module.exports = SettingsComponent;
