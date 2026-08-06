// Konfigurasi Kustom Tailwind CSS (Pilihan Warna Brief)
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#00AEEF',
        secondary: '#14B8A6',
        accent: '#F6C453',
        dark: '#020617',
        cardDark: '#0f172a',
        bgLight: '#F8FAFC',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Inisialisasi AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
    });
  }

  // 3. Hide Loading Screen
  const loader = document.getElementById('loading-screen');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('opacity-0');
      setTimeout(() => loader.style.display = 'none', 500);
    }, 500);
  }

  // 4. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 5. Inisialisasi Swiper Testimoni
  if (typeof Swiper !== 'undefined') {
    new Swiper('.testimonialSwiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
      },
    });
  }

  // 6. Inisialisasi Fancybox Gallery
  if (typeof Fancybox !== 'undefined') {
    Fancybox.bind("[data-fancybox]", {});
  }

  // 7. GSAP Animation for Hero Title
  if (typeof gsap !== 'undefined') {
    gsap.from('#hero-title', {
      duration: 1.2,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.6
    });
  }
});