document.addEventListener('DOMContentLoaded', function () {
  // Initialize the Bootstrap Carousel if the element exists
  const heroCarousel = document.getElementById('heroCarousel');
  if (heroCarousel) {
    const carousel = new bootstrap.Carousel(heroCarousel, {
      interval: 3000, // Auto-slide every 3 seconds
      ride: 'carousel', // Optional: Automatically start the carousel
    });
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default link behavior
      const targetId = this.getAttribute('href').substring(1); // Get target ID without '#'
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start', // Align the top of the element with the top of the viewport
        });
      }
    });
  });
});