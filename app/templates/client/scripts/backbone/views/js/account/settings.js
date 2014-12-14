/**
*   Settings View
*/

'use strict';

<%= _.camelize(projectName) %> = <%= _.camelize(projectName) %> || {};

<%= _.camelize(projectName) %>.SettingsView = Backbone.View.extend({

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
    initialize: function () {
        this.render();
    },

    formInfo: function(e) {
        e.preventDefault();
        var $form = $(e.currentTarget);
        <%= _.classify(projectName) %>.account.updateInfo($form, {
            success: function(res) {
                <%= _.classify(projectName) %>.account.set({
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
        <%= _.classify(projectName) %>.account.updatePassword($form, {
            success: function(res) {
                Backbone.history.navigate('/settings', true);
            }
        });
    },

    formDelete: function(e) {
        e.preventDefault();
        <%= _.classify(projectName) %>.account.destroy({
            success: function(res) {
                <%= _.classify(projectName) %>.account.logout();
                Backbone.history.navigate('/', true);
            },
            complete: function(res) {
                <%= _.classify(projectName) %>.messages.showMessages(res.responseJSON);
            }
        });
    },

    render: function () {
        this.$el.html(this.template({
            user: <%= _.classify(projectName) %>.account.toJSON()
        }));
        return this;
    }

});
