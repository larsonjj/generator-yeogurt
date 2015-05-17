'use strict';
<% if (jsTemplate === 'handlebars') { %>
// Get Handlebars runtime
var Handlebars = require('../../node_modules/handlebars/runtime');

// Setup compiled Handlebars templates
// Templates are compiled by the 'handlebars:compile' grunt task
var templates = require('../../.tmp/scripts/templates')(Handlebars);<% } else if (jsTemplate === 'underscore') { %>
var _ = require('underscore');

// Setup compiled Underscore templates
// templates are compiled by the 'jst:compile' grunt task
var templates = require('../../.tmp/scripts/templates')(_);<% } %>

module.exports = templates;
