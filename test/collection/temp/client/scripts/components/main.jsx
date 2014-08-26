/** @jsx React.DOM */

/**
*   Main Component Description
*/

'use strict';

var React = require('react');

var MainComponent = React.createClass({
    render: function() {
        return (
            <div>
                <div className="main-container">
                    <h1>Welcome to Yeogurt!</h1>
                    <p>
                        Take a look at the <a href="https://github.com/larsonjj/generator-yeogurt#yeogurt-generator---">documentation</a> and start mixing up something awesome.
                    </p>
                    <p>
                        <img src="/images/yeogurt-swirl.png" width="75px" className="logo" />
                    </p>
                </div>
                <code className="version">v0.10.0</code>
            </div>
        );
    }
});

module.exports = MainComponent;
