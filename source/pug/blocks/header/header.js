import { $ } from '../../../scripts/global/selector';
import { ACTIVE, LARGE } from '../../../scripts/global/const';
import onEsc from '../../../scripts/global/onEsc';

const mainNav = $('.header__main-nav');
const btnOpen = $('.header__button-nav');
const overlay = $('.overlay--header');

const toggle = () => {
  mainNav.classList.toggle(ACTIVE);
  btnOpen.classList.toggle(ACTIVE);
  overlay.classList.toggle(ACTIVE);
};

const close = () => {
  mainNav.classList.remove(ACTIVE);
  btnOpen.classList.remove(ACTIVE);
  overlay.classList.remove(ACTIVE);
}

const hideOverlay = () => {
  if (window.innerWidth >= LARGE) {
    overlay.classList.remove(ACTIVE);
	}
}

const onBtnOpenClick = e => {
  e.preventDefault();
  toggle();
};

const onEscKeyup = e => {
  e.preventDefault();
  onEsc(e, close);
};

btnOpen.addEventListener('click', onBtnOpenClick);
overlay.addEventListener('click', onBtnOpenClick);
document.addEventListener('keyup', onEscKeyup);
window.addEventListener('resize', hideOverlay);
