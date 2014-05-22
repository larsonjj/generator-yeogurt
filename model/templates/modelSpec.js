/*
*   <%= _.camelize(name) %>Spec.js
*/
<% if (jsOption === 'RequireJS') { %>'use strict';

define(function(require) {

    var <%= _.classify(name) %> = require('models/<%= _.camelize(name) %>');

    describe('<%= _.classify(name) %> Model', function () {

        beforeEach(function () {
            this.<%= _.classify(name) %>Model = new <%= _.classify(name) %>();
        });

    });

});<% } else if (jsOption === 'Browserify') { %>'use strict';

var <%= _.classify(name) %> = require('../../dev/scripts/models/<%= _.camelize(name) %>.js');

describe('just checking', function() {

    describe('<%= _.classify(name) %> Model', function () {

        beforeEach(function () {
            this.<%= _.classify(name) %>Model = new <%= _.classify(name) %>();
        });

    });

});
<% } %>