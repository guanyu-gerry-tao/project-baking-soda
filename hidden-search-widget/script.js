const search_widget = document.getElementById('search_widget');
const search_icon = document.getElementById('search_icon');
const search_input = document.getElementById('search_input');

let is_search_open = false; // Variable to track if the search input is open

search_widget.addEventListener("click", () => { 
    if (!is_search_open) {
        // If the search input is closed, open it
        // notice the "!" operator, which checks if is_search_open is false
        console.log('Opening search input');
        search_input.classList.add('open_input'); // Add class to open input
        search_input.classList.remove('close_input'); // Remove class to close input
        search_input.focus(); // Focus on the input field
        search_widget.style.width = '500px'; // Set width to expanded size
        is_search_open = true; // Update the state to open
    }
})

document.addEventListener('click', (event) => {
    // If the click is outside the search widget, close the search input
    if (!search_widget.contains(event.target) && is_search_open) { // Check if the click is outside the search widget
        // search_widget.contains(event.target) checks if the clicked element is inside the search widget
        // event.target is the element that was clicked
        // when search_wdget does not contain the clicked element, it means the click is outside the search widget
        if (search_input.value.trim() !== '') {
            console.log('Search input has value, not closing');
            // If the search input has value, do not close it
            return;
        }
        console.log('Click outside search widget, closing input');
        is_search_open = false;
        search_input.classList.remove('open_input');
        search_input.classList.add('close_input');
        search_widget.style.width = '70px'; // Reset width to default
    }
}
);