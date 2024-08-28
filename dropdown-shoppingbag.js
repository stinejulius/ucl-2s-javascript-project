/* minibag dropdown view in javascript */

document.addEventListener('DOMContentLoaded', () => {
    const bagButton = document.getElementById('bagButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // Toggle dropdown on button click
    bagButton.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Hide dropdown if clicked outside of it
    document.addEventListener('click', (event) => {
        if (!bagButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});