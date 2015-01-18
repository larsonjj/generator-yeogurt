'use strict';

var App = App || {};
App.Models = App.Models || {};
App.Collections = App.Collections || {};

App.Collections.<%= _.classify(name) %> = Backbone.Collection.extend({

  model: App.Models.<%= _.classify(modelName) %>

});
