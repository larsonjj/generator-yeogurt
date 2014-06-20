/**
*   <%= _.classify(name) %> Spec Description
*/

<% if (jsOption === 'RequireJS') { %>define(function(require) {
    'use strict';

    var <%= _.classify(name) %> = require('modules/<%= _.slugify(name) %>');

    describe('just checking', function() {

        it('works for <%= _.camelize(name) %>', function() {
            var msg = '<%= _.camelize(name) %> loaded!';

            var message = <%= _.classify(name) %>.init(msg);

            expect(message).toMatch(/initialized/);
        });

    });

});<% } else if (jsOption === 'Browserify') { %>'use strict';

var <%= _.classify(name) %> = require('../../dev/scripts/modules/<%= _.slugify(name) %>.js');

describe('just checking', function() {

    it('works for <%= _.camelize(name) %>', function() {
        var msg = '<%= _.camelize(name) %> loaded!';

        var message = <%= _.classify(name) %>.init(msg);

        expect(message).toMatch(/initialized/);
    });

});
<% } else { %>'use strict';

describe('just checking <%= _.camelize(name) %>', function() {

    it('works for <%= _.camelize(name) %>', function() {
        var msg = '<%= _.camelize(name) %> is working!';

        var message = <%= _.camelize(name) %>.init(msg);

        expect(message).toMatch(/initialized/);
    });

});
<% } %>