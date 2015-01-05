/**
*   Messages Component Description
*/

'use strict';

var React = require('react');
var routeActions = require('../../actions/route');

var LinkComponent = React.createClass({

    propTypes: {
        url: React.PropTypes.string.isRequired
    },

    render: function() {
        this.props.href =
        this.props.url && this.props.url.lastIndexOf('/', 0) === 0 ?
        this.props.url : '/' + this.props.url;

        return (
            /* jshint ignore:start */
            <a onClick={this.handleClick} {...this.props}>{this.props.children}</a>
            /* jshint ignore:end */
        );
    },

    handleClick: function(e) {
        e.preventDefault();
        routeActions.setRoute(this.props.url);
    }

});

module.exports = LinkComponent;
