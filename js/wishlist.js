// Load Wishlist
function loadWishlist() {
    const container = document.getElementById('wishlistProducts');
    const emptyWishlist = document.getElementById('emptyWishlist');
    
    if (!wishlist || wishlist.length === 0) {
        if (emptyWishlist) emptyWishlist.style.display = 'block';
        return;
    }
    
    if (emptyWishlist) emptyWishlist.style.display = 'none';
    
    if (container) {
        container.innerHTML = wishlist.map(item => `
            <div class="product-card">
                <div class="product-image">
                    <img src="${item.image}" alt="${item.name}">
                    <button class="remove-wishlist" onclick="removeFromWishlist(${item.id})" style="position: absolute; top: 10px; right: 10px; background: white; border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 1.5rem;">×</button>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${item.name}</h3>
                    <div class="product-price">
                        <span class="price-current">$${item.price}</span>
                    </div>
                    <div class="product-actions">
                        <a href="product.html?id=${item.id}" class="btn btn-primary btn-small">View</a>
                        <button class="btn btn-outline btn-small" onclick="addToCart({id: ${item.id}, name: '${item.name}', price: ${item.price}, image: '${item.image}'})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadWishlist();
});

