import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";

export class NavigateToIntegrationsPage {
    readonly page: Page;
    readonly integrationsPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.integrationsPageLink = page.getByRole("link", { name: "INTEGRATIONS" });
    }

    async navigateToIntegrationsPage() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.integrationsPageLink.click();
    }
}