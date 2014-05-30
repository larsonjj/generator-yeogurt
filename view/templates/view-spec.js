/**
*   <%= _.classify(name) %> Spec Description
*/

<% if (jsOption === 'RequireJS') { %>'use strict';

define(function(require) {

    var <%= _.classify(name) %> = require('views/<%= _.slugify(name) %>');

    describe('<%= _.classify(name) %> View', function () {

        beforeEach(function () {
            this.<%= _.classify(name) %>View = new <%= _.classify(name) %>();
        });

    });

});<% } else if (jsOption === 'Browserify') { %>'use strict';

var <%= _.classify(name) %> = require('../../dev/scripts/views/<%= _.slugify(name) %>.js');

describe('just checking', function() {

    describe('<%= _.classify(name) %> View', function () {

        beforeEach(function () {
            this.<%= _.classify(name) %>View = new <%= _.classify(name) %>();
        });

    });

});
<% } %>