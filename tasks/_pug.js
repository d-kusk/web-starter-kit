'use strict';

import gulp from 'gulp'
import pug from 'gulp-pug'

import config from '../config'

gulp.task('pug', () => {
  return gulp.src([
    config.source.html + '**/*.pug',
    '!' + config.source.html + '**/_*.pug'
  ])
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest(config.build.html));
});
