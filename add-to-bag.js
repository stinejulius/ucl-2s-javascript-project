document.addEventListener('DOMContentLoaded', function() {
    // Get the popup element
    let popup = document.getElementById('popup');
    
    // Get the button that opens the popup
    let addToBagBtn = document.getElementById('add-to-bag-button');
    
    // Get the <span> element that closes the popup
    let closePopup = document.getElementById('closePopup');
    
    // Get elements for displaying product info
    let popupProductImage = document.getElementById('popup-product-image');
    let popupProductName = document.getElementById('popup-product-name');
    let popupProductPrice = document.getElementById('popup-product-price');
    let popupProductColor = document.getElementById('popup-product-color');
    
    // Sample product data (you can dynamically generate this)
    let product = {
        name: "Women's Fjord Flannel Shirt",
        price: '€ 130',
        color: "Color: Cascade, Pine Needle Green - Size: M",
        imageSrc: 'assets/images/pine-needle-green-1.jpg' // Update path as needed
    };
    
    // When the user clicks the button, open the popup
    addToBagBtn.onclick = function() {
        // Set product information
        popupProductName.textContent = product.name;
        popupProductPrice.textContent = product.price;
        popupProductColor.textContent = product.color;
        popupProductImage.src = product.imageSrc;

        // Update cart item count
        itemCount++;
        cartCount.textContent = itemCount;

        popup.style.display = 'block';
    }

        // Get the cart count element
        let cartCount = document.getElementById('cart-count');
    
        // Initialize cart item count
        let itemCount = 0;
    
    // When the user clicks on <span> (x), close the popup
    closePopup.onclick = function() {
        popup.style.display = 'none';
    }
    
    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});
