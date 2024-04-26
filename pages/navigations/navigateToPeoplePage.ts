import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToHomePage } from "./navigateToHomePage";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";

export class NavigateToPeoplePage {
    readonly page: Page;
    readonly peoplePageLinkSidebar: Locator;
    readonly peoplePageLinkSettings: Locator;

    constructor(page: Page) {
        this.page = page;
        this.peoplePageLinkSidebar = page.locator("//a[@ui-sref='settings.org.usersRegular({ org_id: appCtrl.organizationId })']");
        this.peoplePageLinkSettings = page.getByRole("link", { name: "Members" });
    }

    async navigateToPeoplePageFromSidebar() {
        const navigateHome = new NavigateToHomePage(this.page);
        await navigateHome.navigateToHomePage();
        await this.peoplePageLinkSidebar.click();
    }

    async navigateToPeoplePageFromSettings() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.peoplePageLinkSettings.click();
    }
}