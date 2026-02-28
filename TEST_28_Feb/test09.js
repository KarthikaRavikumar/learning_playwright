// Login System with Brute-Force Detection
// Simulates a login system that locks an account after 3 consecutive failed attempts.
// Author: Your Name
// Date: 28-Feb-2026

// ── const: Fixed credentials and thresholds (never change) ───────────────────
const VALID_EMAIL = "admin@testingacademy.com";
const VALID_PASSWORD = "Test@1234";
const MAX_STRIKES = 3;
// ── var: Global counter (accessible throughout the entire program) ────────────
var totalAttempts = 0;

// ── Login attempts to simulate (array of objects) ────────────────────────────
const loginAttempts = [
    { email: "admin@testingacademy.com", password: "wrongpass" },   // wrong
    { email: "admin@testingacademy.com", password: "Test@0000" },   // wrong
    { email: "admin@testingacademy.com", password: "hello123" },    // wrong
    { email: "admin@testingacademy.com", password: "Test@1234" },   // correct
];

// ── let: Loop/state variables (values change during execution) ────────────────
let strikes = 0;      // consecutive failed attempts
let isLocked = false;  // account lock flag
let i = 0;      // loop index
let loginSuccess = false;  // tracks if login was ever successful

// ── Header ────────────────────────────────────────────────────────────────────
console.log("=== Login System: Brute-Force Detection ===");
console.log(`Account     : ${VALID_EMAIL}`);
console.log(`Max Strikes : ${MAX_STRIKES}`);
console.log("-------------------------------------------");

// ── do...while loop: runs at least once, continues while attempts remain ──────
do {
    // let: scoped to each iteration
    let attempt = loginAttempts[i];
    let attemptEmail = attempt.email;
    let attemptPass = attempt.password;

    totalAttempts++;   // var: increment global counter

    // If account is already locked, reject without checking credentials
    if (isLocked) {
        console.log(`Attempt ${totalAttempts}:  ACCOUNT LOCKED - Rejected`);

        // Strict equality (===) + logical AND (&&) to validate both fields
    } else if (attemptEmail === VALID_EMAIL && attemptPass === VALID_PASSWORD) {
        strikes = 0;       // reset strikes on success
        loginSuccess = true;
        console.log(`Attempt ${totalAttempts}:  SUCCESS - Welcome, ${VALID_EMAIL}!`);

    } else {
        strikes++;  // increment consecutive failure count

        if (strikes >= MAX_STRIKES) {
            console.log(`Attempt ${totalAttempts}:  FAILED - Strike ${strikes}/${MAX_STRIKES}`);
            console.log(" ACCOUNT LOCKED - Too many failed attempts!");
            isLocked = true;   // lock the account
        } else {
            console.log(`Attempt ${totalAttempts}:  FAILED - Strike ${strikes}/${MAX_STRIKES}`);
        }
    }

    i++;  // move to the next attempt

} while (i < loginAttempts.length);  // keep going as long as attempts remain

// ── Final Summary ─────────────────────────────────────────────────────────────
console.log("-------------------------------------------");
console.log(`Total Attempts  : ${totalAttempts}`);
console.log(`Account Locked  : ${isLocked ? "Yes " : "No "}`);
console.log(`Login Successful: ${loginSuccess ? "Yes " : "No "}`);
console.log("===========================================");
