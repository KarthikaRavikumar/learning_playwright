let my_name = "Karthika"; // This is a string literal assigned to the variable 'age'.
let isStudent = true; // This is a boolean literal assigned to the variable 'isStudent'.
let pi = 3.14; // This is a numeric literal assigned to the variable 'pi'.
let name = 'Alice'; // This is a string literal assigned to the variable 'name'.
let nullValue = null; // This is a null literal assigned to the variable 'nullValue'.
let undefinedValue; // This variable is declared but not assigned, so it has the value 'undefined'.

let count = 42;
let negative = -100;
let zero = 0;

let h = 0xFF;
let color_hex = 0xFF0000;
console.log(color_hex);

let octal = 0o77;
let pi = 3.14159;

let million = 1e6;
let tiny = 1.5e-4;


// Single quotes
let single = 'Hello World';
let withDouble = 'She said "hi"';

// let name = 'It's a test';


// Double quotes
let double = "Hello World";
let withSingle = "It's a test";


// Template literal 
let first_name = "Pramod";
let full_name = `Hi,${first_name} dutta`;
console.log(full_name)


let math = `2+2=${2 + 2}`;
console.log(math)

// I want to store path of the file.
let path = "C:\\users\\pramod\\file.txt";
// Single slash is not allowed. We have to use double slash. 
console.log(path);

// ---> // - URLs
// ---> \\ - Path


let address = "https://app.vwo.com/#login";
console.log(address)

// String literal edge cases
let empty = "";                          // empty string (falsy!)
let space = " ";                         // single space (truthy!)
let zero1 = "0";                          // string zero (truthy!)


let isLoggedIn = true;
let hasPermission = false;