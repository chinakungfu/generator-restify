// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};
 
module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
 
  grunt.initConfig({
    watch: {
      options: {
        nospawn: true
      },
      coffee: {
            files: ['app/src/{,*/}*.coffee'],
            tasks: ['coffee:compile']
      }
    },
    coffee: {
        compile: {
          files: [{
            expand: true,
            cwd: 'app/src',
            src: '{,*/}*.coffee',
            dest: 'app/dist',
            ext: '.js'
          }]
        }
    },
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost'
      }
    },
    forever: {
      server: {
        options: {
          index: 'app/src/server.coffee',
          command: 'coffee -w',
          logDir: 'app/logs'
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= options.serverport %>/ping'
      }
    }
  });
 
  // Builds out your coffeescript to the app/dist folder
  grunt.registerTask('build', ['coffee:compile']);
  // Tasks for Forever
  grunt.registerTask('start', ['forever:server:start']);
  grunt.registerTask('stop', ['forever:server:stop']);
  grunt.registerTask('restart', ['forever:server:restart']);
 
};
