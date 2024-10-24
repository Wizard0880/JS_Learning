let score = "33abc" 
let score1 = null 
let score2 = undefined 

console.log(typeof (score)) 
console.log(typeof score) 

// Type Casting 
let score3 = Number(score)
console.log(typeof score3)
console.log(score3) // will print NaN - Not a Number

let score4 = Number(score1)
console.log(score4) // will print 0

let score5 = Number(score2)
console.log(score5) // will print NaN - Not a Number

/*
"33" => 33
"33abc" => NaN
true => 1 , false => 0
" " => false
"kuch value" => true
undefined => NaN
null => 0
*/

// ************ Operations ************ //

let a = 10
let b = -a
console.log(b) 

console.log("10" + 20) // This happens because the result is followed by the data type of the first operand
console.log(10 + "20") // Here it will be 10 + "20" = 1020 but again the same rule applies and result is followed by the data type of the first operand
console.log("10" + "20")
console.log(10 + 20 + "30") // This happens from left to right and 10+20 = 30 and then 30 + "30" = 3030 

let c = 10
console.log(c++)
console.log(++c)