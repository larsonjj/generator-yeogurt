/**
*   Navbar Component Description
*/

'use strict';

var React = require('react');
var Link = require('./link');
var userStore = require('../../stores/user');

var getState = function() {
    return {
        user: userStore.get()
    };
};

var NavbarComponent = React.createClass({
    mixins: [userStore.mixin],
    render: function() {
        var user = this.props.user;
        var navLinks = user.loggedIn ? (
            /* jshint ignore:start */
            <li className="nav-item">
                <Link url="/settings">My Account</Link>
            </li>
            <li className="nav-item">
                <Link url="/logout">Logout</Link>
            </li>
            /* jshint ignore:end */
        ) : (
            /* jshint ignore:start */
            <li class="nav-item">
                Hello {user.firstName ? user.firstName : user.email}
            </li>
            <li className="nav-item">
                <Link url="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link url="/signup">Create Account</Link>
            </li>
            /* jshint ignore:end */
        );

        return (
            /* jshint ignore:start */
            <div>
                <div class="navbar">
                    <div class="nav">
                        <ul class="nav-list pull-left">
                            <li class="nav-item"><Link url="/">Home</Link></li>
                        </ul>
                        <ul class="nav-list pull-right">
                            {navLinks}
                        </ul>
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

module.exports = NavbarComponent;
