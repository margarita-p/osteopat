import gulp from 'gulp';
import del from 'del';
import config from '../config'

module.exports = () => (
  del([
      config.dest.root + '/*',
      '!' + config.dest.root + '/.git',
      '!' + config.dest.root + '/.gitignore'
    ],
    { dot: true }
  )
);
