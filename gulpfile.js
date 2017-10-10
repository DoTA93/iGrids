'use strict';

// Get all the dependincies
var gulp = require('gulp'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber');


// sass task
gulp.task('sass', function () {
  return gulp.src('./src/igrids.sass')
    .pipe(plumber())
    .pipe(sass.sync({}).on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

// sass-minify task
gulp.task('sass-minify', function () {
  return gulp.src('./src/igrids.sass')
    .pipe(plumber())
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist'));
});

// serve task
gulp.task('serve', ['sass-minify', 'sass'], function () {
  gulp.watch(['./src/**/*.sass'], ['sass-minify', 'sass']);
});

// default task
gulp.task('default', ['serve']);