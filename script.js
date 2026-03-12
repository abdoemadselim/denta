/* =============================================================
   دنتا — Landing Page JavaScript
   Handles: navbar scroll, mobile nav, scroll-reveal, feature
   panel progress dots, bar chart animation
   ============================================================= */

(function () {
  'use strict';

  /* ── Refs ───────────────────────────────────────────────── */
  var nav    = document.getElementById('nav');
  var burger = document.getElementById('burger');
  var links  = document.getElementById('navLinks');

  /* ── 1. Navbar: stick + style on scroll ─────────────────── */
  function onScroll() {
    if (window.scrollY > 30) {
      nav.classList.add('stuck');
    } else {
      nav.classList.remove('stuck');
    }
    updateFeatureDots();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── 2. Mobile nav toggle ───────────────────────────────── */
  burger.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close when a link is clicked
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (links.classList.contains('open') &&
        !links.contains(e.target) &&
        !burger.contains(e.target)) {
      links.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  /* ── 3. Smooth scroll for anchor links ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var hash = this.getAttribute('href');
      if (hash === '#') return;
      var target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      var offset = nav.offsetHeight + 16;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    });
  });

  /* ── 4. Scroll-reveal with IntersectionObserver ─────────── */
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Animate chart bars when analytics panel enters view
        entry.target.querySelectorAll('.ab__fill').forEach(function (bar) {
          bar.classList.add('animated');
        });
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObs.observe(el);
  });

  /* ── 5. Feature panels progress dots ───────────────────── */
  var dotsWrap = document.querySelector('.features__dots');
  var dots     = document.querySelectorAll('.fd');
  var panels   = [
    document.getElementById('fp-1'),
    document.getElementById('fp-2'),
    document.getElementById('fp-3')
  ];
  var featSection = document.getElementById('features');

  function updateFeatureDots() {
    if (!featSection) return;

    var rect = featSection.getBoundingClientRect();
    var inFeatures = rect.top < window.innerHeight && rect.bottom > 0;

    if (dotsWrap) {
      dotsWrap.classList.toggle('visible', inFeatures);
    }

    if (!inFeatures) return;

    // Find which panel is most in view
    var activeIndex = 0;
    var maxVis = 0;

    panels.forEach(function (panel, i) {
      if (!panel) return;
      var pr   = panel.getBoundingClientRect();
      var vis  = Math.min(pr.bottom, window.innerHeight) - Math.max(pr.top, 0);
      if (vis > maxVis) { maxVis = vis; activeIndex = i; }
    });

    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === activeIndex);
    });
  }

  // Clicking a dot scrolls to that panel
  dots.forEach(function (dot, i) {
    var fpId = dot.getAttribute('data-fp');
    dot.addEventListener('click', function () {
      var target = document.getElementById(fpId);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ── 6. Hero entrance animation ────────────────────────── */
  // Stagger hero copy children on load
  window.addEventListener('load', function () {
    var items = [
      '.hero__eyebrow',
      '.hero__headline',
      '.hero__sub',
      '.hero__cta-row',
      '.hero__trust'
    ];
    items.forEach(function (sel, i) {
      var el = document.querySelector(sel);
      if (!el) return;
      el.style.opacity   = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity .55s ease, transform .55s ease';
      el.style.transitionDelay = (i * 0.1) + 's';
      // Force reflow
      void el.offsetWidth;
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
    });
  });

  /* ── 7. Mockup chart bar hover highlight ───────────────── */
  document.querySelectorAll('.cb').forEach(function (bar) {
    bar.addEventListener('mouseenter', function () {
      this.style.background = 'rgba(59,130,246,.5)';
    });
    bar.addEventListener('mouseleave', function () {
      if (!this.classList.contains('cb--hi')) {
        this.style.background = '';
      }
    });
  });

  /* ── 8. Active nav link on scroll ──────────────────────── */
  var sections = document.querySelectorAll('section[id]');
  var navObs   = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var id   = entry.target.id;
      var link = document.querySelector('.nav__links a[href="#' + id + '"]');
      document.querySelectorAll('.nav__links a').forEach(function (a) {
        a.style.color = '';
        a.style.background = '';
      });
      if (link) {
        link.style.color      = 'var(--blue-700)';
        link.style.background = 'var(--blue-50)';
      }
    });
  }, { threshold: 0.45 });

  sections.forEach(function (s) { navObs.observe(s); });

})();
