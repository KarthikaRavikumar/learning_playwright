Question03: Difference between dot and bracket notation?

Answer: 
🔹 1. Basic Difference
Feature	Dot Notation (obj.key)	Bracket Notation (obj["key"])
Syntax	Simple and clean	Slightly more verbose
Key type	Must be a valid identifier	Can be any string
Dynamic access	❌ Not possible	✅ Possible
🔹 2. Example
let user = {
  name: "Karthika",
  age: 25
};

// Dot notation
console.log(user.name);

// Bracket notation
console.log(user["name"]);

Both give the same result ✅

🔹 3. When Dot Notation ❌ Fails
❌ Invalid property names
let obj = {
  "first name": "Karthika"
};

// console.log(obj.first name); ❌ Error
console.log(obj["first name"]); // ✅ Works
❌ Property name in a variable
let key = "name";

// console.log(user.key); ❌ Looks for 'key'
console.log(user[key]);  // ✅ Looks for 'name'

🔹 4. When to Use What
✅ Use Dot Notation when:
Property name is known
Property name is simple (no spaces/special characters)
user.age;
✅ Use Bracket Notation when:
Property name is dynamic (comes from variable)
Property has spaces or special characters
You need flexibility
let prop = "age";
user[prop];

🔹 5. Key Insight
user.key     // looks for property literally named "key"
user[key]    // looks for value stored in variable key

This is the most important difference ⚡

🔹 Final Summary
Dot (.) → simple, static
Bracket ([]) → flexible, dynamic