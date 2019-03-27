import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

module.exports = function(err) {
  $.notify.onError({
    title:    "Error",
    message:  "Error: <%= error.message %>",
  })(err);
  this.emit('end');
};
