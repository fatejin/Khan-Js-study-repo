
// string = text
fill(92, 24, 219);
var howBig = 30;
var draw = function () {
    howBig = howBig + 1;
    textSize(howBig);
    background(0, 238, 255);
    var myName = "Sophia";
    var message = myName + "!!!";
    text(message, mouseX, mouseY);
};
