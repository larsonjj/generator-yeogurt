'use strict';

var <%= _.classify(modelName) %> = require('<%= rootDir %><%= modelFile %>');

var <%= _.classify(name) %> = Backbone.Collection.extend({

  model: <%= _.classify(modelName) %>

});

module.exports = <%= _.classify(name) %>;
