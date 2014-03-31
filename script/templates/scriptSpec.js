/*
*   <%= _.slugify(name.toLowerCase()) %>Spec.js
*/
<% if (jsOption === 'RequireJS') { %>'use strict';

define(['modules/<%= camelCase(name) %>', 'jquery'], function(<%= camelCase(name) %>, $) {

    describe('just checking', function() {

        it('works for <%= name %>', function() {
            var msg = '<%= name %> loaded!';

            var message = <%= name %>.init(msg);

            expect(message).toMatch(/<%= name %>/);
        });

    });

});<% } else if (jsOption === 'Browserify') { %>
'use strict';

var <%= camelCase(name) %> = require('../../dev/scripts/modules/<%= _.slugify(name.toLowerCase()) %>.js');

describe('just checking', function() {

    it('works for <%= _.slugify(name.toLowerCase()) %>', function() {
        var msg = '<%= camelCase(name) %> loaded!';

        var message = <%= camelCase(name) %>.init(msg);

        expect(message).toMatch(/<%= camelCase(name) %>/);
    });

});
<% } else { %>
describe('just checking <%= _.slugify(name.toLowerCase()) %>', function() {

    it('works for <%= _.slugify(name.toLowerCase()) %>', function() {
        var msg = '<%= _.slugify(name.toLowerCase()) %> is working!';

        var message = <%= camelCase(name) %>.init(msg);

        expect(message).toMatch(/<%= _.slugify(name.toLowerCase()) %>/);
    });

});
<% } %>