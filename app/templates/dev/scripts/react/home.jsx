/** @jsx React.DOM */

/**
*   Home Component Description
*/

<% if (jsOption === 'RequireJS') { %>define(function (require) {
    'use strict';

    var React = require('react');

    var HomeComponent = React.createClass({
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
                        </p><% if (useJsdoc || useKss) { %>
                        <p className="links"><% if (useKss) { %>
                            <a href="docs/styleguide/index.html">Styleguide</a><% } %><% if (useJsdoc) { %>
                            <a href="docs/api/index.html">API</a><% } %>
                        </p><% } %>
                    </div>
                    <code className="version">v<%= pkg.version %></code>
                </div>
            );
        }
    });

    return HomeComponent;
});
<% } else if (jsOption === 'Browserify') { %>var React = require('react');
var backboneMixin = require('backbone-react-component');

var HomeComponent = React.createClass({
    // Add react backbone plugin
    mixin: [backboneMixin.mixin],
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
                    </p><% if (useJsdoc || useKss) { %>
                    <p className="links"><% if (useKss) { %>
                        <a href="docs/styleguide/index.html">Styleguide</a><% } %><% if (useJsdoc) { %>
                        <a href="docs/api/index.html">API</a><% } %>
                    </p><% } %>
                </div>
                <code className="version">v<%= pkg.version %></code>
            </div>
        );
    }
});

module.exports = HomeComponent;<% } %>
