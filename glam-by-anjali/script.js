// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Close mobile menu when link is clicked
        const navUl = document.querySelector('nav ul');
        if (navUl && navUl.classList.contains('show')) {
            navUl.classList.remove('show');
            const navToggle = document.querySelector('.nav-toggle');
            if (navToggle) {
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
    navToggle.addEventListener('click', function() {
        const navUl = document.querySelector('nav ul');
        const isExpanded = navUl.classList.toggle('show');
        navToggle.setAttribute('aria-expanded', isExpanded);
    });
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const navUl = document.querySelector('nav ul');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (navUl && navUl.classList.contains('show') && 
        !nav.contains(event.target) && 
        !navToggle.contains(event.target)) {
        navUl.classList.remove('show');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});

// Gallery item index setup
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.style.setProperty('--i', index);
});

// Feature cards stagger animation setup
document.querySelectorAll('.feature').forEach((feature, index) => {
    feature.style.setProperty('--i', index);
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe elements for animations
document.querySelectorAll('.feature, .gallery-item').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// WhatsApp button click animation
document.querySelectorAll('.whatsapp-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.style.transform = 'translateY(-1px) scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Handle window resize - close mobile menu on larger screens
window.addEventListener('resize', function() {
    if (window.innerWidth >= 992) {
        const navUl = document.querySelector('nav ul');
        const navToggle = document.querySelector('.nav-toggle');
        if (navUl && navUl.classList.contains('show')) {
            navUl.classList.remove('show');
            if (navToggle) {
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }
    }
});
