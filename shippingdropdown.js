/*Stine Liedicke*/

/* Switch between two texts*/


/* De tekster der skal arbejdes med defineres her */
let text1 = "Shipping Information"
let text2 = "Free Delivery On Orders Over €100"

/* Referere til de to elementer i HTML-siden jeg har lavet */
let textElement = document.getElementById("ShippingText");
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