import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from '../config'

const $ = gulpLoadPlugins();

module.exports = () => (
  gulp.src(config.src.fonts, {
    dot: true,
    since: gulp.lastRun('fonts')
  })
    .pipe($.newer(config.dest.fonts))
    .pipe(gulp.dest(config.dest.fonts))
);
