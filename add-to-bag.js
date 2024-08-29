document.addEventListener("DOMContentLoaded", function () {

    let cartCountElements = document.querySelectorAll("#cart-count"); 
    let addToBagButton = document.getElementById("add-to-bag-button"); 
    let sizeButtons = document.querySelectorAll(".size-button");
    let selectedSize = "M";

    let sizes = ["XS", "S", "M", "L", "XL"];


    function updateCartCount() {
        let cartCount = parseInt(cartCountElements[0].textContent) || 0;
        cartCount++;
        cartCountElements.forEach(element => {
            element.textContent = cartCount;
        });
    }

    function showPopup() {
        let popup = document.getElementById("popup");
        popup.style.display = "block";

        document.getElementById("popup-product-name").textContent = "Women's Fjord Flannel Shirt";
        document.getElementById("popup-product-color").textContent = "Cascade: Pine Needle Green";
        document.getElementById("popup-product-price").textContent = "€ 130";
        document.getElementById("popup-product-image").src = "assets/images/pine-needle-green-1.jpg";

        document.getElementById("popup-product-size").textContent = `Size: ${selectedSize}`;

        document.getElementById("closePopup").addEventListener("click", function () {
            popup.style.display = "none";
        });
    }

    sizeButtons.forEach(button => {
        button.addEventListener("click", function () {
            sizeButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            selectedSize = this.textContent.trim();
        });
    });

    addToBagButton.addEventListener("click", function () {
        updateCartCount();
        showPopup();
    });

    window.onclick = function(event) {
        let popup = document.getElementById("popup");
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});
