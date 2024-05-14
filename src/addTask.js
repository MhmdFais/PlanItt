export class AddTask {
  constructor(pageName) {
    this.pageName = pageName;

    this.popUpTaskDialog = document.querySelector("#add-task-pop-up");
    this.taskName = document.querySelector("#task-name");
    this.taskDescription = document.querySelector("#task-desc");
    this.taskDate = document.querySelector("#task-date");
    this.saveTaskBtn = document.querySelector("#pop-up-save-task-btn");
    this.cancelTaskBtn = document.querySelector("#pop-up-delete-task-btn");

    this.saveTaskBtn.addEventListener("click", (event) => this.saveTask(event));
    this.cancelTaskBtn.addEventListener("click", (event) =>
      this.closeTaskDialog(event)
    );

    this.render();
  }

  render() {
    this.popUpTaskDialog.showModal();
  }
}
