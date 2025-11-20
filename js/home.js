// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dots .dot');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (index >= totalSlides) currentSlide = 0;
    if (index < 0) currentSlide = totalSlides - 1;
    
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Auto slide
setInterval(nextSlide, 5000);

// Manual controls
const nextBtn = document.querySelector('.hero-next');
const prevBtn = document.querySelector('.hero-prev');

if (nextBtn) nextBtn.addEventListener('click', nextSlide);
if (prevBtn) prevBtn.addEventListener('click', prevSlide);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Testimonials Slider
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
const totalTestimonials = testimonialCards.length;

function showTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    testimonialDots.forEach(dot => dot.classList.remove('active'));
    
    if (index >= totalTestimonials) currentTestimonial = 0;
    if (index < 0) currentTestimonial = totalTestimonials - 1;
    
    testimonialCards[currentTestimonial].classList.add('active');
    if (testimonialDots[currentTestimonial]) {
        testimonialDots[currentTestimonial].classList.add('active');
    }
}

// Auto slide testimonials
setInterval(() => {
    currentTestimonial++;
    showTestimonial(currentTestimonial);
}, 4000);

// Dot navigation for testimonials
testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

// Load Trending Products
const trendingProducts = [
    { id: 1, name: 'Classic White Shirt', price: 49, oldPrice: 79, image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'New' },
    { id: 2, name: 'Denim Jacket', price: 89, oldPrice: 120, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 3, name: 'Summer Dress', price: 59, oldPrice: 89, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Hot' },
    { id: 4, name: 'Sneakers', price: 79, oldPrice: 99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'New' },
    { id: 5, name: 'Leather Bag', price: 129, oldPrice: 159, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'Sale' },
    { id: 6, name: 'Sunglasses', price: 39, oldPrice: 59, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', badge: 'New' }
];

function loadTrendingProducts() {
    const container = document.getElementById('trendingProducts');
    if (!container) return;

    container.innerHTML = trendingProducts.map(product => `
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

// Products Slider Navigation
function initProductsSlider() {
    const slider = document.querySelector('.products-slider');
    const grid = document.querySelector('.products-grid');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (!slider || !grid) return;

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            grid.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            grid.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
}

// Update wishlist icons on page load
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadTrendingProducts();
    initProductsSlider();
    updateWishlistIcons();
});

