Question: How to loop through an object?

Answer:

There are multiple ways to loop through an object in JavaScript, depending on what you need (keys, values, or both).

🔹 1. Using for...in (Classic Way)
let user = {
  name: "Karthika",
  age: 25,
  city: "Kochi"
};

for (let key in user) {
  console.log(key, user[key]);
}

✅ Iterates over all enumerable properties (including inherited ones)

👉 Safer version:

for (let key in user) {
  if (Object.hasOwn(user, key)) {
    console.log(key, user[key]);
  }
}
🔹 2. Using Object.keys()
Object.keys(user).forEach(key => {
  console.log(key, user[key]);
});

✅ Loops through only own keys

🔹 3. Using Object.values()
Object.values(user).forEach(value => {
  console.log(value);
});

✅ When you only need values

🔹 4. Using Object.entries() (Best for Key + Value)
Object.entries(user).forEach(([key, value]) => {
  console.log(key, value);
});
🔹 5. Using for...of with Object.entries()
for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}

✅ Clean and modern ✔️

🔹 Quick Comparison
Method	Gets Keys	Gets Values	Includes Prototype
for...in	✅	✅	⚠️ Yes
Object.keys()	✅	❌	❌
Object.values()	❌	✅	❌
Object.entries()	✅	✅	❌
🔹 Best Practice
⭐ Use Object.entries() + for...of → clean & modern
Use Object.keys() → when only keys needed
Avoid raw for...in unless you handle prototype check