const listItems = document.querySelectorAll('.nav-list-ul li');

listItems.forEach(item => {
    item.addEventListener('click', function() {
        // Get the text content of the clicked item
        const clickedItemText = this.textContent.trim();
        
        // Example functionality: Display an alert with the clicked item text
        alert('Clicked: ' + clickedItemText);
    });
});