// Konfigurasi Kustom Tailwind CSS
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#00AEEF',
        secondary: '#14B8A6',
        accent: '#F6C453',
        darkBg: '#020617',
        cardDark: '#0f172a',
        surfaceLight: '#F8FAFC',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    }
  }
};

// Inisialisasi Fitur setelah DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Logika Toggle Menu Mobile
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});