console.log(null > 0) // js converts null to a number = 0 and then compares hence false result
console.log(null == 0) // it gives false  because now js dont convert null to a number , it remains undefined
console.log(null >= 0) // it gives true because null is converted to 0 and then compared

/* 

== checks the value
=== checks the value and data type -- strict equality

*/