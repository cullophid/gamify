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
var SRCDIR = 'app/';
var DESTDIR = 'www/';

// BUILD
gulp.task('webpack', function () {
  return gulp.src(SRCDIR + 'js/main.js')
    .pipe(webpack({
      devtool: "#inline-source-map"
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest(DESTDIR))
    .pipe(reload());

});

gulp.task('less', function () {
    return gulp.src(SRCDIR + 'less/style.less')
      .pipe(less())
      .pipe(gulp.dest(DESTDIR))
      .pipe(reload());
});

gulp.task('static', ['templates'], function () {
  return gulp.src([SRCDIR + 'index.html'])
    .pipe(gulp.dest(DESTDIR))
    .pipe(reload());
});

gulp.task('templates', function () {
  return gulp.src([SRCDIR + 'templates/**/*.html'])
    .pipe(gulp.dest(DESTDIR + '/templates'));
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
  gulp.watch([SRCDIR + 'js/**/*', SRCDIR + 'spec/**/*'], ['spec', 'webpack']);
  gulp.watch(SRCDIR + 'less/**/*.less', ['less']);
  gulp.watch([DESTDIR + 'index.html', DESTDIR + 'img/**/*', SRCDIR + 'templates/**/*'], ['static']);
});
