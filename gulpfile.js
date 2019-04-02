'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./docs/css'));
});

// gulp.task('sass:watch', function () {
//  gulp.watch('./scss/main.scss', ['sass']);
// });
