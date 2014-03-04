/*
*   <%= _.slugify(name.toLowerCase()) %>Spec.js
*/
<% if (jsOption === 'RequireJS') { %>'use strict';

define(['<%= name %>', 'jquery'], function(<%= name %>, $) {

    describe('just checking', function() {

        it('works for <%= name %>', function() {
            var msg = '<%= name %> loaded!';

            var message = <%= name %>.init(msg);

            expect(message).toMatch(/<%= name %>/);
        });

    });

});<% } else if (jsOption === 'Browserify') { %>
'use strict';

var <%= name %> = require('../../dev/scripts/modules/<%= _.slugify(name.toLowerCase()) %>.js');

describe('just checking', function() {

    it('works for <%= _.slugify(name.toLowerCase()) %>', function() {
        var msg = '<%= name %> loaded!';

        var message = <%= name %>.init(msg);

        expect(message).toMatch(/<%= name %>/);
    });

});
<% } %>