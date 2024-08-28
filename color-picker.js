// Stine Julius

const productColors = ["cascade-pine-needle-green", "shelter-brown", "tidepool-blue", "oxide-red", "ww-pine-needle-green"]

for (let i = 0; i < productColors.length; i++) {
    const productColor = productColors[i];

    console.log('ForLoop', i, productColor);
    

    const productColorButton = document.getElementById("dot-" + productColor)

    productColorButton.addEventListener("click", () => {
        changeProductPhotos(productColor)
    });
}


function changeProductPhotos(colorName) {
    console.log(colorName);

    // Change Active circle



    // Change color name text



    // Change product photos (photos is an array, with 4)
    const photos = document.getElementsByClassName("product-photo");

    for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];

        photo.src = "assets/images/" + colorName + "-" + (i + 1) + ".jpg"
    }
    
}
