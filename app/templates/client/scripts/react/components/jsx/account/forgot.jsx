/**
*   Forgot Component Description
*/

'use strict';

var React = require('react');
var OneColumnLayout = require('../layouts/one-column');

var ForgotComponent = React.createClass({
    statics: {
        layout: OneColumnLayout
    },
    render: function() {
        return (
            /* jshint ignore:start */
            <div>
                <h3>Forgot Password</h3>
                <form method="post" action="/forgot">
                    <p>Enter your email address below and we will send you password reset instructions.</p>

                    <p>
                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" autofocus="autofocus" />
                    </p>

                    <button>Reset Password</button>
                </form>
            </div>
            /* jshint ignore:end */
        );
    }
});

module.exports = ForgotComponent;
