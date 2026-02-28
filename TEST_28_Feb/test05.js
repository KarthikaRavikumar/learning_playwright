/*
As an SDET, you frequently need to generate test data for form testing. 
Write a JavaScript program that generates test user data using a for loop. 
Each user should have a unique ID (USR-0001 format), name, email, and role 
(cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive 
(edge case testing). Demonstrate proper use of var (global counter), let (loop variables), 
and const (fixed values).
*/

let userRole = ["admin", "editor", "viewer", "tester", "manager"];
let counter = 1;
for (let i = 0; i < userRole.length; i++) {
    let user = {
        id: `USR-000${counter}`,
        name: `User ${counter}`,
        email: `user${counter}@test.com`,
        role: userRole[i],
        active: counter % 3 !== 0
    };
    console.log(user);
    counter++;
}