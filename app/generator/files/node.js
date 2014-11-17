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

        if (this.dbOption === 'mongodb') {
            this.template('server/config/mongodb/database.js', 'server/config/database.js');
        }
        if (this.dbOption === 'mysql') {
            this.template('server/config/sql/database.js', 'server/config/database.js');
        }

        this.template('server/config/express.js', 'server/config/express.js');

        if (this.useAuth) {
            this.template('server/config/secrets.js', 'server/config/secrets.js');
            this.template('server/auth/index.js', 'server/auth/index.js');
            this.template('server/routes/account.js', 'server/routes/account.js');
            this.template('server/routes/user.js', 'server/routes/user.js');

            if (this.dbOption === 'mongodb') {
                this.template('server/controllers/mongodb/user.js', 'server/controllers/user.js');
                this.template('server/models/mongodb/user.js', 'server/models/user.js');
                this.template('server/controllers/mongodb/account.js', 'server/controllers/account.js');

                if (this.authTypes.indexOf('local') > -1) {
                    this.template('server/auth/strategies/mongodb/local.js', 'server/auth/strategies/local.js');
                }
                if (this.authTypes.indexOf('facebook') > -1) {
                    this.template('server/auth/strategies/mongodb/facebook.js', 'server/auth/strategies/facebook.js');
                }
                if (this.authTypes.indexOf('twitter') > -1) {
                    this.template('server/auth/strategies/mongodb/twitter.js', 'server/auth/strategies/twitter.js');
                }
            }
            if (this.dbOption === 'mysql') {
                this.template('server/controllers/sql/user.js', 'server/controllers/user.js');
                this.template('server/models/sql/user.js', 'server/models/user.js');
                this.template('server/controllers/sql/account.js', 'server/controllers/account.js');

                this.template('server/controllers/sql/account.js', 'server/controllers/account.js');
                if (this.authTypes.indexOf('local') > -1) {
                    this.template('server/auth/strategies/sql/local.js', 'server/auth/strategies/local.js');
                }
                if (this.authTypes.indexOf('facebook') > -1) {
                    this.template('server/auth/strategies/sql/facebook.js', 'server/auth/strategies/facebook.js');
                }
                if (this.authTypes.indexOf('twitter') > -1) {
                    this.template('server/auth/strategies/sql/twitter.js', 'server/auth/strategies/twitter.js');
                }
            }

        }
        this.template('server/config/security.js', 'server/config/security.js');

        this.template('server/config/env/default.js', 'server/config/env/default.js');
        this.template('server/config/env/development.js', 'server/config/env/development.js');
        this.template('server/config/env/production.js', 'server/config/env/production.js');

        this.template('server/server.js', 'server.js');
        this.template('server/controllers/index.js', 'server/controllers/index.js');
        this.template('server/routes/index.js', 'server/routes/index.js');
    }
};

module.exports = nodeFiles;
