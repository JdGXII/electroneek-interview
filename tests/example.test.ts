import { chromium, Browser, Page } from 'playwright';

describe('E2E Tests', () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
  });

  afterEach(async () => {
    if (page) {
      await page.close();
    }
  });

  afterAll(async () => {
    if (browser) {
      await browser.close();
    }
  });

  test('Positive E2E Test - Login with valid credentials', async () => {
    // Enter valid username and password
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    // Click on the Login button
    await page.click('#login-button');

    // Assert that the inventory page is displayed
    const inventoryContainer = await page.isVisible('#inventory_container');
    expect(inventoryContainer).toBe(true);
  });

  test('Invalid Login - Verify Error Message', async () => {
    await page.goto('https://www.saucedemo.com/');
  
    // Enter invalid username and password
    await page.fill('#user-name', 'invaliduser');
    await page.fill('#password', 'invalidpassword');
  
    // Click the login button
    await page.click('#login-button');
  
    // Check for the error message
    const errorMessage = await page.textContent('h3[data-test="error"]');
    expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
  });

  test('Cart Functionality - Verify Add and Remove Items', async () => {
    await page.goto('https://www.saucedemo.com/');
  
    // Login with valid credentials
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
  
    // Add item to cart
    await page.click('.btn_inventory');
    await page.click('.shopping_cart_link');
  
    // Verify item in the cart
    const cartItems = await page.$$('.cart_item');
    expect(cartItems.length).toBe(1);
  
    // Remove item from cart
    await page.click('.cart_item .btn_secondary');
    const emptyCartMessage = await page.textContent('.cart_list');
    expect(emptyCartMessage).toContain('Your cart is empty');
  });
  
});
