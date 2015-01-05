'use strict';

var Defaults = {

    route: '/',

    page: {
        title: 'Home',
        description: 'A React + Flux application',
        keywords: null

    }<% if (useAuth) { %>,

    user: {
        loggedIn: false,
        firstName: 'John',
        lastName: 'Doe'
    },

    messages: {}<% } %>


};

module.exports = Defaults;
