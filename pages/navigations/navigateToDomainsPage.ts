import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";

export class NavigateToDomainsPage {
    readonly page: Page;
    readonly domainsPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.domainsPageLink = page.getByRole("link", { name: "Domains" });
    }

    async navigateToDomainsPage() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.domainsPageLink.click();
    }
}