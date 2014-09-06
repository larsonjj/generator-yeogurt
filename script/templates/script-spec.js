/**
*   <%= _.classify(name) %> Spec Description
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>
<% if (jsOption === 'requirejs') { %>
define(function(require) {
    'use strict';

    var <%= _.classify(name) %> = require('<%= folder ? cleanFolderPath(folder) + '/' :  '' %><%= _.slugify(name.toLowerCase()) %>');

    describe('Give it some context', function() {

        it('Should run a few assertions', function() {

        });

    });

});<% } else if (jsOption === 'browserify') { %>
'use strict';

var <%= _.classify(name) %> = require('<%= folder ? folderCount : ''%>../../client/scripts/<%= folder ? cleanFolderPath(folder) + '/' :  '' %><%= _.slugify(name.toLowerCase()) %>.js');

describe('Give it some context', function() {

    it('Should run a few assertions', function() {

    });

});
<% } else { %>'use strict';

describe('Give it some context', function() {

    it('Should run a few assertions', function() {

    });

});<% } %>
