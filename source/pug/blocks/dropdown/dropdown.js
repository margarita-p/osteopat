import { $, $$ } from '../../../scripts/global/selector';
import { ACTIVE } from '../../../scripts/global/const';

const b = document.querySelectorAll('.dropdown__btn');


for (let i = 0; i < b.length; i += 1) {
  b[i].addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.parentNode.classList.toggle(ACTIVE);
  });
}

console.log('dsfsfdsfdsdf')
