background(255, 255, 255);

// tomato
noStroke();
fill(201, 76, 76);
ellipse(159, 200, 150, 150);
ellipse(207, 199, 150, 150);

// stem
fill(48, 130, 31);
rect(174, 103, 18, 30);


draw = function () {
    // take a bite out of the tomato!
    fill(255, 255, 255);
    ellipse(mouseX, mouseY, 72, 72);
};


