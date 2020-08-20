var theNumber = 0;

fill(0, 0, 0);
textSize(30);
text("Analysis of: " + theNumber, 10, 36);

text("It's positive", 10, 90);
text("It's negative", 10, 140);
text("It's zero", 10, 190);


if (theNumber > 0) {
    noFill(); //positive
    rect(5, 60, 200, 40);
}
if (theNumber < 0) {
    noFill(); //negative
    rect(5, 109, 212, 40);
}
if (theNumber === 0) {
    noFill(); //zero
    rect(5, 157, 200, 40);
}
