import config from '../canvas.config.js';
import Global from './global.js';
import { createSetup } from './utils.js';

Global.types.add('point', { x: 0, y: 0});
Global.types.add('circle', {
  x: 0,
  y: 0,
  width: 50,
  height: 50
});

Global.circle = Global.types.new('circle', 500, 500, 100, 100);
Global.pt = Global.types.new('point', 450, 500);

const setup = createSetup(({ width, height }) => {
  let canvas = window.createCanvas(width(), height());
  window.noFill();
  window.stroke(0);
  Global.message = "Hi there, this string exists in Global";
  Global.canvas = canvas;
}, config);

export { setup };
