import { TaskCard } from "./createTaskCard";
import { getNotDoneTasksFromLocal } from "./storage";

export class RunningPage {
  constructor(pageTitle) {
    this.pageTitle = pageTitle;
    this.render();
  }

  createPageTitle() {
    const pageTitle = document.createElement("div");
    pageTitle.classList.add("list-heading");
    pageTitle.textContent = this.pageTitle;
    return pageTitle;
  }

  createHeader() {
    const projectPageHeader = document.createElement("div");
    projectPageHeader.classList.add("list-heading-and-button");
    const pageTitle = this.createPageTitle();
    projectPageHeader.appendChild(pageTitle);
    return projectPageHeader;
  }

  createRunningCard() {
    let tasks = getNotDoneTasksFromLocal();
    console.log(tasks);
    tasks.forEach((task) => {
      //console.log(task);
      const taskCard = new TaskCard(task, this.pageTitle);
    });
  }

  render() {
    const taskMainPage = document.querySelector(".main-list-container");
    taskMainPage.innerHTML = "";
    const header = this.createHeader();
    const bodyPart = this.createRunningCard();
    taskMainPage.appendChild(header);
  }
}
