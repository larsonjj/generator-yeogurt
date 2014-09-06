/**
*   <%= _.classify(name) %>Store Spec Description
*/

/* jshint newcap:false */
/* jshint -W024 */<% if (testFramework === 'mocha') { %>
/* jshint expr:true */<% } %>

'use strict';

var <%= _.classify(name) %>Store = require('<%= folder ? folderCount : ''%>../../../client/scripts/flux/stores<%= folder ? cleanFolderPath(folder) + '/' : ''%><%= _.slugify(name.toLowerCase()) %>.js');

describe('Testing Flux Store: <%= _.classify(name) %>Store', function() {
    it('Should run a few assertions', function() {

    });
});
