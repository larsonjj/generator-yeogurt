/**
*   Reset View
*/

'use strict';

var app = require('../../app');

var Reset = Backbone.View.extend({

    el: '.content',

    // Compiled template
    template: JST['client/templates/account/reset<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

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
