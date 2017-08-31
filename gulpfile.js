var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('default', ['watch']);

gulp.task('build', ['build-root-css', 'build-component-css']);

gulp.task('build-root-css', function() {
  return gulp.src('src/sass/*.scss')
    .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('src/stylesheet'));
});

gulp.task('build-component-css', function() {
  return gulp.src('src/sass/components/*.scss')
    .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('src/components/stylesheet'));
})

gulp.task('watch', function() {
  gulp.watch('src/sass/*.scss', ['build-root-css']);
  gulp.watch('src/sass/components/*.scss', ['build-component-css']);
  gulp.watch('src/sass/modules/*.scss', [
    'build-root-css', 'build-component-css'
  ])
})
