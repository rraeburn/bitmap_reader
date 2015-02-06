'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jscs');

  grunt.initConfig({
    jshint: {
      dev: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['Grunfile.js', 'lib/**/*.js', 'test/**/*.js', 'index.js']
      }
    },

    simplemocha: {
      all: {
        src: ['test/**/*.js']
      }
    },

    jscs: {
      all: {
        options: {
          jscs: 'Google'
        },
        src: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js', 'index.js']
      }
    }
  });

  grunt.registerTask('test', ['jshint:dev', 'simplemocha:all', 'jscs:all']);
  grunt.registerTask('default', ['test']);
};