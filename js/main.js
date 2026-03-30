/* ============================================================
   NEXUSLABS — main.js
   Navigation, scroll effects, animations, utilities
   ============================================================ */

'use strict';

// ── Nav scroll effect ──────────────────────────────────────
const nav = document.querySelector('.nav');

function handleNavScroll() {
  if (!nav) return;
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

// ── Active nav link on scroll ──────────────────────────────
const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
const sections = document.querySelectorAll('section[id]');

function setActiveNavLink() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveNavLink, { passive: true });

// ── Mobile burger menu ─────────────────────────────────────
const burger     = document.querySelector('.nav__burger');
const mobileMenu = document.querySelector('.nav__mobile');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !mobileMenu.contains(e.target)) {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ── Mobile sub-menus ───────────────────────────────────────
document.querySelectorAll('.nav__mobile-link[data-sub]').forEach(link => {
  link.addEventListener('click', () => {
    const target = link.getAttribute('data-sub');
    const sub = document.getElementById(target);
    if (sub) {
      sub.classList.toggle('open');
      link.classList.toggle('active');
    }
  });
});

// ── Scroll Reveal ──────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealEls.forEach(el => revealObserver.observe(el));

// ── Animated Counters ──────────────────────────────────────
function animateCounter(el, target, duration = 1800, suffix = '') {
  const start = performance.now();
  const isDecimal = target.toString().includes('.');
  const numTarget = parseFloat(target);

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out-cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = numTarget * eased;

    el.textContent = (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix;

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const statEls = document.querySelectorAll('[data-count]');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el     = entry.target;
      const target = el.getAttribute('data-count');
      const suffix = el.getAttribute('data-suffix') || '';
      animateCounter(el, target, 1600, suffix);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

statEls.forEach(el => counterObserver.observe(el));

// ── Pricing Toggle ─────────────────────────────────────────
const pricingBtns    = document.querySelectorAll('.pricing-toggle__btn');
const priceEls       = document.querySelectorAll('[data-monthly][data-yearly]');

if (pricingBtns.length) {
  pricingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pricingBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const isYearly = btn.getAttribute('data-period') === 'yearly';

      priceEls.forEach(el => {
        const val = isYearly
          ? el.getAttribute('data-yearly')
          : el.getAttribute('data-monthly');

        // Animate number change
        const current = parseFloat(el.textContent.replace(/,/g, ''));
        const next    = parseFloat(val.replace(/,/g, ''));
        animateCounter(el, next, 400, '');
        setTimeout(() => { el.textContent = val; }, 420);
      });
    });
  });
}

// ── Contact Form ───────────────────────────────────────────
const contactForm = document.querySelector('#contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector('[type="submit"]');
    const originalText = btn.textContent;

    btn.textContent = 'Sending…';
    btn.disabled = true;

    // Simulate async send (replace with your backend / EmailJS / Formspree)
    await new Promise(r => setTimeout(r, 1200));

    btn.textContent = '✓ Message Sent!';
    btn.style.background = '#2d6a2d';

    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      btn.style.background = '';
      contactForm.reset();
    }, 3000);
  });
}

// ── Smooth scroll for anchor links ────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-h')) || 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ── Marquee pause on hover ─────────────────────────────────
const marqueeTrack = document.querySelector('.marquee__track');
if (marqueeTrack) {
  marqueeTrack.addEventListener('mouseenter', () => {
    marqueeTrack.style.animationPlayState = 'paused';
  });
  marqueeTrack.addEventListener('mouseleave', () => {
    marqueeTrack.style.animationPlayState = 'running';
  });
}

// ── Cursor glow effect (desktop only) ─────────────────────
if (window.matchMedia('(pointer: fine)').matches) {
  const cursorGlow = document.createElement('div');
  cursorGlow.style.cssText = `
    position: fixed;
    pointer-events: none;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(200,240,101,0.04) 0%, transparent 65%);
    transform: translate(-50%, -50%);
    transition: opacity 0.4s ease;
    z-index: 0;
    top: 0; left: 0;
  `;
  document.body.appendChild(cursorGlow);

  document.addEventListener('mousemove', e => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top  = e.clientY + 'px';
  });
}

// ── FAQ accordion (used on inner pages) ───────────────────
document.querySelectorAll('.faq__question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq__item');
    const answer = item.querySelector('.faq__answer');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq__item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq__answer').style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ── Toast notification ─────────────────────────────────────
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    padding: 14px 22px;
    background: ${type === 'success' ? '#1a2e1a' : '#2e1a1a'};
    border: 1px solid ${type === 'success' ? 'rgba(200,240,101,0.3)' : 'rgba(240,100,100,0.3)'};
    color: ${type === 'success' ? '#c8f065' : '#f06565'};
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 500;
    z-index: 9999;
    animation: toastIn 0.3s ease forwards;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  `;
  toast.textContent = message;

  const style = document.createElement('style');
  style.textContent = `
    @keyframes toastIn { from { opacity:0; transform: translateY(12px); } to { opacity:1; transform: translateY(0); } }
    @keyframes toastOut { from { opacity:1; } to { opacity:0; transform: translateY(8px); } }
  `;
  document.head.appendChild(style);
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => { toast.remove(); style.remove(); }, 350);
  }, 3500);
}

// Expose globally
window.showToast = showToast;
