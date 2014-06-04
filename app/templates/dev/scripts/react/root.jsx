/** @jsx React.DOM */

/**
*   Root Component Description
*/

<% if (jsOption === 'RequireJS') { %>define(function (require) {
    'use strict';

    var React = require('react');

    var RootComponent = React.createClass({
        // Add react backbone plugin
        mixin: [Backbone.React.Component.mixin],
        render: function() {
            return (
                <div>
                    <div className="main-container">
                                <h1>Welcome to Yeogurt!</h1>
                        <p>
                            Take a look at the <a href="https://github.com/larsonjj/generator-yeogurt#yeogurt-generator---">documentation</a> and start mixing up something awesome.
                        </p>
                        <p>
                            <img src="images/yeogurt-swirl.png" width="75px" className="logo" />
                        </p>
                    </div>
                    <code className="version">v<%= pkg.version %></code>
                </div>
            );
        }
    });

    return RootComponent;
});
<% } else if (jsOption === 'Browserify') { %>var React = require('react');

var RootComponent = React.createClass({
    // Add react backbone plugin
    mixin: [Backbone.React.Component.mixin],
    render: function() {
        return (
            <div>
                <div className="main-container">
                    <h1>Welcome to Yeogurt!</h1>
                    <p>
                        Take a look at the <a href="https://github.com/larsonjj/generator-yeogurt#yeogurt-generator---">documentation</a> and start mixing up something awesome.
                    </p>
                    <p>
                        <img src="images/yeogurt-swirl.png" width="75px" className="logo" />
                    </p>
                </div>
                <code className="version">v<%= pkg.version %></code>
            </div>
        );
    }
});

module.exports = RootComponent;<% } %>
