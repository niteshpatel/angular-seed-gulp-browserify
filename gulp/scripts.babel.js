import gulp from "gulp"
import concat from "gulp-concat"
import uglify from "gulp-uglify"
import sourcemaps from "gulp-sourcemaps"


gulp.task('scripts', [], () => {
  return gulp.src([
    'src/app/**/*.module.js',
    'src/app/**/*.js',
    '!src/app/**/*.spec.js',
  ])

  // All plugins between sourcemaps.init and write must support sourcemaps
    .pipe(sourcemaps.init())

    // Combine in one file
    .pipe(concat('app.js'))

    // Minification
    .pipe(uglify())

    .pipe(sourcemaps.write())

    // Write to dist folder
    .pipe(gulp.dest('.dist/scripts/'));
});
