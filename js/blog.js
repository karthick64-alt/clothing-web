// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: '10 Spring Fashion Trends You Need to Know',
        excerpt: 'Discover the hottest fashion trends for spring 2024. From vibrant colors to sustainable fashion, here are the must-have styles this season.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        category: 'trends',
        date: 'March 15, 2024',
        author: 'Sarah Johnson'
    },
    {
        id: 2,
        title: 'How to Style a White Shirt: 5 Different Ways',
        excerpt: 'A white shirt is a wardrobe essential. Learn how to style it for different occasions, from casual to formal, with these simple tips.',
        image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        category: 'styling',
        date: 'March 10, 2024',
        author: 'Michael Chen'
    },
    {
        id: 3,
        title: 'Wardrobe Essentials Every Woman Should Own',
        excerpt: 'Building a timeless wardrobe starts with the basics. Here are the essential pieces every woman should have in her closet.',
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        category: 'tips',
        date: 'March 5, 2024',
        author: 'Emily Davis'
    },
    {
        id: 4,
        title: 'Sustainable Fashion: A Complete Guide',
        excerpt: 'Learn how to make more sustainable fashion choices and reduce your environmental impact while still looking great.',
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        category: 'tips',
        date: 'February 28, 2024',
        author: 'David Wilson'
    },
    {
        id: 5,
        title: 'Building a Capsule Wardrobe on a Budget',
        excerpt: 'You don\'t need to break the bank to have a stylish, versatile wardrobe. Here\'s how to build a capsule wardrobe affordably.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        category: 'tips',
        date: 'February 20, 2024',
        author: 'Sarah Johnson'
    },
    {
        id: 6,
        title: 'How to Care for Your Denim: Washing and Maintenance Tips',
        excerpt: 'Proper care can extend the life of your denim significantly. Learn the best practices for washing and maintaining your jeans.',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        category: 'care',
        date: 'February 15, 2024',
        author: 'Michael Chen'
    }
];

let filteredPosts = [...blogPosts];
let currentPage = 1;
const postsPerPage = 5;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadPosts();
    setupCategoryFilters();
    setupSearch();
    setupPagination();
});

// Load Posts
function loadPosts() {
    const container = document.getElementById('blogPosts');
    if (!container) return;

    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const postsToShow = filteredPosts.slice(start, end);

    container.innerHTML = postsToShow.map(post => `
        <article class="blog-post">
            <img src="${post.image}" alt="${post.title}" class="post-image">
            <div class="post-meta">
                <span class="post-category">${getCategoryName(post.category)}</span>
                <span class="post-date">${post.date}</span>
                <span>By ${post.author}</span>
            </div>
            <h2 class="post-title"><a href="blog-detail.html?id=${post.id}">${post.title}</a></h2>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-footer">
                <a href="blog-detail.html?id=${post.id}" class="read-more">Read More →</a>
            </div>
        </article>
    `).join('');
}

// Category Filters
function setupCategoryFilters() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            if (category === 'all') {
                filteredPosts = [...blogPosts];
            } else {
                filteredPosts = blogPosts.filter(post => post.category === category);
            }
            
            currentPage = 1;
            loadPosts();
            updatePagination();
        });
    });
}

// Search
function setupSearch() {
    const searchInput = document.getElementById('blogSearch');
    const searchBtn = document.querySelector('.blog-search button');
    
    function performSearch() {
        const query = searchInput.value.toLowerCase();
        if (query) {
            filteredPosts = blogPosts.filter(post => 
                post.title.toLowerCase().includes(query) ||
                post.excerpt.toLowerCase().includes(query)
            );
        } else {
            filteredPosts = [...blogPosts];
        }
        currentPage = 1;
        loadPosts();
        updatePagination();
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Pagination
function setupPagination() {
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                loadPosts();
                updatePagination();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                loadPosts();
                updatePagination();
            }
        });
    }
}

function updatePagination() {
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
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
                loadPosts();
                updatePagination();
            });
            pageNumbers.appendChild(pageNum);
        }
    }

    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages;
}

// Helper Functions
function getCategoryName(category) {
    const names = {
        'tips': 'Fashion Tips',
        'styling': 'Styling Ideas',
        'trends': 'Seasonal Trends',
        'care': 'Product Care'
    };
    return names[category] || category;
}

