import { addProjectToLocal } from "./storage";
import { ProjectPage } from "./renderProjPage";
import { getProjectsFromLocal } from "./storage";

export class AddProject {
  constructor() {
    this.popUpDialog = document.querySelector("#add-project-pop-up");
    this.projectName = document.querySelector("#project-name");
    this.saveBtn = document.querySelector("#pop-up-save");
    this.cancelBtn = document.querySelector("#pop-up-delete");

    this.saveBtn.addEventListener("click", (event) => this.saveProject(event));
    this.cancelBtn.addEventListener("click", (event) =>
      this.closeDialog(event)
    );

    this.render();
  }

  render() {
    this.popUpDialog.showModal();
  }

  closeDialog(event) {
    event.preventDefault();
    this.projectName.value = "";
    this.popUpDialog.close();
  }

  saveProject(event) {
    event.preventDefault();
    if (this.projectName.value.trim() === "") {
      this.alertLog("Please enter a project name");
    } else {
      //this.addToProjects();
      this.saveProjectToLocal();
      this.getAllProjects();
    }
  }

  alertLog(message) {
    //alert(message);
    console.log(message);
  }

  getAllProjects() {
    let projects = getProjectsFromLocal();
    console.log(projects);
    this.projectName.value = "";
    this.popUpDialog.close();
    projects.forEach((project) => {
      this.addToProjects(project);
    });
  }

  addToProjects(projectNameEntered) {
    this.projectUnorderedList = document.querySelector(
      ".second-set-container-ul"
    );
    this.listElement = document.createElement("li");
    this.listElement.appendChild(document.createTextNode(projectNameEntered));
    this.listElement.classList.add("nav-item");
    this.projectUnorderedList.appendChild(this.listElement);
    this.getProjectUI();
  }

  saveProjectToLocal() {
    addProjectToLocal(this.projectName.value);
  }

  getProjectUI() {
    this.projectItems = document.querySelectorAll(".nav-item");
    this.projectItems.forEach((projectItem) => {
      projectItem.addEventListener("click", function () {
        const projectName = projectItem.textContent;
        const projectPage = new ProjectPage(projectName);
      });
    });
  }
}
