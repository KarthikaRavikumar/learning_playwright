const testResults = ["pass", "fail", "pass", "skip", "fail", "pass"];

// Counters for each result type
let passCount = 0;
let failCount = 0;
let skipCount = 0;

// Loop through testResults array
for (let i = 0; i < testResults.length; i++) {
    const result = testResults[i];
    if (result === "pass") {
        passCount++;
    } else if (result === "fail") {
        failCount++;
    } else if (result === "skip") {
        skipCount++;
    }
}

// Total number of tests
const totalTests = testResults.length;

// Pass rate percentage
const passRate = ((passCount / totalTests) * 100).toFixed(2);

// Determine verdict
let verdict = "";
if (failCount === 0) {
    verdict = "Ready for release";
} else if (failCount <= 2) {
    verdict = "Review required";
} else {
    verdict = "Block release";
}

// Print test report
console.log("=== Test Report ===");
console.log(`Total Tests: ${totalTests}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
console.log(`Skipped: ${skipCount}`);
console.log(`Pass Rate: ${passRate}%`);
console.log(`Verdict: ${verdict}`);