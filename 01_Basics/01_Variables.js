const accountID = 123456789;
let balance = "1000";
var accountType = 'Savings';
let accountState; // will print Undefined

//accountID = 987654321; // Error: Uncaught TypeError: Assignment to constant variable.
balance = 2000;
accountType = 'Current';

console.log(accountID, balance, accountType); // 123456789 2000 Current
console.table({ accountID, balance, accountType, accountState }); // {accountID: 123456789, balance: 2000, accountType: "Current"}

/* 
Prefer not to use var, use let and const instead.
because of the issue in block scope and fuctional scope.
because var is function scoped and let and const are block scoped.
*/