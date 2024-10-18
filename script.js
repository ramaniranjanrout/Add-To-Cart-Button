function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}
function addToCart() {
    const cartMessage = document.getElementById('cart-message');
    cartMessage.innerHTML = 'Product added to cart!';
    cartMessage.style.color = '#28a745';
} 
