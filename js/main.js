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
      // ---- MEGA GALLERY: UI/UX Projects Map ----
      const uiuxData = [
        {
          subName: 'women-salon',
          subTitle: 'Women Salon',
          folder: 'uiux-app/WOMEN SALON BOOKING UI DESIGN',
          imgs: '2.png,3.png,4.png,5.png,6.png,7.png,8.png,9.png,10.png,11.png,12.png,13.png,14.png,16.png,17.png,18.png,19.png,20.png,21.png,22.png,23.png,24.png,25.png,26.png,27.png,28.png,29.png,30.png,31.png,32.png,33.png,34.png,35.png,36.png,37.png,38.png,39.png,40.png,41.png,42.png,43.png,44.png,45.png,46.png,47.png'
        },
        {
          subName: 'women-salon',
          subTitle: 'Women Salon',
          folder: 'uiux-app/Women Salon New User UI ',
          imgs: '1.png,2.png,3.png,4.png,5.png,6.png,7.png,8.png,9.png,10.png,11.png,12.png,13.png,14.png,15.png,16.png,17.png,18.png,19.png,20.png,21.png,22.png,23.png,24.png,25.png,26.png,27.png,28.png,29.png,30.png,31.png,32.png,33.png,34.png,35.png,36.png,37.png'
        },
        {
          subName: 'men-salon',
          subTitle: 'Men Salon',
          folder: 'uiux-app/men salon ui design ',
          imgs: '3.png,4.png,5.png,6.png,7.png,9.png,10.png,11.png,12.png,13.png,14.png,15.png,16.png,17.png,18.png,19.png,20.png,21.png,22.png,23.png,24.png,25.png,26.png,27.png,28.png,30.png,31.png,32.png,34.png,logo salon men.png'
        },
        {
          subName: 'men-salon',
          subTitle: 'Men Salon',
          folder: 'uiux-app/men salon user ui design',
          imgs: '1.png,2.png,3.png,4.png,5.png,6.png,7.png,8.png,9.png,10.png,11.png,12.png,13.png,14.png,15.png,16.png,17.png,18.png,19.png,20.png,21.png,22.png,23.png,24.png,25.png,26.png,27.png,28.png,29.png,30.png,31.png,32.png,33.png,34.png,35.png,36.png,37.png,38.png,39.png,40.png,41.png,42.png,43.png,44.png,45.png,46.png,47.png,48.png,49.png,50.png,51.png,52.png,53.png,54.png,55.png,56.png,57.png,58.png,59.png,60.png,61.png,62.png,63.png,64.png,65.png,66.png,67.png,68.png,69.png'
        },
        {
          subName: 'taxi-app',
          subTitle: 'Taxi App',
          folder: 'uiux-app/Taxi Driver App UI Design with logo',
          imgs: '2.png,3.png,4.png,5.png,6.png,7.png,8.png,9.png,10.png,11.png,12.png,13.png,14.png,15.png,16.png,17.png,18.png,19.png,20.png,22.png,23.png,24.png,25.png,26.png,27.png,28.png,30.png,31.png,32.png,33.png,34.png,35.png,36.png,37.png,38.png,39.png,40.png,41.png,42.png,43.png,44.png,45.png,46.png,forget passw.png,login page.png,taxi driver partner app  logo.png'
        },
        {
          subName: 'taxi-app',
          subTitle: 'Taxi App',
          folder: 'uiux-app/User Taxi Driver App UI Designer',
          imgs: '1.png,2.png,3.png,4.png,5.png,6.png,7.png,8.png,9.png,10.png,11.png,12.png,13.png,14.png,15.png,16.png,17.png,18.png,19.png,20.png,21.png,22.png,23.png,24.png,25.png,26.png,27.png,28.png,29.png,30.png,31.png,32.png,33.png,34.png,35.png,36.png,37.png,38.png,39.png,40.png,41.png,42.png,43.png,44.png,45.png'
        },
        {
          subName: 'food-sushi',
          subTitle: 'Food App',
          folder: 'uiux-app/Food User sushi ya UI Design',
          imgs: '1.png,2.png,3.png,4.png,5.png,6.png,7.png,8.png,9.png,10.png,11.png,12.png,13.png,14.png,15.png,16.png,17.png,18.png,19.png,20.png,21.png,22.png,23.png,24.png,25.png,26.png,27.png,28.png,29.png,30.png,31.png,32.png,33.png,34.png,35.png,36.png,37.png,38.png,39.png,40.png,41.png,42.png,43.png,44.png,45.png,46.png,47.png,48.png,49.png,50.png,51.png,52.png,53.png,54.png,55.png,56.png,57.png,58.png,59.png,60.png,61.png,62.png,63.png,64.png,65.png,66.png,67.png,68.png,69.png'
        },
        {
          subName: 'book-for-ride',
          subTitle: 'Book For Ride',
          folder: 'uiux-app/Book For Ride  Service Provider UI Design',
          imgs: '1.png,2.png,3.png,4.png,5.png,6.png,7.png,8.png,9.png,10.png,11.png,12.png,13.png,14.png,15.png,16.png,17.png,18.png,19.png,20.png,21.png,22.png,23.png,24.png,25.png,26.png,logo.png'
        },
        {
          subName: 'web-ui',
          subTitle: 'Web UI',
          folder: 'uiux-app/ web ui design',
          imgs: '0909ba4c-c019-4b60-8b7b-cb0fb2328e56.png,211aec4a-4136-404b-a6b2-8a595564b775.png,2bd86f15-b5a2-4231-b0ff-dd90b847bacd.png,383b15b8-819b-4185-8e36-9bf2a7e73e02.png,4ec10e21-de90-497a-8585-08587bc63b33.jpg,669093f4-36e3-4a4d-a5e4-a783af8eba23.png,c152b42c-5f5d-4fe9-855f-ed1cf58b1d0e.png,fcb0bc26-0e3a-4433-bf3b-e6569bba89ab.jpg'
        },
        {
          subName: 'e-commerce',
          subTitle: 'E-Commerce Redesign',
          folder: 'webdesign',
          imgs: '1.png,2.png'
        },
        {
          subName: 'dashboard',
          subTitle: 'Analytics Dashboard',
          folder: 'dashboard',
          imgs: '1.png,2.png'
        }
      ];

      // Build filter bar (deduplicate merged sub-projects)
      const allBtn = document.createElement('button');
      allBtn.className = 'gallery-filter-btn active';
      allBtn.textContent = 'All';
      allBtn.addEventListener('click', (e) => filterGallery('all', e.currentTarget));
      galleryFilter.appendChild(allBtn);

      const addedSubs = new Set();
      uiuxData.forEach(sp => {
        if (addedSubs.has(sp.subName)) return;
        addedSubs.add(sp.subName);
        const btn = document.createElement('button');
        btn.className = 'gallery-filter-btn';
        btn.textContent = sp.subTitle;
        btn.addEventListener('click', (e) => filterGallery(sp.subName, e.currentTarget));
        galleryFilter.appendChild(btn);
      });

      // Build grid with ALL images tagged by sub-project
      uiuxData.forEach(sp => {
        const imageList = sp.imgs.split(',').map(s => s.trim());
        imageList.forEach((name, i) => {
          const src = `assets/images/projects/${sp.folder}/${name.split('/').map(encodeURIComponent).join('/')}`;
          const item = document.createElement('div');
          item.className = 'lightbox-grid-item';
          item.setAttribute('data-sub', sp.subName);

          if (isVideo(name)) {
            item.innerHTML = `<video src="${src}" muted autoplay loop playsinline preload="metadata"></video>`;
            item.querySelector('video').addEventListener('click', (e) => {
              e.stopPropagation();
              openFullview(src, true);
            });
          } else {
            item.innerHTML = `<img src="${src}" alt="${sp.subTitle} — ${i + 1}" loading="lazy" />`;
            item.addEventListener('click', () => openFullview(src, false));
          }
          lightboxGrid.appendChild(item);
        });
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
