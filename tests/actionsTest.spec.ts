import { test, expect, chromium } from "@playwright/test";
import { TaskCreation } from "../pages/actions/taskCreation";
import { DocumentTemplateCreation } from "../pages/actions/documentTemplateCreation";

test("Create a Task From Create Modal", async ({ page }) => {
    const Task = new TaskCreation(page);
    await Task.taskCreateFromCreateModal();
});

test("Create a Task from Tasks Page", async ({ page }) => {
    const Task = new TaskCreation(page);
    await Task.taskCreate();
  });
  
  test("Create a Task from Home Page", async ({ page }) => {
      const Task = new TaskCreation(page);
      await Task.taskCreateFromHome();
  })
  
  test("Document Template creation", async ({ page }) => {
    const DocTemp = new DocumentTemplateCreation(page);
    await DocTemp.createDocTemplate();
  });