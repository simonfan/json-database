'use strict';

var subject = require('subject');


// cursor emulates the behaviour of an iterator.

// it implements the same interface as Mongo Db query cursor.

var cursor = module.exports = subject({

	initialize: function (dir, criteria) {
		this.dir = dir;
		this.criteria = criteria;
	},

	count: function count() {

	},

	forEach: function forEach() {

	},

	map: function map() {

	},

	hasNext: function hasNext() {

	},

	next: function next(argument) {
		// body...
	},

	skip: function skip(quantity) {

	},

	sort: function sort() {

	},

	toArray: function toArray() {

	},
});
