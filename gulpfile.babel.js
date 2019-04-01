import gulp from 'gulp';

const runTask = (taskName) => {
  gulp.task(taskName, cb => require(`./gulp/tasks/${taskName}`)(cb));
};

runTask('build');
runTask('clean');
runTask('copy');
runTask('default');
runTask('deploy');
runTask('fonts');
runTask('favicon');
runTask('images');
runTask('upload');
runTask('libScripts');
runTask('libStyles');
runTask('sassCopy');
runTask('sassCopyBlock');
runTask('pug');
runTask('sass');
runTask('scripts');
runTask('serve');
runTask('serviceWorker');
runTask('spriteSvg');
runTask('watch');
runTask('zip');
