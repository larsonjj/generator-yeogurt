'use strict';

// Asyncronous with module loading
require(['domReady', 'jquery'], function (domReady, $) {
    domReady(function () {
        console.log($('body'));
    });
});