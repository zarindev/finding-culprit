import { test, expect, chromium } from "@playwright/test";
import { NavigateToHomePage } from "../pages/navigations/navigateToHomePage";
test("Navigate to the Home Page", async ({page}) => {
    const navigateToHomePage = new NavigateToHomePage(page);
    await navigateToHomePage.navigateToHomePage();
})