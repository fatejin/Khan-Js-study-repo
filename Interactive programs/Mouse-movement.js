
draw = function () {
    fill(mouseX, mouseY, 0);
    stroke(255, mouseY, mouseX);
    ellipse(mouseX, mouseY, 50, mouseX);
};
