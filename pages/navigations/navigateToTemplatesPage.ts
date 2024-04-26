import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToHomePage } from "./navigateToHomePage";

export class NavigateToTemplatePage {
    readonly page: Page;
    readonly templatesPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.templatesPageLink = page.locator("//a[@analytics-event='Sidebar - Library']");
    }
    async navigateToTemplate() {
        const navigateHome = new NavigateToHomePage(this.page);
        await navigateHome.navigateToHomePage();
        await this.templatesPageLink.click();
    }
}

