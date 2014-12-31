/**
 * Generate files specific to the server folder
 */

'use strict';

var nodeFiles = function nodeFiles() {
    if (this.useServer) {
        if (this.dbOption === 'mongodb') {
            this.template('server/config/mongodb/database.js', 'server/config/database.js');
        }
        if (this.dbOption === 'sql') {
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

                this.template('server/auth/strategies/mongodb/local.js', 'server/auth/strategies/local.js');
            }
            if (this.dbOption === 'sql') {
                this.template('server/controllers/sql/user.js', 'server/controllers/user.js');
                this.template('server/models/sql/user.js', 'server/models/user.js');
                this.template('server/controllers/sql/account.js', 'server/controllers/account.js');

                this.template('server/controllers/sql/account.js', 'server/controllers/account.js');
                this.template('server/auth/strategies/sql/local.js', 'server/auth/strategies/local.js');
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
