/* ============================================
   SANJAY KUMAR — Portfolio
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- DOM Refs ---------- */
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navAnchors = document.querySelectorAll('.nav-links a');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const reveals = document.querySelectorAll('.reveal');
  const sections = document.querySelectorAll('section[id]');
  const themeToggle = document.getElementById('themeToggle');

  /* ---------- Theme Management ---------- */
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.remove('light-theme');
  } else {
    // Default is light-theme
    document.body.classList.add('light-theme');
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  /* ---------- Gallery grid refs ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxSubtitle = document.getElementById('lightboxSubtitle');
  const lightboxGrid = document.getElementById('lightboxGrid');
  const lightboxOverlay = document.querySelector('.lightbox-overlay');

  // Create fullscreen view overlay
  const fullview = document.createElement('div');
  fullview.className = 'lightbox-fullview';
  fullview.innerHTML = '<img src="" alt="Full view" />';
  document.body.appendChild(fullview);
  const fullviewImg = fullview.querySelector('img');

  /** Check if a filename is a video */
  function isVideo(name) {
    return /\.(mp4|mov|webm)$/i.test(name);
  }

  /* =============================================
     GALLERY — open / close / fullview
     ============================================= */

  /** Open gallery grid for a project card */
  function openLightbox(card) {
    const folder = card.getAttribute('data-folder');
    const title = card.getAttribute('data-title') || '';
    const subtitle = card.getAttribute('data-subtitle') || '';
    const galleryFilter = document.getElementById('galleryFilter');

    // Set header
    lightboxTitle.textContent = title;
    lightboxSubtitle.textContent = subtitle;
    lightboxGrid.innerHTML = '';
    galleryFilter.innerHTML = '';

    // Check if this is the main UI/UX card (category=uiux, no data-subproject)
    const isMainUiux = card.getAttribute('data-category') === 'uiux' && !card.getAttribute('data-subproject');

    if (isMainUiux) {
      // ---- Simple flat gallery for UI/UX projects ----
      const uiuxImages = [
        'book your ride copy.webp',
        'Groom Room Men Salon copy.webp',
        'HURL TAXI APP UI DESIGN copy.webp',
        'susha ya food  copy.webp'
      ];

      uiuxImages.forEach((name, i) => {
        const src = `assets/images/projects/uiux-app/${encodeURIComponent(name)}`;
        const item = document.createElement('div');
        item.className = 'lightbox-grid-item';

        if (isVideo(name)) {
          item.innerHTML = `<video src="${src}" muted autoplay loop playsinline preload="metadata"></video>`;
          item.querySelector('video').addEventListener('click', (e) => {
            e.stopPropagation();
            openFullview(src, true);
          });
        } else {
          item.innerHTML = `<img src="${src}" alt="UI/UX Design — ${i + 1}" loading="lazy" />`;
          item.addEventListener('click', () => openFullview(src, false));
        }
        lightboxGrid.appendChild(item);
      });

    } else {
      // ---- NORMAL GALLERY: single project ----
      const imgNames = card.getAttribute('data-images').split(',').map(s => s.trim());
      imgNames.forEach((name, i) => {
        const src = `assets/images/projects/${folder}/${name.split('/').map(encodeURIComponent).join('/')}`;
        const item = document.createElement('div');
        item.className = 'lightbox-grid-item';

        if (isVideo(name)) {
          item.innerHTML = `<video src="${src}" muted autoplay loop playsinline preload="metadata"></video>`;
          item.querySelector('video').addEventListener('click', (e) => {
            e.stopPropagation();
            openFullview(src, true);
          });
        } else {
          item.innerHTML = `<img src="${src}" alt="${title} — Image ${i + 1}" loading="lazy" />`;
          item.addEventListener('click', () => openFullview(src, false));
        }
        lightboxGrid.appendChild(item);
      });
    }

    // Activate modal
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    lightbox.scrollTop = 0;
  }

  /** Filter images inside the gallery by sub-project */
  function filterGallery(subName, clickedBtn) {
    // Update active button
    document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
    clickedBtn.classList.add('active');

    // Show/hide grid items
    lightboxGrid.querySelectorAll('.lightbox-grid-item').forEach(item => {
      if (subName === 'all' || item.getAttribute('data-sub') === subName) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }

  /** Close gallery */
  function closeLightbox() {
    lightbox.classList.remove('active');
    closeFullview();
    document.body.style.overflow = '';
    // Pause any playing videos
    lightboxGrid.querySelectorAll('video').forEach(v => v.pause());
  }

  /** Open single media fullscreen */
  function openFullview(src, video) {
    if (video) {
      fullview.innerHTML = `<video src="${src}" controls autoplay playsinline style="max-width:92%;max-height:92vh;border-radius:var(--radius);box-shadow:0 16px 60px rgba(0,0,0,.6);border:1px solid var(--glass-border);"></video>`;
    } else {
      fullview.innerHTML = `<img src="${src}" alt="Full view" />`;
    }
    fullview.classList.add('active');
  }

  /** Close fullscreen view */
  function closeFullview() {
    fullview.classList.remove('active');
    const vid = fullview.querySelector('video');
    if (vid) vid.pause();
  }

  /* ---------- Gallery event listeners ---------- */

  // Click project card → open gallery
  projectCards.forEach(card => {
    card.addEventListener('click', () => openLightbox(card));
  });

  // Close button
  lightboxClose.addEventListener('click', closeLightbox);

  // Click overlay → close
  lightboxOverlay.addEventListener('click', closeLightbox);

  // Click fullview → close fullview
  fullview.addEventListener('click', closeFullview);

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (fullview.classList.contains('active')) {
        closeFullview();
      } else if (lightbox.classList.contains('active')) {
        closeLightbox();
      }
    }
  });

  /* =============================================
     NAVBAR — scroll / hamburger
     ============================================= */

  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    highlightNav();
  };
  window.addEventListener('scroll', onScroll);

  function highlightNav() {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navAnchors.forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href') === '#' + id) {
            a.classList.add('active');
          }
        });
      }
    });
  }

  /* ---------- Mobile hamburger ---------- */
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navAnchors.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  const subFilterBtns = document.querySelectorAll('.sub-filter-btn');
  let activeFilter = 'all';
  let activeSubFilter = 'all';

  /** Apply both main + sub filters */
  function applyFilters() {
    projectCards.forEach(card => {
      const cat = card.getAttribute('data-category');
      const sub = card.getAttribute('data-subproject') || '';

      let show = false;
      if (activeFilter === 'all') {
        // Hide individual UI/UX sub-projects under "All" — they only show under UI/UX filter
        show = !sub;
      } else if (cat === activeFilter) {
        // If UI/UX filter with sub-filter active
        if (activeFilter === 'uiux' && activeSubFilter !== 'all' && sub) {
          show = sub === activeSubFilter;
        } else {
          show = true;
        }
      }

      if (show) {
        card.classList.remove('hide');
        card.classList.add('show');
      } else {
        card.classList.remove('show');
        card.classList.add('hide');
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');

      const subFilterBar = document.getElementById('subFilterBar');
      if (subFilterBar) {
        if (activeFilter === 'uiux') {
          subFilterBar.style.display = 'flex';
        } else {
          subFilterBar.style.display = 'none';
          activeSubFilter = 'all';
          subFilterBtns.forEach(b => b.classList.remove('active'));
          if (subFilterBtns.length > 0) subFilterBtns[0].classList.add('active');
        }
      }

      applyFilters();
    });
  });

  if (subFilterBtns.length > 0) {
    subFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        subFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeSubFilter = btn.getAttribute('data-subfilter');
        applyFilters();
      });
    });
  }

  /* =============================================
     SCROLL REVEAL (IntersectionObserver)
     ============================================= */

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(el => revealObserver.observe(el));

  /* =============================================
     TYPING EFFECT
     ============================================= */

  const tagline = document.querySelector('.hero-tagline');
  if (tagline) {
    const text = tagline.textContent;
    tagline.textContent = '';
    tagline.style.borderRight = '3px solid var(--yellow)';
    let i = 0;
    const type = () => {
      if (i < text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(type, 50);
      } else {
        setTimeout(() => {
          tagline.style.borderRight = 'none';
        }, 1000);
      }
    };
    setTimeout(type, 800);
  }

  /* =============================================
     SMOOTH SCROLL
     ============================================= */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* =============================================
     COUNTER ANIMATION
     ============================================= */

  const statItems = document.querySelectorAll('.stat-item h4');
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statItems.forEach(el => counterObserver.observe(el));

  function animateCounter(el) {
    const text = el.textContent;
    const match = text.match(/(\d+)/);
    if (!match) return;
    const target = parseInt(match[1], 10);
    const suffix = text.replace(match[1], '');
    let current = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = current + suffix;
    }, 35);
  }
  /* =============================================
     HERO PARTICLE ANIMATION
     ============================================= */

  const canvas = document.getElementById('heroParticles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 60;

    function resizeCanvas() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 197, 24, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245, 197, 24, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      connectParticles();
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }
});
