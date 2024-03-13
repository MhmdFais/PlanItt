import {PageHeader} from './tasksUI';
import './styles.css';
import {ProjectPage} from './projectsUI';

const listItemsFirstSet = document.querySelectorAll('.nav-list-first li');

const listItemsProject = document.querySelectorAll('.nav-list-projects li');


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


 