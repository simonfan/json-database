'use strict';

var path = require('path'),
	fs = require('fs');

var should = require('should'),
	_ = require('lodash');

var jsondb = require('../src');

describe('db = jsondb(dirpath {String}, options {Object})', function () {

	beforeEach(function () {
		this.named = jsondb(this.dirpaths.namedDatabase);
	});

	it('is an object', function () {
		this.named.should.be.type('object')
	});

	it('has a `files` property that references a files object', function () {
		this.named.files.should.be.type('object');

		_.size(this.named.files.files).should.eql(fs.readdirSync(this.dirpaths.namedDatabase).length)
	});
});
