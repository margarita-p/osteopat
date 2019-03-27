import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from '../config'

const $ = gulpLoadPlugins();

module.exports = () => {
  return gulp.src(config.src.zip)
    .pipe($.zip(config.name + '.zip'))
    .pipe(gulp.dest(config.dest.zip))
};
