document.addEventListener("DOMContentLoaded", function() {
    // Sample product data
    const products = [
      { id: 1, name: "Running Shoes", price: 50 },
      { id: 2, name: "Training Shoes", price: 60 }
      // Add more products if needed
    ];
  
    // Function to render cart items
    function renderCartItems() {
      const cartItemsContainer = document.getElementById("cart-items");
      let total = 0;
      cartItemsContainer.innerHTML = ""; // Clear previous items
  
      products.forEach(product => {
        const quantity = localStorage.getItem(`product_${product.id}`) || 0;
        const itemTotal = product.price * quantity;
        total += itemTotal;
  
        const row = document.createElement("tr");
        row.innerHTML = `
          <td><img src="shoe${product.id}.jpg" alt="${product.name}" style="max-width: 100px;"></td>
          <td>${product.name}</td>
          <td>$${product.price}</td>
          <td>${quantity}</td>
          <td>$${itemTotal.toFixed(2)}</td>
        `;
        cartItemsContainer.appendChild(row);
      });
  
      // Update total
      document.getElementById("total").textContent = `$${total.toFixed(2)}`;
    }
  
    renderCartItems();
  });
  