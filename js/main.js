/**
 * Main Application Orchestrator
 * Portfolio: Nazmus Sakib (Junior Web Developer & Support Engineer)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Mode (Dark / Normal Light) & Color Theme
  initModeSystem();
  initThemeSystem();

  // 2. Initialize Dynamic Hero Typing
  initDynamicTyping();

  // 3. Initialize Live Time & Status Clock
  initLiveClock();

  // 4. Initialize Navigation & Scroll-Spy
  initNavigation();

  // 5. Initialize Projects Showcase & Filter
  initProjectsShowcase();

  // 6. Initialize Skills Category Switcher
  initSkillsSection();

  // 7. Initialize Contact Form & Clipboard
  initContactInteractions();

  // 8. Initialize Scroll Reveal Observer
  initScrollReveal();
});

/* --------------------------------------------------------------------------
   1. Theme Mode System (Dark / Normal Light) & Color Accent Presets
   -------------------------------------------------------------------------- */
const THEMES = [
  { id: 'emerald', name: 'Emerald & Mint Tech (Clean)' },
  { id: 'blue', name: 'Corporate Blue & Azure' },
  { id: 'laravel', name: 'Laravel Crimson Red' },
  { id: 'cyan', name: 'Cyber Cyan & Teal' },
  { id: 'amber', name: 'Warm Amber & Gold' }
];

function initModeSystem() {
  const savedMode = localStorage.getItem('portfolio-mode') || 'dark';
  applyMode(savedMode);

  const modeBtn = document.getElementById('mode-toggle-btn');
  if (modeBtn) {
    modeBtn.addEventListener('click', () => {
      const currentMode = document.documentElement.getAttribute('data-mode') === 'light' ? 'light' : 'dark';
      const newMode = currentMode === 'dark' ? 'light' : 'dark';
      applyMode(newMode);
      showToast(newMode === 'light' ? 'Switched to Light (Normal) Mode' : 'Switched to Dark Mode', 'success');
    });
  }
}

function applyMode(mode) {
  if (mode === 'light') {
    document.documentElement.setAttribute('data-mode', 'light');
  } else {
    document.documentElement.removeAttribute('data-mode');
  }
  localStorage.setItem('portfolio-mode', mode);
}

function initThemeSystem() {
  const savedTheme = localStorage.getItem('portfolio-theme') || 'emerald';
  applyTheme(savedTheme, false);

  const paletteBtn = document.getElementById('palette-btn');
  if (paletteBtn) {
    paletteBtn.addEventListener('click', () => {
      const currentTheme = localStorage.getItem('portfolio-theme') || 'emerald';
      const currentIndex = THEMES.findIndex(t => t.id === currentTheme);
      const nextIndex = (currentIndex + 1) % THEMES.length;
      const nextTheme = THEMES[nextIndex];
      applyTheme(nextTheme.id, true);
    });
  }
}

function applyTheme(themeId, notify = false) {
  const themeObj = THEMES.find(t => t.id === themeId) || THEMES[0];
  if (themeObj.id === 'emerald') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', themeObj.id);
  }
  localStorage.setItem('portfolio-theme', themeObj.id);
  
  if (notify) {
    showToast(`Color Theme: ${themeObj.name}`, 'info');
  }
}

window.applyTheme = applyTheme;
window.THEMES = THEMES;

/* --------------------------------------------------------------------------
   3. Dynamic Role Typing
   -------------------------------------------------------------------------- */
function initDynamicTyping() {
  const typedTarget = document.getElementById('typed-roles');
  if (!typedTarget) return;

  const roles = [
    "Realtime Food Delivery & eCommerce Developer",
    "PHP & Laravel Developer (2 Yrs)",
    "Technical Support Engineer (2 Yrs)",
    "Vue.js, Realtime Pusher & MySQL",
    "IT Operations & Computer Support (1 Yr)"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  function typeCycle() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typedTarget.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 40;
    } else {
      typedTarget.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingDelay = 2200; // Pause at full word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 450;
    }

    setTimeout(typeCycle, typingDelay);
  }

  typeCycle();
}

/* --------------------------------------------------------------------------
   4. Live Time & Availability Clock
   -------------------------------------------------------------------------- */
