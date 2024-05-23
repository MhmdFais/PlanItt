import { getDoneTasksFromLocal } from "./storage";
import { TaskCard } from "./createTaskCard";

export class CompletePage {
  constructor(pageTitle) {
    this.pageTitle = pageTitle;
    this.render();
  }

  createCompletePageTitle() {
    const pageTitle = document.createElement("div");
    pageTitle.classList.add("list-heading");
    pageTitle.textContent = this.pageTitle;
    return pageTitle;
  }

  createCompleteHeader() {
    const projectPageHeader = document.createElement("div");
    projectPageHeader.classList.add("list-heading-and-button");
    const pageTitle = this.createCompletePageTitle();
    projectPageHeader.appendChild(pageTitle);
    return projectPageHeader;
  }

  createTasks() {
    let tasks = getDoneTasksFromLocal();
    console.log(tasks);
    tasks.forEach((task) => {
      //console.log(task);
      const taskCard = new TaskCard(task, this.pageTitle);
    });
  }

  render() {
    const taskMainPage = document.querySelector(".main-list-container");
    taskMainPage.innerHTML = "";
    const header = this.createCompleteHeader();
    const body = this.createTasks();
    taskMainPage.appendChild(body);
    taskMainPage.appendChild(header);
  }
}
