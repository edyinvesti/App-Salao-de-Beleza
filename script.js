// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Hamburger Toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  const spans = hamburger.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = ''; spans[1].style.opacity = ''; spans[2].style.transform = '';
  }
});

// ===== Feature Tabs =====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    document.querySelector(`[data-panel="${btn.dataset.tab}"]`).classList.add('active');
  });
});

// ===== Testimonial Carousel =====
const track = document.getElementById('testimonialsTrack');
const cards = track.querySelectorAll('.testimonial-card');
const dotsContainer = document.getElementById('tDots');
const prevBtn = document.getElementById('tPrev');
const nextBtn = document.getElementById('tNext');
let currentSlide = 0;
let slidesPerView = window.innerWidth > 768 ? 3 : 1;

function getSlideCount() {
  slidesPerView = window.innerWidth > 768 ? 3 : 1;
  return Math.ceil(cards.length / slidesPerView);
}

function buildDots() {
  dotsContainer.innerHTML = '';
  const total = getSlideCount();
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.className = 't-dot' + (i === currentSlide ? ' active' : '');
    dot.setAttribute('aria-label', `Ver depoimentos grupo ${i + 1}`);
    dot.setAttribute('aria-current', i === currentSlide);
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
}

function goToSlide(index) {
  const total = getSlideCount();
  currentSlide = Math.max(0, Math.min(index, total - 1));
  const cardWidth = cards[0].offsetWidth + 20;
  track.style.transition = 'transform .4s ease';
  track.style.transform = `translateX(-${currentSlide * slidesPerView * cardWidth}px)`;
  document.querySelectorAll('.t-dot').forEach((d, i) => {
    const isActive = i === currentSlide;
    d.classList.toggle('active', isActive);
    d.setAttribute('aria-current', isActive);
  });
}

prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
window.addEventListener('resize', () => { buildDots(); goToSlide(0); });
buildDots();

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll(
  '.section-header, .business-card, .pillar-card, .testimonial-card, .panel-content, .cta-container'
);
revealElements.forEach(el => el.classList.add('reveal'));
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealElements.forEach(el => observer.observe(el));

// ===== Cookie Banner =====
const cookieBanner = document.getElementById('cookieBanner');
const cookieAccept = document.getElementById('cookieAccept');
if (localStorage.getItem('cookieAccepted')) {
  cookieBanner.classList.add('hide');
}
cookieAccept.addEventListener('click', () => {
  cookieBanner.classList.add('hide');
  localStorage.setItem('cookieAccepted', 'true');
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = ''; spans[1].style.opacity = ''; spans[2].style.transform = '';
      }
    }
  });
});

// ===== Counter Animation for Stats =====
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const step = target / 40;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.innerHTML = Math.floor(current) + suffix;
  }, 30);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat-num');
      nums.forEach(num => {
        const text = num.textContent;
        if (text.includes('40k')) {
          animateCounter(num, 40, 'k<span class="stat-plus">+</span>');
        } else if (text.includes('98')) {
          animateCounter(num, 98, '<span class="stat-pct">%</span>');
        } else if (text.includes('14')) {
          animateCounter(num, 14, '<span class="stat-days">d</span>');
        }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);
