console.log(
  '%c✨ TESTIMONIALS - Web desarrollada con ES6 y buenas prácticas',
  'color: #2563eb; font-size: 14px; font-weight: bold;'
);

// Navbar responsive toggle
const navbarToggle = document.querySelector('.navbar__toggle');
const navbarMenu = document.querySelector('.navbar__menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});

// Cerrar el menú al clicar fuera
document.addEventListener('click', (e) => {
  if (
    !navbarMenu.contains(e.target) &&
    !navbarToggle.contains(e.target) &&
    navbarMenu.classList.contains('show')
  ) {
    navbarMenu.classList.remove('show');
  }
});

// IntersectionObserver para animar aparición de tarjetas testimoniales
const testimonialCards = document.querySelectorAll('.testimonial-card');

const observerOptions = {
  threshold: 0.1,
};

const testimonialObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      testimonialObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

testimonialCards.forEach((card) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  testimonialObserver.observe(card);
});
