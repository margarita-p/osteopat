import gulp from 'gulp';
import config from '../config'

module.exports = () => (
  gulp.src([
    config.src.root + '/*',
  ], {
    dot: true
  })
  .pipe(gulp.dest(config.dest.root))
);
