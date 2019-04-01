import { $$ } from '../../../scripts/global/selector';
import { ACTIVE } from '../../../scripts/global/const';

const inputsTel = $$('input[type="tel"]');
const textareas = $$('textarea');

for (let i = 0; i < inputsTel.length; i += 1) {
  const maskTel = new IMask(
    inputsTel[i], {
      mask: '+{7}(000)000-00-00',
    }
  );
}

for (let i = 0; i < textareas.length; i += 1) {
  textareas[i].innerHTML = textareas[i].innerHTML.trim();
}
