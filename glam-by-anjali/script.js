// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});



// Gallery hover effect (already handled in CSS, but can add more interactivity here)
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.style.setProperty('--i', index);
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.08) rotate(1deg)';
    });
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
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

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
    navToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });
}
