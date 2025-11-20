// Check if user is logged in (in real app, this would check session/token)
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page') || (urlParams.get('register') ? 'register' : null);
    const orders = urlParams.get('orders');
    
    if (isLoggedIn) {
        showDashboard();
        if (orders) {
            showPage('orders');
        } else if (page) {
            showPage(page);
        }
    } else {
        showAuthForms();
        if (page === 'register') {
            switchToRegister();
        }
    }
    
    setupAuthTabs();
    setupAccountNav();
    setupForms();
});

// Show Auth Forms
function showAuthForms() {
    document.getElementById('authForms').style.display = 'block';
    document.getElementById('accountDashboard').style.display = 'none';
}

// Show Dashboard
function showDashboard() {
    document.getElementById('authForms').style.display = 'none';
    document.getElementById('accountDashboard').style.display = 'block';
}

// Auth Tabs
function setupAuthTabs() {
    const tabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            if (this.dataset.form === 'login') {
                loginForm.classList.add('active');
                registerForm.classList.remove('active');
            } else {
                loginForm.classList.remove('active');
                registerForm.classList.add('active');
            }
        });
    });
}

function switchToRegister() {
    const registerTab = document.querySelector('.auth-tab[data-form="register"]');
    if (registerTab) {
        registerTab.click();
    }
}

// Account Navigation
function setupAccountNav() {
    const navLinks = document.querySelectorAll('.account-nav .nav-link[data-page]');
    const pages = document.querySelectorAll('.account-page');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href && !this.dataset.page) return; // Allow normal links
            
            e.preventDefault();
            const targetPage = this.dataset.page;
            
            navLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));
            
            this.classList.add('active');
            if (targetPage) {
                const pageElement = document.getElementById(targetPage + 'Page');
                if (pageElement) {
                    pageElement.classList.add('active');
                }
            }
        });
    });
}

function showPage(pageName) {
    const navLink = document.querySelector(`.nav-link[data-page="${pageName}"]`);
    if (navLink) {
        navLink.click();
    }
}

// Forms
function setupForms() {
    const loginForm = document.getElementById('loginFormSubmit');
    const registerForm = document.getElementById('registerFormSubmit');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulate login
            localStorage.setItem('isLoggedIn', 'true');
            isLoggedIn = true;
            showDashboard();
            showNotification('Login successful!', 'success');
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulate registration
            localStorage.setItem('isLoggedIn', 'true');
            isLoggedIn = true;
            showDashboard();
            showNotification('Registration successful!', 'success');
        });
    }
}

// Logout
function logout() {
    localStorage.setItem('isLoggedIn', 'false');
    isLoggedIn = false;
    showAuthForms();
    showNotification('Logged out successfully', 'success');
}
