import { $ } from '../../../scripts/global/selector';
import { ACTIVE } from '../../../scripts/global/const';

const btn = $('.category__btn');

btn.addEventListener('click', () => {
  btn.parentNode.classList.toggle(ACTIVE);
});
