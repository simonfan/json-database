'use strict';

var should = require('should');

var JsonDatabase = require('.././src/index');

describe('JsonDatabase query', function () {
	beforeEach(function (done) {
		done();
	});

	it('is fine (:', function () {
		var fruit = { name: 'banana' }
		fruit.should.have.property('name', 'banana');
	});
});
