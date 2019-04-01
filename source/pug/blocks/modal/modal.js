import { $, $$ } from '../../../scripts/global/selector';
import { ACTIVE } from '../../../scripts/global/const';
import onEsc from '../../../scripts/global/onEsc';

const modals = $$('.modal');
const btnsClose = $$('.modal__close');
const overlays = $$('.overlay--modal');
const btnsOpenAppointment = $$('.js-appointment');
const btnVideo = $('.intro__video-btn');
const modalAppointment = $('.modal--appointment');
const video = $('.modal--intro-video');

const close = () => {
  for (let i = 0; i < modals.length; i += 1) {
    modals[i].classList.remove(ACTIVE);
  }
}

// Закрывает модальное окно по клику на крестик
for (let i = 0; i < btnsClose.length; i += 1) {
  btnsClose[i].addEventListener('click', () => {
    btnsClose[i].parentNode.parentNode.parentNode.classList.remove(ACTIVE);
  });
}

// Закрывает модальное окно по клику на оверлей
for (let i = 0; i < overlays.length; i += 1) {
  overlays[i].addEventListener('click', () => {
    overlays[i].parentNode.classList.remove(ACTIVE);
  });
}

// включает модальное окно "Записаться на прием"
for (let i = 0; i < btnsOpenAppointment.length; i += 1) {
  btnsOpenAppointment[i].addEventListener('click', () => {
    modalAppointment.classList.add(ACTIVE);
  });
}

// включает модальное окно видео

// btnVideo.addEventListener('click', () => {
//   video.classList.add(ACTIVE);
// });

// Закрывает модальное окно при нажатии экскейп
const onEscKeyup = e => {
  onEsc(e, close());
};
