import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToSettingsPage } from "../navigations/navigateToSettingsPage";
import { NavigateToPeoplePage } from "../navigations/navigateToPeoplePage";
import { NavigateToHomePage } from "../navigations/navigateToHomePage";


export class InviteMemberDetails {
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly inviteMemberBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameField = page.locator("input[placeholder='First Name']");
        this.lastNameField = page.locator("input[placeholder='Last Name']");
        this.emailField = page.locator("input[placeholder='Email']");
        this.inviteMemberBtn = page.locator("button", { hasText: "INVITE MEMBER"});
    }

    async inviteMemberDetails() {
        const randomNum = Math.floor(Math.random() * 10000) + 1;
        const emailExtension = randomNum.toString();
        await this.firstNameField.fill("Test");
        await this.lastNameField.fill("Man");
        await this.emailField.fill(`mdzarinjerry+test${emailExtension}@gmail.com`);
        await this.inviteMemberBtn.click();
    }
}