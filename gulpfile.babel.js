'use strict';

var requireDir = require('require-dir');

/**
 * Load Gulp files from a subdirectory recursively
 */
var dir = requireDir('./gulp', {recurse: true});
