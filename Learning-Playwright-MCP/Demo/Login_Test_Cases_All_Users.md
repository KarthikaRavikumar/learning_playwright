# Test Cases: Login Feature - SauceDemo All Users

| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Author** | QA Team |
| **Date** | 2026-04-02 |
| **Total Test Cases** | 6 |
| **Application** | https://www.saucedemo.com/ |

---

## Test Case Format

Each test case follows this structure:

| Field | Description |
|-------|-------------|
| **TC ID** | Unique identifier (TC-001, TC-002, ...) |
| **Title** | Brief description of what is tested |
| **Preconditions** | What must be true before the test |
| **Steps** | Step-by-step instructions |
| **Expected Result** | What should happen |
| **Priority** | High / Medium / Low |
| **Category** | Smoke / Functional / Negative |
| **Spec File** | Corresponding Playwright spec file |

---

## Test Cases

### TC-001: Login with Standard User
| Field | Value |
|-------|-------|
| **TC ID** | TC-001 |
| **Title** | Login with standard_user credentials |
| **Preconditions** | User is on the login page of https://www.saucedemo.com/ |
| **Steps** | 1. Navigate to https://www.saucedemo.com/<br/>2. Enter username: "standard_user"<br/>3. Enter password: "secret_sauce"<br/>4. Click the Login button<br/>5. Verify user is logged in successfully |
| **Expected Result** | User is successfully authenticated and redirected to the inventory/dashboard page with product listings visible |
| **Priority** | High |
| **Category** | Smoke |
| **Spec File** | login.spec.js |

---

### TC-002: Login with Locked Out User
| Field | Value |
|-------|-------|
| **TC ID** | TC-002 |
| **Title** | Login with locked_out_user credentials |
| **Preconditions** | User is on the login page of https://www.saucedemo.com/ |
| **Steps** | 1. Navigate to https://www.saucedemo.com/<br/>2. Enter username: "locked_out_user"<br/>3. Enter password: "secret_sauce"<br/>4. Click the Login button<br/>5. Verify error message is displayed |
| **Expected Result** | Login fails and error message is displayed: "Epic sadface: Sorry, this user has been locked out." |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | login.spec.js |

---

### TC-003: Login with Problem User
| Field | Value |
|-------|-------|
| **TC ID** | TC-003 |
| **Title** | Login with problem_user credentials |
| **Preconditions** | User is on the login page of https://www.saucedemo.com/ |
| **Steps** | 1. Navigate to https://www.saucedemo.com/<br/>2. Enter username: "problem_user"<br/>3. Enter password: "secret_sauce"<br/>4. Click the Login button<br/>5. Verify user is logged in and products are displayed with rendering issues |
| **Expected Result** | User is successfully authenticated and redirected to the inventory page. Note: This user may have visual or rendering issues with product images and text |
| **Priority** | Medium |
| **Category** | Functional |
| **Spec File** | login.spec.js |

---

### TC-004: Login with Performance Glitch User
| Field | Value |
|-------|-------|
| **TC ID** | TC-004 |
| **Title** | Login with performance_glitch_user credentials |
| **Preconditions** | User is on the login page of https://www.saucedemo.com/ |
| **Steps** | 1. Navigate to https://www.saucedemo.com/<br/>2. Enter username: "performance_glitch_user"<br/>3. Enter password: "secret_sauce"<br/>4. Click the Login button (note expected delay)<br/>5. Verify user is logged in after the performance delay |
| **Expected Result** | User is successfully authenticated and redirected to the inventory page. Note: Login process may have significant performance delays (slow response times) |
| **Priority** | Medium |
| **Category** | Functional |
| **Spec File** | login.spec.js |

---

### TC-005: Login with Error User
| Field | Value |
|-------|-------|
| **TC ID** | TC-005 |
| **Title** | Login with error_user credentials |
| **Preconditions** | User is on the login page of https://www.saucedemo.com/ |
| **Steps** | 1. Navigate to https://www.saucedemo.com/<br/>2. Enter username: "error_user"<br/>3. Enter password: "secret_sauce"<br/>4. Click the Login button<br/>5. Verify user is logged in and application behavior is observed |
| **Expected Result** | User is successfully authenticated and redirected to the inventory page. Note: This user may encounter errors during shopping cart interactions or checkout process |
| **Priority** | Medium |
| **Category** | Functional |
| **Spec File** | login.spec.js |

---

