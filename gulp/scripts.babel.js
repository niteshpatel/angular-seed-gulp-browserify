import gulp from "gulp"
import concat from "gulp-concat"
import uglify from "gulp-uglify"
import sourcemaps from "gulp-sourcemaps"


gulp.task('scripts', [], () => {
  return gulp.src([
    // Angular module files must be loaded first but angular will
    // sort out all other dependency ordering automatically
    'src/app/**/*.module.js',
    'src/app/**/*.js',

    // Exclude Jasmine test files from the bundle
    '!src/app/**/*.spec.js'
  ])

  // All plugins between sourcemaps.init and write must support sourcemaps
    .pipe(sourcemaps.init())

    // Combine in one file
    .pipe(concat('app.js'))

    // Minification
    .pipe(uglify())

    // Write out the sourcemaps to the end of the bundle
    .pipe(sourcemaps.write())

    // Write to dist folder
    .pipe(gulp.dest('.dist/scripts/'));
});
