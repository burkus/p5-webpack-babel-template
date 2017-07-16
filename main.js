require('p5');
import app from './src/config.js';
import events from './src/events.js';

main(window);

function main(window) {
  Object.assign(window, app);
  Object.assign(window, events);
}
