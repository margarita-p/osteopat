import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from '../config'

const $ = gulpLoadPlugins();

module.exports = () => (
  gulp.watch(config.watch.pug, gulp.series('pug')),
  gulp.watch(config.watch.sass, gulp.series('sass')),
  gulp.watch(config.watch.scripts, gulp.series('scripts')),
  gulp.watch(config.watch.spriteSvg, gulp.series('spriteSvg')),
  gulp.watch(config.watch.fonts, gulp.series('fonts')),
  gulp.watch(config.watch.favicon, gulp.series('favicon')),
  gulp.watch(config.watch.images, gulp.series('images')),
  gulp.watch(config.watch.upload, gulp.series('upload'))
);
