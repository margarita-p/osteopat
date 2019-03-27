'use strict';

const fs = require('fs');
const mkdirp = require('mkdirp');

let blockName = process.argv[2];
let defaultExtensions = ['pug', 'scss', 'js'];
let extensions = uniqueArray(defaultExtensions.concat(process.argv.slice(3)));

if (blockName) {

  let dirPath = 'source/pug/blocks/' + blockName + '/';
  mkdirp(dirPath, function (err) {

    if (err) {
      console.error('Отмена операции: ' + err);
    }

    else {
      console.log('Создание папки ' + dirPath + ' (создана, если ещё не существует)');

      mkdirp(dirPath + 'images');

      extensions.forEach(function (extention) {

        let filePath = dirPath + blockName + '.' + extention;
        let fileContent = '';
        let styleFileImport = '';
        let scriptFileImport = '';
        let templateFileImport = '';
        let fileCreateMsg = '';

        if (extention == 'scss') {
          styleFileImport = '@import \"../pug/blocks/' + blockName + '/' + blockName + '\";';
          fileContent = '.' + blockName + ' {\n  \n}\n';

          fs.appendFile('source/sass/styles.scss', '\n' + styleFileImport, function (err) {
            if (err) {
              return console.log('styles.scss НЕ обновлён: ' + err);
            }

            console.log('style.scss обновлён');
          });
        }

        if (extention == 'pug') {
          templateFileImport = 'include ../blocks/' + blockName + '/' + blockName + '.pug';
          fileContent = 'mixin ' + blockName + '(data)\n  .' + blockName + '&attributes(attributes)';
          fs.appendFile('source/pug/templates/include.pug', templateFileImport + '\n', function (err) {
            if (err) {
              return console.log('blocks.pug НЕ обновлён: ' + err);
            }

            console.log('blocks.pug обновлён');
          });
        }
        if (extention == 'js') {
          scriptFileImport = 'require(\'../pug/blocks/' + blockName + '/' + blockName + '\');';
          fileContent = 'import {$, $$} from \'../../scripts/selector\';' + '\n' + 'import {TABLET, ESC, ENTER, ACTIVE} from \'../../scripts/const\';';
          fs.appendFile('source/scripts/entry.js', scriptFileImport + '\n', function (err) {
            if (err) {
              return console.log('entry.js НЕ обновлён: ' + err);
            }
            console.log('entry.js обновлён');
          });
        }

        if (fileExist(filePath) === false) {

          fs.writeFile(filePath, fileContent, function (err) {
            if (err) {
              return console.log('Файл НЕ создан: ' + err);
            }

            console.log('Файл создан: ' + filePath);
          });
        } else {
          console.log('Файл НЕ создан: ' + filePath + ' (уже существует)');
        }

      });
    }
  });
} else {
  console.log('Отмена операции: не указан блок');
}

function uniqueArray(arr) {
  var objectTemp = {};
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    objectTemp[str] = true;
  }

  return Object.keys(objectTemp);
}

function fileExist(path) {
  const fs = require('fs');
  try {
    fs.statSync(path);
  } catch (err) {
    return !(err && err.code === 'ENOENT');
  }
}
