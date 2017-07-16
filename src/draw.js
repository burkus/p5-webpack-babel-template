import Global from './global.js';
/*
  createDraw allows updating of the draw method in the client
*/
const createDraw = (lambda) => {
  return () => {
    lambda();
    Global.exeActions();
  }
};

Global.addAction(() => console.log('First frame completed'));

const draw = createDraw(() => {
  window.background(145);
  window.ellipse(window.mouseX, window.mouseY, 100, 100);
});

export { draw, createDraw };
