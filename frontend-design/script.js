const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = [...document.querySelectorAll('.nav-links a')];
const mainSections = ['sobre', 'atividades', 'agenda', 'equipa', 'info', 'interesse']
  .map(id => document.getElementById(id))
  .filter(Boolean);

function setMenu(open) {
  if (!hamburger || !mobileMenu) return;
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  mobileMenu.toggleAttribute('inert', !open);
  document.body.style.overflow = open ? 'hidden' : '';
}

function closeMenu() {
  setMenu(false);
}

if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    setMenu(!hamburger.classList.contains('open'));
  });

  document.querySelectorAll('.mob-link, .mobile-menu .btn').forEach(el => {
    el.addEventListener('click', closeMenu);
  });
}

function getNavH() {
  return window.innerWidth <= 1024 ? 64 : 76;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', event => {
    if (anchor.dataset.openDocs === 'privacy') return;
    const id = anchor.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    closeMenu();
    const top = target.getBoundingClientRect().top + window.scrollY - getNavH();
    window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
});

if ('IntersectionObserver' in window && navLinks.length && mainSections.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });
  mainSections.forEach(section => observer.observe(section));
}

const filterPills = document.getElementById('filterPills');
if (filterPills) {
  filterPills.addEventListener('click', event => {
    const pill = event.target.closest('.fpill');
    if (!pill) return;
    const filter = pill.dataset.filter;
    document.querySelectorAll('.fpill').forEach(item => {
      const active = item === pill;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('.ac').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.cat !== filter);
    });
  });
}

const dayTabs = document.getElementById('dayTabs');
if (dayTabs) {
  dayTabs.addEventListener('click', event => {
    const tab = event.target.closest('.dtab');
    if (!tab) return;
    document.querySelectorAll('.dtab').forEach(item => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });
    document.querySelectorAll('.sch-panel').forEach(panel => {
      panel.classList.remove('active');
    });
    const panel = document.getElementById(`sch-${tab.dataset.day}`);
    if (panel) panel.classList.add('active');
  });
}

function setFaqItemOpen(item, open) {
  const button = item.querySelector('.fq');
  const answer = item.querySelector('.fa');
  item.classList.toggle('open', open);
  if (button) button.setAttribute('aria-expanded', String(open));
  if (answer) answer.setAttribute('aria-hidden', String(!open));
}

function setFaqCat(cat) {
  document.querySelectorAll('.fi').forEach(item => {
    const visible = item.dataset.faqcat === cat;
    item.classList.toggle('hidden', !visible);
    if (!visible) setFaqItemOpen(item, false);
  });
  document.querySelectorAll('.fp').forEach(pill => {
    const active = pill.dataset.faqcat === cat;
    pill.classList.toggle('active', active);
    pill.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('.fs').forEach(link => {
    link.classList.toggle('active', link.dataset.faqcat === cat);
  });
  const pill = document.querySelector(`.fp[data-faqcat="${cat}"]`);
  const titleEl = document.getElementById('faqCatTitle');
  if (titleEl && pill) titleEl.textContent = pill.textContent.trim();
}

function openFaqItemById(id) {
  const item = document.getElementById(id);
  if (!item) return;
  document.querySelectorAll('.fi.open').forEach(openItem => setFaqItemOpen(openItem, false));
  setFaqItemOpen(item, true);
}

document.querySelectorAll('[data-open-docs="privacy"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    setFaqCat('documentos');
    openFaqItemById('privacy-terms');
    setTimeout(() => {
      const target = document.getElementById('privacy-terms');
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - getNavH() - 120;
      window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }, 30);
  });
});

document.getElementById('faqPills')?.addEventListener('click', event => {
  const pill = event.target.closest('.fp');
  if (pill) setFaqCat(pill.dataset.faqcat);
});

document.getElementById('faqSide')?.addEventListener('click', event => {
  const link = event.target.closest('.fs');
  if (!link) return;
  event.preventDefault();
  setFaqCat(link.dataset.faqcat);
});

document.querySelector('.faq-con')?.addEventListener('click', event => {
  const button = event.target.closest('.fq');
  if (!button) return;
  const item = button.closest('.fi');
  if (!item) return;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.fi.open').forEach(openItem => setFaqItemOpen(openItem, false));
  if (!wasOpen) setFaqItemOpen(item, true);
});

const faqSearch = document.getElementById('faqSearch');
if (faqSearch) {
  faqSearch.addEventListener('input', () => {
    const query = faqSearch.value.toLowerCase().trim();
    if (!query) {
      const active = document.querySelector('.fp.active');
      if (active) setFaqCat(active.dataset.faqcat);
      return;
    }
    document.querySelectorAll('.fi').forEach(item => {
      item.classList.toggle('hidden', !item.textContent.toLowerCase().includes(query));
    });
  });
}

const wlForm = document.getElementById('wlForm');
if (wlForm) {
  wlForm.addEventListener('submit', event => {
    event.preventDefault();
    const btn = wlForm.querySelector('button[type="submit"]');
    if (!btn) return;
    const originalText = btn.textContent;
    btn.textContent = '✓ Interesse registado!';
    btn.classList.add('success');
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.remove('success');
      btn.disabled = false;
      wlForm.reset();
    }, 4000);
  });
}

setFaqCat('candidatura');
