fill(17, 0, 255);

// a handy dandy ruler across the top
var x = 0;
while (x < 400) {
    text(x, x, 18);
    x += 50;
}

var y = 0;
while (y < 400) {
    text(y, 0, y);
    y += 50;
}
