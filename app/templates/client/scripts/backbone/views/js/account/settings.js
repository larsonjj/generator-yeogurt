/**
*   Settings View
*/

'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Settings = Backbone.View.extend({

    el: '.content',

    // Compiled template
    template: JST['client/templates/account/settings<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

    // Delegated events
    events: {
        'submit #profile-form': 'formInfo',
        'submit #password-form': 'formPassword',
        'submit #delete-form': 'formDelete',
    },

    // Code that runs when View is initialized
    initialize: function() {
        this.render();
    },

    formInfo: function(e) {
        e.preventDefault();
        var $form = $(e.currentTarget);
        App.user.updateInfo($form, {
            success: function(res) {
                App.user.set({
                    email: res.user.email,
                    firstName: res.user.firstName,
                    lastName: res.user.lastName
                });
                Backbone.history.navigate('/settings', true);
            }
        });
    },

    formPassword: function(e) {
        e.preventDefault();
        var $form = $(e.currentTarget);
        App.user.updatePassword($form, {
            success: function(res) {
                Backbone.history.navigate('/settings', true);
            }
        });
    },

    formDelete: function(e) {
        e.preventDefault();
        App.user.destroy({
            success: function(res) {
                App.user.logout();
                Backbone.history.navigate('/', true);
            },
            complete: function(res) {
                App.messages.showMessages(res.responseJSON);
            }
        });
    },

    render: function() {
        this.$el.html(this.template({
            user: App.user.toJSON()
        }));
        return this;
    }

});
