import Global from './global.js';

const processConfig = (cfg) => {
  if(typeof cfg.width === 'string') {
    let index = cfg.width.indexOf('%');
    if(index !== -1) {
      let percentile = parseInt(cfg.width.slice(0, index)) / 100;
      cfg.width = () => (window.innerWidth * percentile);
    }
    else {
      let width = cfg.width;
      cfg.width = () => (width);
    }
  }
  if(typeof cfg.height === 'string') {
    let index = cfg.height.indexOf('%');
    if(index !== -1) {
      let percentile = parseInt(cfg.height.slice(0, index)) / 100;
      console.log(percentile);
      cfg.height = () => (window.innerHeight * percentile);
    }
    else {
      let height = cfg.height;
      cfg.height = () => (height);
    }
  }
}

/**
  * This function creates a new setup function for p5.
  * @name createSetup
  * @param {Function} lambda is the setup function written by the user
  * @param {Object} config the canvas configuration defined by the user
  * @returns {Function} lambda curried with the config
*/
const createSetup = (lambda, config) => {
  processConfig(config);
  return () => {
    lambda(config);
  }
}
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
