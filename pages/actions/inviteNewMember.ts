import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToSettingsPage } from "../navigations/navigateToSettingsPage";
import { NavigateToPeoplePage } from "../navigations/navigateToPeoplePage";
import { NavigateToHomePage } from "../navigations/navigateToHomePage";
import { InviteMemberDetails } from "./inviteMemberDetails";
import { OpenUserIconPopup } from "./openUserIconPopup";


export class InviteNewMember {
    readonly page: Page;
    readonly inviteNewMemberLinkSidebar: Locator;
    readonly inviteNewMemberLinkSettings: Locator;
    readonly inviteNewMemberLinkSettingsSidebar: Locator;
    readonly inviteNewMemberLinkUserPopup: Locator;
    readonly inviteNewMemberLinkHomeBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inviteNewMemberLinkSidebar = page.locator("//a[@analytics-event='Sidebar - Invite']");
        this.inviteNewMemberLinkSettings = page.locator('div').filter({ hasText: /^A member is equivalent to a colleague or coworker Invite New Member$/ }).locator('a');
        this.inviteNewMemberLinkSettingsSidebar = page.getByRole("link", { name: "Invite New Member" });
        this.inviteNewMemberLinkUserPopup = page.locator('#aside a').filter({ hasText: 'Invite New Member' });
        this.inviteNewMemberLinkHomeBtn = page.getByRole('button', { name: ' Invite' });
    }

    async inviteNewMemberSettings() {
        const navigateMemberPage = new NavigateToPeoplePage(this.page);
        await navigateMemberPage.navigateToPeoplePageFromSettings();
        await this.inviteNewMemberLinkSettings.click();
        const memberDetails = new InviteMemberDetails(this.page);
        await memberDetails.inviteMemberDetails();
    }
    async inviteNewMemberSettingsSidebar() {
        const navigateSettings = new NavigateToSettingsPage(this.page);
        await navigateSettings.navigateToSettingsPage();
        await this.inviteNewMemberLinkSettingsSidebar.click();
        const memberDetails = new InviteMemberDetails(this.page);
        await memberDetails.inviteMemberDetails();
    }
    async inviteNewMemberSidebar() {
        const navigateHome = new NavigateToHomePage(this.page);
        await navigateHome.navigateToHomePage();
        await this.inviteNewMemberLinkSidebar.click();
        const memberDetails = new InviteMemberDetails(this.page);
        await memberDetails.inviteMemberDetails();
    }

    async inviteNewMemberUserPopup() {
        const openUserPopup = new OpenUserIconPopup(this.page);
        await openUserPopup.openUserIconPopup();
        await this.inviteNewMemberLinkUserPopup.click();
        const memberDetails = new InviteMemberDetails(this.page);
        await memberDetails.inviteMemberDetails();
    }

    async inviteNewMemberHomeBtn() {
        const navigateHome = new NavigateToHomePage(this.page);
        await navigateHome.navigateToHomePage();
        await this.inviteNewMemberLinkHomeBtn.click();
        const memberDetails = new InviteMemberDetails(this.page);
        await memberDetails.inviteMemberDetails();
    }
}