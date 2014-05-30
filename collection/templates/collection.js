/**
*   <%= _.classify(name) %> Collection Description
*/

<% if (jsOption === 'RequireJS') { %>define(function (require) {
    'use strict';

    var <%= _.classify(name) %>Model = require('models/<%= _.slugify(name) %>');

    var <%= _.classify(name) %>Collection = Backbone.Collection.extend({

        model: <%= _.classify(name) %>Model

    });

    return <%= _.classify(name) %>Collection;
});<% } else if (jsOption === 'Browserify') { %>'use strict';

var <%= _.classify(name) %>Model = require('models/<%= _.slugify(name) %>');

var <%= _.classify(name) %>Collection = Backbone.Collection.extend({

    model: <%= _.classify(name) %>Model

});

module.exports = <%= _.classify(name) %>Collection;
<% } %>