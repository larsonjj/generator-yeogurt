/**
*   <%= _.classify(name) %> Spec Description
*/

<% if (jsOption === 'RequireJS') { %>define(function(require) {
    'use strict';

    var <%= _.classify(name) %> = require('models/<%= _.slugify(name) %>');

    describe('<%= _.classify(name) %> Model', function () {

        beforeEach(function () {
            this.<%= _.classify(name) %>Model = new <%= _.classify(name) %>();
        });

        it('Should run a few assertions', function(){

        });

    });

});<% } else if (jsOption === 'Browserify') { %>'use strict';

var <%= _.classify(name) %> = require('../../../dev/scripts/models/<%= _.slugify(name) %>.js');

describe('<%= _.classify(name) %> Model', function () {

    beforeEach(function () {
        this.<%= _.classify(name) %>Model = new <%= _.classify(name) %>();
    });

    it('Should run a few assertions', function(){

    });

});<% } %>
