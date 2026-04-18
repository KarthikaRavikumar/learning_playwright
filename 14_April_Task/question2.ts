//Create interfaces with optional properties

interface User {
  id: number;
  name: string;
  email?: string; // Optional property
  age?: number; // Optional property
}

let user1: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

let user2: User = {
  id: 2,
  name: "Bob",
  age: 30,
};

let user3: User = {
  id: 3,
  name: "Charlie",
};

console.log("User 1:", user1);
console.log("User 2:", user2);
console.log("User 3:", user3);
