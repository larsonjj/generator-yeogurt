/**
*   One Column Component Description
*/

'use strict';

var React = require('react');
var Navbar = require('../modules/navbar');
var Messages = require('../modules/messages');
var pageStore = require('../../stores/page');

var getState = function() {
    return {
        title: pageStore.get().title
    };
};

var OneColumnComponent = React.createClass({
    mixins: [pageStore.mixin],
    componentDidMount: function() {
        // Update page title when this layout is loaded
        pageStore.emitChange();
    },
    render: function() {
        return (
            /* jshint ignore:start */
            <div>
                <div class="main-nav">
                    <Navbar user={this.state.user} />
                </div>
                <div class="one-column">
                    <div class="main-container">
                        <div class="messages">
                            <Messages messages={this.state.messages} />
                        </div>
                        <div class="content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
            /* jshint ignore:end */
        );
    },
    /**
     * Event handler for 'change' events coming from store mixins.
     */
    onChange: function() {
        this.setState(getState());
    }
});

module.exports = OneColumnComponent;
