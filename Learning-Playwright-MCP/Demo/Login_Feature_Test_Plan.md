# Test Cases: Login Feature - SauceDemo

| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Author** | QA Team |
| **Date** | 2026-04-02 |
| **Total Test Cases** | 12 |
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

### TC-001: Valid Login with Standard User
| Field | Value |
|-------|-------|
| **TC ID** | TC-001 |
| **Title** | Login with valid standard user credentials |
| **Preconditions** | User is on the login page of https://www.saucedemo.com/ |
| **Steps** | 1. Enter username: "standard_user"<br/>2. Enter password: "secret_sauce"<br/>3. Click Login button |
| **Expected Result** | User is successfully logged in and redirected to the inventory/dashboard page |
| **Priority** | High |
| **Category** | Smoke |
| **Spec File** | login.spec.js |

---

### TC-002: Valid Login with Problem User
| Field | Value |
|-------|-------|
| **TC ID** | TC-002 |
| **Title** | Login with valid problem user credentials |
| **Preconditions** | User is on the login page of https://www.saucedemo.com/ |
| **Steps** | 1. Enter username: "problem_user"<br/>2. Enter password: "secret_sauce"<br/>3. Click Login button |
| **Expected Result** | User is successfully logged in and redirected to the inventory page |
| **Priority** | Medium |
| **Category** | Functional |
| **Spec File** | login.spec.js |

---

### TC-003: Valid Login with Performance Glitch User
| Field | Value |
|-------|-------|
| **TC ID** | TC-003 |
| **Title** | Login with valid performance glitch user credentials |
| **Preconditions** | User is on the login page of https://www.saucedemo.com/ |
| **Steps** | 1. Enter username: "performance_glitch_user"<br/>2. Enter password: "secret_sauce"<br/>3. Click Login button |
| **Expected Result** | User is successfully logged in and redirected to the inventory page (with possible performance delay) |
| **Priority** | Medium |
| **Category** | Functional |
| **Spec File** | login.spec.js |

---

### TC-004: Login with Invalid Username
| Field | Value |
|-------|-------|
| **TC ID** | TC-004 |
| **Title** | Login with invalid username and valid password |
| **Preconditions** | User is on the login page of https://www.saucedemo.com/ |
| **Steps** | 1. Enter username: "invalid_user"<br/>2. Enter password: "secret_sauce"<br/>3. Click Login button |
| **Expected Result** | Login fails and error message is displayed: "Epic sadface: Username and password do not match any user in this service" |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | login.spec.js |

---

### TC-005: Login with Invalid Password
| Field | Value |
|-------|-------|
| **TC ID** | TC-005 |
| **Title** | Login with valid username and invalid password |
| **Preconditions** | User is on the login page of https://www.saucedemo.com/ |
| **Steps** | 1. Enter username: "standard_user"<br/>2. Enter password: "wrong_password"<br/>3. Click Login button |
| **Expected Result** | Login fails and error message is displayed: "Epic sadface: Username and password do not match any user in this service" |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | login.spec.js |

---

### TC-006: Login with Empty Username
| Field | Value |
|-------|-------|
| **TC ID** | TC-006 |
| **Title** | Login attempt with empty username field |
| **Preconditions** | User is on the login page of https://www.saucedemo.com/ |
| **Steps** | 1. Leave username field empty<br/>2. Enter password: "secret_sauce"<br/>3. Click Login button |
| **Expected Result** | Login fails and error message is displayed: "Epic sadface: Username is required" |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | login.spec.js |

---

### TC-007: Login with Empty Password
| Field | Value |
|-------|-------|
| **TC ID** | TC-007 |
| **Title** | Login attempt with empty password field |
| **Preconditions** | User is on the login page of https://www.saucedemo.com/ |
| **Steps** | 1. Enter username: "standard_user"<br/>2. Leave password field empty<br/>3. Click Login button |
| **Expected Result** | Login fails and error message is displayed: "Epic sadface: Password is required" |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | login.spec.js |

