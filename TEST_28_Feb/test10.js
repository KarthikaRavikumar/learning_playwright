// Mini Test Suite Runner
// Covers: var/let/const, if-else, switch, for, while, do...while,
//         operators (===, !==, &&, ||, ??, ternary), typeof, identifiers
// Author: Your Name
// Date: 28-Feb-2026

// ── const: Fixed suite config (never changes) ─────────────────────────────────
const SUITE_NAME = "API & Data Validation Suite";
const PASS_LABEL = "PASS";
const FAIL_LABEL = "FAIL";

// ── const: All test cases (fixed dataset) ────────────────────────────────────
const testCases = [
    { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
    { name: "Response body is not null", actual: { id: 1 }, expected: null, type: "truthy" },
    { name: "Username type is string", actual: "admin", expected: "string", type: "typeCheck" },
    { name: "Loose equality check", actual: "200", expected: 200, type: "looseEqual" },
    { name: "Response time < 500ms", actual: 320, expected: 500, type: "lessThan" },
    { name: "Token type is string", actual: undefined, expected: "string", type: "typeCheck" }, // FAIL
    { name: "Error count is zero", actual: 0, expected: 0, type: "strictEqual" },
    { name: "Redirect URL is truthy", actual: "", expected: true, type: "truthy" }, // FAIL
    { name: "Status text strict check", actual: "OK", expected: "OK", type: "strictEqual" },
    { name: "Latency within limit", actual: 600, expected: 500, type: "lessThan" }, // FAIL
];

// ── var: Global counters (suite-wide scope) ───────────────────────────────────
var totalTests = testCases.length;
var passCount = 0;
var failCount = 0;
var errorCount = 0;

// ── let: Result storage and loop state ───────────────────────────────────────
let results = [];  // stores outcome of every test

// ── Print Header ─────────────────────────────────────────────────────────────
console.log("╔══════════════════════════════════════════════╗");
console.log("║           MINI TEST SUITE RUNNER             ║");
console.log(`║  Suite : ${SUITE_NAME.padEnd(37)}║`);
console.log(`║  Total : ${String(totalTests).padEnd(37)}║`);
console.log("╚══════════════════════════════════════════════╝");
console.log("");

// ════════════════════════════════════════════════════════════════════════
// FOR LOOP — iterate through every test case and execute it
// ════════════════════════════════════════════════════════════════════════
for (let i = 0; i < testCases.length; i++) {

    const tc = testCases[i];                              // const: read-only per iteration
    const tcNumber = `TC-${String(i + 1).padStart(2, "0")}`;   // identifier: TC-01, TC-02 ...

    let passed = false;   // let: result determined per iteration
    let detail = "";      // let: human-readable comparison string

    try {

        // ── SWITCH — choose the right comparison based on type ────────────────
        switch (tc.type) {

            case "strictEqual":
                // === strict equality: both value AND type must match
                passed = tc.actual === tc.expected;
                detail = `${tc.actual} === ${tc.expected}`;
                break;

            case "looseEqual":
                // == loose equality: type coercion allowed
                passed = tc.actual == tc.expected;
                detail = `${tc.actual} == ${tc.expected} (loose)`;
                break;

            case "typeCheck":
                // typeof operator: checks the runtime type of a value
                passed = typeof tc.actual === tc.expected;
                detail = `typeof ${JSON.stringify(tc.actual)} → "${typeof tc.actual}" === "${tc.expected}"`;
                break;

            case "truthy":
                // !! double negation forces any value to a boolean
                passed = !!tc.actual;
                detail = `!!(${JSON.stringify(tc.actual)}) → ${!!tc.actual}`;
                break;

            case "lessThan":
                // < less-than operator
                passed = tc.actual < tc.expected;
                detail = `${tc.actual} < ${tc.expected}`;
                break;

            default:
                // !== to verify error state, throw for unknown type
                throw new Error(`Unknown comparison type: "${tc.type}"`);
        }

        // ── IF-ELSE — update global counters ─────────────────────────────────
        if (passed) {
            passCount++;
        } else {
            failCount++;
        }

        // ── Ternary operator — pick icon and label ────────────────────────────
        const icon = passed ? "PASSED" : "FAILED";
        const status = passed ? PASS_LABEL : FAIL_LABEL;

        // ── ?? (nullish coalescing) — fallback if expected is null/undefined ──
        const expectedLabel = tc.expected ?? "truthy";

        // ── && / || — build failure message ──────────────────────────────────
        const message = passed
            ? `${tc.actual} is valid`
            : `Expected: ${expectedLabel}, Got: ${tc.actual ?? "undefined/null"}`;

        // Store result object for later analysis
        results.push({ tcNumber, name: tc.name, passed, status, icon, detail, message, error: null });

        // Print individual result line
        console.log(`${icon} ${tcNumber}: ${tc.name} → ${status} (${detail})`);

    } catch (err) {
        // Error case — unknown type or runtime failure
        errorCount++;
        results.push({
            tcNumber, name: tc.name, passed: false,
            status: "ERROR", icon: "🔥", detail: "",
            message: err.message, error: err.message
        });
        console.log(` ${tcNumber}: ${tc.name} → ERROR: ${err.message}`);
    }
}

// ════════════════════════════════════════════════════════════════════════
// WHILE LOOP — count consecutive PASSES from the very start
// ════════════════════════════════════════════════════════════════════════
let consecutivePasses = 0;
let w = 0;

while (w < results.length && results[w].passed) {  // && logical AND
    consecutivePasses++;
    w++;
}

// ════════════════════════════════════════════════════════════════════════
// DO...WHILE LOOP — find the FIRST failure in the results
// ════════════════════════════════════════════════════════════════════════
let firstFailure = null;
let d = 0;

do {
    // !==: check the test did NOT pass
    if (results[d].passed !== true) {
        firstFailure = results[d];  // capture first failure
    }
    d++;
} while (d < results.length && firstFailure === null);  // stop after finding it

// ── Calculate pass rate using arithmetic + toFixed ────────────────────────────
const passRate = ((passCount / totalTests) * 100).toFixed(2);

// && operator: ALL tests must pass AND zero errors for overall PASS
const overallPass = (passCount === totalTests) && (errorCount === 0);

// ── Print Summary Report ──────────────────────────────────────────────────────
console.log("");
console.log("══════════════════════════════════════════════");
console.log("              SUMMARY REPORT                 ");
console.log("══════════════════════════════════════════════");
console.log(`Total Tests        : ${totalTests}`);
console.log(`Passed             : ${passCount}`);
console.log(`Failed             : ${failCount}`);
console.log(`Errors             : ${errorCount}`);
console.log(`Pass Rate          : ${passRate}%`);
console.log(`Streak from Start  : ${consecutivePasses} consecutive pass(es)`);
console.log(`First Failure      : ${firstFailure !== null ? `${firstFailure.tcNumber} - ${firstFailure.name}` : "None - All Passed!"}`);
console.log(`Overall            : ${overallPass ? " PASSED" : "FAILED"}`);
console.log("══════════════════════════════════════════════");
