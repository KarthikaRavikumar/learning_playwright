Question02: How do you access object properties?

Answer: 
🔹 1. Dot Notation (.)

Use a dot followed by the property name.

let user = {
  name: "Karthika",
  age: 25
};

console.log(user.name); // Karthika
console.log(user.age);  // 25

✅ Best for: simple, known property names

🔹 2. Bracket Notation ([])

Use square brackets with the property name as a string.

console.log(user["name"]); // Karthika
console.log(user["age"]);  // 25

✅ Useful when:

Property name has spaces or special characters
Property name is stored in a variable
🔹 Example with Variable
let key = "name";
console.log(user[key]); // Karthika