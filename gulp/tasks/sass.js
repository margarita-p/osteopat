import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import config from '../config'

const $ = gulpLoadPlugins();
const isDevelopment = process.env.NODE_ENV !== 'production';
const AUTOPREFIXER_BROWSERS = [
  '> 1%',
  'last 4 versions'
];

module.exports = () => (
  gulp.src(config.src.sass)
    .pipe($.plumber({ errorHandler: config.onError }))
    // .on('error', config.errorHandler)
    .pipe($.if(isDevelopment, $.sourcemaps.init()))
    .pipe($.sass())
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe($.csscomb())
    .pipe(gulp.dest(config.dest.css))
    .pipe($.csso({
      restructure: false,
      sourceMap: true,
      debug: true,
    }))
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.dest.css))
    .pipe($.if(isDevelopment, $.sourcemaps.write()))
    .pipe(browserSync.stream())
);
