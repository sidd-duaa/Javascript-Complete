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

/**
let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
**/ 

// Conversion to String
// 33 => "33"

// OPERATIONS
/**
let value = 3;
let negValue = -value;
console.log(negValue); //-3
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2%2);
**/

/**
let str1 = "Hello";
let str2 = " Duaa";
let str3 = str1+str2;
console.log(str3);
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
**/

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);
