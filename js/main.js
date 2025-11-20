// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section, .product-card, .category-card, .deal-card').forEach(el => {
        observer.observe(el);
    });

    // Cart Count Update
    updateCartCount();
});

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id && item.size === product.size && item.color === product.color);
    
    if (existingItem) {
        existingItem.quantity += product.quantity || 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: product.size,
            color: product.color,
            quantity: product.quantity || 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Product added to cart!');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    if (typeof loadCart === 'function') {
        loadCart();
    }
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Wishlist Management
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function addToWishlist(product) {
    const exists = wishlist.find(item => item.id === product.id);
    if (!exists) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showNotification('Added to wishlist!');
        return true;
    } else {
        removeFromWishlist(product.id);
        showNotification('Removed from wishlist!');
        return false;
    }
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function isInWishlist(productId) {
    return wishlist.some(item => item.id === productId);
}

// Toggle Product Wishlist (for product cards)
function toggleProductWishlist(id, name, price, image) {
    const product = {
        id: id,
        name: name,
        price: price,
        image: image
    };
    
    const wasAdded = addToWishlist(product);
    
    // Update the wishlist icon in the clicked button
    const btn = event.target.closest('.wishlist-btn, .btn-icon');
    if (btn) {
        const icon = btn.querySelector('.wishlist-icon');
        if (icon) {
            icon.textContent = wasAdded ? '♥' : '♡';
            btn.classList.toggle('active', wasAdded);
        } else {
            // For btn-icon (product detail page)
            btn.textContent = wasAdded ? '♥' : '♡';
            btn.classList.toggle('active', wasAdded);
        }
    }
    
    // Update all wishlist icons on the page with same product ID
    document.querySelectorAll('.wishlist-btn, .btn-icon').forEach(button => {
        const onclick = button.getAttribute('onclick');
        if (onclick) {
            const match = onclick.match(/toggleProductWishlist\((\d+)/);
            if (match && parseInt(match[1]) === id) {
                const icon = button.querySelector('.wishlist-icon');
                if (icon) {
                    icon.textContent = wasAdded ? '♥' : '♡';
                    button.classList.toggle('active', wasAdded);
                } else {
                    button.textContent = wasAdded ? '♥' : '♡';
                    button.classList.toggle('active', wasAdded);
                }
            }
        }
    });
    
    // Update product wishlist button if on product page
    if (typeof updateProductWishlistButton === 'function') {
        updateProductWishlistButton();
    }
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Newsletter Form Handler
const newsletterForms = document.querySelectorAll('.newsletter-form, .footer-newsletter');
newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        if (email) {
            showNotification('Thank you for subscribing!');
            this.querySelector('input[type="email"]').value = '';
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
