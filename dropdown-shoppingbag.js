/* minibag dropdown view in javascript */

document.addEventListener('DOMContentLoaded', () => {
    const shoppingbagButton = document.getElementById('shoppingbagButton');
    const shoppingbagMenu = document.getElementById('shoppingbagMenu');

    // Toggle dropdown menu when button is clicked
    shoppingbagButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event from bubbling up
        shoppingbagMenu.classList.toggle('show'); // Toggle the 'show' class
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!shoppingbagButton.contains(event.target) && !shoppingbagMenu.contains(event.target)) {
            shoppingbagMenu.classList.remove('show');
        }
    });
});

shoppingbagButton.addEventListener('click', (event) => {
    console.log('Button clicked!'); // Check if the click event is registered
    event.stopPropagation();
    shoppingbagMenu.classList.toggle('show');
});