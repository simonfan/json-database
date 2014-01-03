'use strict';

var documentMatcher = require('document-matcher');

/**
 * Returns a cursor object.
 */
exports.find = function find(criteria) {
	var match = documentMatcher(criteria);
};

exports._find = function _find(criteria) {

};

exports.findOne = function findOne(criteria) {

};