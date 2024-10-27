const score = 400;
const highScore = new Number(100);
console.log(highScore);
 /*
 .toString() - converts a number to a string
 we can perform more operations by converting a number to a string
.toFixed() - rounds off the number to the nearest integer // 100.1234.toFixed(2) = 100.12
.toPrecision() - rounds off the number to the specified length // 100.1234.toPrecision(2) = 100
.toLocalString() - converts a number to a local string // 100123.toLocalString('en-IN') = 100,123
 */


// --------------Maths in JavaScript----------------

/*
.abs() - returns the absolute value of a number // Math.abs(-100) = 100 , converts only -ve to +ve
.round() - rounds off the number to the nearest integer // Math.round(100.1234) = 100
.ceil() - rounds off the number to the nearest integer greater than the number // Math.ceil(100.1234) = 101
.floor() - rounds off the number to the nearest integer lesser than the number // Math.floor(100.1234) = 100
.min() - returns the minimum value from the given numbers // Math.min(100, 200, 300) = 100
.max() - returns the maximum value from the given numbers // Math.max(100, 200, 300) = 300
.random() - returns a random number between 0 and 1 // Math.random() = 0.1234
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // returns a random number greaterr than min
a popular formula to generate a random number between min and max
*/