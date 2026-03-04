//Write a program that calculates and displays the letter grade for a given numerical score 
// (e.g., A, B, C, D, or F) based on the following grading scale:
//A: 90-100
//B: 80-89
//C: 70-79
//D: 60-69
//F: 0-59

const prompt = require("prompt-sync")();
let score = prompt("Enter your score: ");
score = parseInt(score);
if (score >= 90) {
    console.log("Your grade is A");
} else if (score >= 80) {
    console.log("Your grade is B");
} else if (score >= 70) {
    console.log("Your grade is C");
} else if (score >= 60) {
    console.log("Your grade is D");
} else {
    console.log("Your grade is F");
}
