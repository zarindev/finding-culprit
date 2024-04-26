import { test, expect, chromium } from "@playwright/test";
import { NavigateToHomePage } from "../pages/navigations/navigateToHomePage";
import { NavigateToCreateBtnModal } from "../pages/navigations/navigateToCreateBtnModal";

test("Navigate to the Create Button Modal", async ({page}) => {
    const navigateToCreateBtnModal = new NavigateToCreateBtnModal(page);
    await navigateToCreateBtnModal.navigateToCreateBtnModal();
});
test("Navigate to the Home Page", async ({page}) => {
    const navigateToHomePage = new NavigateToHomePage(page);
    await navigateToHomePage.navigateToHomePage();
})