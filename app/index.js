'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var RestifyGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });

    this.options.serverport = 8080;
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('Welcome to the Restify Generator for Yeoman.'));

    var prompts = [{
      type: 'confirm',
      name: 'coffeescript',
      message: 'Would you like to use coffeescript?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.options.coffeescript = props.coffeescript;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/src');
    this.mkdir('app/src/routes');
    this.mkdir('app/src/models');
    this.mkdir('app/src/libs');
    this.mkdir('app/dist');
    this.mkdir('app/logs');

    this.template('_package.json', 'package.json');
    this.template('gruntfile.js', 'Gruntfile.js');
    this.template('README.md', 'README.md');

    var srcType = this.options.coffeescript ? 'coffee' : 'js';

    this.copy('src-' + srcType + '/server.' + srcType, 'app/src/server.' + srcType);
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = RestifyGenerator;
