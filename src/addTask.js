export class AddTask {
  constructor(pageName) {
    this.pageName = pageName;

    this.popUpTaskDialog = document.querySelector("#add-task-pop-up");
    this.taskName = document.querySelector("#task-name");
    this.taskDescription = document.querySelector("#task-desc");
    this.taskDate = document.querySelector("#task-date");
    this.saveTaskBtn = document.querySelector("#pop-up-save-task-btn");
    this.cancelTaskBtn = document.querySelector("#pop-up-delete-task-btn");
    this.taskPriority = document.querySelector("#task-priority");

    this.saveTaskBtn.addEventListener("click", (event) => this.saveTask(event));
    this.cancelTaskBtn.addEventListener("click", (event) =>
      this.closeTaskDialog(event)
    );

    this.render();
  }

  render() {
    this.popUpTaskDialog.showModal();
  }

  saveTask(event) {
    event.preventDefault();
    if (this.taskName.value.trim() === "") {
      //this.alertLog("Please enter a task name");
    } else {
      this.createTaskCard();
    }
  }

  createTaskCard() {
    const taskDisplay = document.querySelector(".tasks-display");

    const taskCardContainer = document.createElement("div");
    taskCardContainer.classList.add("task-card-container");

    const rightSide = this.rightSideCard();

    const taskCardLeftSide = document.createElement("div");
    taskCardLeftSide.classList.add("task-card-left-side");
  }

  rightSideCard() {
    const taskCardRightSide = document.createElement("div");
    taskCardRightSide.classList.add("task-card-right-side");

    const taskPriorityColorContainer = document.createElement("div");
    taskPriorityColorContainer.classList.add("task-priority-color-container");

    const selectedPriority = this.taskPriority.value;

    if (selectedPriority === "high") {
      taskPriorityColorContainer.style.backgroundColor = "#f43f5e";
    } else if (selectedPriority === "medium") {
      taskPriorityColorContainer.style.backgroundColor = "#f59e0b";
    } else {
      taskPriorityColorContainer.style.backgroundColor = "#10b981";
    }
  }
}
