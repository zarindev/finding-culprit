import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToHomePage } from "./navigateToHomePage";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";

export class NavigateToFavoritesPage {
    readonly page: Page;
    readonly favoritesPageLink: Locator;
    readonly favoritesLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.favoritesPageLink = page.locator("//a[@analytics-event='Sidebar - Favorite']");
        this.favoritesLink = page.getByRole("link", { name: "Favorites" });
    }

    async navigateToFavoritesPage() {
        const navigateHome = new NavigateToHomePage(this.page);
        await navigateHome.navigateToHomePage();
        await this.favoritesPageLink.click();
    }

    async navigateToFavoritesPageSettings() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.favoritesLink.click();
    }
}