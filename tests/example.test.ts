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
});
