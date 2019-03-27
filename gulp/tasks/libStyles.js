import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from '../config'

const $ = gulpLoadPlugins();

module.exports = () => (
  gulp.src(config.src.libStyles)
    .pipe($.concat('lib.css'))
    .pipe($.csso({
      restructure: false,
      sourceMap: true,
      debug: true,
    }))
    .pipe(gulp.dest(config.dest.libStyles))
);
