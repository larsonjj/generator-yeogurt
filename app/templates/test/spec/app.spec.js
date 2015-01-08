/**
*   App Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

<% if (jsOption === 'requirejs') { %>'use strict';

define(function(require) {
    var app = require('client/scripts/app');

    describe('app', function() {

        it('Should run a few assertions', function() {

        });

    });

});<% } else if (jsOption === 'browserify') { %>
'use strict';

var app = require('../../client/scripts/app');

describe('app', function() {

    it('Should run a few assertions', function() {

    });

});<% } else { %>'use strict';

describe('app', function() {

    it('Should run a few assertions', function() {

    });

});
<% } %>
