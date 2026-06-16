/**
 * main.js — Karthic N A Portfolio
 *
 * Each feature is a self-contained init function.
 * Call order at the bottom reflects dependency (data must load before renderer).
 *
 * Responsibilities:
 *   initScrollProgress   — scroll progress bar
 *   initCursorGlow       — mouse-following glow
 *   initNav              — mobile toggle + active-link tracking
 *   initReveal           — IntersectionObserver scroll-reveal
 *   initStatCounters     — animated number counters
 *   initTypingEffect     — typewriter role titles
 *   initParticleCanvas   — hero canvas particle network
 *   initProjectFilter    — category filter tabs (All / XR / Software Dev)
 *   renderProjects       — builds project cards from PROJECTS data
 *   initProjectCards     — stagger animation for cards
 *   initCertsModal       — certifications Google Drive modal
 */

/* ─────────────────────────────────────────────
   Scroll progress bar
───────────────────────────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (total > 0) bar.style.width = (window.scrollY / total * 100) + '%';
  }, { passive: true });
}

/* ─────────────────────────────────────────────
   Cursor glow
───────────────────────────────────────────── */
function initCursorGlow(reduced) {
  const glow = document.getElementById('cursorGlow');
  if (!glow || reduced) return;
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  }, { passive: true });
}

/* ─────────────────────────────────────────────
   Navigation — mobile toggle + active link
───────────────────────────────────────────── */
function initNav() {
  const nav    = document.getElementById('mainNav');
  const toggle = document.getElementById('navToggle');

  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = document.querySelectorAll('section[id], #contact');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = 'hero';
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 140) current = s.id;
    });
    navLinks.forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });
}

/* ─────────────────────────────────────────────
   Scroll reveal
───────────────────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
}

/* ─────────────────────────────────────────────
   Animated stat counters
───────────────────────────────────────────── */
function initStatCounters() {
  function animateCount(el) {
    const target   = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 1600;
    const start    = performance.now();

    function tick(now) {
      const t     = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && !e.target.dataset.done) {
        e.target.dataset.done = '1';
        animateCount(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-num[data-count]').forEach((el) => obs.observe(el));
}

/* ─────────────────────────────────────────────
   Typewriter role titles
───────────────────────────────────────────── */
function initTypingEffect(reduced) {
  if (reduced) return;
  const roles = ['XR Developer', 'Unity Engineer', 'AI/ML Builder', 'Software Engineer'];
  const el    = document.getElementById('typedRole');
  if (!el) return;

  let ri = 0, ci = 0, deleting = false;

  function typeLoop() {
    const word = roles[ri];
    el.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ++ci);

    if (!deleting && ci === word.length) {
      deleting = true;
      setTimeout(typeLoop, 2000);
      return;
    }
    if (deleting && ci === 0) {
      deleting = false;
      ri = (ri + 1) % roles.length;
    }
    setTimeout(typeLoop, deleting ? 45 : 85);
  }
  setTimeout(typeLoop, 1200);
}

/* ─────────────────────────────────────────────
   Hero particle canvas
───────────────────────────────────────────── */
function initParticleCanvas(reduced) {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas || reduced) return;

  const ctx = canvas.getContext('2d');
  let w, h, particles = [];

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    w = canvas.width  = rect.width;
    h = canvas.height = rect.height;
  }

  function initParticles() {
    particles = [];
    const count = Math.min(70, Math.floor((w * h) / 12000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.4,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,212,255,0.55)';
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 110) {
          ctx.strokeStyle = `rgba(0,212,255,${0.12 * (1 - d / 110)})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }

  resize();
  initParticles();
  window.addEventListener('resize', () => { resize(); initParticles(); });
  draw();
}

/* ─────────────────────────────────────────────
   Render project cards from data
───────────────────────────────────────────── */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  const catLabel = { xr: 'XR', software: 'Software Dev', both: 'XR + SW' };
  const catClass = { xr: 'cat-xr', software: 'cat-software', both: 'cat-both' };

  grid.innerHTML = PROJECTS.map((p, idx) => {
    const tagsHtml = p.tags.map((t) => `<span class="tag">${t}</span>`).join('');
    const featuredClass = p.featured ? ' featured' : '';
    const badgeHtml = p.featured ? '<span class="project-badge">Featured</span>' : '';
    const catBadge = `<span class="project-cat-badge ${catClass[p.category]}">${catLabel[p.category]}</span>`;

    return `
      <a class="project-card${featuredClass} visible-card"
         data-category="${p.category}"
         style="--thumb: ${p.thumb};"
         href="${p.repo}"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="${p.name} — open GitHub repository">
        <div class="project-thumb">
          ${badgeHtml}
          ${catBadge}
        </div>
        <div class="project-body">
          <div class="project-num">${p.num}</div>
          <div class="project-name">${p.name}</div>
          <div class="project-desc">${p.desc}</div>
          <div class="tags">${tagsHtml}</div>
          <span class="project-link">→ Open repository</span>
        </div>
      </a>`;
  }).join('');
}

/* ─────────────────────────────────────────────
   Project category filter tabs
───────────────────────────────────────────── */
function initProjectFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const grid    = document.getElementById('projectsGrid');
  if (!buttons.length || !grid) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const cards  = grid.querySelectorAll('.project-card');

      cards.forEach((card) => {
        const cat   = card.dataset.category;
        const match = filter === 'all' || cat === filter || cat === 'both';

        // featured cards span 2 cols — restore when shown, collapse when hidden
        if (!match) {
          card.classList.add('hidden-card');
        } else {
          card.classList.remove('hidden-card');
        }
      });

      // re-number visible cards
      let count = 1;
      cards.forEach((card) => {
        if (!card.classList.contains('hidden-card')) {
          const numEl = card.querySelector('.project-num');
          if (numEl) numEl.textContent = 'PROJECT_0' + count++;
        }
      });
    });
  });
}

/* ─────────────────────────────────────────────
   Project card stagger animation on scroll
───────────────────────────────────────────── */
function initProjectCards() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const cards = grid.querySelectorAll('.project-card');
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add('visible-card'), i * 80);
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.08 });

  obs.observe(grid);
}

/* ─────────────────────────────────────────────
   Certifications modal
───────────────────────────────────────────── */
function initCertsModal() {
  const modal = document.getElementById('certsModal');
  if (!modal) return;

  const open = () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.getElementById('openCertsModal')?.addEventListener('click', open);
  document.querySelectorAll('[data-open-certs]').forEach((el) => el.addEventListener('click', open));
  document.getElementById('closeCertsModal')?.addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) close();
  });
}

/* ─────────────────────────────────────────────
   Boot — wire everything up
───────────────────────────────────────────── */
(function boot() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  renderProjects();       // data → DOM (must be before filter/cards init)
  initProjectFilter();
  initProjectCards();

  initScrollProgress();
  initCursorGlow(reduced);
  initNav();
  initReveal();
  initStatCounters();
  initTypingEffect(reduced);
  initParticleCanvas(reduced);
  initCertsModal();
})();
