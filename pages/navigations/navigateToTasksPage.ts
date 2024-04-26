import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToHomePage } from "./navigateToHomePage";

export class NavigateToTasksPage {
    readonly page: Page;
    readonly tasksPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.tasksPageLink = page.locator("//a[@analytics-event='Sidebar - Tasks']");
    }

    async navigateToTasksPage() {
        const navigateHome = new NavigateToHomePage(this.page);
        await navigateHome.navigateToHomePage();
        await this.tasksPageLink.click();
    }
}