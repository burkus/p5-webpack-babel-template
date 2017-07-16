# Mini Guide to p5/es2015

If you're familiar with processing, p5 functions similarly.

## Setup and Draw

```javascript
module.exports = {
    setup: function() {
        createCanvas(500, 500);
        noFill();
        stroke(0);
    },

    draw: function() {
        background(145);
        ellipse(mouseX, mouseY, 100, 100);
    }
};
```
module.exports exposes the setup and draw function as a module that we can import in other files. Looking in main.js

```javascript
var drawing = require('./src/draw.js');
```
We see that `setup` and `draw` are imported from their source file as members of the `drawing` object.

These are then assigned to the global namespace via the `main` function.

```javascript
main(window);

function main(window) {
    window.setup = drawing.setup;
    window.draw  = drawing.draw;
}
```

## Explaining the code

How is that stuff being drawn?

```javascript
setup: function() {
    createCanvas(500, 500);
    noFill();
    stroke(0);
},
```
Setup is called once, before draw is called. If you want to generate only one frame, you can run all your code inside of setup and leave draw empty.

`createCanvas` adds a `<canvas>` element to the body of the webpage. That element is what allows us to draw things and create animations and what not. p5 is built on top of the browser APIs for the canvas, giving us abstraction and prettier code.

`stroke` sets the color of the lines that shapes are drawn in. It can take up to 3 values, RGB, or just one value for gray-scale.

#### Moving onto the draw function

```javascript
draw: function() {
    background(145);
    ellipse(mouseX, mouseY, 100, 100);
}
```

`background` is rather self-explanatory. You can pass it up to 4 values, 4 being RGBA, 3 values for RGB, and just one value for gray-scale.

`ellipse` is also self-explanatory, however `mouseX` and `mouseY` might create some questions. These are both global variables that provide the position of the mouse frame to frame. If you like you can use `window.mouseX` but it's unnecessary.

## Finishing up
What this information culminates in is a program that draws a gray-scale background every frame and then an ellipse at the current mouse position on top of that background that isn't color-filled and is stroked with a hex color of #000.
