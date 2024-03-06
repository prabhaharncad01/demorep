document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
    // Function to handle adding a product to cart
    function addToCart(event) {
      event.preventDefault();
      const productId = event.target.getAttribute("data-id");
      const quantity = parseInt(localStorage.getItem(`product_${productId}`)) || 0;
      localStorage.setItem(`product_${productId}`, quantity + 1);
      alert("Product added to cart!");
    }
  
    // Attach click event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener("click", addToCart);
    });
  });
  