/**
 * SanrobengiTrip - Main Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Inisialisasi Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Hide Loading Screen
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    window.addEventListener('load', () => {
      loadingScreen.classList.add('opacity-0');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    });
  }

  // 3. Logika Navbar Scroll Effect
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.classList.add('bg-cardDark/90', 'backdrop-blur-md', 'shadow-xl', 'border-b', 'border-slate-800');
      } else {
        nav.classList.remove('bg-cardDark/90', 'shadow-xl', 'border-b', 'border-slate-800');
      }
    });
  }

  // 4. Logika Toggle & Auto-Close Menu Mobile
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Otomatis menutup menu mobile saat tautan diklik
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 5. Inisialisasi AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }

  // 6. Inisialisasi Swiper.js (Slider Testimoni)
  if (typeof Swiper !== 'undefined') {
    new Swiper('.testimonialSwiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        }
      }
    });
  }

  // 7. Inisialisasi Fancybox (Lightbox Galeri Foto)
  if (typeof Fancybox !== 'undefined') {
    Fancybox.bind('[data-fancybox="gallery"]', {
      compact: false,
      idle: false,
      animated: true,
      showClass: 'f-fadeIn',
      hideClass: 'f-fadeOut',
    });
  }

  // 8. Animasi GSAP untuk Hero Section
  if (typeof gsap !== 'undefined') {
    gsap.from('#hero-title', {
      duration: 1.2,
      y: 30,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.3
    });
  }
});