import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToHomePage } from "./navigateToHomePage";


export class NavigateToTrackerPage {
    readonly page: Page;
    readonly trackerPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.trackerPageLink = page.locator("//a[@analytics-event='Sidebar - Process Tracker']");
    }

    async navigateToTrackerPage() {
        const navigateHome = new NavigateToHomePage(this.page);
        await navigateHome.navigateToHomePage();
        await this.trackerPageLink.click();
    }
}