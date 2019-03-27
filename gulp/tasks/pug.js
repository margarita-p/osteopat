import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from '../config'

const $ = gulpLoadPlugins();

module.exports = () => (
  gulp.src(config.src.pug)
    .pipe($.plumber({ errorHandler: config.onError }))
    .pipe($.pug({
        pretty: true,
        cache: true,
      }))
    .pipe($.htmlmin({
      removeComments: true,
      // collapseWhitespace: true,
      collapseBooleanAttributes: true,
      // removeAttributeQuotes: true,
      // removeRedundantAttributes: true,
      // removeEmptyAttributes: true,
      // removeScriptTypeAttributes: true,
      // removeStyleLinkTypeAttributes: true,
      // removeOptionalTags: true,
    }))
    // Удаляет пустые строки
    .pipe($.replace(/^\s*\n/mg, ''))
    .pipe($.rename({
      dirname: '',
    }))
    .pipe(gulp.dest(config.dest.root))
);
