import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToHomePage } from "./navigateToHomePage";

export class NavigateToCreateBtnModal {
    readonly page: Page;
    readonly createBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createBtn = page.locator("//a[@class='tallyfy-ripple-effect nav-link dropdown-toggle']");
    }

    async navigateToCreateBtnModal() {
        const navigateHome = new NavigateToHomePage(this.page);
        await navigateHome.navigateToHomePage();
        await this.createBtn.click();
    }
}