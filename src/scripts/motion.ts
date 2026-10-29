/* Interactive motion layer for SDI Ingenieros. */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(pointer: fine)');
const root = document.documentElement;

/* ── Scroll progress, header state and hero depth ───────────────────── */
const progressBar = document.querySelector<HTMLElement>('[data-scroll-progress]');
const header = document.querySelector<HTMLElement>('.header');
const hero = document.querySelector<HTMLElement>('.hero');
let scrollQueued = false;

const updateScroll = () => {
  scrollQueued = false;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  if (progressBar) progressBar.style.transform = `scaleX(${ratio})`;
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
  if (hero && !reduceMotion.matches) {
    hero.style.setProperty('--hero-scroll', `${Math.min(window.scrollY, 700) * -0.055}px`);
  }
};

const queueScroll = () => {
  if (scrollQueued) return;
  scrollQueued = true;
  requestAnimationFrame(updateScroll);
};

updateScroll();
window.addEventListener('scroll', queueScroll, { passive: true });
window.addEventListener('resize', queueScroll, { passive: true });

/* ── Active navigation link ─────────────────────────────────────────── */
const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('.desktop-nav a[href*="#"]')];
const sections = navLinks
  .map((link) => {
    const id = link.hash.replace('#', '');
    const section = document.getElementById(id);
    return section ? { link, section } : null;
  })
  .filter((item): item is { link: HTMLAnchorElement; section: HTMLElement } => Boolean(item));

if (sections.length && 'IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sections.forEach(({ link, section }) =>
          link.classList.toggle('is-active', section === entry.target),
        );
      });
    },
    { rootMargin: '-42% 0px -52% 0px', threshold: 0 },
  );
  sections.forEach(({ section }) => navObserver.observe(section));
}

/* ── Reveal choreography ────────────────────────────────────────────── */
const revealSelector = [
  '.section-heading',
  '.about-copy',
  '.about-principles > div',
  '.clients',
  '.image-card',
  '.service',
  '.purpose > div',
  '.purpose .values-line',
  '.process-intro',
  '.steps li',
  '.experience-carousel',
  '.all-clients',
  '.testimonial',
  '.faq > div:first-child',
  '.faq-deck',
  '.contact-copy',
  '.contact-form',
].join(',');

if (!reduceMotion.matches && 'IntersectionObserver' in window) {
  const revealItems = [...document.querySelectorAll<HTMLElement>(revealSelector)];
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.06, rootMargin: '0px 0px -6% 0px' },
  );

  revealItems.forEach((item, index) => {
    item.classList.add('reveal');
    item.style.setProperty('--reveal-delay', `${(index % 4) * 65}ms`);
    revealObserver.observe(item);
  });

  reduceMotion.addEventListener('change', (event) => {
    if (!event.matches) return;
    revealObserver.disconnect();
    revealItems.forEach((item) => item.classList.add('is-visible'));
  });
}

/* ── Custom cursor ──────────────────────────────────────────────────── */
const cursorDot = document.querySelector<HTMLElement>('.cursor-dot');
const cursorRing = document.querySelector<HTMLElement>('.cursor-ring');

if (cursorDot && cursorRing && finePointer.matches && !reduceMotion.matches) {
  root.classList.add('has-custom-cursor');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let frame = 0;
  let visible = false;

  const showCursor = () => {
    if (visible) return;
    visible = true;
    cursorDot.classList.add('is-visible');
    cursorRing.classList.add('is-visible');
  };

  const hideCursor = () => {
    visible = false;
    cursorDot.classList.remove('is-visible');
    cursorRing.classList.remove('is-visible');
  };

  const renderCursor = () => {
    frame = 0;
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    if (Math.abs(mouseX - ringX) > 0.2 || Math.abs(mouseY - ringY) > 0.2) {
      frame = requestAnimationFrame(renderCursor);
    }
  };

  const startCursor = () => {
    if (!frame) frame = requestAnimationFrame(renderCursor);
  };

  document.addEventListener(
    'pointermove',
    (event) => {
      if (event.pointerType !== 'mouse') return;
      mouseX = event.clientX;
      mouseY = event.clientY;
      showCursor();
      startCursor();
    },
    { passive: true },
  );

  document.addEventListener('pointerover', (event) => {
    const target = event.target as Element | null;
    if (!target || !(target instanceof Element)) return;
    const text = Boolean(target.closest('input, textarea, select'));
    const interactive = Boolean(
      target.closest('a, button, summary, [role="button"], [data-cursor="hover"]'),
    );
    cursorRing.classList.toggle('is-text', text);
    cursorRing.classList.toggle('is-hover', interactive && !text);
  });

  document.addEventListener('pointerdown', () => cursorRing.classList.add('is-press'));
  document.addEventListener('pointerup', () => cursorRing.classList.remove('is-press'));
  document.addEventListener('mouseleave', hideCursor);
  document.addEventListener('mouseenter', showCursor);
  window.addEventListener('blur', hideCursor);
}

