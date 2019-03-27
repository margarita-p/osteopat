import browserSync from 'browser-sync';
import config from '../config'

module.exports = () => {
  browserSync.init({
    server: {
      baseDir: config.dest.root,
    }
  });
  browserSync.watch(config.dest.root + '/**/*.*')
    .on('change', browserSync.reload);
};
