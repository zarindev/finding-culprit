import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";

export class NavigateToGuestsPage {
    readonly page: Page;
    readonly guestsPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.guestsPageLink = page.getByRole("link", { name: "Guests" });
    }

    async navigateToGuestsPage() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.guestsPageLink.click();
    }
}