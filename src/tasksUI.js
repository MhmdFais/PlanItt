export class PageHeader {
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

    createAddButton() {
        const addTaskButton = document.createElement('button');
        addTaskButton.classList.add('add-task-button');
        addTaskButton.textContent = "+ Add Task";
        return addTaskButton;
    }

    createHeader() {
        const taskPageHeader = document.createElement('div');
        taskPageHeader.classList.add('task-page-header');

        const pageTitle = this.createPageTitle();
        const addButton = this.createAddButton();

        taskPageHeader.appendChild(pageTitle);
        taskPageHeader.appendChild(addButton);

        return taskPageHeader;
    }

    render() {
        const taskMainPage = document.querySelector('.to-do-lists-container');
        taskMainPage.innerHTML = '';

        const header = this.createHeader();
        taskMainPage.appendChild(header);
    }
}
