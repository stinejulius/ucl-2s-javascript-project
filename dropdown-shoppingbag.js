/* minibag dropdown view in javascript */

// Get the shoppingbag buttons
const shoppingbagButtonMobile = document.getElementById(
    "shoppingbag-button-mobile"
);
const shoppingbagButtonDesktop = document.getElementById(
    "shoppingbag-button-desktop"
);

// Get the shoppingbag menus
const shoppingbagMenuMobile = document.getElementById(
    "shoppingbag-menu-mobile"
);
const shoppingbagMenuDesktop = document.getElementById(
    "shoppingbag-menu-desktop"
);

// Toggle dropdown menu when button is clicked
shoppingbagButtonMobile.addEventListener("click", onClickShoppingBagButton);
shoppingbagButtonDesktop.addEventListener("click", onClickShoppingBagButton);

// Function to toggle dropdown menu
function onClickShoppingBagButton(event) {
    event.stopPropagation(); // Stop event bubbling

    shoppingbagMenuMobile.classList.toggle("show");
    shoppingbagMenuDesktop.classList.toggle("show");
}

// Setup event listener to close dropdown menu when clicked outside
document.addEventListener("click", function (event) {
    // If the clicked element is not the shoppingbag button or the shoppingbag menu or any of its children
    if (
        !shoppingbagButtonMobile.contains(event.target) &&
        !shoppingbagButtonDesktop.contains(event.target) &&
        !shoppingbagMenuMobile.contains(event.target) &&
        !shoppingbagMenuDesktop.contains(event.target)
    ) {
        shoppingbagMenuMobile.classList.remove("show");
        shoppingbagMenuDesktop.classList.remove("show");
    }
});