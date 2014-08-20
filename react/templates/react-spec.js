/** @jsx React.DOM */

/* jshint -W024 */
/* jshint expr:true */

/**
*   <%= _.classify(name) %> Spec Description
*/

'use strict';

var <%= _.classify(name) %> = require('<%= folder ? folderCount : ''%>../../../client/scripts/components/<%= folder ? cleanFolderPath(folder) + '/' : ''%><%= _.slugify(name) %>.jsx');

var ReactTestUtils;
var reactRender;

beforeEach(function() {
    ReactTestUtils = require('react/addons').addons.TestUtils;
    reactRender = ReactTestUtils.renderIntoDocument;
});

describe('Testing React Component: <%= _.classify(name) %>', function() {
    it('Should run a few assertions', function() {

    });
});