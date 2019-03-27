import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from '../config'

const $ = gulpLoadPlugins();

module.exports = () => (
  gulp.src(config.src.spriteSvg)
    .pipe($.plumber({ errorHandler: config.onError }))
    .pipe($.svgmin())
    .pipe($.svgstore({ inlineSvg: true }))
    .pipe($.rename('sprite.svg'))
    .pipe(gulp.dest(config.dest.spriteSvg))
);
