/* minibag dropdown view in javascript */

document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // Toggle dropdown menu when button is clicked
    dropdownButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event from bubbling up
        dropdownMenu.classList.toggle('show'); // Toggle the 'show' class
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});