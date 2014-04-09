'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var RouteGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the route subgenerator with the argument ' + this.name + '.');
  },

  files: function () {
    this.template('route.coffee', 'app/src/routes/' + this.name + '.coffee');
  }
});

module.exports = RouteGenerator;
