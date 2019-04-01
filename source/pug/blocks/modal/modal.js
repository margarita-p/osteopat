import { $, $$ } from '../../../scripts/global/selector';
import { ACTIVE } from '../../../scripts/global/const';
import onEsc from '../../../scripts/global/onEsc';

const btnsClose = $$('.modal__close');
const overlays = $$('.modal__overlay');
const btnsModal = $$('.js-appointment');
const modal = $('.modal--appointment');
const btnVideo = $('.intro__video-btn');
const video = $('.modal--intro-video');

// Закрывает модальное окно по клику на крестик
for (let i = 0; i < btnsClose.length; i += 1) {
  btnsClose[i].addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.parentNode.parentNode.parentNode.classList.remove(ACTIVE);
  });
}

// Закрывает модальное окно по клику на оверлей
for (let i = 0; i < overlays.length; i += 1) {
  overlays[i].addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.parentNode.classList.remove(ACTIVE);
  });
}

// включает модальное окно "Записаться на прием"
for (let i = 0; i < btnsModal.length; i += 1) {
  btnsModal[i].addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add(ACTIVE);
  });
}

// включает модальное окно видео
if(btnVideo){
  btnVideo.addEventListener('click', (e) => {
    e.preventDefault();
    video.classList.add(ACTIVE);
  }, false);
}

if(video){
  video.querySelector('.modal__close').addEventListener('click', () => {
    video.querySelector('.modal__video').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  });

  video.querySelector('.modal__overlay').addEventListener('click', () => {
    video.querySelector('.modal__video').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  });
}


// Закрывает модальное окно при нажатии экскейп
const onEscKeyup = e => {
  onEsc(e, close());
};
