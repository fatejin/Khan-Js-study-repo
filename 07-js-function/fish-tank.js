background(89, 216, 255);

var drawFish = function (centerX, centerY, tailWidth) {

    //var centerX = 200;
    //var centerY = 100;
    var bodyLength = 118;
    var bodyHeight = 74;
    var bodyColor = color(162, 0, 255);

    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    //var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight / 2;
    triangle(centerX - bodyLength / 2, centerY,
        centerX - bodyLength / 2 - tailWidth, centerY - tailHeight,
        centerX - bodyLength / 2 - tailWidth, centerY + tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX + bodyLength / 4, centerY, bodyHeight / 5, bodyHeight / 5);

};

drawFish(250, 150, 5);
drawFish(147, 244, 70);
drawFish(135, 43, 25);
drawFish(304, 322, 55);

mouseClicked = function () {
    drawFish(mouseX, mouseY, 30);

};

var drawBubbles = function () {

    var bubX = random(50, 329);
    var bubY = random(30, 328);
    var bubW = random(10, 50);
    var bubH = bubW;


    fill(247, 252, 255);
    ellipse(bubX, bubY, bubW, bubH);

};

drawBubbles();
drawBubbles();
drawBubbles();
drawBubbles();
drawBubbles();
drawBubbles();
drawBubbles();
drawBubbles();