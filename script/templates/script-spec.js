/**
*   <%= _.classify(name) %> Spec Description
*/
<% if (jsOption === 'RequireJS') { %>
define(function(require) {
    'use strict';

    var <%= _.classify(name) %> = require('<%= folder ? cleanFolderPath(folder) + '/' :  '' %><%= _.slugify(name) %>');

    describe('Give it some context', function() {

        it('Should run a few assertions', function() {

        });

    });

});<% } else if (jsOption === 'Browserify') { %>
'use strict';

var <%= _.classify(name) %> = require('<%= folder ? folderCount : ''%>../../client/scripts/<%= folder ? cleanFolderPath(folder) + '/' :  '' %><%= _.slugify(name) %>.js');

describe('Give it some context', function() {

    it('Should run a few assertions', function() {

    });

});
<% } else { %>'use strict';

describe('Give it some context', function() {

    it('Should run a few assertions', function() {

    });

});<% } %>
