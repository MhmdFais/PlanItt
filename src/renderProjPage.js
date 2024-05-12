let mainScreenHeader = document.querySelector(".list-heading-and-button");
export function renderProjectPage(projectName) {
  let addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("add-task-btn");
  mainScreenHeader.appendChild(addTaskBtn);
}
