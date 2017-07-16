import Global from './global.js';
const events = {};
/*
  Attaching events to the events object will automatically
  attach them to the window namespace, where p5 can call them
  when needed.
  Use Global to access data from other files, like setup.
*/
events.mousePressed = () => {
  let x = window.mouseX;
  let y = window.mouseY;
  console.log('The mouse has been pressed');
  console.log(`X @ ${x}`);
  console.log(`Y @ ${y}`);
  console.log(Global.message);
}

events.windowResized = () => {
  let w = window.windowWidth;
  let h = window.windowHeight;
  window.resizeCanvas(w, h);
}

export default events;
