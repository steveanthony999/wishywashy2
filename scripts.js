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
  const closePopUpButton = document.getElementById('close-pop-up');
  closePopUpButton.style.display = 'block';
  closePopUpButton.style.opacity = 0;
  show();

  function show() {
    gsap.to('#close-pop-up', {
      duration: 1.2,
      opacity: 1,
    });
  }

  closePopUpButton.addEventListener('click', () => {
    gsap.to('.cta-head', {
      duration: 0.2,
      scale: 0.1,
      opacity: 0,
    });

    gsap.to('.cta-body', {
      duration: 0.2,
      scale: 0.1,
      opacity: 0,
    });

    gsap.to('.cta-footer', {
      duration: 0.2,
      scale: 0.1,
      opacity: 0,
    });

    gsap.to('.cta', {
      duration: 1.2,
      borderRadius: '50%',
      height: '80px',
      width: '80px',
      left: '1rem',
      top: '95%',
      ease: 'elastic',
    });
  });
}

// NAV
// NAV
// NAV
document.getElementById('nav-icon').addEventListener('click', () => {
  const navIcon = document.getElementById('nav-icon');
  navIcon.classList.toggle('open');
});
// END NAV
// END NAV
// END NAV
