import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToSettingsPage } from "./navigateToSettingsPage";

export class NavigateToSnippetsPage {
    readonly page: Page;
    readonly snippetsPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.snippetsPageLink = page.getByRole("link", { name: "Snippets" });
    }

    async navigateToSnippetsPage() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.snippetsPageLink.click();
    }
}