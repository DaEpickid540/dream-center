// Mobile nav menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('open');
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobileMenuBtn.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && !e.target.closest('.mobile-menu-btn')) {
      navMenu.classList.remove('active');
      mobileMenuBtn.classList.remove('open');
    }
  });
}

// Accordion (services.html)
function toggleAccordion(button) {
  const content = button.nextElementSibling;

  document.querySelectorAll('.accordion-content.active').forEach(item => {
    if (item !== content) {
      item.classList.remove('active');
      item.previousElementSibling.classList.remove('active');
    }
  });

  button.classList.toggle('active');
  content.classList.toggle('active');

  if (content.classList.contains('active')) {
    setTimeout(() => {
      button.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  }
}

// Header shadow/shrink on scroll
const siteHeader = document.querySelector('header');
if (siteHeader) {
  const updateHeader = () => {
    siteHeader.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}

// Scroll-reveal animations
const revealSelector = [
  'section > h2',
  '.card',
  '.tutorial-card',
  '.feature-item',
  '.access-method',
  '.faq-item',
  '.tier-card',
  '.photo-frame',
  '.photo-caption',
  '.hours-box',
  '.key-facts',
  '.step-list li',
  '.accordion-item',
  '.schedule-table',
  '.info-box',
  '.action-row'
].join(', ');

const revealTargets = Array.from(document.querySelectorAll(revealSelector));

if (revealTargets.length && 'IntersectionObserver' in window) {
  revealTargets.forEach((el) => {
    el.classList.add('reveal');
  });

  // Stagger items that share a common grid/list container for a cascading effect
  const groupSelector = '.grid, .tutorial-grid, .feature-grid, .tier-grid, .step-list, .accordion, .footer-content';
  const groups = new Map();
  revealTargets.forEach((el) => {
    const parent = el.closest(groupSelector) || el.parentElement;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(el);
  });
  groups.forEach((siblings) => {
    siblings.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i, 5) * 0.07}s`;
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: '0px 0px 40px 0px' }
  );

  revealTargets.forEach((el) => observer.observe(el));

  // Safety net: never leave content permanently invisible (fast/instant
  // scrolls, jump links, or browser quirks can occasionally miss a callback)
  setTimeout(() => {
    revealTargets.forEach((el) => el.classList.add('visible'));
    observer.disconnect();
  }, 2500);
} else {
  // No IntersectionObserver support (or nothing to reveal) — just show everything
  revealTargets.forEach((el) => el.classList.add('reveal', 'visible'));
}

// Tap ripple feedback for buttons on touch devices
if (window.matchMedia('(hover: none)').matches) {
  document.querySelectorAll('.cta-button, .accordion-header').forEach((el) => {
    el.addEventListener(
      'touchstart',
      () => {
        el.classList.add('pressed');
        setTimeout(() => el.classList.remove('pressed'), 200);
      },
      { passive: true }
    );
  });
}