function initLiveClock() {
  const clockElement = document.getElementById('live-local-time');
  if (!clockElement) return;

  function updateClock() {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Dhaka',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    clockElement.textContent = now.toLocaleTimeString('en-US', options) + " (BST / Dhaka)";
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* --------------------------------------------------------------------------
   5. Navigation & Scroll Spy
   -------------------------------------------------------------------------- */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (scrollPos > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (scrollPos > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // Scroll Spy active link
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Mobile Menu Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Back To Top Click
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* --------------------------------------------------------------------------
   6. 3D Tilt Card Effect
   -------------------------------------------------------------------------- */
function initTiltEffect() {
  const cards = document.querySelectorAll('.tilt-card');
  if (window.innerWidth < 768) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* --------------------------------------------------------------------------
   7. Projects Showcase, Filtering & Modal
   -------------------------------------------------------------------------- */
function initProjectsShowcase() {
  const projectsGrid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('project-search');
  
  if (!projectsGrid || typeof projectsData === 'undefined') return;

  let currentCategory = 'all';
  let searchQuery = '';

  function renderProjects() {
    projectsGrid.innerHTML = '';

    const filtered = projectsData.filter(proj => {
      const matchCat = currentCategory === 'all' || proj.category === currentCategory;
      const matchQuery = proj.title.toLowerCase().includes(searchQuery) ||
                         proj.description.toLowerCase().includes(searchQuery) ||
                         proj.tags.some(t => t.toLowerCase().includes(searchQuery));
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
          <p style="font-size: 1.15rem; color: var(--text-dim);">No matching projects found.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card glass-card reveal-on-scroll is-revealed';
      
      const githubBtnHtml = proj.githubUrl ? `
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="View GitHub Repository">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        </a>
      ` : '';

      const liveBtnHtml = proj.liveUrl ? `
        <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="View Live Demo">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      ` : '';

      card.innerHTML = `
        <div class="project-img-wrapper">
          <img src="${proj.image}" alt="${proj.title}" loading="lazy">
          ${proj.featured ? '<span class="project-featured-tag">Featured Project</span>' : ''}
        </div>
        <div class="project-body">
          <span class="project-category">${proj.categoryLabel}</span>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>
          <div class="project-tech-stack">
            ${proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <div class="project-actions">
            <button class="btn btn-secondary btn-sm open-case-study" data-project-id="${proj.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              Project Details
            </button>
            <div class="project-links">
              ${githubBtnHtml}
              ${liveBtnHtml}
            </div>
          </div>
        </div>
      `;
      projectsGrid.appendChild(card);
    });

    // Attach Details Modal Handlers
    document.querySelectorAll('.open-case-study').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-project-id');
        openProjectModal(id);
      });
    });
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderProjects();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }

  renderProjects();
}

/* --------------------------------------------------------------------------
   7b. Project Details Modal Popup
   -------------------------------------------------------------------------- */
function openProjectModal(projectId) {
  const modalOverlay = document.getElementById('project-modal-overlay');
  const modalContainer = document.getElementById('modal-dynamic-content');
  if (!modalOverlay || !modalContainer) return;

  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const highlightsHtml = project.highlights ? Object.entries(project.highlights).map(([key, val]) => `
    <div style="background:var(--bg-glass-strong);border:1px solid var(--border-subtle);padding:0.9rem;border-radius:var(--radius-sm);text-align:center;">
      <div style="font-size:1.05rem;font-weight:700;color:var(--primary-light);font-family:var(--font-heading);">${val}</div>
      <div style="font-size:0.75rem;color:var(--text-dim);text-transform:uppercase;margin-top:0.25rem;">${key}</div>
    </div>
  `).join('') : '';

  const githubActionHtml = project.githubUrl ? `
    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
      GitHub Code
    </a>
  ` : '';

  const demoActionHtml = project.liveUrl ? `
    <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      Live Demo
    </a>
  ` : '';

  modalContainer.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="modal-hero-img">
    <div class="modal-body">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:1rem;">
        <span class="project-category">${project.categoryLabel}</span>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          ${githubActionHtml}
          ${demoActionHtml}
        </div>
      </div>
      <h2 style="font-size:1.85rem;margin-bottom:1.25rem;">${project.title}</h2>
      <p style="font-size:1.02rem;line-height:1.75;color:var(--text-main);margin-bottom:1.5rem;">${project.fullDescription}</p>
      
      ${project.liveNote ? `<p style="font-size:0.88rem;color:var(--text-dim);font-style:italic;margin-bottom:1.5rem;">ℹ️ ${project.liveNote}</p>` : ''}

      <h4 style="font-size:0.95rem;text-transform:uppercase;color:var(--text-dim);margin-bottom:0.75rem;letter-spacing:0.05em;">Project Highlights</h4>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(160px, 1fr));gap:0.85rem;margin-bottom:1.75rem;">
        ${highlightsHtml}
      </div>

      <h4 style="font-size:0.95rem;text-transform:uppercase;color:var(--text-dim);margin-bottom:0.75rem;letter-spacing:0.05em;">Technologies Involved</h4>
      <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
        ${project.tags.map(t => `<span class="tech-tag" style="padding:0.4rem 0.8rem;font-size:0.85rem;">${t}</span>`).join('')}
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('modal-close-btn');
  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.onclick = closeModal;
  modalOverlay.onclick = (e) => {
    if (e.target === modalOverlay) closeModal();
  };
  document.onkeydown = (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
  };
}

