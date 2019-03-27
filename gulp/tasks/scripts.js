import gulp from 'gulp';
import webpackStream from'webpack-stream';
import config from '../config'
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

module.exports = () => (
  gulp.src([
    config.src.scripts
  ])
    .pipe($.plumber({ errorHandler: config.onError }))

    .pipe(webpackStream({
      output: {
        filename: 'scripts.js',
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['@babel/env']
            }
          }
        ]
      },
      mode: 'production',
    }))
    .pipe(gulp.dest(config.dest.scripts))
);
