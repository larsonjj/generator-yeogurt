define(function(require) {
    'use strict';

    var user = require('../../models/user');

    var Forgot = Backbone.View.extend({

        el: '.content',

        template: JST['client/templates/account/forgot<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

        events: {
            'submit form': 'formSubmit'
        },

        initialize: function() {
            this.render();
        },

        formSubmit: function(e) {
            e.preventDefault();
            var $form = $(e.currentTarget);
            user.forgot($form);
        },

        render: function() {
            this.$el.html(this.template);
            return this;
        }

    });

    return Forgot;

});
