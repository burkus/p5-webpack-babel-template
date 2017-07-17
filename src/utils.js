import Global from './global.js';
/**
  * This function creates a new setup function for p5.
  * @name createSetup
  * @param {Function} lambda is the setup function written by the user
  * @param {Object} config the canvas configuration defined by the user
  * @returns {Function} lambda curried with the config
*/
const createSetup = (lambda, config) => (() => lambda(config));
/**
  * This function creates a new draw function for p5
  * @name createDraw
  * @param {Function} lambda is the draw function written by the user
  * @returns {Function} new function for p5 to use
*/
const createDraw = (lambda) => {
  return () => {
    lambda();
    Global.exeActions();
  }
};

export { createDraw, createSetup };
