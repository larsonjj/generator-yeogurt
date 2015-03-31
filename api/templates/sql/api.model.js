'use strict';

var <%= _.classify(name) %>Model = function(sequelize, Sequelize) {
  var <%= _.classify(name) %> = sequelize.define('<%= _.classify(name) %>', {
    name: Sequelize.STRING,
    active: Sequelize.BOOLEAN
  });
};

module.exports = <%= _.classify(name) %>Model;
