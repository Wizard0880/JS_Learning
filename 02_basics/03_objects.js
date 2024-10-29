// singleton object - made using constructor - only one instance // Object.create() 
// object literal - made using object literal - multiple instances

// Object literals
// Objects in js works on key value pair
// keys are always strings
// values can be anything even functions

const mySym = Symbol("key1"); // interview question

const JsUser = {
    name:"Surii",
    "full name": 'Suryansh',
    age:18,
    location:"India",
    email: "suri@gmail.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Tuesday"],
    [mySym]: "value for key1",
};

//console.log(JsUser);
// console.log(JsUser.age);
// console.log(JsUser.lastLogin);
// console.log(JsUser["full name"]); // for string keys with spaces
// console.log(typeof JsUser[mySym]); // for symbol keys
// console.log(typeof mySym); // this will tell you that it is a symbol


JsUser.age = 19; // to update the values

//we can freez this object so that no one can change it
// Object.freeze(JsUser); // this will make the object immutable

JsUser.greeting = function(){
    console.log("Hello from JsUser");
}
JsUser.greetingTwo = function(){
    console.log(`Hello from ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());