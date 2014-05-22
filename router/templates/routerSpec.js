/*
*   <%= _.camelize(name) %>Spec.js
*/
<% if (jsOption === 'RequireJS') { %>'use strict';

define(function(require) {

    var <%= _.camelize(name) %> = require('routers/<%= _.camelize(name) %>Spec');

    describe('<%= _.classify(name) %> Router', function () {

        beforeEach(function () {
            this.<%= _.classify(name) %>Router = new <%= _.camelize(name) %>();
        });

        it('index route', function(){

        });

    });

});<% } else if (jsOption === 'Browserify') { %>'use strict';

var <%= _.camelize(name) %> = require('../../dev/scripts/routers/<%= _.camelize(name) %>Spec.js');

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