'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/default');
var userActions = require('../../actions/user');

// Alias for making element creation less verbose
var DOM = React.createElement;

var ForgotComponent = React.createClass({
    render: function() {
        return (
            DOM(DefaultLayout, null,
                DOM('h3', null, 'Forgot Password'),
                DOM('form', {
                        method: 'post',
                        action: '/forgot',
                        onSubmit: this.handleSubmit
                    },
                    DOM('p', null, 'Enter your email address below and we will send you password reset instructions.'),

                    DOM('p', null,
                        DOM('label', {
                            htmlFor: 'email'
                        }, 'Email:'),
                        DOM('input', {
                            type: 'email',
                            name: 'email',
                            id: 'email',
                            placeholder: 'Enter your email',
                            autofocus: 'autofocus'
                        })
                    ),

                    DOM('button', null, 'Reset Password')
                )
            )
        );
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var form = e.currentTarget;
        userActions.forgot(form);
    }
});

module.exports = ForgotComponent;
