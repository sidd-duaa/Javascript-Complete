/** let score = "33abc"

console.log(typeof score);

let valueInNumber = Number(score);
console.log(valueInNumber); //NaN
console.log(typeof valueInNumber); //number

console.log("NULL");

let score2 = null
console.log(score2);
console.log(typeof score2); //object
let valueInNumber2 = Number(score2);
console.log(valueInNumber2); //0
console.log(typeof valueInNumber2); //number

console.log("UNDEFINED");

let score3 = null
console.log(score3); //null
console.log(typeof score3); //object
let valueInNumber3 = Number(score3);
console.log(valueInNumber3); //0
console.log(typeof valueInNumber3); //number
**/

// Converting to Number
// "33" => 33 (number)
// "33bc" => NaN (number)
// true => 1, false => 0

/**
let isLoggedIn = null;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //true
console.log(typeof booleanIsLoggedIn); //boolean
**/

// Conversion to Boolean
//  1 => true, 0 => false
// "" => false
// "abc" => true 
// null => false

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// Conversion to String
// 33 => "33"
