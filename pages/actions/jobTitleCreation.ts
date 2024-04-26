import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToJobTitlesPage } from "../navigations/navigateToJobTitlesPage";

export class JobTitleCreation {
    readonly page: Page;
    readonly createJobTitleBtn: Locator;
    readonly jobTitleNameField: Locator;
    readonly saveJobTitleBtn: Locator;
    readonly paginationBtn: Locator;
    readonly jobDeleteBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createJobTitleBtn = page.locator("a").filter({ hasText: "Create new job title" });
        this.jobTitleNameField = page.getByPlaceholder("Enter Job Title");
        this.saveJobTitleBtn = page.getByRole("button", { name: "Save" });
        this.paginationBtn = page.getByRole('button', { name: '15' });
        this.jobDeleteBtn = page.getByRole('row', { name: 'Test Job Title Edit Delete', exact: true }).getByRole('button').nth(1);
    }


    async createJobTitle() {
        const navigateJobTitlePage = new NavigateToJobTitlesPage(this.page);
        await navigateJobTitlePage.navigateToJobTitlesPage();
        await this.createJobTitleBtn.click();
        await this.jobTitleNameField.fill("Test Job Title");
        await this.saveJobTitleBtn.click();
        await this.paginationBtn.click();
        await this.jobDeleteBtn.click();
    }

}
