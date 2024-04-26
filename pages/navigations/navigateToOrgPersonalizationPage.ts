import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";

export class NavigateToOrgPersonalizationPage {
    readonly page: Page;
    readonly orgPersonalizationPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.orgPersonalizationPageLink = page.getByRole("link", { name: "Personalization" }).nth(1);
    }

    async navigateToOrgPersonalizationPage() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.orgPersonalizationPageLink.click();
    }
}