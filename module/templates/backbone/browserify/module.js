'use strict';

var <%= _.classify(name) %> = Backbone.View.extend({

  tagName: 'div',

  id: '',

  className: '',

  template: JST['<%= templateFile %>.jst'],

  events: {},

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  }

});

module.exports = <%= _.classify(name) %>;
