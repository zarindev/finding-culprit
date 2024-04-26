import { test, expect, chromium } from "@playwright/test";
import { TaskCreation } from "../pages/actions/taskCreation";

test("Create a Task From Create Modal", async ({ page }) => {
    const Task = new TaskCreation(page);
    await Task.taskCreateFromCreateModal();
});