/**
*   Default Component Description
*/

'use strict';

var React = require('react');
var Navbar = require('../modules/navbar.jsx');
var Messages = require('../modules/messages.jsx');
var pageStore = require('../../stores/page');
var userStore = require('../../stores/user');

var getState = function() {
    return {
        title: pageStore.get().title,
        user: userStore.get()
    };
};

var DefaultComponent = React.createClass({
    mixins: [pageStore.mixin, userStore.mixin],
    componentDidMount: function() {
        // Update page title when this layout is loaded
        pageStore.emitChange();
        userStore.emitChange();
    },
    getInitialState: function() {
        return getState();
    },
    render: function() {
        return (
            /* jshint ignore:start */
            <div>
                <div className="main-nav">
                    <Navbar user={this.state.user} />
                </div>
                <div className="default">
                    <div className="main-container">
                        <div className="messages">
                            <Messages messages={this.state.messages} />
                        </div>
                        <div className="content">
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
    _onChange: function() {
        this.setState(getState());
    }
});

module.exports = DefaultComponent;
