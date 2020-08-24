background(255, 255, 247);//yellow color 
stroke(173, 222, 237);//blue line color

for (var i = 0; i < 20; i += 1) {
    var lineY = 20 + (i * 20);
    line(0, lineY, 400, lineY);
    var lineX = 20 + (i * 20);
    line(lineX, 0, lineX, 400);
}





