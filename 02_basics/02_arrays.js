const marvelHeroes = ["thor", "ironman", "spiderman", "captain america"];
const dcHeroes = ["batman", "superman", "flash"];

//marvelHeroes.push(dcHeroes);

//concate method
// const newArr = marvelHeroes.concat(dcHeroes); // This will not modify the original array // returns a new array
// console.log(newArr);

// Spread operator
const newHeroes = [...marvelHeroes, ...dcHeroes]; // 
console.log(newHeroes);

//.flat() method - to flatten the array // [1, 2, [3, 4, [5, 6]]] => [1, 2, 3, 4, 5, 6] ,  we can pass the depth as an argument , that can be infinity
const arr = [1, 2, [3, 4, [5, 6]]];
const flatArr = arr.flat(2);
console.log(flatArr);

// .isArray() method - to check if the given value is an array or not
// .from() method - to create an array from an array-like object

const strArr = Array.from("hello"); // 'h', 'e', 'l', 'l', 'o'
//const strArr = Array.from({str: "hello"}); // can not pass a string directly, it should be an array-like object
console.log(strArr);

// .of() method - to create an array from the given arguments
let score1 = 100;
let score2 = 200;
let score3 = 300;

const scores = Array.of(score1, score2, score3);
console.log(scores);