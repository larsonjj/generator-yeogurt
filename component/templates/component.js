<% if (jsOption === 'RequireJS') { %>/** @jsx React.DOM */

/*
*   <%= _.camelize(name) %>.js
*/

define(function (require) {
    'use strict';

    var React = require('react');

    var <%= _.classify(name) %>Component = React.createClass({
        render: function() {
            return (
                <div>
                    <p ref="p"><%= name.toLowerCase() %> component</p>
                </div>
            );
        }
    });

    return <%= _.classify(name) %>Component;
});<% } else if (jsOption === 'Browserify') { %>/** @jsx React.DOM */

/*
*   <%= _.camelize(name) %>.js
*/

'use strict';

var React = require('react');

var <%= _.classify(name) %>Component = React.createClass({
    render: function() {
        return (
            <div>
                <p ref="p"><%= name.toLowerCase() %> component</p>
            </div>
        );
    }
});


module.exports = <%= _.classify(name) %>Component;
<% } %>