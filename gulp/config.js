const destPath = './public';
const srcPath = './source';

const config = {
  name: 'project',
  src: {
    root          : srcPath,
    blocks        : srcPath + '/blocks',
    pug           : srcPath + '/pug/*.pug',
    html          : srcPath + '/html/',
    sass          : srcPath + '/sass/styles.scss',
    scripts       : srcPath + '/scripts/entry.js',
    images        : [srcPath + '/assets/images/**/*.*', srcPath + '/pug/blocks/**/images/*.*', srcPath + '/html/blocks/**/images/*.*'],
    svg           : srcPath + '/assets/image',
    spritePng     : srcPath + '/assets/sprites/png/**/*.png',
    spriteSvg     : srcPath + '/assets/sprites/svg/**/*.svg',
    fonts         : srcPath + '/assets/fonts/**/*',
    libScripts    : [
                      // 'node_modules/jquery/dist/jquery.js',
                      './node_modules/object-fit-images/dist/ofi.js',
                      './node_modules/svg4everybody/dist/svg4everybody.js',
                      './node_modules/imask/dist/imask.js',
                      './node_modules/picturefill/dist/picturefill.js',
                      // 'node_modules/jquery-match-height/dist/jquery.matchHeight.js',
                      // 'node_modules/slick-carousel/slick/slick.js',
                      // 'node_modules/jquery.maskedinput/src/jquery.maskedinput.js',
                    ],
    libStyles     : [
                      './node_modules/normalize.css/normalize.css',
                    ],
  },
  dest: {
    root          : destPath,
    html          : destPath,
    css           : destPath + '/css',
    scripts       : destPath + '/scripts',
    images        : destPath + '/assets/images',
    libScripts    : destPath + '/assets/libs/scripts',
    libStyles     : destPath + '/assets/libs/styles',
    fonts         : destPath + '/assets/fonts',
    spriteSvg     : destPath + '/assets/sprites/svg/',
  },
  watch: {
    root          : srcPath,
    pug           : srcPath + '/pug/**/*.pug',
    html          : srcPath + '/html/**/*.html',
    sass          : [srcPath + '/**/*.scss', srcPath + '/**/*.sass'],
    scripts       : srcPath + '/**/*.js',
    spriteSvg     : srcPath + '/assets/sprites/svg/**/*.svg',
    fonts         : srcPath + '/assets/fonts/**/*.*',
    images        : [srcPath + '/assets/images/**/*.*', srcPath + '/blocks/**/images/*.*', srcPath + '/html/blocks/**/images/*.*'],
  },
  onError: require('./util/onError')
};

module.exports = config;
