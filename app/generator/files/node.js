/**
 * Generate files specific to the server folder
 */

'use strict';

var nodeFiles = function nodeFiles() {
    if (this.useServer) {
        this.mkdir('server');
        this.mkdir('server/controllers');
        this.mkdir('server/config');
        this.mkdir('server/config/env');
        if (this.useServer && this.singlePageApplication) {
            this.mkdir('server/templates');
        }
        if (this.singlePageApplication) {
            if (this.useServerTemplates) {
                if (this.jsFramework === 'react') {
                    this.mkdir('server/modules');
                    this.template('server/modules/react-render.js','server/modules/react-render.js');
                }
            }
            this.template('client/templates/html/index.html', 'server/templates/index.html');
        }

        if (this.dbOption === 'mongodb') {
            this.template('server/config/mongodb/database.js', 'server/config/database.js');
        }
        if (this.dbOption === 'mysql') {
            this.template('server/config/mysql/database.js', 'server/config/database.js');
        }

        this.template('server/config/express.js', 'server/config/express.js');

        if (this.useAuth) {
            this.template('server/config/secrets.js', 'server/config/secrets.js');
            this.template('server/config/auth.js', 'server/config/auth.js');
            this.template('server/controllers/user.js', 'server/controllers/user.js');

            if (this.authTypes.indexOf('local') > -1) {
                this.template('server/config/strategies/local.js', 'server/config/strategies/local.js');
            }
            if (this.authTypes.indexOf('facebook') > -1) {
                this.template('server/config/strategies/facebook.js', 'server/config/strategies/facebook.js');
            }
            if (this.authTypes.indexOf('twitter') > -1) {
                this.template('server/config/strategies/twitter.js', 'server/config/strategies/twitter.js');
            }

            if (this.dbOption === 'mongodb') {
                this.template('server/models/mongodb/user.js', 'server/models/user.js');
            }
            if (this.dbOption === 'mysql') {
                this.template('server/models/mysql/user.js', 'server/models/user.js');
            }

        }
        this.template('server/config/security.js', 'server/config/security.js');

        this.template('server/config/env/default.js', 'server/config/env/default.js');
        this.template('server/config/env/development.js', 'server/config/env/development.js');
        this.template('server/config/env/production.js', 'server/config/env/production.js');

        this.template('server/server.js', 'server.js');
        this.template('server/controllers/main.js', 'server/controllers/main.js');
        this.template('server/routes.js', 'server/routes.js');
    }
};

module.exports = nodeFiles;