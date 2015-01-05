/**
*   Reset Component Description
*/

'use strict';

var React = require('react');
var OneColumnLayout = require('../layouts/one-column');

var ResetComponent = React.createClass({
    statics: {
        layout: OneColumnLayout
    },
    render: function() {
        return (
            /* jshint ignore:start */
            <div>
                <h3>Reset Password</h3>
                <form method="post">
                    <p>
                        <label for="password">New Password</label>
                        <input type="password" name="password" value="" placeholder="New password" autofocus="autofocus" />
                    </p>

                    <p>
                        <label for="confirm">Confirm Password</label>
                        <input type="password" name="confirm" value="" placeholder="Confirm password" />
                    </p>

                    <button>Change Password</button>
                </form>
            </div>
            /* jshint ignore:end */
        );
    }
});

module.exports = ResetComponent;
