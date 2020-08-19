noStroke();
var x = 11; // position of the car

/*
var draw = function() {
     
};
*/

var drawCar = function () {
    background(252, 255, 214);

    // draw the car body
    fill(255, 0, 115);
    rect(x, 200, 100, 20);
    rect(x + 15, 178, 70, 40);

    // draw the wheels
    fill(77, 66, 66);
    ellipse(x + 25, 221, 24, 24);
    ellipse(x + 75, 221, 24, 24);

    x = x + 3;
};

draw = function () {
    fill(mouseX, mouseY, mouseY);
    ellipse(mouseX, mouseY, 10, 10);
};
