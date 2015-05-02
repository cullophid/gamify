'use strict';
//modules
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var rename = require('gulp-rename');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var reload = require('gulp-livereload');
var server = require('./server');
var mocha = require('gulp-spawn-mocha');
var mongo = require('./services/mongo');
var shell = require('gulp-shell');
require('babel/register');
//constants
var PUBLICDIR = 'app/';

// BUILD
gulp.task('webpack', function () {

  var webpackConfig = {
      devtool: "#inline-source-map",
      module: {
        loaders: [
          // { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader' },
          { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
      }
    };
  return gulp.src(PUBLICDIR + 'js/main.js')
    .pipe(webpack(webpackConfig))
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
      .pipe(mocha({
        reporter: 'dot',
        compilers: 'js:babel/register'}));
});
gulp.task('resttest', function () {
  return gulp.src(['test/setup.js','test/**/*.js'])
    .pipe(mocha({reporter: 'dot'}));
});
gulp.task('test', ['spec', 'resttest']);


gulp.task('cleanDB', function (done) {
  mongo
    .collection('users')
    .remove({email: {$regex: /\@example\.com/}});
  mongo
    .collection('games')
    .remove({name: 'Test Game'})
    .then(function () {
      done();
    });
});
gulp.task('run', ['build'], function () {
  return server.listen(3000);
});

gulp.task('watch', ['run'], function () {
  reload.listen();
  gulp.watch(['services/**/*.js', 'api/**/*.js'], ['spec']);
  gulp.watch([PUBLICDIR + 'js/**/*', PUBLICDIR + 'spec/**/*'], ['spec', 'webpack']);
  gulp.watch(PUBLICDIR + 'less/**/*.less', ['less']);
  gulp.watch([PUBLICDIR + 'index.html', PUBLICDIR + 'img/**/*', PUBLICDIR + 'templates/**/*'], ['static']);
});
