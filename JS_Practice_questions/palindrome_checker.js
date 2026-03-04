// Create a program that checks whether a given string is a palindrome. 
// A palindrome is a word or phrase that reads the same backward as forward 
// (ignoring spaces, punctuation, and capitalization). Use an if-else statement to determine if 
// the string is a palindrome.

const prompt = require("prompt-sync")();
let string = prompt("Enter a string: ");
let lowerCaseString = string.toLowerCase();
let reversedString = lowerCaseString.split("").reverse().join("");
if (lowerCaseString === reversedString) {
    console.log("The string is a palindrome");
} else {
    console.log("The string is not a palindrome");
}