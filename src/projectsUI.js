export class ProjectPage {
    constructor(pageTitleText) {
        this.pageTitleText = pageTitleText;
        this.render();
    }

    createPageTitle() {
        const pageTitle = document.createElement('div');
        pageTitle.classList.add('selected-page-title');
        pageTitle.textContent = this.pageTitleText;
        return pageTitle;
    }

    createDeleteButton() {
        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.classList.add('delete-project-button');
        deleteProjectButton.textContent = "Delete Project";
        return deleteProjectButton;
    }

    createAddButton() {
        const addProjectButton = document.createElement('button');
        addProjectButton.classList.add('add-project-button-js');
        addProjectButton.textContent = "+ Add Task";
        return addProjectButton;
    }

    createButtonContainers() {
        const projectPageButtonContainers = document.createElement('div');
        projectPageButtonContainers.classList.add('project-btn-container');

        const deleteButton = this.createDeleteButton();
        const addButton = this.createAddButton();

        projectPageButtonContainers.appendChild(deleteButton);
        projectPageButtonContainers.appendChild(addButton);

        return projectPageButtonContainers;
    }

    createHeader() {
        const projectPageHeader = document.createElement('div');
        projectPageHeader.classList.add('project-page-header');

        const pageTitle = this.createPageTitle();
        const buttonContainers = this.createButtonContainers();

        projectPageHeader.appendChild(pageTitle);
        projectPageHeader.appendChild(buttonContainers);

        return projectPageHeader;
    }

    render() {
        const taskMainPage = document.querySelector('.to-do-lists-container');
        taskMainPage.innerHTML = '';

        const header = this.createHeader();
        taskMainPage.appendChild(header);
    }
}