/* --------------------------------------------------------------------------
   8. Skills Section
   -------------------------------------------------------------------------- */
const skillsData = {
  backend: [
    { name: "PHP (OOP, MVC, Core)", level: 90, icon: "🐘" },
    { name: "Laravel Framework (Routing, Controllers, Blade)", level: 88, icon: "🔴" },
    { name: "Realtime WebSockets & Pusher (Live Order Tracking)", level: 85, icon: "📡" },
    { name: "Payment Gateways (bKash, Nagad, Stripe, PayPal)", level: 86, icon: "💳" },
    { name: "POS Billing & Thermal AutoPrint Integration", level: 88, icon: "🖨️" },
    { name: "Laravel Eloquent ORM & Migrations", level: 86, icon: "⚡" },
    { name: "RESTful APIs & Microservice Endpoints", level: 86, icon: "🔌" },
    { name: "Authentication, Middleware & Security", level: 85, icon: "🔒" }
  ],
  frontend: [
    { name: "HTML5 & Responsive CSS3", level: 92, icon: "🎨" },
    { name: "JavaScript (ES6+)", level: 82, icon: "💛" },
    { name: "Vue.js & Vue 3 (Components, Pinia)", level: 82, icon: "💚" },
    { name: "Inertia.js & Vite", level: 78, icon: "⚡" },
    { name: "Bootstrap & Tailwind CSS", level: 88, icon: "📐" }
  ],
  database: [
    { name: "MySQL & MariaDB", level: 88, icon: "🐬" },
    { name: "eCommerce & Realtime Delivery Database Design", level: 86, icon: "🛒" },
    { name: "Inventory & Order Tracking Relational Schema", level: 85, icon: "📊" },
    { name: "SQL Queries, Optimization & Data Integrity", level: 84, icon: "🔍" },
    { name: "Laravel Migrations & Database Seeders", level: 88, icon: "🗄️" }
  ],
  server: [
    { name: "Linux (Ubuntu) CLI & Commands", level: 82, icon: "🐧" },
    { name: "Apache Web Server & Rewrite Rules", level: 84, icon: "⚙️" },
    { name: "cPanel & Shared Hosting Deployments", level: 88, icon: "🌐" },
    { name: "Laravel Deployment & Storage Linking", level: 86, icon: "🚀" },
    { name: "Server, PHP & Hosting Troubleshooting", level: 88, icon: "🛠️" },
    { name: "Git & GitHub Version Control", level: 85, icon: "🐙" }
  ]
};

function initSkillsSection() {
  const skillsContainer = document.getElementById('skills-grid-container');
  const tabBtns = document.querySelectorAll('.skill-tab-btn');
  if (!skillsContainer) return;

  function renderSkills(category) {
    const list = skillsData[category] || skillsData.backend;
    skillsContainer.innerHTML = '';

    list.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card glass-card';
      card.innerHTML = `
        <div class="skill-card-header">
          <div class="skill-info">
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>
          </div>
          <div class="skill-level-text">${skill.level}%</div>
        </div>
        <div class="skill-progress-bar">
          <div class="skill-progress-fill" style="width: 0%" data-progress="${skill.level}%"></div>
        </div>
      `;
      skillsContainer.appendChild(card);
    });

    // Animate progress bars
    setTimeout(() => {
      document.querySelectorAll('.skill-progress-fill').forEach(bar => {
        bar.style.width = bar.getAttribute('data-progress');
      });
    }, 50);
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-skill-tab');
      renderSkills(cat);
    });
  });

  renderSkills('backend');
}



/* --------------------------------------------------------------------------
   10. Contact Form, Email Copy & Toasts
   -------------------------------------------------------------------------- */
function initContactInteractions() {
  const contactForm = document.getElementById('contact-form');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  // Clipboard copy
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = "sakibnazmus875@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied: sakibnazmus875@gmail.com", 'success');
      }).catch(() => {
        showToast("Email: sakibnazmus875@gmail.com", 'info');
      });
    });
  }

  // Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('sender-name').value.trim();
      const email = document.getElementById('sender-email').value.trim();
      const message = document.getElementById('sender-message').value.trim();

      if (!name || !email || !message) {
        showToast("Please fill in all required fields.", "error");
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span>Sending Message...</span>`;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.reset();
        showToast(`Thank you, ${name}! Your message has been sent successfully.`, "success");
      }, 1000);
    });
  }
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/* --------------------------------------------------------------------------
   11. Scroll Reveal Observer
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
}
