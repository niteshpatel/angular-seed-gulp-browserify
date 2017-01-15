module.exports = function (config) {
  //noinspection JSFileReferences
  config.set({

    basePath: '.',

    files: [
      // Vendor
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',

      // App
      '.dist/scripts/app.js',

      // Tests
      'src/app/**/*.spec.js'
    ],

    autoWatch: false,

    singleRun: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-chrome-launcher']
  });
};
