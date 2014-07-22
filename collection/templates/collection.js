/**
*   <%= _.classify(name) %> Collection Description
*/
<% if (jsOption === 'RequireJS') { %>
define(function (require) {
    'use strict';

    var <%= useModel ? _.classify(useModel) : _.classify(name) %>Model = require('models/<%= useModel ? _.slugify(useModel) : _.slugify(name) %>');

    var <%= _.classify(name) %>Collection = Backbone.Collection.extend({

        model: <% useModel ? _.classify(useModel) : _.classify(name) %>Model

    });

    return <%= _.classify(name) %>Collection;
});<% } else if (jsOption === 'Browserify') { %>
'use strict';

var <%= useModel ? _.classify(useModel) : _.classify(name) %>Model = require('models/<%= useModel ? _.slugify(useModel) : _.slugify(name) %>');

var <%= _.classify(name) %>Collection = Backbone.Collection.extend({

    model: <%= useModel ? _.classify(useModel) : _.classify(name) %>Model

});

module.exports = <%= _.classify(name) %>Collection;
<% } %>