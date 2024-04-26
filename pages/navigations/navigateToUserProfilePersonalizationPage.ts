import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToHomePage } from "./navigateToHomePage";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";


export class NavigateToUserProfilePersonalizationPage {
    readonly page: Page;
    readonly personalizationPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.personalizationPageLink = page.getByRole("link", { name: "Personalization" }).nth(0);;
    }

    async navigateToPersonalizationPage() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.personalizationPageLink.click();
    }
}


