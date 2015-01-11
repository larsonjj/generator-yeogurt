/*jshint newcap:false */

'use strict';

var React = require('react');

var DOM = React.createElement;

var <%= _.classify(name) %> = React.createClass({displayName: '<%= _.classify(name) %>',
    render: function() {
        return (
            DOM('div', null,
                DOM('p', {ref: 'p'}, '<%= _.classify(name) %> component')
            )
        );
    }
});

module.exports = <%= _.classify(name) %>;
