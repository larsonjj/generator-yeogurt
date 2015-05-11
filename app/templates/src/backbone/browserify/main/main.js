// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
<% if (jsTemplate === 'handlebars') { %>
// Attach Handlebars runtime to window
var Handlebars = require('../../node_modules/handlebars/runtime');

// Include compiled Handlebars templates
// Templates are compiled by the handlebars grunt task
window.JST = require('../../.tmp/scripts/templates')(Handlebars);<% } else if (jsTemplate === 'underscore') { %>
var _ = require('underscore');

// Include compiled Underscore templates
// Templates are compiled by the jst grunt task
window.JST = require('../../.tmp/scripts/templates')(_);<% } %>

var router = require('./routes');

// Start listening to route changes
Backbone.history.start();

// Set up global click event handler to use pushState for links
// use 'data-bypass' attribute on anchors to allow normal link behavior
$(document).on('click', 'a:not([data-bypass])', function(event) {

  var href = $(this).attr('href');
  var protocol = this.protocol + '//';

  if (href.slice(protocol.length) !== protocol) {
    event.preventDefault();
    router.navigate(href, true);
  }

});

console.log('Welcome to Yeogurt');
