module.exports = function (config) {
  //noinspection JSFileReferences
  config.set({

    basePath: '.',

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      '.dist/scripts/app.js'
    ],

    autoWatch: false,

    singleRun: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-chrome-launcher']
  });
};
