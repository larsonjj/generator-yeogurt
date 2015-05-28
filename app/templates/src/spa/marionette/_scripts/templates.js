'use strict';

var _ = require('underscore');

// Setup compiled Underscore templates
// templates are compiled by the 'jst:compile' grunt task
var templates = require('../../tmp/scripts/templates')(_);

module.exports = templates;
