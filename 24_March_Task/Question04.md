Question: How to add and delete properties?

Answer:
🔹 Adding Properties
✅ Using Dot Notation
let user = {
  name: "Karthika"
};

user.age = 25;   // add new property
console.log(user);
✅ Using Bracket Notation
user["city"] = "Kochi";

👉 Useful when the property name is dynamic:

let key = "email";
user[key] = "test@example.com";
🔹 Updating Properties

If the property already exists, assigning a value will update it:

user.age = 26;  // update
🔹 Deleting Properties
✅ Using delete operator
delete user.age;

console.log(user); // age removed
🔹 Example (All Together)
let user = {
  name: "Karthika"
};

// Add
user.age = 25;

// Update
user.age = 26;

// Delete
delete user.age;

console.log(user);
🔹 Important Notes
⚠️ 1. delete removes the property completely
delete user.name;
console.log(user.name); // undefined
⚠️ 2. Deleting non-existing property → no error
delete user.salary; // nothing happens
⚠️ 3. Avoid deleting in performance-critical code

Instead, you can set value to null or undefined:

user.age = null;
🔹 Quick Summary
Add → obj.key = value or obj["key"] = value
Update → same as add
Delete → delete obj.key