/**
*   <%= _.classify(name) %> Spec Description
*/
<% if (jsOption === 'RequireJS') { %>
define(function(require) {
    'use strict';

    var <%= _.classify(name) %> = require('collections/<%= folder ? cleanFolderPath(folder) + '/' : ''%><%= _.slugify(name) %>');

    describe('<%= _.classify(name) %> Collection', function () {

        beforeEach(function () {
            this.<%= _.classify(name) %>Collection = new <%= _.classify(name) %>();
        });

        it('Should run a few assertions', function(){

        });

    });

});<% } else if (jsOption === 'Browserify') { %>
'use strict';

var <%= _.classify(name) %> = require('<%= folder ? folderCount : ''%>../../client/scripts/collections/<%= folder ? cleanFolderPath(folder) + '/' : ''%><%= _.slugify(name) %>.js');

describe('<%= _.classify(name) %> Collection', function () {

    beforeEach(function () {
        this.<%= _.classify(name) %>Collection = new <%= _.classify(name) %>();
    });

    it('Should run a few assertions', function(){

    });

});<% } %>
