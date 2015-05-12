'use strict';
<% if (jsTemplate === 'handlebars') { %>
// Attach Handlebars runtime to window
var Handlebars = require('../../node_modules/handlebars/runtime');

// Include compiled Handlebars templates
// Templates are compiled by the handlebars grunt task
var templates = require('../../.tmp/scripts/templates')(Handlebars);<% } else if (jsTemplate === 'underscore') { %>
var _ = require('underscore');

// Include compiled Underscore templates
// templates are compiled by the jst grunt task
var templates = require('../../.tmp/scripts/templates')(_);<% } %>

module.exports = templates;
