/*Stine Liedicke*/
/* Switch between two texts*/

/* De tekster der skal arbejdes med defineres her */
let text1 = "Shipping Information"
let text2 = "Free Delivery On Orders Over €100"
/* Referere til de to elementer i HTML-siden jeg har lavet */
let textElement = document.getElementById("shippingText");
let fadeContainer = document.getElementById("fade-container")
let showText1 = true;
function SwitchTextAndIMG() {
   fadeContainer.style.opacity = 0;
   setTimeout(() => {
/*Skift teksten */
    textElement.textContent = showText1 ? text2 : text1;
    showText1 = !showText1;
    fadeContainer.style.opacity = 1;
   }, 1000);
}
/*Den skifter tekst og SVG hver 4.sekund */
setInterval(SwitchTextAndIMG, 4000);




/*Drop-down shipping menu */
/*Event tilføjet på shippingknap, så der sker noget ved et klik */
document.getElementById('shippingBtn').addEventListener('click', function() {
    /*Viser hvilket indhold der skal skjules, når menuen ikke er foldet ud */
    let dropdown = document.getElementById('shipping-content');
    let icon = document.getElementById('svg-icon');

    dropdown.classList.toggle('show');
});

document.getElementById('closeBtn').addEventListener('click', function() {
    let dropdown = document.getElementById('shipping-content')
    let icon = document.getElementById('svg-icon');

    dropdown.classList.remove ('show');
});

/*Betyder at du kan klikke enten udenfor vinduet eller på knappen for at lukke */
window.onclick = function(event) {
    if (!event.target.closest('#fade-container')) {
        let dropdown = document.getElementById('shipping-content');
        let icon = document.getElementById('closeBtn');
    
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}
