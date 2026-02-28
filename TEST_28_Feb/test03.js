// Retry Failed API Call Simulator
// Simulates retrying an API call up to MAX_ATTEMPTS times with random success/failure
// Author: Your Name
// Date: 28-Feb-2026

const MAX_ATTEMPTS = 5; // Maximum number of retries
let attempt = 0;
let success = false;

do {
    attempt++;

    // Simulate API call success/failure (40% chance of success)
    const randomValue = Math.random(); // 0 to 1
    success = randomValue > 0.6;


    if (success) {
        console.log(`Attempt ${attempt}:  (Response 200 OK)`);
    } else {
        console.log(`Attempt ${attempt}: (Timeout/Error)`);
    }

} while (!success && attempt < MAX_ATTEMPTS);

if (success) {
    console.log(`API call PASSED after ${attempt} attempt(s).`);
} else {
    console.log(`API call FAILED after ${MAX_ATTEMPTS} attempts.`);
}