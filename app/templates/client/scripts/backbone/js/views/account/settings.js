'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Settings = Backbone.View.extend({

    el: '.content',

    template: JST['client/templates/account/settings<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

    events: {
        'submit #profile-form': 'formInfo',
        'submit #password-form': 'formPassword',
        'submit #delete-form': 'formDelete',
    },

    initialize: function() {
        this.render();
    },

    formInfo: function(e) {
        e.preventDefault();
        var $form = $(e.currentTarget);
        App.user.updateSettings($form);
    },

    formPassword: function(e) {
        e.preventDefault();
        var $form = $(e.currentTarget);
        App.user.updatePassword($form);
    },

    formDelete: function(e) {
        e.preventDefault();
        App.user.destroy({
            success: function(res) {
                App.user.logout();
                Backbone.history.navigate('/', {trigger: true});
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
