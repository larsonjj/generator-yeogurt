/*
*   <%= _.camelize(name) %>Spec.js
*/
<% if (jsOption === 'RequireJS') { %>'use strict';

define(function(require) {

    var <%= _.classify(name) %> = require('collections/<%= _.camelize(name) %>');

    describe('<%= _.classify(name) %> Collection', function () {

        beforeEach(function () {
            this.<%= _.classify(name) %>Collection = new <%= _.classify(name) %>();
        });

    });

});<% } else if (jsOption === 'Browserify') { %>'use strict';

var <%= _.classify(name) %> = require('../../dev/scripts/collections/<%= _.camelize(name) %>.js');

describe('just checking', function() {

    describe('<%= _.classify(name) %> Collection', function () {

        beforeEach(function () {
            this.<%= _.classify(name) %>Collection = new <%= _.classify(name) %>();
        });

    });

});
<% } %>