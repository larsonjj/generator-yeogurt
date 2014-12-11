/**
*   Reset View
*/

'use strict';

var Reset = Backbone.View.extend({

    el: '.content',

    // Compiled template
    template: JST['client/templates/account/reset.hbs'],

    // Delegated events
    events: {
        'submit form': 'formSubmit'
    },

    // Code that runs when View is initialized
    initialize: function () {
        this.render();
    },

    formSubmit: function(e) {
        e.preventDefault();
        var $form = $(e.currentTarget);
        app.account.reset($form, {
            success: function(res) {
                Backbone.history.navigate('/', true);
            },
            error: function(err) {
                Backbone.history.navigate(window.location.pathname, true);
            },
        });
    },

    render: function () {
        this.$el.html(this.template);
        return this;
    }

});

module.exports = Reset;
