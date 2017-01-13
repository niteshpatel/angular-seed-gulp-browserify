import gulp from "gulp"
import karma from "karma"


gulp.task('test', () => {
  new karma.Server({
    configFile: __dirname + '../../karma.conf.js',
    singleRun: true
  }).start();
});
