import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";

export class NavigateToBillingPage {
    readonly page: Page;
    readonly billingPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.billingPageLink = page.getByRole("link", { name: "BILLING" });
    }

    async navigateToBillingPage() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.billingPageLink.click();
    }
}