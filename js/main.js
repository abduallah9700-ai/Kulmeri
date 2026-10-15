/**
 * Kulmeri Academic - Barista & Pastry Academy
 * Interactive Frontend JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // WhatsApp Contact Numbers
  const WHATSAPP_NUMBER_1 = '252770662323';
  const WHATSAPP_NUMBER_2 = '252613911963';

  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Sticky Navbar Blur & Shadow on Scroll
  const mainNavbar = document.getElementById('mainNavbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainNavbar.classList.add('nav-scrolled');
    } else {
      mainNavbar.classList.remove('nav-scrolled');
    }
  });

  // 3. Floating WhatsApp Widget Popup Toggle
  const floatingWhatsAppBtn = document.getElementById('floatingWhatsAppBtn');
  const whatsAppPopup = document.getElementById('whatsAppPopup');
  const closeWhatsAppPopup = document.getElementById('closeWhatsAppPopup');

  if (floatingWhatsAppBtn && whatsAppPopup) {
    floatingWhatsAppBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      whatsAppPopup.classList.toggle('hidden');
    });

    if (closeWhatsAppPopup) {
      closeWhatsAppPopup.addEventListener('click', (e) => {
        e.stopPropagation();
        whatsAppPopup.classList.add('hidden');
      });
    }

    document.addEventListener('click', (e) => {
      if (!whatsAppPopup.contains(e.target) && !floatingWhatsAppBtn.contains(e.target)) {
        whatsAppPopup.classList.add('hidden');
      }
    });
  }

  // 4. WhatsApp Message Helper
  window.openWhatsApp = function (course = 'general', numberChoice = 1) {
    const phone = numberChoice === 2 ? WHATSAPP_NUMBER_2 : WHATSAPP_NUMBER_1;
    let message = '';

    switch (course) {
      case 'barista':
        message = 'Hello Kulmeri Academic! ☕ I would like to inquire about the Barista Training Class (Schedule, Fees, and Enrollment).';
        break;
      case 'pastry':
        message = 'Hello Kulmeri Academic! 🥐 I would like to inquire about the Pastry Training Class (Schedule, Fees, and Enrollment).';
        break;
      case 'both':
        message = 'Hello Kulmeri Academic! I am interested in enrolling in both the Barista and Pastry Training programs. Please send me full details.';
        break;
      default:
        message = 'Hello Kulmeri Academic! I have an inquiry regarding your culinary courses and training programs in Mogadishu.';
    }

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;
    window.open(waUrl, '_blank');
  };

  // 5. Contact / Enrollment Form -> Send directly to WhatsApp
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName').value.trim();
      const phoneInput = document.getElementById('formPhone').value.trim();
      const course = document.getElementById('formCourse').value;
      const shift = document.getElementById('formShift').value;
      const notes = document.getElementById('formMessage').value.trim();
      const targetPhone = document.querySelector('input[name="waNumber"]:checked')?.value || WHATSAPP_NUMBER_1;

      let msg = `*New Enrollment Inquiry - Kulmeri Academic*\n\n`;
      msg += `👤 *Name:* ${name}\n`;
      msg += `📱 *Phone:* ${phoneInput}\n`;
      msg += `📚 *Program:* ${course}\n`;
      msg += `⏰ *Preferred Shift:* ${shift}\n`;
      if (notes) {
        msg += `💬 *Note:* ${notes}\n`;
      }
      msg += `\n_Submitted via Kulmeri Academic Landing Page_`;

      const encodedMsg = encodeURIComponent(msg);
      const url = `https://wa.me/${targetPhone}?text=${encodedMsg}`;

      // Show brief feedback toast
      showToast('Redirecting directly to WhatsApp with your registration details...');
      setTimeout(() => {
        window.open(url, '_blank');
      }, 700);
    });
  }

  // 6. Carousel Logic for "Our Learning Environment"
  const carouselContainer = document.getElementById('environmentCarousel');
  const prevBtn = document.getElementById('prevCarouselBtn');
  const nextBtn = document.getElementById('nextCarouselBtn');

  if (carouselContainer && prevBtn && nextBtn) {
    const scrollStep = () => {
      const item = carouselContainer.querySelector('.carousel-item');
      return item ? item.offsetWidth + 20 : 320;
    };

    nextBtn.addEventListener('click', () => {
      carouselContainer.scrollBy({ left: scrollStep(), behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      carouselContainer.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
    });
  }

  // 7. Modals: Barista Syllabus & Pastry Syllabus
  window.openModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  // Close modal when clicking on overlay background
  document.querySelectorAll('.modal-overlay-bg').forEach((overlay) => {
    overlay.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-container');
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  });

  // Lightbox for Gallery Photos
  window.openLightbox = function (imgSrc, imgTitle) {
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');

    if (lightboxModal && lightboxImg) {
      lightboxImg.src = imgSrc;
      if (lightboxCaption) {
        lightboxCaption.textContent = imgTitle || 'Kulmeri Academic Training Space';
      }
      lightboxModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  // Toast notification helper
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed top-20 right-5 z-50 bg-[#2A1810] text-[#FAF6F0] border border-[#C68A4C] px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 transition-all duration-300 transform translate-y-0 opacity-100';
    toast.innerHTML = `
      <i class="fab fa-whatsapp text-2xl text-[#25D366]"></i>
      <span class="text-sm font-medium">${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      setTimeout(() => toast.remove(), 350);
    }, 2800);
  }
});
