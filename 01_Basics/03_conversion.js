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