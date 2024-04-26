import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToTemplatePage } from "../navigations/navigateToTemplatesPage";


export class ProcedureTemplateCreation {
  readonly page: Page;
  readonly createBtn: Locator;
  readonly templateCreateBtn: Locator;
  readonly templateName: Locator;
  readonly continueBtn1: Locator;
  readonly continueBtn2: Locator;
  readonly templateTypeBtn: Locator;
  readonly stepField: Locator;
  readonly createStepBtn: Locator;
  readonly addStepBtn: Locator;
  readonly launchBtn1: Locator;
  readonly launchName: Locator;
  readonly launchBtn2: Locator;
  readonly kOForm: Locator;
  readonly kOAddFieldBtn: Locator;
  readonly kOFileUploadOpt: Locator;
  readonly kOFileUploadFieldName: Locator;
  readonly kOFileUploadField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createBtn = page.locator("a").filter({ hasText: "Create" }).nth(1);
    this.templateCreateBtn = page.getByRole("link", {
      name: "Create Template Like a",
    });
    this.templateName = page.getByPlaceholder("Type in a unique name for");
    this.continueBtn1 = page.getByRole("button", { name: "Continue" });
    this.continueBtn2 = page.locator("a").filter({ hasText: "Continue" });
    this.templateTypeBtn = page.getByLabel("PROCEDURE A recipe for a");
    this.stepField = page.getByPlaceholder("Type in the step");
    this.createStepBtn = page.getByRole("button", { name: "Create Step" });
    this.addStepBtn = page.getByRole("button", { name: "Add Step" });
    this.launchBtn1 = page.locator("a").filter({ hasText: "Launch" });
    this.launchName = page.getByPlaceholder("Type in a unique name for");
    this.launchBtn2 = page.locator("a").filter({ hasText: "Launch" });
    this.kOForm = page.locator("//label[normalize-space()='Kick Off Form']");
    this.kOAddFieldBtn = page.getByText("ADD A NEW FIELD");
    this.kOFileUploadOpt = page.getByText("File Upload");
    this.kOFileUploadFieldName = page.getByPlaceholder("Title of file upload field");
    this.kOFileUploadField = page.locator("//input[@class='ng-pristine ng-untouched ng-valid ng-empty ng-valid-required']");
  }

  async createProcTemplate() {
    const navigateTemplate = new NavigateToTemplatePage(this.page);
    await navigateTemplate.navigateToTemplate();
    await this.createBtn.click();
    await this.templateCreateBtn.click();
    await this.templateName.fill("Test Procedure Template");
    await this.continueBtn1.click();
    await this.templateTypeBtn.click();
    await this.continueBtn1.click();
    await this.stepField.fill("Test Step 1");
    await this.createStepBtn.click();
    await this.stepField.fill("Test Step 2");
    await this.addStepBtn.click();
    await this.stepField.fill("Test Step 3");
    await this.addStepBtn.click();
    await this.stepField.fill("Test Step 4");
    await this.addStepBtn.click();
    await this.launchBtn1.click();
    await this.launchName.fill("Test Name");
    await this.continueBtn2.click();
    await this.launchBtn2.click();
  }

  async createProcWithFileUpload () {
    const navigateTemplate = new NavigateToTemplatePage(this.page);
    await navigateTemplate.navigateToTemplate();
    await this.createBtn.click();
    await this.templateCreateBtn.click();
    await this.templateName.fill("Test Procedure Template");
    await this.continueBtn1.click();
    await this.templateTypeBtn.click();
    await this.continueBtn1.click();
    await this.kOForm.click();
    await this.kOAddFieldBtn.click();
    await this.kOFileUploadOpt.scrollIntoViewIfNeeded();
    await this.kOFileUploadOpt.click();
    await this.kOFileUploadFieldName.fill("Test File Upload");
    await this.stepField.fill("Test Step 1");
    await this.createStepBtn.click();
    await this.stepField.fill("Test Step 2");
    await this.addStepBtn.click();
    await this.stepField.fill("Test Step 3");
    await this.addStepBtn.click();
    await this.stepField.fill("Test Step 4");
    await this.addStepBtn.click();
    await this.launchBtn1.click();
    await this.kOFileUploadField.setInputFiles("./pages/uploads/testfile1.jpg");
    await this.continueBtn2.click();
    await this.launchName.fill("Test Name");
    await this.continueBtn2.click();
    await this.launchBtn2.click();
  }
}