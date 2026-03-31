Question: What is Object.keys()?

Answer:
Object.keys() is a built-in JavaScript method that returns an array of an object’s own property names (keys).

🔹 Syntax
Object.keys(object)
🔹 Example
let user = {
  name: "Karthika",
  age: 25,
  city: "Kochi"
};

let keys = Object.keys(user);

console.log(keys); 
// ["name", "age", "city"]
🔹 What It Returns
An array of strings
Only own properties (not inherited ones)
🔹 Looping with Object.keys()
Object.keys(user).forEach(key => {
  console.log(key, user[key]);
});

Output:

name Karthika
age 25
city Kochi
🔹 Important Notes
✅ 1. Ignores Prototype Properties
function Person() {
  this.name = "Karthika";
}

Person.prototype.age = 25;

let p = new Person();

console.log(Object.keys(p)); 
// ["name"] (age is NOT included)
✅ 2. Works Only with Enumerable Properties

Most normal properties are enumerable, so they show up.

✅ 3. Returns Empty Array for Empty Object
console.log(Object.keys({})); // []
🔹 Related Methods
Object.values() → returns values
Object.entries() → returns key-value pairs
Object.values(user);  
// ["Karthika", 25, "Kochi"]

Object.entries(user);
// [["name", "Karthika"], ["age", 25], ["city", "Kochi"]]
🔹 Quick Summary
Object.keys(obj) → gets all own keys
Returns → array of strings
Useful for → looping, validation, dynamic access