// Stine Julius

const productColors = ["cascade-pine-needle-green", "shelter-brown", "tidepool-blue", "oxide-red", "ww-pine-needle-green"];

for (let i = 0; i < productColors.length; i++) {
    const productColor = productColors[i];

    console.log('ForLoop', i, productColor);
    

    const productColorButton = document.getElementById("dot-" + productColor);

    productColorButton.addEventListener("click", () => {
        changeProductPhotos(productColor)
    });
}


function changeProductPhotos(colorName) {
    console.log(colorName);

    // Change Active circle
    /*const colorDots = document.getElementsByClassName(".dot");

    colorDots.forEach(activeDot => {
        colorDots.classList.add("active");
    });*/
    
    
    // if man klikker på element med .dot #dot-cascade-pine-needle-green insert active class onto element


    // Change color name text
    let output = "No color"

    switch (colorName) {
        case "cascade-pine-needle-green":
            output = "Cascade: Pine Needle Green"
            break;

        case "shelter-brown":
            output = "Happy Camper: Shelter Brown"
            break;
    
        case "tidepool-blue":
            output = "Cascade: Tidepool Blue"
            break;
        
        case "oxide-red":
            output = "Cascade: Oxide Red"
            break;
            
        case "ww-pine-needle-green":
            output = "Whole Weave: Pine Needle Green"
            break;

        default:
            output = "No color"
            break;
    }

    document.getElementById("color-picker-regular-text").innerHTML = output;


    // Change product photos (photos is an array, with 4)
    const photos = document.getElementsByClassName("product-photo");

    for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];

        photo.src = "assets/images/" + colorName + "-" + (i + 1) + ".jpg"
    }
    
}
