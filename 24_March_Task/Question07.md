Question: What is Object.values()?

Answer: 
Object.values() is a built-in JavaScript method that returns an array of an object’s own property values.

🔹 Syntax
Object.values(object)
🔹 Example
let user = {
  name: "Karthika",
  age: 25,
  city: "Kochi"
};

let values = Object.values(user);

console.log(values);
// ["Karthika", 25, "Kochi"]
🔹 What It Returns
An array of values
Only own properties (not inherited ones)
🔹 Looping with Object.values()
Object.values(user).forEach(value => {
  console.log(value);
});

Output:

Karthika
25
Kochi
🔹 Important Notes
✅ 1. Ignores Prototype Properties
function Person() {
  this.name = "Karthika";
}

Person.prototype.age = 25;

let p = new Person();

console.log(Object.values(p));
// ["Karthika"]
✅ 2. Returns Empty Array for Empty Object
Object.values({});
// []
🔹 Related Methods
Object.keys() → returns keys
Object.entries() → returns [key, value] pairs
Object.entries(user);
// [["name", "Karthika"], ["age", 25], ["city", "Kochi"]]
🔹 Quick Summary
Object.values(obj) → gets all values
Returns → array
Useful for → iteration, calculations, transformations