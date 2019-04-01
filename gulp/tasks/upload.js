import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from '../config'

const $ = gulpLoadPlugins();

module.exports = () => (
  gulp.src(config.src.upload)
    .pipe($.newer(config.dest.upload))
    .pipe($.rename({
      dirname: '',
    }))
    .pipe($.imagemin())
    .pipe(gulp.dest(config.dest.upload))
);
