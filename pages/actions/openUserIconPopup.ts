import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToHomePage } from "../navigations/navigateToHomePage";

export class OpenUserIconPopup {
    readonly page: Page;
    readonly userIconPopup: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userIconPopup = page.locator("//i[@class='far fa-angle-down icon-light']");
    }

    async openUserIconPopup() {
        const navigateHome = new NavigateToHomePage(this.page);
        await navigateHome.navigateToHomePage();
        await this.userIconPopup.click();
    }
}