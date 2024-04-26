import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";

export class NavigateToJobTitlesPage {
    readonly page: Page;
    readonly jobTitlesPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.jobTitlesPageLink = page.getByRole("link", { name: "Job Titles" });
    }

    async navigateToJobTitlesPage() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.jobTitlesPageLink.click();
    }
}