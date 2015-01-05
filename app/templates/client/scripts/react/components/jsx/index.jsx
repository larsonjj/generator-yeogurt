/**
*   Main Component Description
*/

'use strict';

var React = require('react');
var OneColumnLayout = require('./layouts/one-column');
var Link = require('./modules/link');

var IndexComponent = React.createClass({
    statics: {
        layout: OneColumnLayout
    },
    render: function() {
        return (
            /* jshint ignore:start */
            <div>
                <div className="main-container">
                    <div className="yeogurt-info">
                        <h1>Welcome to Yeogurt!</h1>
                        <p>
                            Take a look at the <Link url="https://github.com/larsonjj/generator-yeogurt#yeogurt-generator---">documentation</Link> and start mixing up something awesome.
                        </p>
                        <p>
                            <img src="/images/yeogurt-swirl.png" width="75px" className="logo" />
                        </p><% if (useJsdoc || useKss) { %>
                        <p className="links"><% if (useKss) { %>
                            <Link url="/docs/styleguide/index.html">Styleguide</Link><% } %><% if (useJsdoc) { %>
                            <Link url="/docs/api/index.html">API</Link><% } %>
                        </p><% } %>
                    </div>
                </div>
                <code className="version">v<%= pkg.version %></code>
            </div>
            /* jshint ignore:end */
        );
    }
});

module.exports = IndexComponent;
