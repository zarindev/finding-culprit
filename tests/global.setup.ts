import { test, expect } from "@playwright/test";
require('dotenv').config();

test("Login Setup", async({page}) => {

  await page.goto("https://account.tallyfy.com/login");

  await page.fill('input[type="email"]', `${process.env.EMAIL_ID}`);

  await page.fill('input[type="password"]', `${process.env.PASSWORD}`);

  await page.click('button[type="submit"]');

  await page.waitForURL(`https://go.tallyfy.com/${process.env.ORG_ID}/dashboard`);

  await expect(page).toHaveTitle(/Tallyfy/);

  await page.context().storageState({path: "./playwright/.auth/auth.json"})

})