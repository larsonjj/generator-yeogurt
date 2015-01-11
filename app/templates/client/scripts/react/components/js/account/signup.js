'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/default');
var userActions = require('../../actions/user');

// Alias for making element creation less verbose
var DOM = React.createElement;

var SignupComponent = React.createClass({
    render: function() {
        return (
            DOM(DefaultLayout, null,
                DOM('h3', null, 'Sign up'),
                DOM('form', {
                        id: 'signup-form',
                        method: 'post',
                        action: '/user',
                        onSubmit: this.handleSubmit
                    },
                    DOM('p', null,
                        DOM('label', {
                            htmlFor: 'email'
                        }, 'Email:'),
                        DOM('input', {
                            type: 'text',
                            name: 'email',
                            id: 'email',
                            placeholder: 'Email'
                        })
                    ),

                    DOM('p', null,
                        DOM('label', {
                            htmlFor: 'password'
                        }, 'Password:'),
                        DOM('input', {
                            type: 'password',
                            name: 'password',
                            id: 'password',
                            placeholder: 'Password'
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
                            placeholder: 'Confirm Password'
                        })
                    ),

                    DOM('button', null, 'Signup')
                )
            )
        );
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var form = e.currentTarget;
        userActions.signup(form);
    }
});

module.exports = SignupComponent;
