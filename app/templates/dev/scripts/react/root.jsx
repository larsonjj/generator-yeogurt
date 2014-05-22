<% if (jsOption === 'RequireJS') { %>/** @jsx React.DOM */

define(function (require) {
    'use strict';

    var React = require('react');

    var RootComponent = React.createClass({
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
<% } else if (jsOption === 'Browserify') { %>/** @jsx React.DOM */

var React = require('react');

var RootComponent = React.createClass({
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
