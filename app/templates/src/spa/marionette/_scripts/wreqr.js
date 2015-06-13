/*eslint no-unused-vars:0*/
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

module.exports = new Backbone.Wreqr.EventAggregator();
