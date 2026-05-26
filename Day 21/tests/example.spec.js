// @ts-check
import { test, expect } from '@playwright/test';
import { log } from 'node:console';

test.describe('jio mart test', () => {
  test.use({ storageState: 'auth.json' });
  test('search for fruits', async ({ page }) => {
    await page.goto('https://www.jiomart.com/sections/low-price-mumbai',{waitUntil:'commit'});

    // Click on the search input and type "fruits"
    const input = page.locator('//*[@id="app"]/div/div[3]/header/div[1]/div/div[2]/div[1]/div/div[2]/input');
    await input.click({force:true});
    await input.fill('fruits');
    await input.press('Enter');
    await expect(page.getByText('fruits').first()).toBeVisible();
  });

  test.skip('profile', async ({ page }) => {
    await page.goto('https://www.jiomart.com/profile');

    const profileName = page.getByText("Saikiran",{exact:true});
    // console.log(await profileName.textContent());
    await expect(profileName).toBeVisible();
  });
});