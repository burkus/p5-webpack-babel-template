import Global from './global.js';
import { createDraw } from './utils.js';

Global.addAction(() => console.log('First frame completed'));


const draw = createDraw(() => {
  window.background(145);
  window.ellipse(window.mouseX, window.mouseY, 100, 100);
  window.point(Global.pt.x, Global.pt.y);
  window.ellipse(Global.circle.x, Global.circle.y,
    Global.circle.width, Global.circle.height);

});

export { draw };