/* ── Magnetic buttons ───────────────────────────────────────────────── */
if (finePointer.matches && !reduceMotion.matches) {
  document
    .querySelectorAll<HTMLElement>(
      '.button, .slider-buttons button, .hero-bottom a, .circle-arrow, .experience-navigation button',
    )
    .forEach((element) => {
      element.setAttribute('data-magnetic', '');
      const strength = element.classList.contains('button') ? 0.24 : 0.34;
      const limit = element.classList.contains('button') ? 8 : 6;

      element.addEventListener('pointermove', (event) => {
        const rect = element.getBoundingClientRect();
        const offsetX = (event.clientX - rect.left - rect.width / 2) * strength;
        const offsetY = (event.clientY - rect.top - rect.height / 2) * strength;
        element.style.setProperty('--mag-x', `${Math.max(-limit, Math.min(limit, offsetX))}px`);
        element.style.setProperty('--mag-y', `${Math.max(-limit, Math.min(limit, offsetY))}px`);
      });

      element.addEventListener('pointerleave', () => {
        element.style.setProperty('--mag-x', '0px');
        element.style.setProperty('--mag-y', '0px');
      });
    });
}

/* ── 3D tilt for image surfaces ─────────────────────────────────────── */
if (finePointer.matches && !reduceMotion.matches) {
  document
    .querySelectorAll<HTMLElement>('.image-card, .process-photo, .experience-visual')
    .forEach((element) => {
      element.setAttribute('data-tilt', '');
      const range = element.classList.contains('image-card') ? 5 : 3.4;

      element.addEventListener('pointermove', (event) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        element.classList.add('is-tilting');
        element.style.setProperty('--tilt-x', `${(-y * range).toFixed(2)}deg`);
        element.style.setProperty('--tilt-y', `${(x * range).toFixed(2)}deg`);
      });

      element.addEventListener('pointerleave', () => {
        element.classList.remove('is-tilting');
        element.style.setProperty('--tilt-x', '0deg');
        element.style.setProperty('--tilt-y', '0deg');
      });
    });
}

/* ── Cursor spotlight inside cards ──────────────────────────────────── */
document
  .querySelectorAll<HTMLElement>(
    '.service, .testimonial, .about-principles > div, .purpose article, .contact-form, .faq-deck, .contact',
  )
  .forEach((element) => {
    element.addEventListener('pointermove', (event) => {
      const rect = element.getBoundingClientRect();
      element.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
      element.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
    });
  });

/* ── Hero light follows the cursor ──────────────────────────────────── */
if (hero && finePointer.matches && !reduceMotion.matches) {
  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    hero.style.setProperty('--hero-x', `${(-x * 18).toFixed(1)}px`);
    hero.style.setProperty('--hero-y', `${(-y * 14).toFixed(1)}px`);
    hero.style.setProperty('--hero-mx', `${((event.clientX - rect.left) / rect.width) * 100}%`);
    hero.style.setProperty('--hero-my', `${((event.clientY - rect.top) / rect.height) * 100}%`);
  });

  hero.addEventListener('pointerleave', () => {
    hero.style.setProperty('--hero-x', '0px');
    hero.style.setProperty('--hero-y', '0px');
    hero.style.setProperty('--hero-mx', '72%');
    hero.style.setProperty('--hero-my', '42%');
  });
}

/* ── Drag-to-scroll testimonials ────────────────────────────────────── */
const testimonialTrack = document.querySelector<HTMLElement>('.testimonial-track');

if (testimonialTrack) {
  let dragging = false;
  let startX = 0;
  let startScroll = 0;
  let lastX = 0;
  let velocity = 0;

  testimonialTrack.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    dragging = true;
    startX = event.clientX;
    startScroll = testimonialTrack.scrollLeft;
    lastX = event.clientX;
    velocity = 0;
    testimonialTrack.classList.add('is-dragging');
    testimonialTrack.setPointerCapture(event.pointerId);
  });

  testimonialTrack.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    velocity = event.clientX - lastX;
    lastX = event.clientX;
    testimonialTrack.scrollLeft = startScroll - (event.clientX - startX);
  });

  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    testimonialTrack.classList.remove('is-dragging');
    if (Math.abs(velocity) > 5) {
      testimonialTrack.scrollBy({
        left: -velocity * 7,
        behavior: reduceMotion.matches ? 'instant' : 'smooth',
      });
    }
  };

  testimonialTrack.addEventListener('pointerup', endDrag);
  testimonialTrack.addEventListener('pointercancel', endDrag);
  testimonialTrack.addEventListener('pointerleave', endDrag);
}
