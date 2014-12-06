/**
*   Main Configuration
*/

'use strict';

require.config({
    baseUrl: './scripts',
});

require(['app'], function (app) {
    app.init();
});
