/**
*   App Spec Test
*/



'use strict';

var app = require('../../client/scripts/app');

describe('app', function() {

    it('Should run a few assertions', function() {
        // Insert <div id="app-wrapper"> within the <body> as the first child
        // This will ensure correct testing of the main.jsx React component
        var appWrapper = document.createElement('div');
        appWrapper.id = 'app-wrapper';
        document.body.insertBefore(appWrapper, document.body.firstChild);
    });

});
