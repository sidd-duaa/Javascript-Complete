// Primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); //false
const bigint = 35635664837837583n;

// Reference Type (Non Primitive)

// Array, Objects, Functions

const heros = ["Pokemon", "Doga", "Naagraj"];
let myObject = {
    name: "Duaa",
    age: 22,
}
console.log(myObject.name);

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof(bigint));