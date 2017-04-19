'use strict';

import gulp from 'gulp'
import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import plumber from 'gulp-plumber'
import webpackConfig from '../webpack.config.babel.js'
import config from '../config'

gulp.task('webpack', () => {
  return webpackStream(webpackConfig, webpack)
  .pipe(plumber())
  .pipe(gulp.dest(config.build.javascripts.path));
});
