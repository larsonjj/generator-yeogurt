/**
*   Signup View
*/

'use strict';

var Signup = Backbone.View.extend({

    el: '.content',

    // Compiled template
    template: JST['client/templates/account/signup.hbs'],

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
