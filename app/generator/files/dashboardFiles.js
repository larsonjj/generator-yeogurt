/**
 * Generate files specific to the dashboard
 */

'use strict';

var dashboardFiles = function dashboardFiles() {
    if (this.useDashboard) {
        this.mkdir('client/dashboard');
        this.mkdir('client/dashboard/images');
        this.copy('client/images/yeogurt-logo.png', 'client/dashboard/images/yeogurt-logo.png');
        this.copy('client/dashboard/template.hbs', 'client/dashboard/template.hbs');
    }
};

module.exports = dashboardFiles;