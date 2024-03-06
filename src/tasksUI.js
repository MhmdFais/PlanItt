export function pageHeader(pageTitleText){
    const pageTitle = document.createElement('div');
    pageTitle.classList.add('selected-page-title');
    pageTitle.textContent = pageTitleText;

    const addProjectButton = document.createElement('button');
    addProjectButton.classList.add('add-task-button');
    addProjectButton.textContent = "+ Add Task";

    const taskPageHeader = document.createElement('div');
    taskPageHeader.classList.add('task-page-header');

    const taskMainPage = document.querySelector('.to-do-lists-container');

    taskMainPage.innerHTML = '';

    taskPageHeader.appendChild(pageTitle);
    taskPageHeader.appendChild(addProjectButton);
    taskMainPage.appendChild(taskPageHeader);
}

