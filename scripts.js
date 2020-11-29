const closePopUpButton = document.getElementById('close-pop-up');
const nav = document.getElementById('nav-icon');
const smallCtaBtn = document.getElementById('small-cta-btn');
const navIcon = document.getElementById('nav-icon');

var isOpen = false;

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.panel').forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: 'top top',
    pinSpacing: false,
    pin: true,
  });
});

gsap.to('.cta', {
  scrollTrigger: {
    trigger: '.cta',
    start: '2px 77%',
    toggleActions: 'play none none none',
  },
  duration: 1.2,
  yPercent: -85,
  ease: 'elastic',
  onComplete: showClosePopUp,
});

function showClosePopUp() {
  closePopUpButton.style.display = 'block';
  closePopUpButton.style.opacity = 0;

  gsap.to('#close-pop-up', {
    duration: 0.2,
    opacity: 1,
  });
}

closePopUpButton.addEventListener('click', () => {
  gsap.to('.cta-head', {
    duration: 0.2,
    opacity: 0,
  });

  gsap.to('.cta-body', {
    duration: 0.2,
    opacity: 0,
  });

  gsap.to('.cta-footer', {
    duration: 0.2,
    opacity: 0,
  });

  gsap.to('.cta', {
    duration: 1.2,
    borderRadius: '50%',
    // height: '80px',
    // width: '80px',
    height: '50px',
    width: '50px',
    //
    // xPercent: -150,
    xPercent: -250,
    justifyContent: 'flex-start',
    top: '95%',
    ease: 'elastic',
    onComplete: openPopUp,
  });

  gsap.to('#small-cta-btn', {
    duration: 0.2,
    scale: 1,
    opacity: 1,
    display: 'flex',
  });

  closePopUpButton.style.display = 'none';
});

function openPopUp() {
  smallCtaBtn.addEventListener('click', () => {
    console.log('hi');

    gsap.to('.cta-head', {
      duration: 0.2,
      opacity: 1,
    });
    gsap.to('.cta-body', {
      duration: 0.2,
      opacity: 1,
    });
    gsap.to('.cta-footer', {
      duration: 0.2,
      opacity: 1,
    });
    gsap.to('.cta', {
      duration: 1.2,
      borderRadius: '50%',
      width: '90vw',
      height: '80vh',
      top: '82%',
      xPercent: 0,
      borderRadius: '35px',
      ease: 'elastic',
      onComplete: showClosePopUp,
    });

    gsap.to('#small-cta-btn', {
      duration: 0.2,
      scale: 0,
      opacity: 0,
      display: 'none',
    });
  });
}

// NAV
// NAV
// NAV
nav.addEventListener('click', () => {
  navIcon.classList.toggle('open');

  if (isOpen === false) {
    isOpen = true;

    gsap.to('#nav-menu', {
      duration: 0.2,
      xPercent: -105,
      boxShadow: '-5px 0 15px 5px rgba(0, 0, 0, 0.25)',
      ease: 'ease',
    });
  } else if (isOpen === true) {
    isOpen = false;

    gsap.to('#nav-menu', {
      duration: 0.2,
      xPercent: 0,
      boxShadow: 'none',
      ease: 'ease',
    });
  }
});
// END NAV
// END NAV
// END NAV

// FOOTPRINTS
// FOOTPRINTS
// FOOTPRINTS

const prints = document.querySelectorAll('.prints');

prints.forEach((print) => {
  gsap.to(print, {
    scrollTrigger: {
      trigger: print,
      start: '2px 77%',
      toggleActions: 'play none none none',
    },
    duration: 1.2,
    opacity: 0.1,
    ease: 'elastic',
  });
});

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
});
