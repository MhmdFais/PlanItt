import {pageHeader} from './tasksUI';
import './styles.css';

const listItemsFirstSet = document.querySelectorAll('.nav-list-first li');


listItemsFirstSet.forEach(item => {
    item.addEventListener('click', function() {
        const clickedItemText = this.textContent.trim();
        pageHeader(clickedItemText);
    });
});


 