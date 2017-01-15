import gulp from "gulp"
import concat from "gulp-concat"


gulp.task('scripts', [], () => {
  return gulp.src([
    'src/app/**/*.module.js',
    'src/app/**/*.js'
  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('.dist/scripts/'));
});
