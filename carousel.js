document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');
    const title = document.querySelector('.carousel-title');
    const carouselImages = document.querySelector('.carousel-images');
    let currentImageIndex = 0;
  
    function showCarousel() {
      carousel.classList.add('active');
      title.classList.add('active');
      setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % carouselImages.children.length;
        const offset = -currentImageIndex * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
      }, 3000);
    }
  
    setTimeout(showCarousel, 30000); // Carrossel aparece após 30 segundos
  });
  