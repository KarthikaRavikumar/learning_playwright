const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://www.saucedemo.com/';
const SELECTORS = {
  username: '[data-test="username"]',
  password: '[data-test="password"]',
  loginButton: '[data-test="login-button"]',
  errorMessage: '[data-test="error"]',
  inventoryList: '[data-test="inventory-list"]',
  appLogo: '.app_logo'
};

const users = [
  {
    id: 'TC-001',
    username: 'standard_user',
    password: 'secret_sauce',
    title: 'Login with standard_user',
    expectedResult: 'should_login_success',
    description: 'Standard user with full access'
  },
  {
    id: 'TC-002',
    username: 'locked_out_user',
    password: 'secret_sauce',
    title: 'Login with locked_out_user',
    expectedResult: 'should_show_locked_out_error',
    description: 'User account is locked',
    expectedError: 'Epic sadface: Sorry, this user has been locked out.'
  },
  {
    id: 'TC-003',
    username: 'problem_user',
    password: 'secret_sauce',
    title: 'Login with problem_user',
    expectedResult: 'should_login_success',
    description: 'User with rendering/display issues'
  },
  {
    id: 'TC-004',
    username: 'performance_glitch_user',
    password: 'secret_sauce',
    title: 'Login with performance_glitch_user',
    expectedResult: 'should_login_success',
    description: 'User with performance delays'
  },
  {
    id: 'TC-005',
    username: 'error_user',
    password: 'secret_sauce',
    title: 'Login with error_user',
    expectedResult: 'should_login_success',
    description: 'User who encounters errors in cart/checkout'
  },
  {
    id: 'TC-006',
    username: 'visual_user',
    password: 'secret_sauce',
    title: 'Login with visual_user',
    expectedResult: 'should_login_success',
    description: 'User for visual regression testing'
  }
];

// Test case TC-001: Standard User Login
test('TC-001: Login with standard_user credentials', async ({ page }) => {
  const user = users[0];
  console.log(`\n📝 Running Test: ${user.id} - ${user.title}`);
  console.log(`Description: ${user.description}`);
  console.log(`Username: ${user.username}`);
  
  // Navigate to login page
  await page.goto(BASE_URL);
  console.log(`✅ Navigated to ${BASE_URL}`);
  
  // Verify login page is loaded
  await expect(page).toHaveURL(/.*saucedemo.*/);
  console.log(`✅ Login page loaded successfully`);
  
  // Enter credentials
  await page.fill(SELECTORS.username, user.username);
  console.log(`✅ Entered username: ${user.username}`);
  
  await page.fill(SELECTORS.password, user.password);
  console.log(`✅ Entered password: ${user.password}`);
  
  // Click login button
  await page.click(SELECTORS.loginButton);
  console.log(`✅ Clicked login button`);
  
  // Verify successful login
  await expect(page).toHaveURL(/.*inventory.*/);
  console.log(`✅ Redirected to inventory page`);
  
  // Verify inventory page elements are visible
  await expect(page.locator(SELECTORS.inventoryList)).toBeVisible();
  console.log(`✅ Inventory list is visible`);
  
  console.log(`\n✅ TEST PASSED: ${user.id} - ${user.title}\n`);
});

// Test case TC-002: Locked Out User Login
test('TC-002: Login with locked_out_user credentials', async ({ page }) => {
  const user = users[1];
  console.log(`\n📝 Running Test: ${user.id} - ${user.title}`);
  console.log(`Description: ${user.description}`);
  console.log(`Username: ${user.username}`);
  
  // Navigate to login page
  await page.goto(BASE_URL);
  console.log(`✅ Navigated to ${BASE_URL}`);
  
  // Verify login page is loaded
  await expect(page).toHaveURL(/.*saucedemo.*/);
  console.log(`✅ Login page loaded successfully`);
  
  // Enter credentials
  await page.fill(SELECTORS.username, user.username);
  console.log(`✅ Entered username: ${user.username}`);
  
  await page.fill(SELECTORS.password, user.password);
  console.log(`✅ Entered password: ${user.password}`);
  
  // Click login button
  await page.click(SELECTORS.loginButton);
  console.log(`✅ Clicked login button`);
  
  // Verify error message is displayed
  const errorElement = page.locator(SELECTORS.errorMessage);
  await expect(errorElement).toBeVisible();
  const errorText = await errorElement.textContent();
  console.log(`✅ Error message displayed: ${errorText}`);
  
  // Verify it contains the expected error message
  await expect(errorElement).toContainText('locked out');
  console.log(`✅ Error message contains 'locked out'`);
  
  console.log(`\n✅ TEST PASSED: ${user.id} - ${user.title}\n`);
});

