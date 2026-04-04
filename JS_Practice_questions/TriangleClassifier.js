/*
Write a program that classifies a triangle based on its side lengths. 
Given three input values representing the lengths of the sides, determine if the triangle is equilateral 
(all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal). 
Use an if-else statement to classify the triangle.
*/

const prompt = require("prompt-sync")();
let side1 = parseFloat(prompt("Enter the length of the first side: "));
let side2 = parseFloat(prompt("Enter the length of the second side: "));
let side3 = parseFloat(prompt("Enter the length of the third side: "));

if (side1 === side2 && side2 === side3) {
    console.log("The triangle is equilateral.");
}
else if (side1 ===side2 || (side1 === side3) || (side2 === side3))
   {
    console.log("The triangle is isosceles.");
}
else {
    console.log("The triangle is scalene.");
}