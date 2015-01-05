'use strict';

var Dispatcher = require('../dispatchers/default');
var ActionTypes = require('../constants/action-types');

module.exports = {

    /**
     * Submit form
     * @param {string} form Supply a form element.
     */
    submitForm: function(form) {
        Dispatcher.handleViewAction({
            actionType: ActionTypes.SUBMIT_FORM,
            form: form
        });
    }

};
