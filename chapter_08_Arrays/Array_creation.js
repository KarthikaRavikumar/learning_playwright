// command to run test in terminal : /Users/ravikumarganesan/Work/leetcode/node-25.8.0/bin/node learning_playwright/chapter_08_Arrays/Array_creation.js
let arr =[];
arr = ['apple', 'orange', 'banana', 'orange', 'mango'];
console.log(arr);//why is this 5?
console.log(arr.length);
console.log(arr[0]);
console.log(arr[5]);//this is undefined?


//javascript can have duplicate items in an array
let testreult = ['pass', 'fail', 'pass', 'skip'];
console.log(testreult);

//javascript can have different data types in an array
let mixedarray = ['apple', 1, true, null, undefined, {name: 'John'}, [1, 2, 3]];
console.log(mixedarray);
//java script is hetrogenious!

//craeting an array using new keyword

let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

let string = Array.of('a', 'b', 'c', 'd');
console.log(string[0]); 

//Array.from() method creates a new array from an array-like or iterable object.
//this will seperate the string into individual characters and create an array of those characters.
let str = 'hello';
let arrFromStr = Array.from(str);
console.log(arrFromStr);

