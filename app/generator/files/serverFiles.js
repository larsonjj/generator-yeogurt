/**
 * Generate files specific to the server folder
 */

'use strict';

var serverFiles = function serverFiles() {
    if (this.useServer) {
        this.mkdir('server');
        this.mkdir('server/controllers');
        this.mkdir('server/config');
        this.mkdir('server/config/env');
        if (this.useServer && this.singlePageApplication) {
            this.mkdir('server/templates');
            this.mkdir('server/modules');
            this.copy('server/modules/serverCheck.js', 'server/modules/serverCheck.js');
        }
        if (this.singlePageApplication) {
            if (this.jsFramework === 'react') {
                this.template('server/modules/reactRender.js','server/modules/reactRender.js');
            }
            else if (this.jsTemplate === 'jade') {
                this.template('server/modules/jadeRender.js','server/modules/jadeRender.js');
            }
            else if (this.jsTemplate === 'handlebars') {
                this.template('server/modules/hbsRender.js','server/modules/hbsRender.js');
            }
            else if (this.jsTemplate === 'lodash') {
                this.template('server/modules/lodashRender.js','server/modules/lodashRender.js');
            }
            this.template('client/templates/html/index.html', 'server/templates/index.html');
        }

        if (this.dbOption !== 'none') {
            this.template('server/config/database.js', 'server/config/database.js');
        }

        this.template('server/config/express.js', 'server/config/express.js');
        this.template('server/config/secrets.js', 'server/config/secrets.js');
        this.template('server/config/security.js', 'server/config/security.js');

        this.template('server/config/env/default.js', 'server/config/env/default.js');
        this.template('server/config/env/development.js', 'server/config/env/development.js');
        this.template('server/config/env/production.js', 'server/config/env/production.js');

        this.template('server/server.js', 'server.js');
        this.template('server/controllers/main.js', 'server/controllers/main.js');
        this.template('server/routes.js', 'server/routes.js');
    }
};

module.exports = serverFiles;