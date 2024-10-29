// singleton Object

//const tinderUser = new Object(); // Singleton object
const tinderUser = {}; // non singleton object

tinderUser.name = "Suryansh";
tinderUser.age = 18;
tinderUser.location = "India";
tinderUser.email = "suri@gmail.com";

//console.log(tinderUser);

// nested objects  - objects inside objects
// const fun = {
//     fullname : {
//         username: {
//             firstname : "Suri",
//             lastname : "Dixit",
//         }
//     }
// }

// console.log(fun.fullname.username.firstname); - to access the nested objects

const obj1 = {1:"A", 2:"B", 3:"C"};
const obj2 = {4:"D", 5:"E", 6:"F"};

// const obj3 = {obj1, obj2}; // this will create same nested objects as arrays
// console.log(obj3);

// to deal with this issue we use spread operator or .assign() method
const obj3 = {...obj1, ...obj2}; // this will create a single object as arrays
console.log(obj3);

const obj4 = Object.assign({},obj1,obj2); 
/* we use extra {} to deal with the issue of nested objects while dealing with mulitple objects 
-- it basically mmeans that we are creating a new object and assigning the values of obj1 and obj2 to it , if we dont use {} then all the values will move to the obj1.
{} - target
obj1 - source
obj2 - source
*/
console.log(obj4);
console.log(Object.keys(tinderUser)); // to get the keys of the object -- helps in iterating over the object
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty("name")); // to check if the object has the property or not
