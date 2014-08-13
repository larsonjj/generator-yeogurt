/**
 * Generate files specific to the scripts folder
 */

'use strict';

var scriptFiles = function scriptFiles() {
    // client/scripts
    this.mkdir('client/scripts');

    this.template('client/scripts/app.js', 'client/scripts/app.js');

    if (this.jsOption === 'RequireJS') {
        this.template('client/scripts/main.js', 'client/scripts/main.js');
    }

    if (this.jsFramework === 'Backbone') {
        this.mkdir('client/templates');
        this.mkdir('client/scripts/views');

        this.template('client/scripts/backbone/routes.js', 'client/scripts/routes.js');
        if (this.jsTemplate === 'Lo-dash') {
            this.template('client/scripts/backbone/templates/main.html', 'client/templates/main.jst');
        }
        else if (this.jsTemplate === 'Handlebars') {
            this.template('client/scripts/backbone/templates/main.html', 'client/templates/main.hbs');
        }
        else if (this.jsTemplate === 'Jade') {
            this.template('client/scripts/backbone/templates/main.html', 'client/templates/main.jade');
        }

        this.template('client/scripts/backbone/views/main.js', 'client/scripts/views/main.js');
    }
    else if (this.jsFramework === 'React') {
        this.mkdir('client/scripts/components');

        this.template('client/scripts/backbone/routes.js', 'client/scripts/routes.js');
        this.template('client/scripts/react/main.jsx', 'client/scripts/components/main.jsx');
        this.template('test/helpers/phantomjs-shims.js', 'test/helpers/phantomjs-shims.js');
    }
};

module.exports = scriptFiles;