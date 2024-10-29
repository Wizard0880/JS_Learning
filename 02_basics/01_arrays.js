// Arrays in JS

// Arrays in js are resizble, we can add or remove elements from the array at any time
// Arrays can hold multiple data types

// Methods in Arrays
/*
.push() - add an element at the end of the array
.pop() - remove an element from the end of the array
.unshift() - add an element at the beginning of the array
.shift() - remove an element from the beginning of the array
.includes() - check if an element is present in the array // true or false
.indexOf() - get the index of an element in the array // -1 if not found
.splice() - add or remove elements from any position of the array
.slice() - copy elements from the array
.join() - join the elements of the array // returns a string -- commonly used to convert an array to a string

*/

const myArr = [1,2,3,4,5,6,7,8,9,10];
// slice vs splice
// slice() - returns a new array
// splice() - modifies the original array
console.log(myArr.slice(1,5)); // 2,3,4,5 // 1 is inclusive and 5 is exclusive
console.log(myArr.splice(1,5)); // 2,3,4,5,6 // 1 is the index and 5 is the number of elements to be removed

