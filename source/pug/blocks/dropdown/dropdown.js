import { $$ } from '../../../scripts/global/selector';
import { ACTIVE } from '../../../scripts/global/const';

const btns = $$('.dropdown__btn');

for (let i = 0; i < btns.length; i += 1) {
  btns[i].addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.parentNode.classList.toggle(ACTIVE);
  });
}
