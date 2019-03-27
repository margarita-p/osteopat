import gulp from 'gulp';
import config from '../config'

module.exports = () => (
  gulp.src([
    config.src.root + '/*',
    // 'node_modules/apache-server-configs/dist/.htaccess'
  ], {
    dot: true
  })
  .pipe(gulp.dest(config.dest.root))
);
