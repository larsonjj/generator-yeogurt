define(function(require) {
    'use strict';

    var app = require('../../app');

    var Login = Backbone.View.extend({

        el: '.content',

        template: JST['client/templates/account/login<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

        events: {
            'submit form': 'formSubmit'
        },

        initialize: function() {
            this.render();
        },

        formSubmit: function(e) {
            e.preventDefault();
            var $form = $(e.currentTarget);
            app.user.login($form);
        },

        render: function() {
            this.$el.html(this.template);
            return this;
        }

    });

    return Login;

});
