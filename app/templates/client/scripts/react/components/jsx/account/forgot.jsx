/**
*   Forgot Component Description
*/

'use strict';

var React = require('react');
var OneColumnLayout = require('../layouts/one-column.jsx');
var userActions = require('../../actions/user')

var ForgotComponent = React.createClass({
    render: function() {
        return (
            /* jshint ignore:start */
            <OneColumnLayout>
                <h3>Forgot Password</h3>
                <form method="post" action="/forgot" onSubmit={this.handleSubmit}>
                    <p>Enter your email address below and we will send you password reset instructions.</p>

                    <p>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" autofocus="autofocus" />
                    </p>

                    <button>Reset Password</button>
                </form>
            </OneColumnLayout>
            /* jshint ignore:end */
        );
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var form = e.currentTarget;
        userActions.forgot(form);
    }
});

module.exports = ForgotComponent;
