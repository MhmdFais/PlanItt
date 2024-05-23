import { changeTaskStatusInLocal } from "./storage";

export class TaskCard {
  constructor(task, pageTitle) {
    this.task = task;
    this.pageTitle = pageTitle;
    this.render();
  }

  render() {
    this.createCardDisplay();
  }

  createCardDisplay() {
    const tasksDisplay = document.createElement("div");
    tasksDisplay.classList.add("task-display");

    const tasksCard = this.createCard();

    tasksDisplay.appendChild(tasksCard);

    //return taskDisplay;
  }

  createCard() {
    const containers = this.tasksCardContainer();

    const rightSided = this.rightSidedCard();

    const leftSided = this.leftSidedCard();

    containers.appendChild(rightSided);
    containers.appendChild(leftSided);

    return containers;
  }

  tasksCardContainer() {
    const tasksCardContainer = document.createElement("div");
    tasksCardContainer.classList.add("task-card-container");

    return tasksCardContainer;
  }

  rightSidedCard() {
    const tasksCardRightSide = document.createElement("div");
    tasksCardRightSide.classList.add("task-card-right-side");

    const tasksPriorityColorContainer = document.createElement("div");
    tasksPriorityColorContainer.classList.add("task-priority-color-container");

    const selectedPriority = this.task.priority;

    if (selectedPriority === "high") {
      tasksPriorityColorContainer.style.backgroundColor = "#fecaca";
    } else if (selectedPriority === "medium") {
      tasksPriorityColorContainer.style.backgroundColor = "#fde68a";
    } else {
      tasksPriorityColorContainer.style.backgroundColor = "#99f6e4";
    }

    tasksCardRightSide.appendChild(tasksPriorityColorContainer);
    return tasksCardRightSide;
  }

  leftSidedCard() {
    const tasksCardLeftSide = document.createElement("div");
    tasksCardLeftSide.classList.add("task-card-left-side");

    const leftUpSided = this.leftUpSided();

    const leftDownSided = this.leftDownSided();

    tasksCardLeftSide.appendChild(leftUpSided);
    tasksCardLeftSide.appendChild(leftDownSided);

    return tasksCardLeftSide;
  }

  leftUpSided() {
    const leftSidedTaskHeader = document.createElement("div");
    leftSidedTaskHeader.classList.add("left-side-task-header");

    const getTasksName = this.putTasksName();

    const getTasksDate = this.putTasksDate();

    const circularCheckBoxs = this.circularCheckBoxx();

    leftSidedTaskHeader.appendChild(getTasksName);
    leftSidedTaskHeader.appendChild(getTasksDate);
    leftSidedTaskHeader.appendChild(circularCheckBoxs);

    return leftSidedTaskHeader;
  }

  putTasksName() {
    const tasksNameContainer = document.createElement("div");
    tasksNameContainer.classList.add("task-name-container");

    const tasksName = document.createElement("h3");
    tasksName.classList.add("user-add-task-name");
    tasksName.textContent = this.taskName.value;

    tasksNameContainer.appendChild(tasksName);
    return tasksNameContainer;
  }

  putTasksDate() {
    const tasksDateContainer = document.createElement("div");
    tasksDateContainer.classList.add("task-date-container");

    const tasksDate = document.createElement("p");
    tasksDate.classList.add("user-add-task-date");
    tasksDate.textContent = this.taskDate.value;

    tasksDateContainer.appendChild(tasksDate);
    return tasksDateContainer;
  }

  circularCheckBoxx() {
    const circularCheckBoxContainers = document.createElement("div");
    circularCheckBoxContainers.classList.add("circular-check-box-container");

    const circCheckBox = document.createElement("input");
    circCheckBox.setAttribute("type", "checkbox");
    circCheckBox.classList.add("circular-check-box");
    circCheckBox.addEventListener("change", () => {
      changeTaskStatusInLocal(this.task.name);
    });

    circularCheckBoxContainers.appendChild(circCheckBox);
    return circularCheckBoxContainers;
  }

  leftDownSided() {
    const tasksDescriptionContainer = document.createElement("div");
    tasksDescriptionContainer.classList.add("task-description-container");

    const getTasksDescription = document.createElement("p");
    getTasksDescription.classList.add("user-add-task-description");
    getTasksDescription.textContent = this.taskDescription.value;

    tasksDescriptionContainer.appendChild(getTasksDescription);
    return tasksDescriptionContainer;
  }
}
