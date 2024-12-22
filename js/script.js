document.addEventListener('DOMContentLoaded', function () {
  // Initialize the Bootstrap Carousel
  var myCarousel = document.getElementById('heroCarousel');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000 // Auto-slide every 3 seconds
  });

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});