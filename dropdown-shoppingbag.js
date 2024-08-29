/* minibag dropdown view in javascript */

document.addEventListener('DOMContentLoaded', () => {
    const shoppingbagButton = document.getElementById('shoppingbag-button');
    const shoppingbagMenu = document.getElementById('shoppingbag-menu');

    // Toggle dropdown menu when button is clicked
    shoppingbagButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event from bubbling up
        shoppingbagMenu.classList.toggle('show'); // Toggle the 'show' class

        console.log('Shoppingbag button clicked!');

        shoppingbagMenu.classList.toggle('show');

        console.log('Show class toggled:', shoppingbagMenu.classList.contains('show'));
    });

    
    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!shoppingbagButton.contains(event.target) && !shoppingbagMenu.contains(event.target)) {
            shoppingbagMenu.classList.remove('show');
        }
    });
});