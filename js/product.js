// Product Data (would normally come from API)
const productData = {
    1: {
        id: 1,
        name: 'Classic White Shirt',
        price: 49,
        oldPrice: 79,
        description: 'This classic white shirt is made from premium cotton fabric, ensuring comfort and durability. Perfect for both casual and formal occasions. Features a modern fit with attention to detail in every stitch.',
        images: [
            'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
            'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
            'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
            'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['white', 'blue', 'black'],
        category: 'men'
    }
};

let selectedSize = 'L';
let selectedColor = 'white';
let quantity = 1;
let isInWishlist = false;

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id')) || 1;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProduct(productId);
    setupTabs();
    setupFAQ();
    loadRelatedProducts();
    
    // Update wishlist button state
    updateProductWishlistButton();
});

// Load Product
function loadProduct(id) {
    const product = productData[id] || productData[1];
    
    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('currentPrice').textContent = '$' + product.price;
    if (product.oldPrice) {
        document.getElementById('oldPrice').textContent = '$' + product.oldPrice;
    } else {
        document.getElementById('oldPrice').style.display = 'none';
    }
    document.getElementById('productDescription').textContent = product.description;
    
    // Update wishlist button onclick with correct product data
    const wishlistBtn = document.getElementById('wishlistBtn');
    const productWishlistBtn = document.getElementById('productWishlistBtn');
    if (wishlistBtn) {
        wishlistBtn.setAttribute('onclick', `toggleProductWishlist(${product.id}, '${product.name}', ${product.price}, '${product.images[0]}')`);
    }
    if (productWishlistBtn) {
        productWishlistBtn.setAttribute('onclick', `toggleProductWishlist(${product.id}, '${product.name}', ${product.price}, '${product.images[0]}')`);
    }
    
    // Load images
    if (product.images && product.images.length > 0) {
        document.getElementById('mainImage').src = product.images[0];
        const thumbnails = document.querySelectorAll('.thumbnail');
        product.images.forEach((img, index) => {
            if (thumbnails[index]) {
                thumbnails[index].src = img.replace('600x800', '100x100');
            }
        });
    }
    
    // Load sizes
    const sizeOptions = document.getElementById('sizeOptions');
    if (sizeOptions && product.sizes) {
        sizeOptions.innerHTML = product.sizes.map(size => 
            `<button class="size-btn ${size === selectedSize ? 'active' : ''}" data-size="${size}">${size}</button>`
        ).join('');
        
        sizeOptions.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                sizeOptions.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                selectedSize = this.dataset.size;
            });
        });
    }
    
    // Load colors
    const colorOptions = document.getElementById('colorOptions');
    if (colorOptions && product.colors) {
        const colorMap = {
            white: '#fff',
            blue: '#3498db',
            black: '#000',
            red: '#e74c3c',
            green: '#27ae60'
        };
        
        colorOptions.innerHTML = product.colors.map(color => 
            `<button class="color-btn ${color === selectedColor ? 'active' : ''}" data-color="${color}" style="background-color: ${colorMap[color] || color}; ${color === 'white' ? 'border: 2px solid #ccc;' : ''}"></button>`
        ).join('');
        
        colorOptions.querySelectorAll('.color-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                colorOptions.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                selectedColor = this.dataset.color;
            });
        });
    }
}

// Change Main Image
function changeImage(src) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = src.replace('100x100', '600x800');
    
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.src === src) {
            thumb.classList.add('active');
        }
    });
}

// Quantity Controls
function increaseQty() {
    const qtyInput = document.getElementById('quantity');
    const currentQty = parseInt(qtyInput.value);
    if (currentQty < 10) {
        qtyInput.value = currentQty + 1;
        quantity = qtyInput.value;
    }
}

function decreaseQty() {
    const qtyInput = document.getElementById('quantity');
    const currentQty = parseInt(qtyInput.value);
    if (currentQty > 1) {
        qtyInput.value = currentQty - 1;
        quantity = qtyInput.value;
    }
}

document.getElementById('quantity').addEventListener('change', function() {
    quantity = parseInt(this.value) || 1;
    if (quantity < 1) quantity = 1;
    if (quantity > 10) quantity = 10;
    this.value = quantity;
});

// Add to Cart
function addToCartFromProduct() {
    const product = productData[productId] || productData[1];
    const productToAdd = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor,
        quantity: quantity
    };
    
    addToCart(productToAdd);
    showNotification('Product added to cart!');
}

// Buy Now
function buyNow() {
    addToCartFromProduct();
    setTimeout(() => {
        window.location.href = 'checkout.html';
    }, 500);
}

// Update wishlist button on product page
function updateProductWishlistButton() {
    const wishlistBtn = document.getElementById('wishlistBtn');
    const productWishlistBtn = document.getElementById('productWishlistBtn');
    
    if (wishlistBtn) {
        wishlistBtn.textContent = isInWishlist(productId) ? '♥' : '♡';
        wishlistBtn.classList.toggle('active', isInWishlist(productId));
    }
    
    if (productWishlistBtn) {
        const icon = productWishlistBtn.querySelector('.wishlist-icon');
        if (icon) {
            icon.textContent = isInWishlist(productId) ? '♥' : '♡';
            productWishlistBtn.classList.toggle('active', isInWishlist(productId));
        }
    }
}

// Tabs
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// FAQ Accordion
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(i => i.classList.remove('active'));
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Load Related Products
function loadRelatedProducts() {
    const container = document.getElementById('relatedProducts');
    if (!container) return;
    
    const relatedProducts = [
        { id: 2, name: 'Denim Jacket', price: 89, oldPrice: 120, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
        { id: 8, name: 'Formal Suit', price: 199, oldPrice: 249, image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
        { id: 13, name: 'Jeans', price: 79, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
        { id: 18, name: 'Polo Shirt', price: 45, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' }
    ];
    
    container.innerHTML = relatedProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                <button class="wishlist-btn" onclick="toggleProductWishlist(${product.id}, '${product.name}', ${product.price}, '${product.image}')" title="Add to Wishlist">
                    <span class="wishlist-icon">♡</span>
                </button>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">
                    <span class="price-current">$${product.price}</span>
                    ${product.oldPrice ? `<span class="price-old">$${product.oldPrice}</span>` : ''}
                </div>
                <div class="product-actions">
                    <a href="product.html?id=${product.id}" class="btn btn-primary btn-small">View</a>
                    <button class="btn btn-outline btn-small" onclick="addToCart({id: ${product.id}, name: '${product.name}', price: ${product.price}, image: '${product.image}'})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Update wishlist icons after rendering
    setTimeout(() => {
        container.querySelectorAll('.wishlist-btn').forEach(btn => {
            const onclick = btn.getAttribute('onclick');
            if (onclick) {
                const match = onclick.match(/toggleProductWishlist\((\d+)/);
                if (match) {
                    const productId = parseInt(match[1]);
                    const icon = btn.querySelector('.wishlist-icon');
                    if (icon) {
                        icon.textContent = isInWishlist(productId) ? '♥' : '♡';
                        btn.classList.toggle('active', isInWishlist(productId));
                    }
                }
            }
        });
    }, 100);
}

