define(function(require) {
  'use strict';

  var <%= _.classify(modelName) %> = require('<%= modelFile %>');

  var <%= _.classify(name) %> = Backbone.Collection.extend({

    model: <%= _.classify(modelName) %>

  });

  return <%= _.classify(name) %>;
});
