'use strict';
//modules
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpack = require('gulp-webpack');
var rename = require('gulp-rename');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var reload = require('gulp-livereload');
var server = require('./server');
var mocha = require('gulp-spawn-mocha');
//constants
var PUBLICDIR = 'app/';

// BUILD
gulp.task('webpack', function () {
  return gulp.src(PUBLICDIR + 'js/main.js')
    .pipe(webpack({
      devtool: "#inline-source-map"
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest(PUBLICDIR))
    .pipe(reload());

});

gulp.task('less', function () {
    return gulp.src(PUBLICDIR + 'less/style.less')
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(PUBLICDIR))
      .pipe(reload());
});

gulp.task('static'  , function () {
  reload();
});

gulp.task('build', ['less', 'webpack', 'static']);

// TEST
gulp.task('spec',function () {
    return gulp.src([
      'app/js/**/spec/**/*.js',
      'services/**/spec/**/*.js',
      'api/**/spec/**/*.js'
      ])
      .pipe(mocha({reporter: 'dot'}));
});
gulp.task('resttest', function () {
  return gulp.src('test/**/*.js')
    .pipe(mocha({reporter: 'dot'}));
});
gulp.task('test', ['spec', 'resttest']);

// RUN
gulp.task('run', ['build'], function () {
  server.listen(process.env.PORT || 3000);
});

gulp.task('watch', ['run'], function () {
  reload.listen();
  gulp.watch(['services/**/*.js', 'api/**/*.js'], ['spec']);
  gulp.watch([PUBLICDIR + 'js/**/*', PUBLICDIR + 'spec/**/*'], ['spec', 'webpack']);
  gulp.watch(PUBLICDIR + 'less/**/*.less', ['less']);
  gulp.watch([PUBLICDIR + 'index.html', PUBLICDIR + 'img/**/*', PUBLICDIR + 'templates/**/*'], ['static']);
});
