'use strict';

import gulp from 'gulp'

import config from './config'

import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import bulkSass from 'gulp-sass-bulk-import'
import newer from 'gulp-newer'

import pug from 'gulp-pug'

import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import webpackConfig from './webpack.config.babel.js'

gulp.task('default', [], () => {
  console.log('gulp run.');

  gulp.watch(config.source.stylesheets + '**/*.scss', ['sass']);
  gulp.watch(config.source.javascripts.path + '**/*.js', ['webpack']);
});


/**
 * Sass Compile Task
 */
gulp.task('sass', [], () => {
  return gulp.src([
    config.source.stylesheets + '**/*.scss',
    '!' + config.source.stylesheets + '**/_*.scss'
  ])
  .pipe(newer(config.build.stylesheets))
  .pipe(bulkSass())
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: config.browsers,
    cascade: false
  }))
  .pipe(gulp.dest(config.build.stylesheets))
});


/**
 * Pug Compile Task
 */
gulp.task('pug', () => {
  return gulp.src([
    config.source.html + '**/*.pug',
    '!' + config.source.html + '**/_*.pug'
  ])
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest(config.build.html))
});


/**
 * Task to Transpile ES2015 with Babel
 */
gulp.task('webpack', () => {
  return webpackStream(webpackConfig, webpack)
  .pipe(gulp.dest(config.build.javascripts.path));
});
