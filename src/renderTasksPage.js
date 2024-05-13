export class TaskPage {
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

  render() {
    const taskMainPage = document.querySelector(".main-list-container");
    taskMainPage.innerHTML = "";
    const header = this.createHeader();
    taskMainPage.appendChild(header);
  }
}
