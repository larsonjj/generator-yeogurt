/**
*   Reset Component Description
*/

'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/default');
var userActions = require('../../actions/user');

// Alias for React DOM
var DOM = React.DOM;

var ResetComponent = React.createClass({
    render: function() {
        return (
            DOM(DefaultLayout, null,
                DOM('h3', null, 'Reset Password'),
                DOM('form', {
                        method: 'post',
                        onSubmit: this.handleSubmit
                    },
                    DOM('p', null,
                        DOM('label', {
                            htmlFor: 'password'
                        }, 'New Password'),
                        DOM('input', {
                            type: 'password',
                            name: 'password',
                            defaultValue: '',
                            placeholder: 'New password',
                            autofocus: 'autofocus'
                        })
                    ),

                    DOM('p', null,
                        DOM('label', {
                            htmlFor: 'confirm'
                        }, 'Confirm Password'),
                        DOM('input', {
                            type: 'password',
                            name: 'confirm',
                            defaultValue: '',
                            placeholder: 'Confirm password'
                        })
                    ),

                    DOM('button', null, 'Change Password')
                )
            )
        );
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var form = e.currentTarget;
        userActions.reset(form);
    }
});

module.exports = ResetComponent;
