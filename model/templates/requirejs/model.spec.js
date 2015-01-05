/**
*   <%= _.classify(name) %> Spec Description
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

define(function(require) {
    'use strict';

    var <%= _.classify(name) %> = require('<%= modelFile %>');

    describe('<%= _.classify(name) %> Model', function() {

        beforeEach(function() {
            this.<%= _.camelize(name) %> = new <%= _.classify(name) %>();
        });

        it('Should run a few assertions', function() {

        });

    });

});
