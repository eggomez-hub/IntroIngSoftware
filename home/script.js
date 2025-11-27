// ===== NAVBAR TOGGLE FOR MOBILE =====
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

const toggleMenu = () => {
    navbarMenu.classList.toggle('navbar__menu--active');
};

if (navbarToggle) {
    navbarToggle.addEventListener('click', toggleMenu);
}

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInside = navbarToggle?.contains(event.target) || navbarMenu?.contains(event.target);
    
    if (!isClickInside && navbarMenu?.classList.contains('navbar__menu--active')) {
        navbarMenu.classList.remove('navbar__menu--active');
    }
});

// ===== ANIMATION ON SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Apply animation to service cards
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===== LOG CONSOLE MESSAGE =====
console.log('%c✨ HOME - Web desarrollada con ES6 y buenas prácticas', 'color: #2563eb; font-size: 14px; font-weight: bold;');
