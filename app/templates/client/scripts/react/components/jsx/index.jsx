/**
*   Main Component Description
*/

'use strict';

var React = require('react');
var DefaultLayout = require('./layouts/default.jsx');
var Link = require('./modules/link.jsx');

var IndexComponent = React.createClass({
    render: function() {
        return (
            /* jshint ignore:start */
            <DefaultLayout>
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
            </DefaultLayout>
            /* jshint ignore:end */
        );
    }
});

module.exports = IndexComponent;
