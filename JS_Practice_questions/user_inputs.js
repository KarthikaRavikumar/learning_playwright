//  How to Take Input from Users?

const prompt = require("prompt-sync")();

let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");

age = parseInt(age);

console.log(`Hello ${name}! You are ${age} years old.`);