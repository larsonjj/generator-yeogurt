/**
*   <%= _.classify(name) %>Action Spec Description
*/

/* jshint newcap:false */
/* jshint -W024 */<% if (testFramework === 'mocha') { %>
/* jshint expr:true */<% } %>

'use strict';

var <%= _.classify(name) %>Action = require('<%= folder ? folderCount : ''%>../../../client/scripts/flux/actions<%= folder ? cleanFolderPath(folder) + '/' : ''%><%= _.slugify(name.toLowerCase()) %>.js');

describe('Testing Flux Action: <%= _.classify(name) %>Action', function() {
    it('Should run a few assertions', function() {

    });
});
