import config from '../canvas.config.js';
import Global from './global.js';
import { createSetup } from './utils.js';

const setup = createSetup(({ width, height }) => {
  Global.canvas = window.createCanvas(width, height);
  window.noFill();
  window.stroke(0);
  Global.message = "Hi there, this string exists in Global";
}, config);

export { setup };
