'use strict';

let gulp = require('gulp');
let karma = require('karma');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new karma.Server({
        configFile: __dirname + '../../karma.conf.js',
        singleRun: true
    }, () => done()).start();
});
