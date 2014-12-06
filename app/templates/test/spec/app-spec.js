/**
*   App Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

<% if (jsOption === 'requirejs') { %>'use strict';

define(function(require) {
    var app = require('client/scripts/app');

    describe('app', function() {

        it('Should run a few assertions', function() {<% if (jsFramework === 'react') { %>
            // Insert <div id="app-wrapper"> within the <body> as the first child
            // This will ensure correct testing of the index.jsx React component
            var appWrapper = document.createElement('div');
            appWrapper.id = 'app-wrapper';
            document.body.insertBefore(appWrapper, document.body.firstChild);<% } %>
        });

    });

});<% } else if (jsOption === 'browserify') { %>
'use strict';

var app = require('../../client/scripts/app');

describe('app', function() {

    it('Should run a few assertions', function() {<% if (jsFramework === 'react') { %>
        // Insert <div id="app-wrapper"> within the <body> as the first child
        // This will ensure correct testing of the index.jsx React component
        var appWrapper = document.createElement('div');
        appWrapper.id = 'app-wrapper';
        document.body.insertBefore(appWrapper, document.body.firstChild);<% } %>
    });

});
<% } else { %>'use strict';

describe('app', function() {

    it('Should run a few assertions', function() {<% if (jsFramework === 'react') { %>
        // Insert <div id="app-wrapper"> within the <body> as the first child
        // This will ensure correct testing of the index.jsx React component
        var appWrapper = document.createElement('div');
        appWrapper.id = 'app-wrapper';
        document.body.insertBefore(appWrapper, document.body.firstChild);<% } %>
    });

});
<% } %>