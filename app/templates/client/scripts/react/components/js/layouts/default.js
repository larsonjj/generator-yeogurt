/**
 *   Default Component Description
 */

'use strict';

var React = require('react');
var Navbar = require('../modules/navbar');
var Messages = require('../modules/messages');
var pageStore = require('../../stores/page');
var userStore = require('../../stores/user');

// Alias for React DOM
var DOM = React.DOM;

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
            DOM('div', null,
                DOM('div', {
                        className: 'main-nav'
                    },
                    DOM(Navbar, {
                        user: this.state.user
                    })
                ),
                DOM('div', {
                        className: 'default'
                    },
                    DOM('div', {
                            className: 'main-container'
                        },
                        DOM('div', {
                                className: 'messages'
                            },
                            DOM(Messages, {
                                messages: this.state.messages
                            })
                        ),
                        DOM('div', {
                                className: 'content'
                            },
                            this.props.children
                        )
                    )
                )
            )
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
