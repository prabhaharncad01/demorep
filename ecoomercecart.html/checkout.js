document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.getElementById("cart-items");
    let total = 0;
  
    // Retrieve cart items from local storage and render them
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("product_")) {
        const productId = parseInt(key.split("_")[1]);
        const quantity = parseInt(localStorage.getItem(key));
        const product = products.find(p => p.id === productId);
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
      }
    }
  
    // Display total
    document.getElementById("total").textContent = `$${total.toFixed(2)}`;
  });
  