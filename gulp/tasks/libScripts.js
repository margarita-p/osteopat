import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from '../config'

const $ = gulpLoadPlugins();

module.exports = () => (
  gulp.src(config.src.libScripts)
    .pipe($.uglify())
    .pipe($.concat('lib.js'))
    .pipe(gulp.dest(config.dest.libScripts))
);
