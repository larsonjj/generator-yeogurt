<% if (testFramework === 'mocha') { %>/*jshint expr: true*/<% } %>

'use strict';

describe('<%= _.classify(name) %> Collection', function() {

    beforeEach(function() {
        var App = App || {};
        App.Models = App.Models || {};
        App.Collections = App.Collections || {};

        this.<%= _.camelize(name) %>Collection = new App.Collections.<%= _.classify(name) %>();
    });

    it('Should run a few assertions', function(){

    });

});
