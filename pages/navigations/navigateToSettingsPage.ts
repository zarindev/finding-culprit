import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToHomePage } from "./navigateToHomePage";
import { OpenUserIconPopup } from "../actions/openUserIconPopup";


export class NavigateToSettingsPage {
    readonly page: Page;
    readonly settingsPageLink: Locator;
    readonly settingsLinkUserPopup: Locator;

    constructor(page: Page) {
        this.page = page;
        this.settingsPageLink = page.locator("//a[@analytics-event='Sidebar - Settings']");
        this.settingsLinkUserPopup = page.getByRole('link', { name: 'Settings', exact: true });
    }

    async navigateToSettingsPage() {
        const navigateHome = new NavigateToHomePage(this.page);
        await navigateHome.navigateToHomePage();
        await this.settingsPageLink.click();
    }

    async navigateToSettingsPageUserPopup() {
        const openUserPopup = new OpenUserIconPopup(this.page);
        await openUserPopup.openUserIconPopup();
        await this.settingsLinkUserPopup.click();
    }
}