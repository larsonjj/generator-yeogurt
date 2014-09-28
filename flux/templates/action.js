/**
*   <%= _.classify(name) %>Action Action Description
*/

'use strict';

var AppDispatcher = require('../dispatchers/app');
var <%= _.classify(name) %> = require('../constants/<%= _.slugify(name.toLowerCase()) %>');

var <%= _.classify(name) %>Action = {
    // Replace sample with your own action property
    /**
     * @param  {string} text
     */
    sample: function(text) {
        AppDispatcher.handleViewAction({
            actionType: <%= _.classify(name) %>.SAMPLE_CONSTANT,
            text: text
        });
    },
};

module.exports = <%= _.classify(name) %>Action;
