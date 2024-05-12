import { ProjectPage } from "./renderProjPage";
import "./style.css";

let addProjBtn = document.querySelector(".add-project-btn");
let projectItems = document.querySelectorAll(".nav-item");

addProjBtn.addEventListener("click", () => {
  console.log("Button clicked");
  addProjBtn.style.boxShadow = "none";
  setTimeout(() => {
    addProjBtn.style.boxShadow = " 4px 4px 5px 0px rgb(173, 186, 198)";
  }, 200);
});

projectItems.forEach((projectItem) => {
  projectItem.addEventListener("click", function () {
    const projectName = projectItem.textContent;
    console.log(projectName);
    const projectPage = new ProjectPage(projectName);
  });
});
