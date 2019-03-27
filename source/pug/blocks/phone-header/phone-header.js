import { $, $$ } from '../../../scripts/global/selector';
import { ACTIVE } from '../../../scripts/global/const';

const btns = $$('.phone-header__btn');
const modal = $('.modal--phone-order');

const onClickBtn = (e) => {
  e.preventDefault();
  modal.classList.add(ACTIVE);
}

for (let i = 0; i < btns.length; i += 1) {
  btns[i].addEventListener('click', onClickBtn);
}
