'use strict';

import gulp from 'gulp'

import config from './config'

import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import bulkSass from 'gulp-sass-bulk-import'
import newer from 'gulp-newer'

import pug from 'gulp-pug'

import webpack from 'webpack-stream'

gulp.task('default', [], () => {
  return console.log('gulp ran.');
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
  return gulp.src([
    config.source.javascripts.path + config.source.javascripts.fileName
  ])
  .pipe(webpack( require('./webpack.config.babel.js') ))
  .pipe(gulp.dest(config.build.javascripts.path));
});
