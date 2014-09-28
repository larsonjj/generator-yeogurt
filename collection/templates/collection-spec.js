/**
*   <%= _.classify(name) %> Spec Description
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>
<% if (jsOption === 'requirejs') { %>
define(function(require) {
    'use strict';

    var <%= _.classify(name) %> = require('<%= collectionFile %>');

    describe('<%= _.classify(name) %> Collection', function () {

        beforeEach(function () {
            this.<%= _.classify(name) %>Collection = new <%= _.classify(name) %>();
        });

        it('Should run a few assertions', function(){

        });

    });

});<% } else if (jsOption === 'browserify') { %>
'use strict';

var <%= _.classify(name) %> = require('<%= rootDir %><%= collectionFile %>');

describe('<%= _.classify(name) %> Collection', function () {

    beforeEach(function () {
        this.<%= _.classify(name) %>Collection = new <%= _.classify(name) %>();
    });

    it('Should run a few assertions', function(){

    });

});<% } %>
