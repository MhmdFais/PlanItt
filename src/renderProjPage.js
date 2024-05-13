export class ProjectPage {
  constructor(pageTitleText) {
    this.pageTitleText = pageTitleText;
    this.render();
  }

  createPageTitle() {
    const pageTitle = document.createElement("div");
    pageTitle.classList.add("list-heading");
    pageTitle.textContent = this.pageTitleText;
    return pageTitle;
  }

  createAddButton() {
    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("add-task-btn");
    addTaskButton.textContent = "Add Task";
    return addTaskButton;
  }

  createButtonContainers() {
    const projectPageButtonContainers = document.createElement("div");
    projectPageButtonContainers.classList.add("add-task-button");
    const addButton = this.createAddButton();
    projectPageButtonContainers.appendChild(addButton);
    return projectPageButtonContainers;
  }

  createHeader() {
    const projectPageHeader = document.createElement("div");
    projectPageHeader.classList.add("list-heading-and-button");
    const pageTitle = this.createPageTitle();
    const buttonContainers = this.createButtonContainers();
    projectPageHeader.appendChild(pageTitle);
    projectPageHeader.appendChild(buttonContainers);
    return projectPageHeader;
  }

  render() {
    const taskMainPage = document.querySelector(".main-list-container");
    taskMainPage.innerHTML = "";
    const header = this.createHeader();
    taskMainPage.appendChild(header);
  }
}
