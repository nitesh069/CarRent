  // Initialize AOS
    AOS.init({ duration: 1000 });
    
    // Car animation
    const car = document.getElementById('car-img');
    window.addEventListener('load', () => {
      car.classList.add('animate-car');
    });
    
    // COMPLETE MOBILE MENU FIX
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    
    // Open mobile menu
    function openMobileMenu() {
      mobileMenu.classList.add('open');
      menuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    
    // Close mobile menu
    function closeMobileMenu() {
      mobileMenu.classList.remove('open');
      menuOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
    
    // Event listeners
    menuBtn.addEventListener('click', openMobileMenu);
    closeMenuBtn.addEventListener('click', closeMobileMenu);
    menuOverlay.addEventListener('click', closeMobileMenu);
    
    // Close menu with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });