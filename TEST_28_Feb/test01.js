/*200 → "PASS - OK: Request successful"
- 201 → "PASS - Created: Resource created successfully"
- 301 → "WARNING - Moved Permanently: URL has changed"
- 400 → "FAIL - Bad Request: Check request payload"
- 401 → "FAIL - Unauthorized: Check auth token"
- 403 → "FAIL - Forbidden: Insufficient permissions"
- 404 → "FAIL - Not Found: Check endpoint URL"
- 500 → "FAIL - Internal Server Error: Backend issue"
- Any other → "UNKNOWN - Unhandled status code"*/

let statusCode = 401;
let resultMessage;

switch (statusCode) {
    case 200:
        resultMessage = "PASS - OK: Request successful";
        break;
    case 201:
        resultMessage = "PASS - Created: Resource created successfully";
        break;
    case 301:
        resultMessage = "WARNING - Moved Permanently: URL has changed";
        break;
    case 400:
        resultMessage = "FAIL - Bad Request: Check request payload";
        break;
    case 401:
        resultMessage = "FAIL - Unauthorized: Check auth token";
        break;
    case 403:
        resultMessage = "FAIL - Forbidden: Insufficient permissions";
        break;
    case 404:
        resultMessage = "FAIL - Not Found: Check endpoint URL";
        break;
    case 500:
        resultMessage = "FAIL - Internal Server Error: Backend issue";
        break;
    default:
        resultMessage = "UNKNOWN - Unhandled status code";
        break;
}
console.log(`Status Code: ${statusCode} Result: ${resultMessage}`);