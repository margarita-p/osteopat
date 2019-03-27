import { $, $$ } from '../../../scripts/global/selector';
import { ACTIVE, LARGE } from '../../../scripts/global/const';
import onEsc from '../../../scripts/global/onEsc';

const modals = $$('.modal');
const btnsClose = $$('.modal__close');
const overlays = $$('.overlay--modal');
const priceOrder = $('.modal--price-order');

const onPriceOrder = () => {
  if (window.innerWidth >= LARGE) {
    priceOrder.classList.remove(ACTIVE);
	}
}

const close = () => {
  e.preventDefault();
  for (let i = 0; i < modals.length; i += 1) {
    modals[i].classList.remove(ACTIVE);
  }
}

const onEscKeyup = e => {
  e.preventDefault();
  onEsc(e, close());
};

for (let i = 0; i < btnsClose.length; i += 1) {
  btnsClose[i].addEventListener('click', () => {
    btnsClose[i].parentNode.parentNode.classList.remove(ACTIVE);
  });
}

// for (let i = 0; i < overlays.length; i += 1) {
//   overlays[i].addEventListener('click', () => {
//     overlays[i].parentNode.classList.remove(ACTIVE);
//   });
// }
//
// window.addEventListener('resize', onPriceOrder);
