'use strict';

var Reflux = require('reflux');

var actions = Reflux.createActions([
  'setPage'  // Action to update page title
]);

actions.setPage.listen(function(page) {
  document.title = page.title || 'Home';
});

module.exports = actions;
