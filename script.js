let cart = [];

const cartCounterElement = document.getElementById("cart-count");
const cartItemsElement = document.getElementById("cart-items");

document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener('click', () => {
        console.log("Clicked");
    });
});
