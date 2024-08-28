document.addEventListener("DOMContentLoaded", function () {

    let cartCountElements = document.querySelectorAll("#cart-count, #cart-number");
    let addToBagButton = document.getElementById("add-to-bag-button");

    let cartCount = 0;

    function updateCartCount() {
        cartCount++;
        cartCountElements.forEach(element => {
            element.textContent = cartCount;
        });
    }

    addToBagButton.addEventListener("click", function () {
        updateCartCount();
        showPopup();
    });

    function showPopup() {
        let popup = document.getElementById("popup");
        popup.style.display = "block";

        document.getElementById("popup-product-name").textContent = "Women's Fjord Flannel Shirt";
        document.getElementById("popup-product-color").textContent = "Cascade: Pine Needle Green";
        document.getElementById("popup-product-price").textContent = "€ 130";
        document.getElementById("popup-product-image").src = "assets/images/cascade-pine-needle-green-1.jpg";

        document.getElementById("closePopup").addEventListener("click", function () {
            popup.style.display = "none";
        });
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }

});
