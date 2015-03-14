'use strict';
//modules
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var rename = require('gulp-rename');
var less = require('gulp-less');
var reload = require('gulp-livereload');
var server = require('./server');
var mocha = require('gulp-mocha');
//constants
var SRC_DIR = 'app/';
var DEST_DIR = 'app/build/';

// BUILD
gulp.task('webpack', function () {
  return gulp.src(SRC_DIR + 'js/app.js')
    .pipe(webpack({}))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest(DEST_DIR))
    .pipe(reload());

});

gulp.task('less', function () {
    return gulp.src(SRC_DIR + 'less/style.less')
      .pipe(less())
      .pipe(gulp.dest(DEST_DIR))
      .pipe(reload());
});
gulp.task('static',function () {
 return gulp.src([DEST_DIR + 'index.html', DEST_DIR + 'img/**/*'])
   .pipe(reload());
});


gulp.task('build', ['less', 'webpack', 'static']);

// TEST
gulp.task('unittest',function () {
    gulp.src('test/**/*.js')
      .pipe(mocha({reporter: 'spec'}));
});
gulp.task('test', ['unittest']);
// RUN
gulp.task('run', ['build'], function () {
  server.listen(process.env.PORT || 3000);
});

gulp.task('watch', ['run'], function () {
  reload.listen();
  gulp.watch(SRC_DIR + 'js/**/*', ['unittest', 'webpack']);
  gulp.watch(SRC_DIR + 'less/**/*.less', ['less']);
  gulp.watch([DEST_DIR + 'index.html', DEST_DIR + 'img/**/*'], ['static']);
});
