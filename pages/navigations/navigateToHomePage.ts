import { type Locator, type Page } from "@playwright/test";


export class NavigateToHomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto(`https://go.tallyfy.com/9710244f43f053c2618dd09613e3c56d/dashboard`);
    }
}