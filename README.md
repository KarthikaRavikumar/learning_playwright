# Learning Playwright & TypeScript

A comprehensive repository for learning Playwright, JavaScript, and TypeScript with practical examples, test automation, and advanced concepts.

---

## 📚 Repository Structure

### JavaScript Learning Path

- **Chapter 01**: JavaScript Basics
- **Chapter 02**: Conditional Statements (if/else)
- **Chapter 03**: Data Types & Operations
- **Chapter 04**: Operators (arithmetic, comparison, logical, typeof, ternary)
- **Chapter 05**: Control Flow (if/else statements)
- **Chapter 06**: Switch Statements
- **Chapter 07**: Loops (for, while, do-while)
- **Chapter 08**: Arrays
- **Chapter 09**: Functions
- **Chapter 10**: Strings
- **Chapter 11**: Objects
- **Chapter 12**: Multi-Dimensional Arrays
- **Chapter 13**: Callbacks
- **Chapter 14**: Promises
- **Chapter 15**: Async/Await

### TypeScript Advanced Topics

- **Chapter 18**: TypeScript Basics
- **Chapter 19**: Interfaces
  - Index signatures
  - Class interfaces
  - Method signatures
  - React hooks patterns
  - Real page object interfaces

- **Chapter 20**: Enums
  - Basic enums
  - API response enums
  - Function with enums
  - Real browser selection examples

- **Chapter 21**: Generics
  - Generic classes
  - Generic API responses
  - Generic utilities

- **Chapter 22**: Access Modifiers (public, private, protected)
  - Private/public/protected examples
  - Abstract classes
  - Override examples
  - ReadOnly properties
  - Type aliases
  - Page Object Model patterns

### Playwright Testing

- **Test Automation**: Login feature test cases for SauceDemo
- **Test Reports**: Comprehensive test execution reports

### Learning Materials

- **Learning-Playwright-MCP**: Model Context Protocol learning resources
- **Demo Folder**: Test case templates and practical examples
- **Report Folder**: Test execution reports

---

## 🎯 Key Modules

### Task Folders

- **16_March_Task**: TypeScript access modifiers comprehensive exercise
- **17_March_Task**: JavaScript questions (10 problems)
- **24_March_Task**: Advanced questions
- **26_March_TASK**: Pattern generation

---

## 🧪 Test Automation

### SauceDemo Login Testing

```bash
# Run all tests
npx playwright test tests/login.spec.js

# Run specific test
npx playwright test tests/login.spec.js -g "TC-001"
```

**Test Coverage**:

- ✅ 6 test cases - 100% pass rate
- ✅ All 6 user types tested
- ✅ Performance testing (6+ second delays)

---

## 🏗️ TypeScript Access Modifiers

### Quick Reference

| Modifier      | Same Class | Subclass | Outside |
| ------------- | ---------- | -------- | ------- |
| **public**    | ✅         | ✅       | ✅      |
| **protected** | ✅         | ✅       | ❌      |
| **private**   | ✅         | ❌       | ❌      |

### Run Examples

```bash
# Run TypeScript directly (no .js file created)
npx ts-node 16_March_Task/task.ts
```

---

## 🚀 Getting Started

### Prerequisites

```bash
node --version
npm install
npm install @playwright/test
npm install -g typescript ts-node
```

### Run Files

```bash
# JavaScript
node chapter_01/basics.js

# TypeScript
npx ts-node chapter_18_TypeScript/TS_HelloWorld.ts
```

---

## 📂 Recent Updates (April 20, 2026)

1. **Fixed Playwright Configuration** (April 20)
   - Removed markdown code fence markers from playwright.config.ts
   - Configuration now properly formatted for test execution
   - Multi-browser support (chromium, firefox, webkit) verified

2. **TypeScript Access Modifiers** (Chapter 22)
   - Comprehensive exercise with 5 sections
   - Real-world examples (Vehicle, BankAccount)
   - Protected behavior across files guide

3. **Enhanced Interface Examples** (Chapter 19)
   - Index signatures
   - React hooks patterns
   - Class-based interfaces

4. **Enums Examples** (Chapter 20)
   - API response handling
   - Browser selection patterns

5. **Generics** (Chapter 21)
   - Generic classes and utilities
   - API response typing

6. **Test Automation**
   - Login feature test suite (6 test cases, 100% pass rate)
   - Test reports and documentation
   - Proper playwright.config.ts configuration

---

## 🔗 Resources

- **Playwright**: https://playwright.dev/
- **TypeScript**: https://www.typescriptlang.org/
- **SauceDemo**: https://www.saucedemo.com/
- **Node.js**: https://nodejs.org/

---

## 💡 Best Practices

### JavaScript

- Use `const` and `let` instead of `var`
- Prefer arrow functions for callbacks
- Use async/await over promise chains

### TypeScript

- Enable strict mode
- Use access modifiers for encapsulation
- Leverage interfaces for contracts
- Use generics for reusable components

### Testing

- Keep tests focused and isolated
- Use meaningful test names
- Follow Arrange-Act-Assert pattern

---

## 👤 Author

**Karthika Ravikumar**

Repository: https://github.com/KarthikaRavikumar/learning_playwright

**Last Updated**: April 20, 2026
