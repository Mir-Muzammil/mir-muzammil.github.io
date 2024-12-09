let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    // Clear existing cart items
    cartItemsContainer.innerHTML = '';
    
    // Calculate total
    let total = 0;
    
    // Render cart items
    cart.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Brand: ${item.brand.toUpperCase()}</p>
                <p>Size: ${item.size}</p>
                <p class="cart-item-price">${item.price} PKR</p>
            </div>
            <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
        `;
        
        cartItemsContainer.appendChild(cartItemElement);
        total += item.price;
    });
    
    // Update total
    cartTotalElement.textContent = `${total} PKR`;
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Initial cart update on page load
document.addEventListener('DOMContentLoaded', updateCart);


// Modify the finalizeCart function in collection2.js to add to cart
function finalizeCart(productId) {
    // Find the selected size
    const selectedSizeElement = document.querySelector('.details-info .size-option.selected');
    
    // Check if a size is selected
    if (!selectedSizeElement) {
        alert('Please select a size before adding to cart.');
        return;
    }
    
    // Find the product details
    const product = products.find(p => p.id === productId);
    const selectedSize = selectedSizeElement.textContent;
    
    // Create cart item object with the exact structure from cart-page.js
    const cartItem = {
        ...product,  // Spread all existing product properties
        selectedSize: selectedSize  // Add the selected size
    };
    
    // Save cart item to localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Close the overlay
    closeOverlay();
    
    // Redirect to cart page
    window.location.href = './cart-page.html';
}

// Add checkout functionality
function proceedToCheckout() {
    // Check if cart is empty
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to proceed.');
        return;
    }
    
    // Redirect to billing page
    window.location.href = 'billing.html';
}

// Add event listener to checkout button
document.addEventListener('DOMContentLoaded', () => {
    const proceedCheckoutBtn = document.getElementById('proceed-checkout-btn');
    proceedCheckoutBtn.addEventListener('click', proceedToCheckout);
    
    // Initial cart update on page load
    updateCart();
});
// Initial cart update on page load
document.addEventListener('DOMContentLoaded', updateCart);



// Add these functions to your cart-page.js

function showCheckoutPopup() {
    const checkoutPopup = document.getElementById('checkoutPopup');
    checkoutPopup.style.display = 'flex';
}

function hideCheckoutPopup() {
    const checkoutPopup = document.getElementById('checkoutPopup');
    checkoutPopup.style.display = 'none';
}

function handleCheckoutSubmit(event) {
    event.preventDefault();
    
    // Hide the form
    document.getElementById('checkoutForm').style.display = 'none';
    
    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    
    // Clear the cart
    cart = [];
    localStorage.removeItem('cart');
    updateCart();
    
    // Hide popup after 3 seconds
    setTimeout(() => {
        hideCheckoutPopup();
        
        // Reset form and success message for next use
        document.getElementById('checkoutForm').style.display = 'flex';
        successMessage.style.display = 'none';
        
        // Redirect to home page
        window.location.href = 'home.html';
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const proceedCheckoutBtn = document.querySelector('.cart-summary');
    const closePopupBtn = document.querySelector('.close-popup');
    const checkoutForm = document.getElementById('checkoutForm');

    proceedCheckoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Check if cart is empty
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items to proceed.');
            return;
        }
        
        showCheckoutPopup();
    });

    closePopupBtn.addEventListener('click', hideCheckoutPopup);
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
});