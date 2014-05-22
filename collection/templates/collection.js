<% if (jsOption === 'RequireJS') { %>/*
*   <%= _.camelize(name) %>.js
*/
define(function (require) {
    'use strict';

    var <%= _.camelize('-' + name.toLowerCase()) %>Model = require('models/<%= _.camelize('-' + name.toLowerCase()) %>Model');

    var <%= _.camelize('-' + name.toLowerCase()) %>Collection = Backbone.Collection.extend({

        model: <%= _.camelize('-' + name.toLowerCase()) %>Model

    });

    return <%= _.camelize('-' + name.toLowerCase()) %>Collection;
});<% } else if (jsOption === 'Browserify') { %>/*
*   <%= _.camelize(name) %>.js
*/
'use strict';

var <%= _.camelize('-' + name.toLowerCase()) %>Model = require('models/<%= _.camelize('-' + name.toLowerCase()) %>Model');

var <%= _.camelize('-' + name.toLowerCase()) %>Collection = Backbone.Collection.extend({

    model: <%= _.camelize('-' + name.toLowerCase()) %>Model

});

module.exports = <%= _.camelize('-' + name.toLowerCase()) %>Collection;
<% } %>