---

### TC-008: Login with Both Fields Empty
| Field | Value |
|-------|-------|
| **TC ID** | TC-008 |
| **Title** | Login attempt with both username and password fields empty |
| **Preconditions** | User is on the login page of https://www.saucedemo.com/ |
| **Steps** | 1. Leave username field empty<br/>2. Leave password field empty<br/>3. Click Login button |
| **Expected Result** | Login fails and error message is displayed: "Epic sadface: Username is required" |
| **Priority** | Medium |
| **Category** | Negative |
| **Spec File** | login.spec.js |

---

### TC-009: Login Page UI Elements Visibility
| Field | Value |
|-------|-------|
| **TC ID** | TC-009 |
| **Title** | Verify all UI elements are visible on login page |
| **Preconditions** | User navigates to https://www.saucedemo.com/ |
| **Steps** | 1. Load the login page<br/>2. Check visibility of username field<br/>3. Check visibility of password field<br/>4. Check visibility of Login button<br/>5. Check visibility of "Accepted usernames are:" text<br/>6. Check visibility of "Password for all users:" text |
| **Expected Result** | All UI elements are visible and properly displayed on the login page |
| **Priority** | Medium |
| **Category** | Smoke |
| **Spec File** | login.spec.js |

---

### TC-010: Case Sensitivity in Username
| Field | Value |
|-------|-------|
| **TC ID** | TC-010 |
| **Title** | Verify case sensitivity in username field |
| **Preconditions** | User is on the login page of https://www.saucedemo.com/ |
| **Steps** | 1. Enter username: "Standard_User" (with different case)<br/>2. Enter password: "secret_sauce"<br/>3. Click Login button |
| **Expected Result** | Login fails as username is case-sensitive |
| **Priority** | Low |
| **Category** | Functional |
| **Spec File** | login.spec.js |

---

### TC-011: Whitespace in Credentials
| Field | Value |
|-------|-------|
| **TC ID** | TC-011 |
| **Title** | Login with credentials containing leading/trailing whitespace |
| **Preconditions** | User is on the login page of https://www.saucedemo.com/ |
| **Steps** | 1. Enter username: " standard_user " (with spaces)<br/>2. Enter password: " secret_sauce " (with spaces)<br/>3. Click Login button |
| **Expected Result** | Login fails or whitespace is trimmed automatically depending on application behavior |
| **Priority** | Low |
| **Category** | Negative |
| **Spec File** | login.spec.js |

---

### TC-012: Login Button Functionality
| Field | Value |
|-------|-------|
| **TC ID** | TC-012 |
| **Title** | Verify Login button is clickable and responsive |
| **Preconditions** | User is on the login page of https://www.saucedemo.com/ |
| **Steps** | 1. Enter username: "standard_user"<br/>2. Enter password: "secret_sauce"<br/>3. Verify Login button is enabled<br/>4. Click Login button |
| **Expected Result** | Login button is clickable and initiates the login process |
| **Priority** | High |
| **Category** | Smoke |
| **Spec File** | login.spec.js |

---

## Summary

| Priority | Count |
|----------|-------|
| High | 6 |
| Medium | 4 |
| Low | 2 |
| **Total** | **12** |

| Category | Count |
|----------|-------|
| Smoke | 3 |
| Functional | 4 |
| Negative | 5 |

---

## Notes

- **Application Under Test (AUT):** https://www.saucedemo.com/
- **Valid Test Credentials:**
  - Username: `standard_user` | Password: `secret_sauce`
  - Username: `problem_user` | Password: `secret_sauce`
  - Username: `performance_glitch_user` | Password: `secret_sauce`
  
- **Test Environment:** Web Browser (Chrome, Firefox, Safari, Edge)
- **Automation Framework:** Playwright
- **Test Execution Approach:** Automated test cases with Playwright
