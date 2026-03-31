Question: How to check if a property exists?

Answer: 
🔹 1. Using in Operator (Most Reliable)
let user = { name: "Karthika", age: 25 };

console.log("name" in user); // true
console.log("email" in user); // false

✅ Checks:

Own properties
AND properties from prototype
🔹 2. Using hasOwnProperty()
console.log(user.hasOwnProperty("name")); // true

✅ Checks:

Only own properties (not inherited ones)
🔹 3. Using Object.hasOwn() (Modern Way)
console.log(Object.hasOwn(user, "name")); // true

✅ Preferred in modern JavaScript
✅ Safer than hasOwnProperty()

🔹 4. Using undefined Check (⚠️ Not Reliable Alone)
console.log(user.email !== undefined); // false

⚠️ Problem:

user.email = undefined;

console.log(user.email !== undefined); // false (but property exists!)

❌ So this method can be misleading

🔹 5. Optional Chaining (For Safe Access, Not Exact Check)
console.log(user?.email); // undefined

👉 Good for avoiding errors, but not for strict existence check

🔹 Quick Comparison
Method	Checks Own	Checks Prototype	Reliable
"key" in obj	✅	✅	✅
hasOwnProperty()	✅	❌	✅
Object.hasOwn()	✅	❌	⭐ Best
obj.key !== undefined	⚠️	⚠️	❌
🔹 Best Practice
Use Object.hasOwn(obj, key) → modern & safe
Use in → when prototype properties matter