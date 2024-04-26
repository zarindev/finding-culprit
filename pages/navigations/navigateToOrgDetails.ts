import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";

export class NavigateToOrgDetailsPage {
    readonly page: Page;
    readonly orgDetailsPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.orgDetailsPageLink = page.getByRole("link", { name: "Details" });
    }

    async navigateToOrgDetailsPage() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.orgDetailsPageLink.click();
    }
}