/**
*   <%= _.classify(name) %>Constant Spec Description
*/

/* jshint newcap:false */
/* jshint -W024 */<% if (testFramework === 'mocha') { %>
/* jshint expr:true */<% } %>

'use strict';

var <%= _.classify(name) %>Constant = require('<%= folder ? folderCount : ''%>../../../client/scripts/flux/constants<%= folder ? cleanFolderPath(folder) + '/' : ''%><%= _.slugify(name.toLowerCase()) %>.js');

describe('Testing Flux Constant: <%= _.classify(name) %>Constant', function() {
    it('Should run a few assertions', function() {

    });
});
