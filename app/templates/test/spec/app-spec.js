/**
*   App Spec Test
*/

<% if (jsOption === 'RequireJS') { %>'use strict';

define(function(require) {
    var app = require('app');

    describe('just checking', function() {

        it('works for app', function() {
            var msg = 'Welcome to yeogurt!';
            <% if (jsTemplate === 'React') { %>
            // Insert <div id="app-wrapper"> within the <body> as the first child
            // This will ensure correct testing of the home.jsx React component
            var appWrapper = document.createElement('div');
            appWrapper.id = 'app-wrapper';
            document.body.insertBefore(appWrapper, document.body.firstChild);
            <% } %>
            var message = app.init(msg);
            <% if (testFramework === 'Jasmine') { %>
            expect(message).toMatch(/initialized/);<% } else if (testFramework === 'Mocha + Chai') { %>expect(message).to.match(/initialized/);<% } %>
        });

    });

});<% } else if (jsOption === 'Browserify') { %>
'use strict';

var app = require('../../dev/scripts/app');

describe('just checking', function() {

    it('works for app', function() {
        var msg = 'Welcome to yeogurt!';
        <% if (jsTemplate === 'React') { %>
        // Insert <div id="app-wrapper"> within the <body> as the first child
        // This will ensure correct testing of the home.jsx React component
        var appWrapper = document.createElement('div');
        appWrapper.id = 'app-wrapper';
        document.body.insertBefore(appWrapper, document.body.firstChild);
        <% } %>
        var message = app.init(msg);

        <% if (testFramework === 'Jasmine') { %>
        expect(message).toMatch(/initialized/);<% } else if (testFramework === 'Mocha + Chai') { %>expect(message).to.match(/initialized/);<% } %>
    });

});
<% } else { %>'use strict';

describe('just checking', function() {

    it('works for app', function() {
        var msg = 'Welcome to yeogurt!';
        <% if (jsTemplate === 'React') { %>
        // Insert <div id="app-wrapper"> within the <body> as the first child
        // This will ensure correct testing of the home.jsx React component
        var appWrapper = document.createElement('div');
        appWrapper.id = 'app-wrapper';
        document.body.insertBefore(appWrapper, document.body.firstChild);
        <% } %>
        var message = app.init(msg);

        <% if (testFramework === 'Jasmine') { %>
        expect(message).toMatch(/initialized/);<% } else if (testFramework === 'Mocha + Chai') { %>expect(message).to.match(/initialized/);<% } %>
    });

});
<% } %>