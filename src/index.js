let btn = document.querySelector(".add-project-button");

let addBtn = document.querySelector(".add-task-btn");

btn.addEventListener("click", () => {
  console.log("Button clicked");
});

addBtn.addEventListener("click", () => {
  console.log("Add task button clicked");
  addBtn.style.boxShadow = "none";
  setTimeout(() => {
    addBtn.style.boxShadow = " 4px 4px 5px 0px #4ea28e";
  }, 200);
});
