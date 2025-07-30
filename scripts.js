// scripts.js – small enhancements for NordicCraft demo site

// Slider functionality for the before/after showcase on the home page
document.addEventListener('DOMContentLoaded', () => {
  // Update the current year in the footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Slider logic
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll('.slide');
    let currentIndex = 0;
    const prevBtn = slider.querySelector('.slider-btn.prev');
    const nextBtn = slider.querySelector('.slider-btn.next');

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', prevSlide);
      nextBtn.addEventListener('click', nextSlide);
    }

    // Initially show the first slide
    showSlide(currentIndex);
  });
});