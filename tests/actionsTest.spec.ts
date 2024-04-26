import { test, expect, chromium } from "@playwright/test";
import { TaskCreation } from "../pages/actions/taskCreation";
import { ProcedureTemplateCreation } from "../pages/actions/procedureTemplateCreation";


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
  
  
  test("Procedure Template creation", async ({ page }) => {
    const ProcTemp = new ProcedureTemplateCreation(page);
    await ProcTemp.createProcTemplate();
  });
  
  