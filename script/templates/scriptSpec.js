/*
*   <%= _.camelize(name) %>Spec.js
*/
<% if (jsOption === 'RequireJS') { %>'use strict';

define(function(require) {

    var <%= camelCase(name) %> = ('modules/<%= camelCase(name) %>');

    describe('just checking', function() {

        it('works for <%= name %>', function() {
            var msg = '<%= name %> loaded!';

            var message = <%= name %>.init(msg);

            expect(message).toMatch(/initialized/);
        });

    });

});<% } else if (jsOption === 'Browserify') { %>'use strict';

var <%= camelCase(name) %> = require('../../dev/scripts/modules/<%= _.camelize(name) %>.js');

describe('just checking', function() {

    it('works for <%= _.camelize(name) %>', function() {
        var msg = '<%= camelCase(name) %> loaded!';

        var message = <%= camelCase(name) %>.init(msg);

        expect(message).toMatch(/initialized/);
    });

});
<% } else { %>'use strict';

describe('just checking <%= _.camelize(name) %>', function() {

    it('works for <%= _.camelize(name) %>', function() {
        var msg = '<%= _.camelize(name) %> is working!';

        var message = <%= camelCase(name) %>.init(msg);

        expect(message).toMatch(/initialized/);
    });

});
<% } %>