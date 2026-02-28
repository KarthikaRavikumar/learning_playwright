// UI Element State Validator
// Checks element states and prints QA-friendly action and severity
// Author: Your Name
// Date: 28-Feb-2026

// Example input
const isPresent = true;
const isDisplayed = true;
const isEnabled = false;

let status = "";
let severity = "";
let action = "";

if (isPresent === false) {
    status = "NOT FOUND";
    severity = "CRITICAL";
    action = "Element not found. Check selector or page load.";
} else if (isDisplayed === false) {
    status = "HIDDEN";
    severity = "WARNING";
    action = "Element is present but hidden. Check visibility conditions.";
} else if (isEnabled === false) {
    status = "DISABLED";
    severity = "WARNING";
    action = "Element is visible but disabled. Wait for enable state or check preconditions.";
} else {
    status = "READY";
    severity = "OK";
    action = "Element is ready for interaction.";
}

// Print result
console.log(`Status: ${status}`);
console.log(`Severity: ${severity}`);
console.log(`Action: ${action}`);