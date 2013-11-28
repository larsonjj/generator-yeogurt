// Place all dashboard specific javascript here
/*global $:false */

'use strict';
/**
 * Contains dashboard object which holds all dashboard-specific functionality
 * @param  {Object} window Browser window object
 * @return {Object}        Return window object with all defined logic within the dashboard object
 */
$(function (window) {
    window.dashboard = {
        /**
         * Initialize all dashboard functionality
         */
        init: function () {
            this.switcherHandler();
        },
        /**
         * Handles the hiding/showing of dashboard sections (Pages, Components, etc)
         */
        switcherHandler: function () {
            $('.dashboard-switcher-list-item').on('click', function () {
                $('.dashboard-switcher-list-item').removeClass('active');
                $(this).addClass('active');

                $('.dashboard-list').addClass('hide');
                $('.dashboard-list:nth-child(' + ($(this).index() + 1) + ')').removeClass('hide');
            });
        }
    };

    // Logic
    return window.dashboard.init();
});