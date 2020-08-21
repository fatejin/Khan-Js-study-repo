draw = function () {
    background(165, 219, 162);
    fill(255, 254, 222);
    rect(20, 100, 364, 200);


    if (mouseIsPressed) {
        fill(0, 0, 0);
        textSize(20);
        text("JavaScript", 165, 200);

    }
    else {
        fill(0, 0, 0);
        textSize(20);
        text("What programming language is this?", 32, 200);
    }


};