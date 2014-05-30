/**
*   <%= _.classify(name) %> Spec Description
*/

<% if (jsOption === 'RequireJS') { %>define(function(require) {
    'use strict';

    var <%= _.camelize(name) %> = require('routers/<%= _.slugify(name) %>-spec');

    describe('<%= _.classify(name) %> Router', function () {

        beforeEach(function () {
            this.<%= _.classify(name) %>Router = new <%= _.camelize(name) %>();
        });

        it('index route', function(){

        });

    });

});<% } else if (jsOption === 'Browserify') { %>'use strict';

var <%= _.camelize(name) %> = require('../../dev/scripts/routers/<%= _.slugify(name) %>-spec.js');

describe('just checking', function() {

    describe('<%= _.classify(name) %> Router', function () {

        beforeEach(function () {
            this.<%= _.classify(name) %>Router = new <%= _.camelize(name) %>();
        });

        it('index route', function(){

        });

    });

});
<% } %>