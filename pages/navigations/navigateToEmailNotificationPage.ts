import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";

export class NavigateToEmailNotificationPage {
    readonly page: Page;
    readonly emailNotificationPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailNotificationPageLink = page.getByRole("link", { name: "Email Notifications" });
    }

    async navigateToEmailNotificationPage() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.emailNotificationPageLink.click();
    }
}