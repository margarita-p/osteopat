import { $ } from '../../../scripts/global/selector';
import { ACTIVE } from '../../../scripts/global/const';

const btn = $('.intro__btn');
const modal = $('.modal--price-order');

const onClickBtn = (e) => {
  e.preventDefault();
  modal.classList.add(ACTIVE);
}

btn.addEventListener('click', onClickBtn);
