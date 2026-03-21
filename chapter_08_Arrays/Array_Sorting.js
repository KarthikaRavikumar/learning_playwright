//Sorting

let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);
//  alphabetical by default

let nums = [1, 5, 7, 2, 9, 4, 6, 10, 3, 8];
console.log(nums);
nums.sort((a, b) => a - b); // ascending order
console.log(nums);
nums.sort((a, b) => b - a); // descending order
console.log(nums);