import {PageHeader} from './tasksUI';
import './styles.css';
import {ProjectPage} from './projectsUI';
import {AddProject} from './addProject';

const listItemsFirstSet = document.querySelectorAll('.nav-list-first li');

const listItemsProject = document.querySelectorAll('.nav-list-projects li');

const addProjectBtn = document.querySelectorAll('.add-project-button li');


listItemsFirstSet.forEach(item => {
    item.addEventListener('click', function() {
        const clickedItemText = this.textContent.trim();
        const taskpage = new PageHeader(clickedItemText);
    });
});

listItemsProject.forEach( item => {
    item.addEventListener('click', function(){
        const clickedItemText = this.textContent.trim();
        const projectPage = new ProjectPage(clickedItemText);
    });
});

addProjectBtn.forEach(item => {
    item.addEventListener('click', function(){
        const addNewProject = new AddProject();
    });
});


 