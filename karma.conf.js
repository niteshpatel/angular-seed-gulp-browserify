//noinspection JSUnresolvedVariable
module.exports = function (config) {
  config.set({

    basePath: '.',

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/app/**/*.module.js',
      'src/app/**/!(*.module).js'
    ],

    autoWatch: false,

    singleRun: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-chrome-launcher']
  });
};
