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
    this.template('server/config/secrets.js', 'server/config/secrets.js');

    this.template('server/config/security.js', 'server/config/security.js');

    this.template('server/config/env/default.js', 'server/config/env/default.js');
    this.template('server/config/env/development.js', 'server/config/env/development.js');
    this.template('server/config/env/production.js', 'server/config/env/production.js');
    this.template('server/config/env/test.js', 'server/config/env/test.js');

    this.template('server/routes.js', 'server/routes.js');

    this.template('server/server.js', 'server/server.js');
    this.template('server/index/index.js', 'server/index/index.js');
    this.template('server/index/index.controller.js', 'server/index/index.controller.js');
    this.template('server/index/package.json', 'server/index/package.json');
  }
};

module.exports = nodeFiles;
