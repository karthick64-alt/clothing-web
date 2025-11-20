// Checkout Toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const guestForm = document.getElementById('guestForm');
    const loginForm = document.getElementById('loginForm');
    const sameAsShipping = document.getElementById('sameAsShipping');
    const billingForm = document.getElementById('billingForm');
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    const cardDetails = document.getElementById('cardDetails');
    
    // Toggle between guest and login
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            if (this.dataset.type === 'guest') {
                guestForm.classList.add('active');
                loginForm.classList.remove('active');
            } else {
                guestForm.classList.remove('active');
                loginForm.classList.add('active');
            }
        });
    });
    
    // Same as shipping address
    if (sameAsShipping) {
        sameAsShipping.addEventListener('change', function() {
            if (this.checked) {
                billingForm.style.display = 'none';
            } else {
                billingForm.style.display = 'block';
            }
        });
    }
    
    // Payment method toggle
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.value === 'card') {
                cardDetails.style.display = 'block';
            } else {
                cardDetails.style.display = 'none';
            }
        });
    });
    
    loadOrderSummary();
});

// Load Order Summary
function loadOrderSummary() {
    const orderItems = document.getElementById('orderItems');
    
    if (!cart || cart.length === 0) {
        if (orderItems) {
            orderItems.innerHTML = '<p>Your cart is empty. <a href="shop.html">Continue Shopping</a></p>';
        }
        return;
    }
    
    if (orderItems) {
        orderItems.innerHTML = cart.map(item => `
            <div class="order-item">
                <img src="${item.image}" alt="${item.name}" class="order-item-image">
                <div class="order-item-info">
                    <h4 class="order-item-title">${item.name}</h4>
                    <div class="order-item-details">Size: ${item.size || 'N/A'} | Qty: ${item.quantity}</div>
                    <div class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
            </div>
        `).join('');
    }
    
    updateOrderTotals();
}

// Update Order Totals
function updateOrderTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    const subtotalEl = document.getElementById('orderSubtotal');
    const shippingEl = document.getElementById('orderShipping');
    const taxEl = document.getElementById('orderTax');
    const totalEl = document.getElementById('orderTotal');
    
    if (subtotalEl) subtotalEl.textContent = '$' + subtotal.toFixed(2);
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Free' : '$' + shipping.toFixed(2);
    if (taxEl) taxEl.textContent = '$' + tax.toFixed(2);
    if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
}

// Place Order
function placeOrder() {
    if (!cart || cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    // Simulate order placement
    showNotification('Order placed successfully! Thank you for your purchase.', 'success');
    
    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Redirect to order confirmation (would be a real page in production)
    setTimeout(() => {
        window.location.href = 'account.html?orders';
    }, 2000);
}

