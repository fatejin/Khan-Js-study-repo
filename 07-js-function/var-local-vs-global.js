var lifeInches = 20;

var calcInches = function (startAge, endAge, inchesPerYear) {
    var totalInches = inchesPerYear * (endAge - startAge);
    lifeInches += totalInches;
    return totalInches;
};

fill(255, 0, 0);

text("From 0-8 years:", 10, 20);
text(calcInches(0, 8, 2.5), 10, 40);

text("From 8-16 years:", 10, 100);
text(calcInches(8, 16, 2), 10, 120);

text("Total grown over life:", 10, 168);
text(lifeInches, 10, 200);