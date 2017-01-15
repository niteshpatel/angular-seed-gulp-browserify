import gulp from "gulp"
import concat from "gulp-concat"
import uglify from "gulp-uglify"


gulp.task('scripts', [], () => {
  return gulp.src([
    'src/app/**/*.module.js',
    'src/app/**/*.js',
    '!src/app/**/*.spec.js',
  ])
    .pipe(concat('app.js'))  // combine in one file
    .pipe(uglify())  // minification
    .pipe(gulp.dest('.dist/scripts/'));  // write to dist folder
});
