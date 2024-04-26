import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";

export class NavigateToBrandingPage {
    readonly page: Page;
    readonly brandingPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.brandingPageLink = page.getByRole("link", { name: "Branding" });
    }

    async navigateToBrandingPage() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.brandingPageLink.click();
    }
}