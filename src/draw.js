import Global from './global.js';
import { createDraw } from './utils.js';

Global.addAction(() => console.log('First frame completed'));

const draw = createDraw(() => {
  window.background(145);
  window.ellipse(window.mouseX, window.mouseY, 100, 100);
});

export { draw };
