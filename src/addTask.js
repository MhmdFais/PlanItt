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
    this.taskDisplay = document.querySelector(".tasks-display");

    this.saveTaskBtn.addEventListener("click", (event) => this.saveTask(event));
    this.cancelTaskBtn.addEventListener("click", (event) =>
      this.closeTaskDialog(event)
    );

    this.render();
  }

  render() {
    this.popUpTaskDialog.showModal();
  }

  closeTaskDialog(event) {
    event.preventDefault();
    this.taskName.value = "";
    this.taskDescription.value = "";
    this.taskDate.value = "";
    this.popUpTaskDialog.close();
  }

  saveTask(event) {
    event.preventDefault();
    if (this.taskName.value.trim() === "") {
      //this.alertLog("Please enter a task name");
    } else {
      this.createTaskCard();
      this.closeTaskDialog(event);
    }
  }

  createTaskCard() {
    console.log("clicked clicked");

    const taskCardContainer = document.createElement("div");
    taskCardContainer.classList.add("task-card-container");

    const rightSide = this.rightSideCard();

    const leftSide = this.leftSideCard();

    taskCardContainer.appendChild(leftSide);
    taskCardContainer.appendChild(rightSide);

    this.taskDisplay.appendChild(taskCardContainer);
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

    taskCardRightSide.appendChild(taskPriorityColorContainer);
    return taskCardRightSide;
  }

  leftSideCard() {
    const taskCardLeftSide = document.createElement("div");
    taskCardLeftSide.classList.add("task-card-left-side");

    const leftUpSide = this.leftUpSide();

    const leftDownSide = this.leftDownSide();

    taskCardLeftSide.appendChild(leftUpSide);
    taskCardLeftSide.appendChild(leftDownSide);

    return taskCardLeftSide;
  }

  leftUpSide() {
    const leftSideTaskHeader = document.createElement("div");
    leftSideTaskHeader.classList.add("left-side-task-header");

    const getTaskName = this.putTaskName();

    const getTaskDate = this.putTaskDate();

    const circularCheckBox = this.circularCheckBox();

    leftSideTaskHeader.appendChild(getTaskName);
    leftSideTaskHeader.appendChild(getTaskDate);
    leftSideTaskHeader.appendChild(circularCheckBox);

    return leftSideTaskHeader;
  }

  putTaskName() {
    const taskNameContainer = document.createElement("div");
    taskNameContainer.classList.add("task-name-container");

    const taskName = document.createElement("h3");
    taskName.classList.add("user-add-task-name");
    taskName.textContent = this.taskName.value;

    taskNameContainer.appendChild(taskName);
    return taskNameContainer;
  }

  putTaskDate() {
    const taskDateContainer = document.createElement("div");
    taskDateContainer.classList.add("task-date-container");

    const taskDate = document.createElement("p");
    taskDate.classList.add("user-add-task-date");
    taskDate.textContent = this.taskDate.value;

    taskDateContainer.appendChild(taskDate);
    return taskDateContainer;
  }

  circularCheckBox() {
    const circularCheckBoxContainer = document.createElement("div");
    circularCheckBoxContainer.classList.add("circular-check-box-container");

    const circularCheckBox = document.createElement("div");
    circularCheckBox.classList.add("circular-check-box");

    circularCheckBoxContainer.appendChild(circularCheckBox);
    return circularCheckBoxContainer;
  }

  leftDownSide() {
    const taskDescriptionContainer = document.createElement("div");
    taskDescriptionContainer.classList.add("task-description-container");

    const getTaskDescription = document.createElement("p");
    getTaskDescription.classList.add("user-add-task-description");
    getTaskDescription.textContent = this.taskDescription.value;

    taskDescriptionContainer.appendChild(getTaskDescription);
    return taskDescriptionContainer;
  }
}
