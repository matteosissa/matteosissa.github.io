/* Modern UI enhancements: scroll-reveal animations, back-to-top button, navbar scroll state.
   All effects are additive — the page is fully usable without JS and with reduced motion. */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Scroll reveal ---- */
  if (!reducedMotion && 'IntersectionObserver' in window) {
    var targets = [];

    // Whole sections (except the hero, which is visible on load)
    document.querySelectorAll('section.hbb-section:not(#home)').forEach(function (s) {
      targets.push(s);
    });
    // Individual cards get a small stagger within their grid
    document.querySelectorAll('.msx-panel, #projects .grid > div').forEach(function (card, i) {
      card.style.transitionDelay = (i % 4) * 60 + 'ms';
      targets.push(card);
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          el.classList.add('msx-in');
          observer.unobserve(el);
          // Clean up so the reveal transition never interferes with hover effects
          setTimeout(function () {
            el.classList.remove('msx-reveal', 'msx-in');
            el.style.transitionDelay = '';
          }, 1000);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(function (el) {
      el.classList.add('msx-reveal');
      observer.observe(el);
    });
  }

  /* ---- Language proficiency bars: fill in when scrolled into view ---- */
  if (!reducedMotion && 'IntersectionObserver' in window) {
    var fills = document.querySelectorAll('.msx-lang-fill');
    if (fills.length) {
      var barObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var fill = entry.target;
            fill.style.width = fill.dataset.msxWidth;
            barObserver.unobserve(fill);
          }
        });
      }, { threshold: 0.5 });
      fills.forEach(function (fill) {
        fill.dataset.msxWidth = fill.style.width;
        fill.style.width = '0%';
        barObserver.observe(fill);
      });
    }
  }

  /* ---- Keyboard access for clickable skill chips (click itself is handled by skill-links.js) ---- */
  document.querySelectorAll('[data-skill-url][tabindex]').forEach(function (chip) {
    chip.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        chip.click();
      }
    });
  });

  /* ---- Back-to-top button ---- */
  var topBtn = document.createElement('button');
  topBtn.id = 'msx-top';
  topBtn.type = 'button';
  topBtn.setAttribute('aria-label', 'Back to top');
  topBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><polyline points="18 15 12 9 6 15"></polyline></svg>';
  topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  });
  document.body.appendChild(topBtn);

  /* ---- Scroll-linked states (rAF-throttled) ---- */
  var header = document.getElementById('site-header');
  var ticking = false;

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    topBtn.classList.toggle('msx-top-visible', y > 600);
    if (header) header.classList.toggle('msx-scrolled', y > 10);
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  onScroll();
})();
