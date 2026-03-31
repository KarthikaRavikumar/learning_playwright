Question: What is Object.entries()?

Answer:
Object.entries() is a JavaScript method that returns an array of key–value pairs from an object.

🔹 Syntax
Object.entries(object)
🔹 Example
let user = {
  name: "Karthika",
  age: 25,
  city: "Kochi"
};

let entries = Object.entries(user);

console.log(entries);
👉 Output:
[
  ["name", "Karthika"],
  ["age", 25],
  ["city", "Kochi"]
]
🔹 What It Returns
An array
Each element is a 2-item array → [key, value]
Only includes own properties (not prototype)
🔹 Looping with Object.entries()
Object.entries(user).forEach(([key, value]) => {
  console.log(key, value);
});
🔹 Using with for...of
for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}
🔹 Convert Object → Map
let map = new Map(Object.entries(user));
console.log(map);
🔹 Convert Back (Entries → Object)
let obj = Object.fromEntries(entries);
🔹 Important Notes
✅ 1. Ignores Prototype Properties
function Person() {
  this.name = "Karthika";
}

Person.prototype.age = 25;

let p = new Person();

console.log(Object.entries(p));
// [["name", "Karthika"]]
✅ 2. Works Well for Transformations
let updated = Object.fromEntries(
  Object.entries(user).map(([key, value]) => [key, value + "_test"])
);
🔹 Quick Summary
Object.entries(obj) → returns [[key, value], ...]
Best for → looping, transformations, converting data structures