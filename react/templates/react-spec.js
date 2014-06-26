/** @jsx React.DOM */

/* jshint -W024 */
/* jshint expr:true */

/**
*   <%= _.classify(name) %> Spec Description
*/

<% if (jsOption === 'RequireJS') { %>define(function(require) {
    'use strict';

    var <%= _.classify(name) %> = require('jsx!views/<%= _.slugify(name) %>');
    var ReactTestUtils = require('react').addons.TestUtils;

    var reactRender;

    beforeEach(function() {
        reactRender = ReactTestUtils.renderIntoDocument;
    });

    describe('Testing React Component', function() {
        it('Check Text Assignment', function() {
            var app;
            app = new <%= _.classify(name) %>();
            reactRender(app);
            <% if (testFramework === 'Mocha + Chai') { %>
            expect(app.refs.p).to.exist;
            return expect(app.refs.p.getDOMNode().innerHTML).to.equal('<%= name.toLowerCase() %> component');<% } else if (testFramework === 'Jasmine') { %>expect(app.refs.p).toBeDefined();
            return expect(app.refs.p.getDOMNode().innerHTML).toEqual('<%= name.toLowerCase() %> component');<% } %>
        });
    });

});<% } else if (jsOption === 'Browserify') { %>'use strict';

var <%= _.classify(name) %> = require('../../../dev/scripts/views/<%= _.slugify(name) %>.jsx');

var ReactTestUtils;
var reactRender;

beforeEach(function() {
    ReactTestUtils = require('react/addons').addons.TestUtils;
    reactRender = ReactTestUtils.renderIntoDocument;
});

describe('Testing React Component', function() {
    it('Check Text Assignment', function() {
        var app;
        app = new <%= _.classify(name) %>();
        reactRender(app);
        <% if (testFramework === 'Mocha + Chai') { %>
        expect(app.refs.p).to.exist;
        return expect(app.refs.p.getDOMNode().innerHTML).to.equal('<%= name.toLowerCase() %> component');<% } else if (testFramework === 'Jasmine') { %>expect(app.refs.p).toBeDefined();
        return expect(app.refs.p.getDOMNode().innerHTML).toEqual('<%= name.toLowerCase() %> component');<% } %>
    });
});
<% } %>