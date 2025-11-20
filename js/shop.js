// Sample Products Data
const allProducts = [
    // Men's Wear
    { id: 1, name: 'Classic White Shirt', price: 49, oldPrice: 79, category: 'men', size: ['S', 'M', 'L', 'XL'], color: 'white', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'New' },
    { id: 2, name: 'Denim Jacket', price: 89, oldPrice: 120, category: 'men', size: ['M', 'L', 'XL'], color: 'blue', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 8, name: 'Formal Suit', price: 199, oldPrice: 249, category: 'men', size: ['M', 'L', 'XL'], color: 'black', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 13, name: 'Jeans', price: 79, category: 'men', size: ['30', '32', '34', '36'], color: 'blue', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 18, name: 'Polo Shirt', price: 45, category: 'men', size: ['S', 'M', 'L', 'XL'], color: 'blue', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 22, name: 'Hoodie', price: 65, oldPrice: 85, category: 'men', size: ['M', 'L', 'XL'], color: 'black', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 25, name: 'Casual T-Shirt', price: 35, oldPrice: 45, category: 'men', size: ['S', 'M', 'L', 'XL'], color: 'white', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 26, name: 'Leather Jacket', price: 249, oldPrice: 299, category: 'men', size: ['M', 'L', 'XL'], color: 'black', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Hot' },
    { id: 27, name: 'Chinos Pants', price: 69, category: 'men', size: ['30', '32', '34', '36'], color: 'beige', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 28, name: 'Sweater', price: 89, oldPrice: 119, category: 'men', size: ['S', 'M', 'L', 'XL'], color: 'gray', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 29, name: 'Cargo Shorts', price: 55, category: 'men', size: ['30', '32', '34', '36'], color: 'green', image: 'https://images.unsplash.com/photo-1506629905607-5c0c0e0b0b5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 30, name: 'Vest', price: 45, category: 'men', size: ['S', 'M', 'L', 'XL'], color: 'black', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'New' },
    
    // Women's Wear
    { id: 3, name: 'Summer Dress', price: 59, oldPrice: 89, category: 'women', size: ['XS', 'S', 'M', 'L'], color: 'red', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Hot' },
    { id: 9, name: 'Floral Dress', price: 69, category: 'women', size: ['S', 'M', 'L'], color: 'red', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 11, name: 'Winter Coat', price: 149, oldPrice: 199, category: 'women', size: ['S', 'M', 'L', 'XL'], color: 'black', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Hot' },
    { id: 16, name: 'Blazer', price: 119, category: 'women', size: ['S', 'M', 'L'], color: 'black', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 19, name: 'Skirt', price: 55, category: 'women', size: ['S', 'M', 'L'], color: 'black', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 24, name: 'Maxi Dress', price: 75, category: 'women', size: ['S', 'M', 'L'], color: 'red', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 31, name: 'Crop Top', price: 39, category: 'women', size: ['XS', 'S', 'M', 'L'], color: 'pink', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'New' },
    { id: 32, name: 'Leather Jacket', price: 199, oldPrice: 249, category: 'women', size: ['S', 'M', 'L'], color: 'black', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 33, name: 'Jumpsuit', price: 89, category: 'women', size: ['XS', 'S', 'M', 'L'], color: 'black', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 34, name: 'Cardigan', price: 79, oldPrice: 99, category: 'women', size: ['S', 'M', 'L', 'XL'], color: 'beige', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 35, name: 'Palazzo Pants', price: 65, category: 'women', size: ['S', 'M', 'L'], color: 'white', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 36, name: 'Off-Shoulder Top', price: 49, category: 'women', size: ['XS', 'S', 'M', 'L'], color: 'blue', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Hot' },
    
    // Kids Wear
    { id: 7, name: 'Kids T-Shirt', price: 25, category: 'kids', size: ['XS', 'S', 'M'], color: 'blue', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 14, name: 'Kids Dress', price: 35, category: 'kids', size: ['XS', 'S', 'M'], color: 'red', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 20, name: 'Kids Shoes', price: 45, category: 'kids', size: ['1', '2', '3', '4'], color: 'blue', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 37, name: 'Kids Jeans', price: 40, category: 'kids', size: ['XS', 'S', 'M'], color: 'blue', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 38, name: 'Kids Hoodie', price: 45, oldPrice: 55, category: 'kids', size: ['XS', 'S', 'M'], color: 'red', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 39, name: 'Kids Shorts', price: 28, category: 'kids', size: ['XS', 'S', 'M'], color: 'blue', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 40, name: 'Kids Sweater', price: 42, category: 'kids', size: ['XS', 'S', 'M'], color: 'pink', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'New' },
    { id: 41, name: 'Kids Jacket', price: 55, oldPrice: 70, category: 'kids', size: ['XS', 'S', 'M'], color: 'black', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 42, name: 'Kids Leggings', price: 22, category: 'kids', size: ['XS', 'S', 'M'], color: 'black', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    
    // Footwear
    { id: 4, name: 'Sneakers', price: 79, oldPrice: 99, category: 'footwear', size: ['7', '8', '9', '10'], color: 'black', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'New' },
    { id: 10, name: 'Running Shoes', price: 99, oldPrice: 129, category: 'footwear', size: ['7', '8', '9', '10', '11'], color: 'white', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 15, name: 'High Heels', price: 89, oldPrice: 119, category: 'footwear', size: ['6', '7', '8', '9'], color: 'black', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 43, name: 'Loafers', price: 109, oldPrice: 139, category: 'footwear', size: ['7', '8', '9', '10', '11'], color: 'brown', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 44, name: 'Boots', price: 149, category: 'footwear', size: ['7', '8', '9', '10'], color: 'black', image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'New' },
    { id: 45, name: 'Sandals', price: 49, category: 'footwear', size: ['6', '7', '8', '9', '10'], color: 'brown', image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 46, name: 'Flip Flops', price: 25, category: 'footwear', size: ['6', '7', '8', '9', '10', '11'], color: 'blue', image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 47, name: 'Oxford Shoes', price: 129, oldPrice: 159, category: 'footwear', size: ['7', '8', '9', '10', '11'], color: 'black', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 48, name: 'Canvas Shoes', price: 59, category: 'footwear', size: ['6', '7', '8', '9', '10'], color: 'white', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'New' },
    
    // Accessories
    { id: 5, name: 'Leather Bag', price: 129, oldPrice: 159, category: 'accessories', size: ['One Size'], color: 'black', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 6, name: 'Sunglasses', price: 39, oldPrice: 59, category: 'accessories', size: ['One Size'], color: 'black', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'New' },
    { id: 12, name: 'Baseball Cap', price: 29, category: 'accessories', size: ['One Size'], color: 'black', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 17, name: 'Watch', price: 159, oldPrice: 199, category: 'accessories', size: ['One Size'], color: 'black', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 21, name: 'Tie', price: 35, category: 'accessories', size: ['One Size'], color: 'red', image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 23, name: 'Scarf', price: 25, category: 'accessories', size: ['One Size'], color: 'red', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 49, name: 'Belt', price: 45, category: 'accessories', size: ['S', 'M', 'L'], color: 'brown', image: 'https://images.unsplash.com/photo-1624378515193-0cc5e5c5f5e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 50, name: 'Wallet', price: 59, oldPrice: 79, category: 'accessories', size: ['One Size'], color: 'black', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 51, name: 'Backpack', price: 89, category: 'accessories', size: ['One Size'], color: 'black', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'New' },
    { id: 52, name: 'Necklace', price: 79, category: 'accessories', size: ['One Size'], color: 'silver', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { id: 53, name: 'Earrings', price: 35, category: 'accessories', size: ['One Size'], color: 'gold', image: 'https://images.unsplash.com/photo-1603561596112-0a13231b9c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Hot' },
    { id: 54, name: 'Bracelet', price: 42, category: 'accessories', size: ['One Size'], color: 'silver', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' }
];

let filteredProducts = [...allProducts];
let currentPage = 1;
const productsPerPage = 12;

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const categoryParam = urlParams.get('category');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set active category from URL
    if (categoryParam) {
        const categoryLinks = document.querySelectorAll('.filter-link');
        categoryLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.category === categoryParam) {
                link.classList.add('active');
            }
        });
        filterByCategory(categoryParam);
    }

    loadProducts();
    setupFilters();
    setupSorting();
    setupViewToggle();
    setupPagination();
    
    // Update wishlist icons after products load
    setTimeout(updateWishlistIcons, 100);
});

// Update wishlist icons
function updateWishlistIcons() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
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
}

// Load Products
function loadProducts() {
    const container = document.getElementById('productsContainer');
    if (!container) return;

    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const productsToShow = filteredProducts.slice(start, end);

    container.innerHTML = productsToShow.map(product => `
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

    // Update product count
    const countElement = document.getElementById('productCount');
    if (countElement) {
        countElement.textContent = filteredProducts.length;
    }
}

// Filter Functions
function setupFilters() {
    const priceRange = document.getElementById('priceRange');
    const maxPriceDisplay = document.getElementById('maxPrice');
    const applyBtn = document.getElementById('applyFilters');
    const clearBtn = document.getElementById('clearFilters');

    if (priceRange && maxPriceDisplay) {
        priceRange.addEventListener('input', function() {
            maxPriceDisplay.textContent = '$' + this.value;
        });
    }

    if (applyBtn) {
        applyBtn.addEventListener('click', applyFilters);
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', clearFilters);
    }

    // Category filter links
    const categoryLinks = document.querySelectorAll('.filter-link');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            filterByCategory(category);
        });
    });
}

function filterByCategory(category) {
    if (category === 'all') {
        filteredProducts = [...allProducts];
    } else {
        filteredProducts = allProducts.filter(p => p.category === category);
    }
    currentPage = 1;
    loadProducts();
    updatePagination();
}

function applyFilters() {
    const maxPrice = parseInt(document.getElementById('priceRange').value);
    const selectedSizes = Array.from(document.querySelectorAll('.size-option input:checked')).map(cb => cb.value);
    const selectedColors = Array.from(document.querySelectorAll('.color-option.active')).map(co => co.dataset.color);

    filteredProducts = allProducts.filter(product => {
        const priceMatch = product.price <= maxPrice;
        const sizeMatch = selectedSizes.length === 0 || product.size.some(s => selectedSizes.includes(s));
        const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
        
        return priceMatch && sizeMatch && colorMatch;
    });

    currentPage = 1;
    loadProducts();
    updatePagination();
}

function clearFilters() {
    document.getElementById('priceRange').value = 500;
    document.getElementById('maxPrice').textContent = '$500';
    document.querySelectorAll('.size-option input').forEach(cb => cb.checked = false);
    document.querySelectorAll('.color-option').forEach(co => co.classList.remove('active'));
    filteredProducts = [...allProducts];
    currentPage = 1;
    loadProducts();
    updatePagination();
}

// Color filter toggle
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('color-option')) {
        e.target.classList.toggle('active');
    }
});

// Sorting
function setupSorting() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortProducts(this.value);
        });
    }
}

function sortProducts(sortBy) {
    switch(sortBy) {
        case 'popularity':
            // Keep original order (could be based on sales data)
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    currentPage = 1;
    loadProducts();
    updatePagination();
}

// View Toggle
function setupViewToggle() {
    const viewBtns = document.querySelectorAll('.view-btn');
    const container = document.getElementById('productsContainer');

    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            viewBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            if (this.dataset.view === 'list') {
                container.classList.add('list-view');
            } else {
                container.classList.remove('list-view');
            }
        });
    });
}

// Pagination
function setupPagination() {
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                loadProducts();
                updatePagination();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                loadProducts();
                updatePagination();
            }
        });
    }
}

function updatePagination() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const pageNumbers = document.querySelector('.page-numbers');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');

    if (pageNumbers) {
        pageNumbers.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const pageNum = document.createElement('span');
            pageNum.className = 'page-number' + (i === currentPage ? ' active' : '');
            pageNum.textContent = i;
            pageNum.addEventListener('click', () => {
                currentPage = i;
                loadProducts();
                updatePagination();
            });
            pageNumbers.appendChild(pageNum);
        }
    }

    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages;
}

