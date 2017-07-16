import config from '../canvas.config.js';
import Global from './global.js';

/*
  lambda is the setup function written by the user
  lambda contains functions like createCanvas and smooth
  createSetup returns a setup function for p5 to use
*/
const createSetup = (lambda, config) => (() => lambda(config));
/*
  Create a new setup function. We DO NOT
  want to use the closure property on it.
  This will allow us to dynamically update
  the setup function from the client.
*/
const setup = createSetup(({ width, height }) => {
  Global.canvas = window.createCanvas(width, height);
  window.noFill();
  window.stroke(0);
  Global.message = "Hi there, this string exists in Global";
}, config);

export { createSetup, setup };
