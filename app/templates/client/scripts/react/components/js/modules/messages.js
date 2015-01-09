/**
 *   Messages Component Description
 */

'use strict';

var React = require('react');
var messagesStore = require('../../stores/messages');

// Alias for React DOM
var DOM = React.createElement;

var getState = function() {
    return {
        messages: messagesStore.get()
    };
};

var MessagesComponent = React.createClass({
    mixins: [messagesStore.mixin],
    getInitialState: function() {
        return getState();
    },
    render: function() {
        var messages = this.state.messages;

        var getMessages = function(options) {
            if (messages && messages[options.key]) {
                return messages[options.key].map(function(item, index) {
                    return (
                        DOM('div', {
                            key: index,
                            className: options.msgClass
                        }, item.msg)
                    );
                });
            }
        };

        var errors = getMessages({
            key: 'errors',
            msgClass: 'error'
        });

        var info = getMessages({
            key: 'info',
            msgClass: 'info'
        });

        var success = getMessages({
            key: 'success',
            msgClass: 'success'
        });

        return (
            DOM('div', null,
                errors,
                info,
                success
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

module.exports = MessagesComponent;
