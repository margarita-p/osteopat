import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from '../config'

const $ = gulpLoadPlugins();

module.exports = () => (
  gulp.src(config.src.sassCopyBlock)
  .pipe($.rename({
    dirname: '',
  }))
  .pipe(gulp.dest(config.dest.sassCopyBlock))
);
