import { ESC } from './const'

const onEsc = (e, action) => {
  if (e.keyCode === ESC) {
    action();
  }
};

export default onEsc;
