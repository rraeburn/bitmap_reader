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
          'preset': 'google'
        },
        files: {
          src: ['Gruntfile.js', 'index.js', 'lib/randomizer.js', 'lib/reader.js', 'test/randomizer_test.js', 'test/reader_test.js']
        }
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'simplemocha', 'jscs']);
  grunt.registerTask('default', ['test']);
};