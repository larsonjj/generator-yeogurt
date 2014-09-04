/*jshint newcap:false */

/**
*   Main Component Description
*/

'use strict';

var React = require('react');

var MainComponent = React.createClass({displayName: 'MainComponent',
    render: function() {
        return (
            React.DOM.div(null,
                React.DOM.div({className: 'main-container'},
                    React.DOM.h1(null, 'Welcome to Yeogurt!'),
                    React.DOM.p(null,
                        'Take a look at the ', React.DOM.a({href: 'https://github.com/larsonjj/generator-yeogurt#yeogurt-generator---'}, 'documentation'), ' and start mixing up something awesome.'
                    ),
                    React.DOM.p(null,
                        React.DOM.img({src: '/images/yeogurt-swirl.png', width: '75px', className: 'logo'})
                    )<% if (useJsdoc || useKss) { %>,
                    React.DOM.p({className: 'links'},<% if (useKss) { %>
                        React.DOM.a({href: '/docs/styleguide/index.html'}, 'Styleguide')<% } %><% if (useJsdoc) { %>,
                        React.DOM.a({href: '/docs/api/index.html'}, 'API')<% } %>
                    )<% } %>
                ),
                React.DOM.code({className: 'version'}, 'v<%= pkg.version %>')
            )
        );
    }
});

module.exports = MainComponent;
