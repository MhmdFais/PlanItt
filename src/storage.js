// ARRAY LISTS FOR BOTH PROJECTS AND THE TASKS IN EACH PROJECT

// Array list for projects
let projects = [];

// Array list for tasks
let tasks = [];

// Function to add a project to the projects array
export function addProject(projectName) {
  projects.push(projectName);
}

// Function to remove a project from the projects array
function removeProject(projectName) {
  projects = projects.filter((project) => project !== projectName);
}

// Function to add a task to the tasks array
export function addTask(
  taskName,
  taskDescription,
  taskDueDate,
  taskPriority,
  taskProject,
  taskStatus
) {
  tasks.push({
    name: taskName,
    description: taskDescription,
    dueDate: taskDueDate,
    priority: taskPriority,
    project: taskProject,
    status: taskStatus,
  });
}

// Function to remove a task from the tasks array
function removeTask(taskName) {
  tasks = tasks.filter((task) => task.name !== taskName);
}

// Function to get all the projects
function getProjects() {
  return projects;
}

// Function to get all the tasks
export function getTasks() {
  return tasks;
}

// Function to get all the tasks in a project
export function getTasksInProject(projectName) {
  return tasks.filter((task) => task.project === projectName);
}

// Function to get all the tasks that flaged as done
export function getDoneTasks() {
  return tasks.filter((task) => task.status === "done");
}

// Function to get all the tasks that flaged as not done
export function getNotDoneTasks() {
  return tasks.filter((task) => task.status === "not done");
}
