import gulp from 'gulp';

module.exports = gulp.series(
  'clean',
  gulp.parallel(
    'pug',
    'sass',
    'scripts',
    'fonts',
    'images',
    'libScripts',
    'libStyles',
    'spriteSvg',
  ),
);
