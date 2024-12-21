// Initialize the Bootstrap Carousel
document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.getElementById('heroCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000, // Adjust auto-slide timing (in milliseconds)
      ride: 'carousel'
    });
  });
  
  // Optional: Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  }); 