/** @jsx React.DOM */

/**
*   <%= _.classify(name) %> Component Description
*/

'use strict';

var React = require('react');
var backboneMixin = require('backbone-react-component');

var <%= _.classify(name) %>Component = React.createClass({
    // Add react backbone mixin
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
