'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var <%= _.classify(name) %>Schema = new Schema({
  name: String,
  active: Boolean
});

module.exports = mongoose.model('<%= _.classify(name) %>', <%= _.classify(name) %>Schema);
