export class AddProject {
  constructor() {
    this.dialog = document.querySelector("#project-dialog");
    this.projectNameInput = document.querySelector("#proj-name");
    this.saveButton = document.querySelector("#input-close-save");
    this.closeButton = document.querySelector("#input-close-cancel");

    this.saveButton.addEventListener("click", this.saveProject.bind(this));
    this.closeButton.addEventListener("click", this.closeDialog.bind(this));

    this.render();
  }

  render() {
    this.dialog.showModal();
  }

  saveProject(event) {
    event.preventDefault();
    if (this.projectNameInput.value.trim() === "") {
      this.alertLog("Please enter a project name");
    } else {
      this.addToProjects();
    }
  }

  closeDialog(event) {
    event.preventDefault();
    this.projectNameInput.value = "";
    this.dialog.close();
  }

  alertLog(message) {
    console.log(message);
  }

  addToProjects() {
    if (this.projectNameInput.value.trim() === "") {
      console.log("No name");
    } else {
      console.log("Project saved:", this.projectNameInput.value);
      this.unorderedList = document.querySelector(".nav-list-projects");
      this.listElement = document.createElement("li");
      this.listElement.appendChild(
        document.createTextNode(this.projectNameInput.value)
      );
      this.listElement.classList.add(this.projectNameInput.value);
      this.unorderedList.appendChild(this.listElement);
      this.projectNameInput.value = "";
      this.dialog.close();
    }
  }
}
