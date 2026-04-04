/*
Create a program that determines whether a given year is a leap year. 
A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. 
Use an if-else statement to make this determination.
*/

const prompt = require("prompt-sync")();
let string = prompt("Enter a Year: ");
let year = parseInt(string);
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}