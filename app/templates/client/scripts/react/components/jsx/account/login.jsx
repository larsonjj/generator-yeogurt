/**
*   Login Component Description
*/

'use strict';

var React = require('react');
var OneColumnLayout = require('../layouts/one-column');
var Link = require('../modules/link');


var LoginComponent = React.createClass({
    statics: {
        layout: OneColumnLayout
    },
    render: function() {
        return (
            /* jshint ignore:start */
            <div>
                <h3>Sign in</h3>
                <form method="post" action="/login">
                    <p>
                        <label for="email">Email:</label>
                        <input type="text" name="email" id="email" placeholder="Enter your email" autofocus="autofocus" />
                    </p>

                    <p>
                        <label for="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Password" />
                    </p>

                    <button>Login</button>
                    <p><Link url="/forgot">Forgot your password?</Link></p>
                </form>
            </div>
            /* jshint ignore:end */
        );
    }
});

module.exports = LoginComponent;
