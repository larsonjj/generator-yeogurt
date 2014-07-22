/**
*   <%= _.classify(name) %> Spec Description
*/
<% if (jsOption === 'RequireJS') { %>
define(function(require) {
    'use strict';

    var <%= _.classify(name) %> = require('views/<%= _.slugify(name) %>');

    describe('<%= _.classify(name) %> View', function () {

        beforeEach(function () {
            this.<%= _.classify(name) %>View = new <%= _.classify(name) %>();
        });

        it('Should run a few assertions', function(){

        });

    });

});<% } else if (jsOption === 'Browserify') { %>
'use strict';

var <%= _.classify(name) %> = require('../../dev/scripts/views/<%= _.slugify(name) %>.js');

describe('<%= _.classify(name) %> View', function () {

    beforeEach(function () {
        this.<%= _.classify(name) %>View = new <%= _.classify(name) %>();
    });

    it('Should run a few assertions', function(){

    });

});<% } %>
