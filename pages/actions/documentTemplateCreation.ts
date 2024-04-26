import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToTemplatePage } from "../navigations/navigateToTemplatesPage";

export class DocumentTemplateCreation {
    readonly page: Page;
    readonly createBtn: Locator;
    readonly templateCreateBtn: Locator;
    readonly templateName: Locator;
    readonly continueBtn1: Locator;
    readonly templateTypeBtn: Locator;
    readonly continueBtn2: Locator;
    readonly documentTextField: Locator;
    readonly fieldsDropdown: Locator;
    readonly stfBtn: Locator;
    readonly stfTitle: Locator;
    readonly launchBtn1: Locator;
    readonly continueBtn3: Locator;
    readonly launchName: Locator;
    readonly continueBtn4: Locator;
    readonly launchBtn2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createBtn = page.locator("a").filter({ hasText: "Create" }).nth(1);
        this.templateCreateBtn = page.getByRole("link", { name: "Create Template Like a" });
        this.templateName = page.getByPlaceholder("Type in a unique name for");
        this.continueBtn1 = page.getByRole("button", { name: "Continue" });
        this.templateTypeBtn = page.getByLabel("DOCUMENT A template for a");
        this.continueBtn2 = page.getByRole("button", { name: "Continue" });
        this.documentTextField = page.locator("//div[@class='fr-element fr-view']");
        this.fieldsDropdown = page.locator("//div[@class='content-section form-fields d-flex flex-column']").filter({hasText: "New Fields"});
        this.stfBtn = page.locator("body > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > process:nth-child(1) > div:nth-child(1) > process-edit:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > compact-container:nth-child(1) > div:nth-child(1) > div:nth-child(3) > compact-pane-left:nth-child(1) > compact-step-list:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > document-pane-editor:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)").filter({hasText:"Add"});
        this.stfTitle = page.getByPlaceholder("Title of text field");
        this.launchBtn1 = page.locator("a").filter({ hasText: "Launch" });
        this.continueBtn3 = page.locator("a").filter({ hasText: "Continue" });
        this.launchName = page.getByPlaceholder("Type in a unique name for");
        this.continueBtn4 = page.locator("a").filter({ hasText: "Continue" });
        this.launchBtn2 = page.locator("a").filter({ hasText: "Launch" });
    }

    async createDocTemplate() {
        const navigateTemplate = new NavigateToTemplatePage(this.page);
        await navigateTemplate.navigateToTemplate();
        await this.createBtn.click();
        await this.templateCreateBtn.click();
        await this.templateName.fill("Test Document Template");
        await this.continueBtn1.click();
        await this.templateTypeBtn.click();
        await this.continueBtn2.click();
        await this.documentTextField.fill("Test Document");
        await this.fieldsDropdown.click();
        await this.stfBtn.click();
        await this.stfTitle.fill("Test Title");
        await this.launchBtn1.click();
        await this.continueBtn3.click();
        await this.launchName.fill("Test Name");
        await this.continueBtn4.click();
        await this.launchBtn2.click();
    }
}