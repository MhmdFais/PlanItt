import { ProjectPage } from "./renderProjPage";
import "./style.css";
import { TaskPage } from "./renderTasksPage";
import { AddProject } from "./addProject";
import { AddTask } from "./addTask";

let addProjBtn = document.querySelector(".add-project-btn");
let projectItems = document.querySelectorAll(".nav-item");
let navBarItems = document.querySelectorAll(".nav-item-list");

addProjBtn.addEventListener("click", () => {
  console.log("Button clicked");
  addProjBtn.style.boxShadow = "none";
  setTimeout(() => {
    addProjBtn.style.boxShadow = " 4px 4px 5px 0px rgb(173, 186, 198)";
  }, 200);
  const addProject = new AddProject();
});

projectItems.forEach((projectItem) => {
  projectItem.addEventListener("click", function () {
    const projectName = projectItem.textContent;
    console.log(projectName);
    const projectPage = new ProjectPage(projectName);
  });
});

navBarItems.forEach((navBarItem) => {
  navBarItem.addEventListener("click", function () {
    const navItemName = navBarItem.textContent;
    console.log(navItemName);
    const taskPage = new TaskPage(navItemName);
  });
});
