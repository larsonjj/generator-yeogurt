/**
*   Application Logic
*/

define(function(require) {
    'use strict';

    // Handle displaying and cleaning up views
    var showView = function(view) {
        if (this.currentView) {
            this.currentView.close();
        }

        this.currentView = view;

        $('#app-wrapper').html(this.currentView.render().$el);
    };

    // Create global event aggregator
    var events = _.extend({}, Backbone.Events);


    return {
        showView: showView,
        events: events
    };
});
