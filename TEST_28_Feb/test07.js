// API Performance Analyzer
// Analyzes response times and prints a QA-friendly performance report
// Author: Your Name
// Date: 28-Feb-2026

// Example input
const responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_LIMIT = 500;

// Initialize variables
let i = 0;
let minResponse = Number.MAX_SAFE_INTEGER;
let maxResponse = Number.MIN_SAFE_INTEGER;
let totalResponse = 0;
let slaBreaches = 0;

// Loop through response times
while (i < responseTimes.length) {
    const time = responseTimes[i];

    // Update min and max using comparison operators
    if (time < minResponse) minResponse = time;
    if (time > maxResponse) maxResponse = time;

    // Add to total for average calculation
    totalResponse += time;

    // Check SLA breach
    if (time > SLA_LIMIT) slaBreaches++;

    i++;
}

// Calculate metrics
const totalRequests = responseTimes.length;
const avgResponse = (totalResponse / totalRequests).toFixed(2);
const breachPercentage = ((slaBreaches / totalRequests) * 100).toFixed(2);

// Determine overall status
const overallStatus = slaBreaches > 0 ? "FAIL" : "PASS";

// Print performance report
console.log("=== API Performance Report ===");
console.log(`Total Requests: ${totalRequests}`);
console.log(`Min Response: ${minResponse}ms`);
console.log(`Max Response: ${maxResponse}ms`);
console.log(`Average Response: ${avgResponse}ms`);
console.log(`SLA Breaches: ${slaBreaches} (${breachPercentage}%)`);
console.log(`Overall Status: ${overallStatus}`);