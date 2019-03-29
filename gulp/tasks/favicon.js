import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from '../config'

const $ = gulpLoadPlugins();

module.exports = () => (
  gulp.src(config.src.favicon, {
    dot: true,
    since: gulp.lastRun('favicon')
  })
    .pipe($.newer(config.dest.favicon))
    .pipe(gulp.dest(config.dest.favicon))
);
