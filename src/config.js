// Setup event, draw, and setup functions
import { setup } from './setup.js';
import { draw } from './draw.js';
import Global from './global.js';
/*
  Any key -> value attached to app will automatically
  be attached to the window namespace.
  Events are attached separately in the events.js file.
  Most projects don't need to modify this file.
*/
const app = {};
app.setup = setup;
app.draw  = draw;
app.Global = Global;

export default app;
