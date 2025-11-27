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

// Apply animation to team cards and content sections
const animatedElements = document.querySelectorAll('.team-card, .about-content__text, .about-content__values');

animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ===== LOG CONSOLE MESSAGE =====
console.log('%c✨ ABOUT US - Web desarrollada con ES6 y buenas prácticas', 'color: #2563eb; font-size: 14px; font-weight: bold;');
