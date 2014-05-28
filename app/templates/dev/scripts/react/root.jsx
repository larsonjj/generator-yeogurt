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
                    <h1>Backbone App</h1>
                    <p>Hooray! your Backbone App with React is now running!</p>
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
                <h1>Backbone App</h1>
                <p>Hooray! your Backbone App with React is now running!</p>
            </div>
        );
    }
});

module.exports = RootComponent;<% } %>
