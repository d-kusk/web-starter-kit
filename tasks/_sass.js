'use strict';

import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import bulkSass from 'gulp-sass-bulk-import'
import newer from 'gulp-newer'

import config from '../config'

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
  .pipe(gulp.dest(config.build.stylesheets));
});
