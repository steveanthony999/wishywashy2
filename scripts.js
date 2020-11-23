const closePopUpButton = document.getElementById('close-pop-up');
const cta = document.querySelector('.cta');
const nav = document.getElementById('nav-icon');
const smallCtaBtn = document.getElementById('small-cta-btn');

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
    height: '80px',
    width: '80px',
    xPercent: -150,
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
  const navIcon = document.getElementById('nav-icon');
  navIcon.classList.toggle('open');
});
// END NAV
// END NAV
// END NAV
