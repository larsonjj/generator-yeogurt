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
        it('Should run a few assertions', function() {

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
    it('Should run a few assertions', function() {

    });
});<% } %>
