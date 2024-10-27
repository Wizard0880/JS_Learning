const name = 'John';
console.log(`Hello ${name}`);
const url = 'https://www.google.com/suri%20dixit';
console.log(url.replace('%20', '-'));

/*

` ` or backticks  - String interpolation
${} - String interpolation syntax
allowes to perform mulltiple operations line toUpperCase(), toLowerCase(), etc. in a single line
.subString(s,e) - to get substring from s to e , s cant be negative,and if you do so it will ignore it , e can be negative, and if you do so it will start from end, includes s and excludes e
.slice(s,e) - to get substring from s to e , s can be negative, and if you do so it will start from end , e can be negative, and if you do so it will start from end, includes s and excludes e
.trim() - to remove extra spaces from start and end of string
.replace('old','new') - to replace old with new in a string or URL
.includes('subString') - to check if subString is present in string or not - return true or false
.split('delimiter') - to split string into array of strings based on delimiter or spaces (" ") or any other character

*/
