var gulp = require('gulp');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
gulp.task('index', function () {
  var target = gulp.src('./index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./app/**/*.js']).pipe(angularFilesort());
 
  return target.pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest('./'));
});