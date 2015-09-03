'use strict';

// Constructor
var <%= _.classify(name.toLowerCase()) %> = function() {
  this.name = '<%= name %>';
  console.log('%s module', this.name);
};

module.exports = <%= _.classify(name.toLowerCase()) %>;
