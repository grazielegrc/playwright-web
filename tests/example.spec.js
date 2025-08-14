// @ts-check
import { test, expect } from '@playwright/test';

// Override playwrightconfig.js options
test.use({ browserName: 'firefox' });

test.describe('Testing Playwright page',  {  tag: '@smoke' }, () => { 

test('has title', {
  tag: '@fast',
  annotation: {
    type: 'issue',
    description: 'https://github.com/microsoft/playwright/issues/23180',
  }},async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', {
  tag: ['@multiple', '@multiple2'],
}, async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.skip('test skipped', async ({ page }) => {
 // This test is not run
});
});
