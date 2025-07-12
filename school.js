// Loader fade out and section fade in
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const sections = document.querySelectorAll('section');
  
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
    sections.forEach(sec => {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    });
  }, 600);
});

// DOM ready functions
document.addEventListener('DOMContentLoaded', () => {
  // Floating label char counter
  const message = document.getElementById('message');
  const counter = document.getElementById('char-count');
  
  if (message && counter) {
    message.addEventListener('input', () => {
      counter.textContent = `${message.value.length}/500`;
    });
  }
  
  // Mobile nav toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
  
  // Gallery slider auto-scroll
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  setInterval(() => {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(-${100 * currentSlide}%)`;
    });
    currentSlide = (currentSlide + 1) % slides.length;
  }, 3000);
});