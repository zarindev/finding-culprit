import { expect, type Locator, type Page } from "@playwright/test";
import { NavigateToTasksPage } from "../navigations/navigateToTasksPage";
import { NavigateToHomePage } from "../navigations/navigateToHomePage";
import { NavigateToCreateBtnModal } from "../navigations/navigateToCreateBtnModal";


export class TaskCreation {
    readonly page: Page;
    readonly taskName: Locator;
    readonly taskAddBtn: Locator;
    readonly taskSaveBtn: Locator;
    //task creation from create button modal
    readonly createBtnTaskCreateBtn: Locator;
    //task creation from home page
    readonly homeCreateTaskBtn: Locator;
    readonly homeTaskName: Locator;
    readonly homeTaskCreateBtn: Locator;

constructor(page: Page) {
    this.page = page;
    this.taskName = page.locator('input[placeholder="Type in the task"]');
    this.taskAddBtn = page.locator("button", { hasText: "ADD TASK"});
    this.taskSaveBtn = page.locator("button", { hasText: "SAVE"});

    //Create Modal Constructors
    this.createBtnTaskCreateBtn = page.getByText("Create Task");

    //Home Page Constructors
    this.homeCreateTaskBtn = page.locator("//span[@translate='contentPreview.tasks.header.nav']");
    this.homeTaskName = page.locator("//textarea[@placeholder='Name this task']");
    this.homeTaskCreateBtn = page.locator("button", { hasText: "CREATE TASK"});
}

async taskCreate () {
    const navigateTasks = new NavigateToTasksPage(this.page);
    await navigateTasks.navigateToTasksPage();
    await this.taskName.fill("Test Task");
    await this.taskAddBtn.click();
}

async taskCreateFromHome () {
    const navigateHome = new NavigateToHomePage(this.page);
    await navigateHome.navigateToHomePage();
    await this.homeCreateTaskBtn.click();
    await this.homeTaskName.fill("Test Task");
    await this.homeTaskCreateBtn.click();
}

async taskCreateFromCreateModal () {
    const navigateToCreateBtnModal = new NavigateToCreateBtnModal(this.page);
    await navigateToCreateBtnModal.navigateToCreateBtnModal();
    await this.createBtnTaskCreateBtn.click();
    await this.homeTaskName.fill("Test Task");
    await this.homeTaskCreateBtn.click();
}
}