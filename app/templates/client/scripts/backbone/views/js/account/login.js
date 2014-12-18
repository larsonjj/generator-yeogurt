/**
*   Login View
*/

'use strict';

var <%= _.classify(projectName) %> = <%= _.classify(projectName) %> || {};
<%= _.classify(projectName) %>.Views = <%= _.classify(projectName) %>.Views || {};

<%= _.camelize(projectName) %>.Views.Login = Backbone.View.extend({

    el: '.content',

    // Compiled template
    template: JST['client/templates/account/login<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

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
        <%= _.classify(projectName) %>.account.login(data, {
            success: function(res){
                Backbone.history.navigate('/', true);
            },
            error: function(err){
                Backbone.history.navigate('/login', true);
            }
        });
    },

    render: function () {
        this.$el.html(this.template);
        return this;
    }

});
