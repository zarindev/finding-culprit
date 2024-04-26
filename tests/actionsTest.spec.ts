import { test, expect, chromium } from "@playwright/test";
import { TaskCreation } from "../pages/actions/taskCreation";
import { DocumentTemplateCreation } from "../pages/actions/documentTemplateCreation";
import { ProcedureTemplateCreation } from "../pages/actions/procedureTemplateCreation";
import { JobTitleCreation } from "../pages/actions/jobTitleCreation";
import { InviteNewMember } from "../pages/actions/inviteNewMember";

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
  test("Procedure Template creation", async ({ page }) => {
    const ProcTemp = new ProcedureTemplateCreation(page);
    await ProcTemp.createProcTemplate();
  });
  
  test("Create a Procedure with Kick Off Form with File Upload", async ({ page }) => {
    const ProcTemp = new ProcedureTemplateCreation(page);
    await ProcTemp.createProcWithFileUpload();
  })
  
  test("Job Title Creation", async ({ page }) => {
    const JobTitle = new JobTitleCreation(page);
    await JobTitle.createJobTitle();
  });
  
  test("Invite New Member from Sidebar", async ({ page }) => {
    const inviteMember = new InviteNewMember(page);
    await inviteMember.inviteNewMemberSidebar();
  });
  
  test("Invite New Member from Settings", async ({ page }) => {
    const inviteMember = new InviteNewMember(page);
    await inviteMember.inviteNewMemberSettings();
  });
  
  test("Invite New Member from Home Page Button", async ({ page }) => {
    const inviteMember = new InviteNewMember(page);
    await inviteMember.inviteNewMemberHomeBtn();
  });