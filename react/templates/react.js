/** @jsx React.DOM */

/**
*   <%= _.classify(name) %> Component Description
*/

<% if (jsOption === 'RequireJS') { %>define(function (require) {
    'use strict';

    var React = require('react');

    var <%= _.classify(name) %>Component = React.createClass({
        // Add react backbone plugin
        mixin: [Backbone.React.Component.mixin],
        render: function() {
            return (
                <div>
                    <p ref="p"><%= name.toLowerCase() %> component</p>
                </div>
            );
        }
    });

    return <%= _.classify(name) %>Component;
});<% } else if (jsOption === 'Browserify') { %>'use strict';

var React = require('react');
var backboneMixin = require('backbone-react-component');

var <%= _.classify(name) %>Component = React.createClass({
    // Add react backbone plugin
    mixin: [backboneMixin.mixin],
    render: function() {
        return (
            <div>
                <p ref="p"><%= name.toLowerCase() %> component</p>
            </div>
        );
    }
});


module.exports = <%= _.classify(name) %>Component;
<% } %>