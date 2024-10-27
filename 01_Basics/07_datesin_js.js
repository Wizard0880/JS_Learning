/*
Dates are objects in JavaScript. We can create a date object using the new keyword.

*/

// Date in JS

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());

//let myCreatedDate = new Date(2024,8,11); // year, month, day // months are 0 indexed
// since months are 0 indexed, it is usually written as getMonth() + 1 so that end user can understand it easily
let myCreatedDate = new Date(2024,8,11,15,30); // year, month, day, hour, minutes // months are 0 indexed
let myCreatedNewDate = new Date("01-11-2024 15:30:00"); // month-day-year // months are NOT 0 indexed , they are 1 indexed as it is not an array
console.log(myCreatedDate.toLocaleString());


//let myTimeStamp = new Date();
let myTimeStamp = Date.now();
console.log(myTimeStamp); // returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(myCreatedDate.getTime()); // since myCreatedDate is a date object, we can use getTime() method to get the time in milliseconds since January 1, 1970, 00:00:00 UTC , hepls us to compare dates // commonly used in hotel booking websites or contest websites to compare the time of submission of the form

//console.log(myCreatedDate.getFullYear()); // returns the year // 2024

// Interview Questions

console.log(Math.floor(Date.now() / 1000)); // -- return the current timestamp in seconds

// we can do the same for minutes, hours, days, months, years
console.log(Math.floor(Date.now() / 1000 / 60)); // -- return the current timestamp in minutes
console.log(Math.floor(Date.now() / 1000 / 60 / 60)); // -- return the current timestamp in hours
console.log(Math.floor(Date.now() / 1000 / 60 / 60 / 24)); // -- return the current timestamp in days
console.log(Math.floor(Date.now() / 1000 / 60 / 60 / 24 / 30)); // -- return the current timestamp in months
console.log(Math.floor(Date.now() / 1000 / 60 / 60 / 24 / 30 / 12)); // -- return the current timestamp in years


// toLocaleString() is a very intesting method , allows us to  write things as object
// myDaye.toLocaleString('default',{month: 'long'}) // returns the month in full name
// myDaye.toLocaleString('default',{weekday: 'short'}) // returns the day in short name

myDate.toLocaleString('default',{
    month: 'long',
    weekday: 'long',
    timeZone: 'Asia/Kolkata'
}) 


