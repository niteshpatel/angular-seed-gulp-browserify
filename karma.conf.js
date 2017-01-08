//noinspection JSUnresolvedVariable
module.exports = function (config) {
    config.set({

        basePath: 'app',

        files: [],

        autoWatch: false,

        singleRun: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: ['karma-jasmine', 'karma-phantomjs-launcher']
    });
};