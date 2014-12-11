/**
*   OneColumn View
*/

'use strict';

var OneColumn = Backbone.View.extend({

    // Compiled template
    template: JST['client/templates/layouts/one-column.hbs'],

    // Delegated events
    events: {},

    // Code that runs when View is initialized
    initialize: function (options) {
        // Check to see if any options were passed in
        if (options) {
            this.options = options;
        }
    },

    render: function () {
        this.$el.html(this.template);
        // If this is marked as a layout, then assign subview(s)
        if (this.options && this.options.layout) {
            this.assign(this.options.subviews);
        }
        return this;
    }

});

module.exports = OneColumn;

