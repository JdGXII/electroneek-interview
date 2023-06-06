import { chromium, Browser, Page } from 'playwright';

describe('E2E Tests', () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await chromium.launch({ headless: true });
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
    // Enter invalid username and password
    await page.fill('#user-name', 'invaliduser');
    await page.fill('#password', 'invalidpassword');
  
    // Click the login button
    await page.click('#login-button');
  
    // Check for the error message
    const errorMessage = await page.textContent('h3[data-test="error"]');
    expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
  });

  test('Positive E2E Test - Add Product to Cart', async () => {
    // Login with valid credentials
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
  
    // Add a product to the cart
    await page.click('.btn_inventory');
    await page.click('.shopping_cart_link');
  
    // Verify the product in the cart
    const cartItems = await page.$$('.cart_item');
    expect(cartItems.length).toBe(1);
  
    // Verify the product details
    const productTitle = await page.textContent('.inventory_item_name');
    expect(productTitle).toContain('Sauce Labs Backpack');
  
    const productPrice = await page.textContent('.inventory_item_price');
    expect(productPrice).toContain('$29.99');
  });

  test('Cart Functionality - Verify Add and Remove Items', async () => {  
    // Login with valid credentials
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
  
    // Add item to cart    
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');    
    await page.click('#shopping_cart_container');
  
    // Verify item in the cart
    let cartItems = await page.$$('.cart_item');
    expect(cartItems.length).toBe(1);
  
    // Remove item from cart
    await page.click('.btn.btn_secondary.btn_small.cart_button');

    //Verify no items in cart
    cartItems = await page.$$('.cart_item');
    expect(cartItems.length).toBe(0);
  });

  test('Positive E2E Test - Checkout Process', async () => {
    // Login with valid credentials
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
  
    // Add multiple products to the cart
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
    await page.click('#shopping_cart_container');
  
    // Verify the number of products in the cart
    const cartItems = await page.$$('.cart_item');
    expect(cartItems.length).toBe(2);
  
    // Proceed to the checkout process
    await page.click('[data-test="checkout"]');
  
    // Fill out the checkout form
    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '12345');
  
    // Continue to the final step
    await page.click('[data-test="continue"]');
  
    // Verify the order summary
    const orderSummaryText = await page.textContent('.summary_info');
    expect(orderSummaryText).toContain('Payment Information');
  
    // Complete the order by clicking on Finish
    await page.click('[data-test="finish"]');
  
    // Verify the order completion message
    const orderCompleteText = await page.textContent('.complete-header');
    expect(orderCompleteText).toContain('Thank you for your order!');
  });  

});
