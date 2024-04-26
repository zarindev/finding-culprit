import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToHomePage } from "./navigateToHomePage";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";


export class NavigateToProfilePage {
    readonly page: Page;
    readonly profilePageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.profilePageLink = page.getByRole("link", { name: "Profile" });
    }

    async navigateToProfilePage() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.profilePageLink.click();
    }
}