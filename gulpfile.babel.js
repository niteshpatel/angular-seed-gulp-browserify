const requireDir = require('require-dir');

/**
 * Load Gulp files from a subdirectory recursively
 */
const dir = requireDir('./gulp', {recurse: true});
