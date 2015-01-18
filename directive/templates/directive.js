'use strict';

angular.module('<%= _.camelize(projectName) %>')
  .directive('<%= _.camelize(name) %>', function() {
    return {<% if (makeHTML) { %>
      template: '<%= htmlUrl %>',<% } else { %>
      template: '<p></p>',<% } %>
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('<%= _.camelize(name) %> directive');
      }
    };
  });
