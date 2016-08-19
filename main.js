var ints = [1, 2, 3, 4, 5];
ints.map(i => document.write(i + " "));

var drawing = require('./src/draw.js');

main(window);

function main(window) {
    window.setup = drawing.setup;
    window.draw  = drawing.draw;
}
