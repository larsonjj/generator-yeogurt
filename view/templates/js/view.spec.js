<% if (testFramework === 'mocha') { %>/*jshint expr: true*/<% } %>

'use strict';

describe('<%= _.classify(name) %> View', function() {

    beforeEach(function() {
        var App = App || {};
        App.Views = App.Views || {};

        this.<%= _.camelize(name) %> = new App.Views.<%= _.classify(name) %>();
    });

    it('Should run a few assertions', function(){

    });

});
