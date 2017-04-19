'use strict';

import gulp from 'gulp'
import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import webpackConfig from '../webpack.config.babel.js'

import config from '../config'

gulp.task('webpack', () => {
  return webpackStream(webpackConfig, webpack)
  .pipe(gulp.dest(config.build.javascripts.path));
});
