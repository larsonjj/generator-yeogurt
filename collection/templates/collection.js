/**
*   <%= _.classify(name) %> Collection Description
*/
<% if (jsOption === 'requirejs') { %>
define(function(require) {
    'use strict';

    var <%= _.classify(modelName) %> = require('<%= modelFile %>');

    var <%= _.classify(name) %> = Backbone.Collection.extend({

        model: <%= _.classify(modelName) %>

    });

    return <%= _.classify(name) %>;
});<% } else if (jsOption === 'browserify') { %>
'use strict';

var <%= _.classify(modelName) %> = require('<%= rootDir %><%= modelFile %>');

var <%= _.classify(name) %> = Backbone.Collection.extend({

    model: <%= _.classify(modelName) %>

});

module.exports = <%= _.classify(name) %>;
<% } %>