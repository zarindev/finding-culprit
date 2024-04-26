import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";

export class NavigateToEmailSettingsPage {
    readonly page: Page;
    readonly emailSettingsPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailSettingsPageLink = page.getByRole("link", { name: "Email Settings" });
    }

    async navigateToEmailSettingsPage() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
    }
}