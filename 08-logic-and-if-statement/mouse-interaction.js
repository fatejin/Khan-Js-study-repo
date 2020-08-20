draw = function () {
    if (mouseIsPressed) {
        noStroke();
        fill(mouseX, mouseY, 0);

        ellipse(mouseX, mouseY, 20, 20);
    }
};
