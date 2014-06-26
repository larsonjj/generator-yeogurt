// Contact Router

'use strict';

// Load controller.
var contactController = require('../controllers/contact');

/**
 * Expose routes
 */

module.exports = function(app) {
    app.get('/contact', contactController.getContact);
    app.post('/contact', contactController.postContact);
};