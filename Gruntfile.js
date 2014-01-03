/**
Gruntfile to assis node development.
*/

module.exports = function (grunt) {

	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		simplemocha: {
			options: {
			//	globals: ['should'],
				timeout: 3000,
				ignoreLeaks: false,
			//	grep: '*-test',
				ui: 'bdd',
				reporter: 'dot'
			},

			all: { src: ['test/*.js'] }
		},

		yuidoc: {
			compile: {
				name: 'json-database',
				version: '0.0.0',
			//	description: '',
			// 	url: '',
				options: {
					paths: 'src/',
				//	themedir: 'path/to/custom/theme/',
					outdir: 'docs/'
				}
			}
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc',
				force: true,
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},

			// tests
			test: {
				src: ['test/**/*.js']
			},

			// src
			src: {
				src: ['src/**/*.js']
			}
		},

		watch: {
			live: {
				files: ['src/*.js', 'test/**', 'demo/**', 'docs/**', 'Gruntfile.js'],
				tasks: ['jshint:gruntfile', 'jshint:src', 'simplemocha']
			}
		},
	});

	/**
	 * Task loading
	 */
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.loadNpmTasks('grunt-contrib-jshint');


	// mocha tests
	grunt.registerTask('mocha', 'simplemocha');

	// full live
	grunt.registerTask('live', ['watch:live']);
	/**
	[1] Starts a server as a child process
	[2] Starts watching files.
	*/

	grunt.registerTask('default', ['yuidoc', 'jshint:gruntfile', 'jshint:src', 'simplemocha', 'watch:live']);
};