### TC-006: Login with Visual User
| Field | Value |
|-------|-------|
| **TC ID** | TC-006 |
| **Title** | Login with visual_user credentials |
| **Preconditions** | User is on the login page of https://www.saucedemo.com/ |
| **Steps** | 1. Navigate to https://www.saucedemo.com/<br/>2. Enter username: "visual_user"<br/>3. Enter password: "secret_sauce"<br/>4. Click the Login button<br/>5. Verify user is logged in and compare visual elements |
| **Expected Result** | User is successfully authenticated and redirected to the inventory page. Note: This user is intended for visual regression testing - some visual elements may differ from the standard user experience |
| **Priority** | Medium |
| **Category** | Functional |
| **Spec File** | login.spec.js |

---

## Summary

| Priority | Count |
|----------|-------|
| High | 2 |
| Medium | 4 |
| Low | 0 |
| **Total** | **6** |

| Category | Count |
|----------|-------|
| Smoke | 1 |
| Functional | 4 |
| Negative | 1 |

---

## Accepted Usernames & Credentials

| Username | Password | Purpose | Status |
|----------|----------|---------|--------|
| `standard_user` | `secret_sauce` | Standard user with full access | ✅ Active |
| `locked_out_user` | `secret_sauce` | User account is locked | 🔒 Locked |
| `problem_user` | `secret_sauce` | User with rendering/display issues | ⚠️ Special |
| `performance_glitch_user` | `secret_sauce` | User with performance delays | ⏱️ Special |
| `error_user` | `secret_sauce` | User who encounters errors | ❌ Special |
| `visual_user` | `secret_sauce` | User for visual regression testing | 👁️ Special |

---

## Test Execution Notes

### General Information
- **Application Under Test (AUT):** https://www.saucedemo.com/
- **Test Environment:** Web Browser (Chrome, Firefox, Safari, Edge)
- **Automation Framework:** Playwright
- **Test Type:** Login Authentication & User Access

### User Type Descriptions

1. **standard_user**
   - Normal user with complete access to all features
   - No performance issues or special conditions
   - Recommended for baseline/smoke testing

2. **locked_out_user**
   - Account is deliberately locked for security testing
   - Expected behavior: Login rejection with lock-out message
   - Used to validate account security measures

3. **problem_user**
   - Account used to test UI rendering issues
   - May have visual glitches with product images or text alignment
   - Used for UI/UX issue detection

4. **performance_glitch_user**
   - Account used to simulate slow network/server response
   - Login and subsequent actions may have delays
   - Used for performance testing and timeout validation

5. **error_user**
   - Account used to test error handling
   - May generate errors during cart operations or checkout
   - Used for error handling and exception management testing

6. **visual_user**
   - Account designed for visual regression testing
   - Visual layout and styling may differ from standard user
   - Used in visual comparison testing tools (Percy, Applitools, etc.)

### Test Execution Strategy

- **Smoke Testing:** Execute TC-001 (standard_user) as a quick sanity check
- **Functional Testing:** Execute TC-003, TC-004, TC-005, TC-006 to verify different user scenarios
- **Negative Testing:** Execute TC-002 (locked_out_user) to validate error handling
- **Regression Testing:** Run all test cases after any code changes

### Expected Behaviors Summary

| Test Case | Expected Outcome | Key Assertion |
|-----------|------------------|----------------|
| TC-001 | ✅ Login Success | URL changes to inventory page |
| TC-002 | ❌ Login Failure | Error message displayed |
| TC-003 | ✅ Login Success | UI rendering issues present |
| TC-004 | ✅ Login Success | Performance delays during load |
| TC-005 | ✅ Login Success | Errors may occur in cart/checkout |
| TC-006 | ✅ Login Success | Visual elements differ from standard |

---

## Automation Considerations

### Playwright Implementation Tips

```javascript
// Example: Login automation for all users
const users = [
  { username: 'standard_user', password: 'secret_sauce' },
  { username: 'locked_out_user', password: 'secret_sauce' },
  { username: 'problem_user', password: 'secret_sauce' },
  { username: 'performance_glitch_user', password: 'secret_sauce' },
  { username: 'error_user', password: 'secret_sauce' },
  { username: 'visual_user', password: 'secret_sauce' }
];

// Loop through each user and test login
for (const user of users) {
  await page.fill('[data-test="username"]', user.username);
  await page.fill('[data-test="password"]', user.password);
  await page.click('[data-test="login-button"]');
  // Add assertions based on expected behavior
}
```

### Selectors Reference
- Username input: `[data-test="username"]`
- Password input: `[data-test="password"]`
- Login button: `[data-test="login-button"]`
- Error message: `[data-test="error"]`
- Inventory container: `[data-test="inventory-list"]`
