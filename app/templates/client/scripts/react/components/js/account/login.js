/**
*   Login Component Description
*/

'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/default');
var Link = require('../modules/link');
var userActions = require('../../actions/user');

// Alias for React DOM
var DOM = React.createElement;


var LoginComponent = React.createClass({
    render: function() {
        return (
            DOM(DefaultLayout, null,
                DOM('h3', null, 'Sign in'),
                DOM('form', {
                        method: 'post',
                        action: '/login',
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
                            placeholder: 'Enter your email',
                            autofocus: 'autofocus'
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

                    DOM('button', null, 'Login'),
                    DOM('p', null, DOM(Link, {
                        url: '/forgot'
                    }, 'Forgot your password?'))
                )
            )
        );
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var form = e.currentTarget;
        userActions.login(form);
    }
});

module.exports = LoginComponent;
