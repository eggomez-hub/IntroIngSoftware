console.log(
  '%c✨ FAQ - Web desarrollada con ES6 y buenas prácticas',
  'color: #2563eb; font-size: 14px; font-weight: bold;'
);

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains('faq-item--active');

    // Cerrar todos los ítems excepto este si se abre uno nuevo
    document.querySelectorAll('.faq-item--active').forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove('faq-item--active');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      }
    });

    if (isActive) {
      faqItem.classList.remove('faq-item--active');
      question.setAttribute('aria-expanded', 'false');
    } else {
      faqItem.classList.add('faq-item--active');
      question.setAttribute('aria-expanded', 'true');
    }
  });
});

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

// IntersectionObserver para animar items FAQ al scroll
const faqItems = document.querySelectorAll('.faq-item');

const observerOptions = {
  threshold: 0.1,
};

const faqObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'none';
      faqObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

faqItems.forEach((item) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  faqObserver.observe(item);
});
