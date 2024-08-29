// Stine Julius

alert ("This website is made for educational purposes");

/**
 * GLOBAL VARIABLES
 */
const productColors = ["cascade-pine-needle-green", "shelter-brown", "tidepool-blue", "oxide-red", "ww-pine-needle-green"];
let selectedColor = productColors[0];


/**
 * SETUP OF EVENT LISTENERS
 */
for (let i = 0; i < productColors.length; i++) {
    const productColor = productColors[i];
    const productColorButton = document.getElementById("dot-" + productColor);

    productColorButton.addEventListener("click", () => {
        changeSelectedProductColor(productColor)
    });
}

/**
 * CHANGE SELECTED PRODUCT COLOR
 * 
 * @param {string} colorName 
 */
function changeSelectedProductColor(colorName) {
    // User is onlyable to click the color one time, to stop unnessesary work
    if (selectedColor === colorName) {
        return; // Stops from here
    }

    // The selected color is the one we are working with now
    selectedColor = colorName;

    // Call all the related functions
    changeProductActiveDot(colorName);
    changeProductColorNameText(colorName);
    changeProductPhotos(colorName);
}


/**
 * CHANGE PRODUCT ACTIVE DOTS
 * 
 * @param {string} colorName 
 */
function changeProductActiveDot(colorName) {
    // Remove the active class from all dots
    // (colorDots is an array with 5)
    const colorDots = document.getElementsByClassName("dot");
    for (let i = 0; i < colorDots.length; i++) {
        const activeDot = colorDots[i];

        activeDot.classList.remove("active");
    }

    // Add the active class to the clicked color dot
    const clickedColorDot = document.getElementById("dot-" + colorName);
    clickedColorDot.classList.add("active");
}


/**
 * CHANGE PRODUCT COLOR NAME TEXT
 * 
 * @param {string} colorName 
 */
function changeProductColorNameText(colorName) {
    let output;
    switch (colorName) {
        case "cascade-pine-needle-green":
            output = "Cascade: Pine Needle Green";
            break;

        case "shelter-brown":
            output = "Happy Camper: Shelter Brown";
            break;

        case "tidepool-blue":
            output = "Cascade: Tidepool Blue";
            break;

        case "oxide-red":
            output = "Cascade: Oxide Red";
            break;

        case "ww-pine-needle-green":
            output = "Whole Weave: Pine Needle Green";
            break;

        default:
            output = "No color";
            break;
    }

    document.getElementById("color-picker-regular-text").innerHTML = output;
}


/**
 * CHANGE PRODUCT PHOTOS
 * 
 * @param {string} colorName 
 */
function changeProductPhotos(colorName) {
    //(photos is an array, with 4)
    const photos = document.getElementsByClassName("product-photo");

    for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];

        photo.src = "assets/images/" + colorName + "-" + (i + 1) + ".jpg";
    }
}

