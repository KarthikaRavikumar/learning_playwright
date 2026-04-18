//Extending Interfaces for Inheritance in TypeScript

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}

let employee1: Employee = {
  name: "Alice",
  age: 30,
  employeeId: 101,
  department: "HR",
};

let employee2: Employee = {
  name: "Bob",
  age: 25,
  employeeId: 102,
  department: "IT",
};

console.log("Employee 1:", employee1);
console.log("Employee 2:", employee2);
