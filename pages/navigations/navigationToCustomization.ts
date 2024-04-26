import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";

export class NavigateToOrgCustomizationPage {
    readonly page: Page;
    readonly orgCustomizationPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.orgCustomizationPageLink = page.getByRole("link", { name: "Customization" });
    }

    async navigateToOrgCustomizationPage() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.orgCustomizationPageLink.click();
    }
}