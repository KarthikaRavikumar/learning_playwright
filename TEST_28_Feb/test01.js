/*200 → "PASS - OK: Request successful"
- 201 → "PASS - Created: Resource created successfully"
- 301 → "WARNING - Moved Permanently: URL has changed"
- 400 → "FAIL - Bad Request: Check request payload"
- 401 → "FAIL - Unauthorized: Check auth token"
- 403 → "FAIL - Forbidden: Insufficient permissions"
- 404 → "FAIL - Not Found: Check endpoint URL"
- 500 → "FAIL - Internal Server Error: Backend issue"
- Any other → "UNKNOWN - Unhandled status code"*/

let a = 401;
if (a == 200) {
    console.log("PASS - OK: Request successful");
} else if (a == 201) {
    console.log("PASS - Created: Resource created successfully");
} else if (a == 301) {
    console.log("WARNING - Moved Permanently: URL has changed");
} else if (a == 400) {
    console.log("FAIL - Bad Request: Check request payload");
} else if (a == 401) {
    console.log("FAIL - Unauthorized: Check auth token");
} else if (a == 403) {
    console.log("FAIL - Forbidden: Insufficient permissions");
} else if (a == 404) {
    console.log("FAIL - Not Found: Check endpoint URL");
} else if (a == 500) {
    console.log("FAIL - Internal Server Error: Backend issue");
} else {
    console.log("UNKNOWN - Unhandled status code");
}
