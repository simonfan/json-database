//     JsonDatabase
//     (c) simonfan
//     JsonDatabase is licensed under the MIT terms.

/**
 * CJS module.
 *
 * @module JsonDatabase
 */

'use strict';

// native dependencies:
var fs = require('fs');

// third party:

var Q = require('q'),
	_ = require('lodash'),
	jsonfile = require('json-file'),
	subject = require('subject');


// submodules:
var cursor = require('./cursor');


/**
 * Initializer
 */
var database = module.exports = subject(function database(dirpath) {
	this.dirpath = dirpath;

	this.files = jsonfile.s(dirpath, fs.readdirSync(dirpath));
});

/**
 * Proto properties.
 */
database.proto({

	idAttribute: 'id',

	collection: function collection(name) {

	},
});

database.proto(require('./read'));
database.proto(require('./find'));
database.proto(require('./query'));
