// CI/CD Environment Config Selector
// Uses a switch statement to print base URL, API key pattern, and timeout
// based on the environment name stored in a variable.
// Author: Your Name
// Date: 28-Feb-2026

/*
In CI/CD pipelines, tests run against different environments.
Write a JavaScript program using a switch statement that takes an environment name stored in a variable
and prints the base URL, API key pattern, and timeout. Use const for fixed values and let for the assembled config.

Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix,
timeout, and description.
*/


const envName = "staging"; // 

let baseURL;
let apiKeyPattern;
let timeout;
let description;

switch (envName) {

    case "dev":
        baseURL = "https://dev.api.myapp.com";
        apiKeyPattern = "DEV-XXXX-XXXX-XXXX";
        timeout = 10000; // 10 seconds
        description = "Local / Developer environment — fast iteration, verbose logging";
        break;

    case "staging":
        baseURL = "https://staging.api.myapp.com";
        apiKeyPattern = "STG-XXXX-XXXX-XXXX";
        timeout = 8000; // 8 seconds
        description = "Staging environment — mirrors production for pre-release testing";
        break;

    case "qa":
        baseURL = "https://qa.api.myapp.com";
        apiKeyPattern = "QA-XXXX-XXXX-XXXX";
        timeout = 12000; // 12 seconds
        description = "QA environment — used by the QA team for manual and automated testing";
        break;

    case "production":
    case "prod":                                   // both aliases map to production
        baseURL = "https://api.myapp.com";
        apiKeyPattern = "PROD-XXXX-XXXX-XXXX";
        timeout = 5000; // 5 seconds
        description = "Production environment — live traffic, strict SLA enforced";
        break;

    default:
        console.log(`Unknown environment: "${envName}"`);
        console.log("   Valid options: dev | staging | qa | production | prod");
        process.exit(1);  // stop execution for invalid env
}

// ── Print Config Report ───────────────────────────────────────────────────────
console.log("=== CI/CD Environment Configuration ===");
console.log(`Environment  : ${envName.toUpperCase()}`);
console.log(`Description  : ${description}`);
console.log(`Base URL     : ${baseURL}`);
console.log(`API Key      : ${apiKeyPattern}`);
console.log(`Timeout      : ${timeout}ms`);
console.log("=======================================");