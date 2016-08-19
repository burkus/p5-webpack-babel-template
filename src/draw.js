require('p5');
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