// Test case TC-003: Problem User Login
test('TC-003: Login with problem_user credentials', async ({ page }) => {
  const user = users[2];
  console.log(`\n📝 Running Test: ${user.id} - ${user.title}`);
  console.log(`Description: ${user.description}`);
  console.log(`Username: ${user.username}`);
  
  // Navigate to login page
  await page.goto(BASE_URL);
  console.log(`✅ Navigated to ${BASE_URL}`);
  
  // Verify login page is loaded
  await expect(page).toHaveURL(/.*saucedemo.*/);
  console.log(`✅ Login page loaded successfully`);
  
  // Enter credentials
  await page.fill(SELECTORS.username, user.username);
  console.log(`✅ Entered username: ${user.username}`);
  
  await page.fill(SELECTORS.password, user.password);
  console.log(`✅ Entered password: ${user.password}`);
  
  // Click login button
  await page.click(SELECTORS.loginButton);
  console.log(`✅ Clicked login button`);
  
  // Verify successful login
  await expect(page).toHaveURL(/.*inventory.*/);
  console.log(`✅ Redirected to inventory page`);
  
  // Verify inventory page elements are visible
  await expect(page.locator(SELECTORS.inventoryList)).toBeVisible();
  console.log(`✅ Inventory list is visible (may have rendering issues)`);
  
  console.log(`\n✅ TEST PASSED: ${user.id} - ${user.title}\n`);
});

// Test case TC-004: Performance Glitch User Login
test('TC-004: Login with performance_glitch_user credentials', async ({ page }) => {
  const user = users[3];
  console.log(`\n📝 Running Test: ${user.id} - ${user.title}`);
  console.log(`Description: ${user.description}`);
  console.log(`Username: ${user.username}`);
  
  // Navigate to login page
  const startTime = Date.now();
  await page.goto(BASE_URL);
  console.log(`✅ Navigated to ${BASE_URL}`);
  
  // Verify login page is loaded
  await expect(page).toHaveURL(/.*saucedemo.*/);
  console.log(`✅ Login page loaded successfully`);
  
  // Enter credentials
  await page.fill(SELECTORS.username, user.username);
  console.log(`✅ Entered username: ${user.username}`);
  
  await page.fill(SELECTORS.password, user.password);
  console.log(`✅ Entered password: ${user.password}`);
  
  // Click login button
  await page.click(SELECTORS.loginButton);
  console.log(`✅ Clicked login button`);
  
  // Verify successful login (with extended timeout for performance delays)
  await expect(page).toHaveURL(/.*inventory.*/, { timeout: 60000 });
  const endTime = Date.now();
  const loginTime = endTime - startTime;
  console.log(`✅ Redirected to inventory page (took ${loginTime}ms)`);
  
  // Verify inventory page elements are visible
  await expect(page.locator(SELECTORS.inventoryList)).toBeVisible({ timeout: 30000 });
  console.log(`✅ Inventory list is visible (with possible delays)`);
  
  console.log(`\n✅ TEST PASSED: ${user.id} - ${user.title}\n`);
});

// Test case TC-005: Error User Login
test('TC-005: Login with error_user credentials', async ({ page }) => {
  const user = users[4];
  console.log(`\n📝 Running Test: ${user.id} - ${user.title}`);
  console.log(`Description: ${user.description}`);
  console.log(`Username: ${user.username}`);
  
  // Navigate to login page
  await page.goto(BASE_URL);
  console.log(`✅ Navigated to ${BASE_URL}`);
  
  // Verify login page is loaded
  await expect(page).toHaveURL(/.*saucedemo.*/);
  console.log(`✅ Login page loaded successfully`);
  
  // Enter credentials
  await page.fill(SELECTORS.username, user.username);
  console.log(`✅ Entered username: ${user.username}`);
  
  await page.fill(SELECTORS.password, user.password);
  console.log(`✅ Entered password: ${user.password}`);
  
  // Click login button
  await page.click(SELECTORS.loginButton);
  console.log(`✅ Clicked login button`);
  
  // Verify successful login
  await expect(page).toHaveURL(/.*inventory.*/);
  console.log(`✅ Redirected to inventory page`);
  
  // Verify inventory page elements are visible
  await expect(page.locator(SELECTORS.inventoryList)).toBeVisible();
  console.log(`✅ Inventory list is visible`);
  console.log(`⚠️  Note: This user may encounter errors during cart/checkout operations`);
  
  console.log(`\n✅ TEST PASSED: ${user.id} - ${user.title}\n`);
});

// Test case TC-006: Visual User Login
test('TC-006: Login with visual_user credentials', async ({ page }) => {
  const user = users[5];
  console.log(`\n📝 Running Test: ${user.id} - ${user.title}`);
  console.log(`Description: ${user.description}`);
  console.log(`Username: ${user.username}`);
  
  // Navigate to login page
  await page.goto(BASE_URL);
  console.log(`✅ Navigated to ${BASE_URL}`);
  
  // Verify login page is loaded
  await expect(page).toHaveURL(/.*saucedemo.*/);
  console.log(`✅ Login page loaded successfully`);
  
  // Enter credentials
  await page.fill(SELECTORS.username, user.username);
  console.log(`✅ Entered username: ${user.username}`);
  
  await page.fill(SELECTORS.password, user.password);
  console.log(`✅ Entered password: ${user.password}`);
  
  // Click login button
  await page.click(SELECTORS.loginButton);
  console.log(`✅ Clicked login button`);
  
  // Verify successful login
  await expect(page).toHaveURL(/.*inventory.*/);
  console.log(`✅ Redirected to inventory page`);
  
  // Verify inventory page elements are visible
  await expect(page.locator(SELECTORS.inventoryList)).toBeVisible();
  console.log(`✅ Inventory list is visible`);
  console.log(`⚠️  Note: This user is designed for visual regression testing - visual elements may differ`);
  
  console.log(`\n✅ TEST PASSED: ${user.id} - ${user.title}\n`);
});
