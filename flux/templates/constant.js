'use strict';

var React = require('react');
var keyMirror = require('keymirror');

var <%= _.classify(name) %>Constants = keyMirror({
    <%= name.toUpperCase() %>_CONSTANT: null
});

module.exports = <%= _.classify(name) %>Constants;
