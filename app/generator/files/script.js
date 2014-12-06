/**
 * Generate files specific to the scripts folder
 */

'use strict';

var scriptFiles = function scriptFiles() {
    // client/scripts

    if (this.jsOption === 'requirejs') {
        this.template('client/scripts/requirejs/main.js', 'client/scripts/main.js');
        this.template('client/scripts/requirejs/app.js', 'client/scripts/app.js');
    }

    if (this.jsOption === 'browserify') {
        this.template('client/scripts/browserify/app.js', 'client/scripts/app.js');
    }

    if (this.jsOption === 'none') {
        this.template('client/scripts/app.js', 'client/scripts/app.js');
    }

    if (this.jsFramework === 'backbone') {
        if (this.jsOption === 'requirejs') {
            this.template('client/scripts/backbone/routes/requirejs/routes.js', 'client/scripts/routes.js');
            this.template('client/scripts/backbone/views/requirejs/index.js', 'client/scripts/views/index.js');
        }

        if (this.jsOption === 'browserify') {
            this.template('client/scripts/backbone/routes/browserify/routes.js', 'client/scripts/routes.js');
            this.template('client/scripts/backbone/views/browserify/index.js', 'client/scripts/views/index.js');
        }

        if (this.jsOption === 'none') {
            this.template('client/scripts/backbone/routes/routes.js', 'client/scripts/routes.js');
            this.template('client/scripts/backbone/views/index.js', 'client/scripts/views/index.js');
        }

        if (this.jsTemplate === 'lodash') {
            this.template('client/scripts/backbone/templates/index.html', 'client/templates/index.jst');
        }
        else if (this.jsTemplate === 'handlebars') {
            this.template('client/scripts/backbone/templates/index.html', 'client/templates/index.hbs');
        }
        else if (this.jsTemplate === 'jade') {
            this.template('client/scripts/backbone/templates/index.html', 'client/templates/index.jade');
        }

    }
    else if (this.jsFramework === 'react') {
        this.template('client/scripts/backbone/routes/browserify/routes.js', 'client/scripts/routes.js');
        if (this.useJsx) {
            this.template('client/scripts/react/index.jsx', 'client/scripts/components/index.jsx');
        }
        else {
            this.template('client/scripts/react/index.js', 'client/scripts/components/index.js');
        }
        if (this.useTesting) {
            this.template('test/helpers/phantomjs-shims.js', 'test/helpers/phantomjs-shims.js');
        }
        if (this.useFlux) {
            this.template('client/scripts/flux/dispatchers/app.js', 'client/scripts/flux/dispatchers/app.js');
        }
    }
};

module.exports = scriptFiles;
