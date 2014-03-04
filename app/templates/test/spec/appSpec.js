<% if (jsOption === 'RequireJS') { %>'use strict';

define(['app', 'jquery'], function(app, $) {

    describe('just checking', function() {

        it('works for app', function() {
            var msg = 'Welcome to yeogurt!';

            var message = app.init(msg);

            expect(message).toMatch(/Welcome/);
        });

    });

});<% } else if (jsOption === 'Browserify') { %>
'use strict';

var app = require('../../dev/scripts/app');

describe('just checking', function() {

    it('works for app', function() {
        var msg = 'Welcome to yeogurt!';

        var message = app.init(msg);

        expect(message).toMatch(/Welcome/);
    });

});
<% } %>