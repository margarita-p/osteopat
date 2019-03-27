import gulp from 'gulp';
import buildBranch from 'gulp-build-branch';

module.exports = () => (
  buildBranch({
    folder: 'public',
    branch: 'gh-pages',
    commit: 'deploy',
  })
);
