/*jshint newcap:false */

/**
*   <%= _.classify(name) %> Component Description
*/

'use strict';

var React = require('react');

var <%= _.classify(name) %> = React.createClass({displayName: '<%= _.classify(name) %>',
    render: function() {
        return (
            React.DOM.div(null,
                React.DOM.p({ref: 'p'}, '<%= _.classify(name) %> component')
            )
        );
    }
});

module.exports = <%= _.classify(name) %>;
