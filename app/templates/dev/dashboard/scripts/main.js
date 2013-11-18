// Place all dashboard specific javascript here
/*global $:false */

'use strict';
$(function (window) {
    window.dashboard = {
        switcherHandler: function () {
            $('.dashboard-switcher-list-item').on('click', function () {
                $('.dashboard-switcher-list-item').removeClass('active');
                $(this).addClass('active');

                $('.dashboard-list').addClass('hide');
                $('.dashboard-list:nth-child(' + ($(this).index() + 2) + ')').removeClass('hide');
            });
        }
    };

    // Logic
    window.dashboard.switcherHandler();
});