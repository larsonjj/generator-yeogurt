/**
*   Messages Component Description
*/

'use strict';

var React = require('react');
var messagesStore = require('../../stores/page');

var getState = function() {
    return {
        messages: messagesStore.get()
    };
};

var MessagesComponent = React.createClass({
    mixins: [messagesStore.mixin],
    render: function() {

        var getMessages = function(key) {
            if (messages && messages[key]) {
                return messages[key].map(function(item) {
                    return (
                        /* jshint ignore:start */
                        <div class="error">{item.msg}</div>
                        /* jshint ignore:end */
                    );
                });
            }
        };

        var errors = getMessages('errors');

        var info = getMessages('info');

        var success = getMessages('success');

        return (
            /* jshint ignore:start */
            <div>
                {errors}
                {info}
                {success}
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

module.exports = MessagesComponent;
