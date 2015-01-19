'use strict';

angular.module('<%= _.camelize(projectName) %>')
  .provider('<%= _.camelize(name) %>', function() {

    // Private API

    var yeogurt = 'awesome';

    function Describe() {
      this.greet = function() {
        return yeogurt;
      };
    }

    // Public API (use 'this' to make public)

    this.setDescription = function(value) {
      yeogurt = value;
    };

    this.$get = function() {
      return new Describe();
    };

  });
