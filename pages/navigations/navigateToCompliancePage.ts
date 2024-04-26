import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";

export class NavigateToCompliancePage {
    readonly page: Page;
    readonly compliancePageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.compliancePageLink = page.getByRole("link", { name: "COMPLIANCE" });
    }

    async navigateToCompliancePage() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.compliancePageLink.click();
    }
}