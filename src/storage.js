// // ARRAY LISTS FOR BOTH PROJECTS AND THE TASKS IN EACH PROJECT

// // Array list for projects
// let projects = [];

// // Array list for tasks
// let tasks = [];

// // Function to add a project to the projects array
// export function addProject(projectName) {
//   projects.push(projectName);
// }

// // Function to remove a project from the projects array
// function removeProject(projectName) {
//   projects = projects.filter((project) => project !== projectName);
// }

// // Function to add a task to the tasks array
// export function addTask(
//   taskName,
//   taskDescription,
//   taskDueDate,
//   taskPriority,
//   taskProject,
//   taskStatus
// ) {
//   tasks.push({
//     name: taskName,
//     description: taskDescription,
//     dueDate: taskDueDate,
//     priority: taskPriority,
//     project: taskProject,
//     status: taskStatus,
//   });
// }

// // Function to remove a task from the tasks array
// function removeTask(taskName) {
//   tasks = tasks.filter((task) => task.name !== taskName);
// }

// // Function to get all the projects
// function getProjects() {
//   return projects;
// }

// // Function to get all the tasks
// export function getTasks() {
//   return tasks;
// }

// // Function to get all the tasks in a project
// export function getTasksInProject(projectName) {
//   return tasks.filter((task) => task.project === projectName);
// }

// // Function to get all the tasks that flaged as done
// export function getDoneTasks() {
//   return tasks.filter((task) => task.status === "done");
// }

// // Function to get all the tasks that flaged as not done
// export function getNotDoneTasks() {
//   return tasks.filter((task) => task.status === "not done");
// }

// // Function to change the task status
// export function changeTaskStatus(taskName) {
//   const task = tasks.find((task) => task.name === taskName);
//   task.status = task.status === "done" ? "not done" : "done";
// }

//// ************************************************************** ///////////

/// STORE TASKS AND PROJECTS IN LOCAL STORAGE

// Initialize the projects and tasks arrays from local storage
//let projectsLocal = JSON.parse(localStorage.getItem("projects")) || [];
let tasksLocal = JSON.parse(localStorage.getItem("tasks")) || [];
let projectLocal = JSON.parse(localStorage.getItem("projects")) || [];

// Function to store tasks and projects in local storage
export function storeTasksAndProjects() {
  localStorage.setItem("tasks", JSON.stringify(tasksLocal));
  localStorage.setItem("projects", JSON.stringify(projectLocal));
}

// Function to get tasks and projects from local storage
export function getTasksAndProjectsFromLocal() {
  tasks = tasksLocal;
  projects = projectLocal;
}

// Function to add a project to the projects array
export function addProjectToLocal(projectName) {
  projectLocal.push(projectName);
  storeTasksAndProjects();
}

export function getProjectsFromLocal() {
  return projectLocal;
}

// delete all the projects
export function deleteAllProjects() {
  projectLocal = [];
  storeTasksAndProjects();
}

// Function to add a task to the tasks array
export function addTaskToLocal(
  taskName,
  taskDescription,
  taskDueDate,
  taskPriority,
  taskProject,
  taskStatus
) {
  tasksLocal.push({
    name: taskName,
    description: taskDescription,
    dueDate: taskDueDate,
    priority: taskPriority,
    project: taskProject,
    status: taskStatus,
  });
  storeTasksAndProjects();
}

// Function to remove a task from the tasks array
function removeTaskFromLocal(taskName) {
  tasksLocal = tasksLocal.filter((task) => task.name !== taskName);
  storeTasksAndProjects();
}

// Function to get all the tasks
export function getTasksFromLocal() {
  return tasksLocal;
}

// Function to get all the tasks in a project
export function getTasksInProjectFromLocal(projectName) {
  return tasksLocal.filter((task) => task.project === projectName);
}

// Function to get all the tasks that flaged as done
export function getDoneTasksFromLocal() {
  return tasksLocal.filter((task) => task.status === "done");
}

// Function to get all the tasks that flaged as not done
export function getNotDoneTasksFromLocal() {
  return tasksLocal.filter((task) => task.status === "not done");
}

// Function to change the task status
export function changeTaskStatusInLocal(taskName) {
  const task = tasksLocal.find((task) => task.name === taskName);
  task.status = task.status === "done" ? "not done" : "done";
  storeTasksAndProjects();
}
