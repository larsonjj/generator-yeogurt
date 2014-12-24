/**
*   Signup View
*/

'use strict';

var app = require('../../app');

var Signup = Backbone.View.extend({

    el: '.content',

    // Compiled template
    template: JST['client/templates/account/signup<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

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
        var data = {
            formData: $(e.currentTarget).serialize()
        };
        app.account.signup(data, {
            success: function(res) {
                Backbone.history.navigate('/', true);
            },
            error: function(err) {
                Backbone.history.navigate('/signup', true);
            }
        });
    },

    render: function () {
        this.$el.html(this.template);
        return this;
    }

});

module.exports = Signup;
