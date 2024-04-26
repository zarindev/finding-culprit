import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";

export class NavigateToGroupsPage {
    readonly page: Page;
    readonly groupsPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.groupsPageLink = page.getByRole("link", { name: "Groups" });
    }

    async navigateToGroupsPage() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.groupsPageLink.click();
    }
}