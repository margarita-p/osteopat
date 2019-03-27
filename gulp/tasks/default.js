import gulp from 'gulp';

module.exports = gulp.series(
  'build',
  gulp.parallel(
    'watch',
    'serve'
  )
);
