'use strict';

var path = require('path');

var mapo = require('mapo');

beforeEach(function () {
	var dirpaths = {
		temporary: 'temporary',
		namedDatabase: 'database.named',
		unnamedDatabase: 'database.unnamed'
	};

	this.dirpaths = mapo(dirpaths, function (p) {
		return path.join(__dirname, p);
	});
});

afterEach(function () {

});
