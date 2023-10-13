import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  autoplay: {
    delay: 0, // Establece un retraso
    disableOnInteraction: false,
  },
  speed: 2000,
  direction: 'horizontal',
  loop: true,
  allowTouchMove: false,
});

$('.card').on('mouseenter', function() {
  swiper.autoplay.stop(); 
});

$('.card').on('mouseleave', function() {
  swiper.autoplay.start(); 
});
