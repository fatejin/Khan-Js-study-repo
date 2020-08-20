// let's play 4 square!

draw = function () {
    fill(204, 204, 204);
    rect(0, 0, 200, 200); // top left
    rect(200, 0, 200, 200); // top right
    rect(0, 200, 200, 200); // bottom left
    rect(200, 200, 200, 200); // bottom right

    if (mouseX < 200 && mouseY < 200) {
        fill(255, 255, 255);
        rect(0, 0, 200, 200); // top left     
    }

    if (mouseX > 200 && mouseY < 200) {
        fill(255, 255, 255);
        rect(200, 0, 200, 200); // top right     
    }

    if (mouseX === 200 || mouseY === 200 || mouseX < 3 || mouseX > 397) {
        fill(255, 0, 0);
        text("EDGE BALL!!!!", 200, 200);
    }


    fill(0, 0, 0);
    ellipse(mouseX, mouseY, 30, 30);
};