import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";

export class NavigateToTagsPage {
    readonly page: Page;
    readonly tagsPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.tagsPageLink = page.getByRole("link", { name: "Tags" });
    }

    async navigateToTagsPage() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.tagsPageLink.click();
    }
}