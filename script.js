/* ══════════════════════════════════
   OKURA CUISINE – script.js
   ══════════════════════════════════ */
'use strict';

/* ─── DATA ─── */
const HOURS = [
  { day: 'Monday',    h: '16:30 – 22:30' },
  { day: 'Tuesday',   h: '16:30 – 22:30' },
  { day: 'Wednesday', h: '16:30 – 22:30' },
  { day: 'Thursday',  h: '16:30 – 22:30' },
  { day: 'Friday',    h: '16:30 – 22:30' },
  { day: 'Saturday',  h: '16:30 – 22:30' },
  { day: 'Sunday',    h: '15:00 – 22:00' },
];

const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=800&q=80', alt: 'Sushi platter', wide: true },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80', alt: 'Seafood dish' },
  { src: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80', alt: 'Japanese bento' },
  { src: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&q=80', alt: 'Sushi rolls', wide: true },
  { src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80', alt: 'Steak dinner' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Restaurant interior' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80', alt: 'Dining ambience' },
  { src: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=80', alt: 'Ramen bowl' },
  { src: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&q=80', alt: 'Food platter' },
];

const MENUS = {
  sushi: {
    title: 'Sushi',
    sub: 'Fresh · Traditional · Japanese Cuisine',
    sections: [

      {
        heading: 'Sashimi (Raw sliced fish)',
        items: [
          { name: 'Tuna Sashimi', desc: '5pcs fresh tuna', price: '€10.8' },
          { name: 'Salmon Sashimi', desc: '5pcs fresh salmon', price: '€10.5' },
          { name: 'Sea Bass Sashimi', desc: '5pcs sea bass', price: '€9.0' },
          { name: 'Chef Selection Sashimi', desc: '12pcs assorted sashimi', price: '€25.8' },
        ]
      },

      {
        heading: 'Hosomaki',
        items: [
          { name: 'Tuna Maki', desc: 'Tuna roll', price: '€10.5' },
          { name: 'Salmon Maki', desc: 'Salmon roll', price: '€9.5' },
          { name: 'Tamago Maki', desc: 'Sweet egg roll', price: '€8.5' },
          { name: 'Avocado Maki', desc: 'Fresh avocado roll', price: '€8.5' },
          { name: 'Cucumber Maki', desc: 'Cucumber roll', price: '€8.0' },
          { name: 'Salmon Avocado Maki', desc: 'Salmon with avocado', price: '€10.5' },
          { name: 'Cooked Salmon Mayo & Avocado', desc: 'Cooked salmon with mayo', price: '€11.0' },
        ]
      },

      {
        heading: 'Nigiri Sushi (2pcs)',
        items: [
          { name: 'Maguro', desc: 'Fresh tuna', price: '€5.2' },
          { name: 'Sake', desc: 'Fresh salmon', price: '€5.0' },
          { name: 'Tai', desc: 'Sea bream', price: '€5.0' },
          { name: 'Tako', desc: 'Octopus', price: '€5.0' },
          { name: 'Unagi', desc: 'Grilled eel', price: '€5.7' },
          { name: 'Ebi', desc: 'Cooked prawn', price: '€5.2' },
          { name: 'Hotate', desc: 'Scallop', price: '€5.0' },
          { name: 'Avocado', desc: 'Fresh avocado', price: '€4.8' },
          { name: 'Tamago', desc: 'Japanese omelette', price: '€4.8' },
          { name: 'Inari Age', desc: 'Sweet tofu pocket', price: '€4.8' },
        ]
      },

      {
        heading: 'Okura Special Rolls',
        items: [
          { name: 'California Roll', desc: 'Crab, avocado, cucumber', price: '€17.8' },
          { name: 'Alaska Roll', desc: 'Salmon, avocado', price: '€18.8' },
          { name: 'Crunchy Roll', desc: 'Deep fried roll with sauce', price: '€19.8' },
          { name: 'Fried Prawn Roll', desc: 'Prawn tempura roll', price: '€18.8' },
          { name: 'Rainbow Roll', desc: 'Mixed fish topping', price: '€19.8' },
        ]
      },

      {
        heading: 'Temaki (Hand Rolls)',
        items: [
          { name: 'California Temaki', desc: 'Crab, avocado, cucumber', price: '€10.8' },
          { name: 'Tempura Prawn Temaki', desc: 'Prawn tempura', price: '€11.8' },
          { name: 'Salmon Temaki', desc: 'Fresh salmon', price: '€11.8' },
          { name: 'Soft Shell Crab Temaki', desc: 'Soft shell crab', price: '€12.8' },
          { name: 'Avocado Temaki', desc: 'Avocado, mayo, lettuce', price: '€10.5' },
        ]
      },

      {
        heading: 'Sushi Platters',
        items: [
          { name: 'Okura Platter', desc: 'Chef recommended sushi selection', price: '€19.8' },
          { name: 'Tokyo Platter', desc: 'Assorted sushi and sashimi', price: '€21.8' },
          { name: 'Sushi Deluxe', desc: 'Premium sushi selection', price: '€26.8' },
          { name: 'Family Platter', desc: 'Large sushi mix for sharing', price: '€90.8' },
        ]
      }

    ]
  },
  dinner: {
    title: 'Dinner',
    sub:   'Japanese Classics · Seasonal Ingredients',
    sections: [

      {
        heading: 'Starters',
        items: [
          { name: 'Edamame', desc: 'Steamed soybeans with sea salt', price: '€7.0' },
          { name: 'Chicken Karaage', desc: 'Japanese fried chicken', price: '€10.5' },
          { name: 'Chicken Yakitori', desc: 'Grilled chicken skewers', price: '€10.5' },
          { name: 'Ebi Tempura', desc: 'Deep fried prawns', price: '€12.8' },
          { name: 'Gyoza', desc: 'Pan fried pork dumplings', price: '€10.5' },
          { name: 'Miso Soup', desc: 'Traditional soybean soup', price: '€5.0' }
        ]
      },

      {
        heading: 'Tempura',
        items: [
          { name: 'Ebi Tempura', desc: 'Prawns fried in tempura batter', price: '€13.8' },
          { name: 'Vegetable Tempura', desc: 'Assorted vegetables', price: '€13.8' },
          { name: 'Tempura Moriawase', desc: 'Mixed tempura platter', price: '€13.8' }
        ]
      },

      {
        heading: 'Ramen',
        items: [
          { name: 'Chashu Ramen', desc: 'Pork broth ramen with chashu pork', price: '€18.8' },
          { name: 'Chicken Ramen', desc: 'Chicken broth ramen', price: '€18.8' },
          { name: 'Seafood Ramen', desc: 'Ramen with mixed seafood', price: '€18.8' },
          { name: 'Beef Ramen', desc: 'Ramen with sliced beef', price: '€18.8' },
          { name: 'Tofu Ramen', desc: 'Vegetarian ramen with tofu', price: '€18.8' }
        ]
      },

      {
        heading: 'Fried Noodles',
        items: [
          { name: 'Yaki Udon', desc: 'Stir fried thick noodles', price: '€18.8' },
          { name: 'Seafood Yaki Soba', desc: 'Fried noodles with seafood', price: '€19.8' },
          { name: 'Chicken Yaki Soba', desc: 'Fried noodles with chicken', price: '€18.8' },
          { name: 'Beef Yaki Soba', desc: 'Fried noodles with beef', price: '€19.5' },
          { name: 'Vegetable Yaki Soba', desc: 'Fried noodles with vegetables', price: '€15.8' }
        ]
      },

      {
        heading: 'Fried Rice',
        items: [
          { name: 'Vegetable Fried Rice', desc: 'Fried rice with mixed vegetables', price: '€15.8' },
          { name: 'Seafood Fried Rice', desc: 'Fried rice with seafood', price: '€18.9' },
          { name: 'Chicken Fried Rice', desc: 'Fried rice with chicken', price: '€18.9' },
          { name: 'Curry Beef Fried Rice', desc: 'Fried rice with curry beef', price: '€18.9' }
        ]
      },

      {
        heading: 'Teppanyaki',
        items: [
          { name: 'Black Angus Fillet', desc: 'Grilled beef with vegetables', price: '€36.8' },
          { name: 'Irish Angus Fillet', desc: 'Premium grilled beef', price: '€32.8' },
          { name: 'Duck Breast', desc: 'Grilled duck breast', price: '€29.8' },
          { name: 'Chicken Breast', desc: 'Grilled chicken breast', price: '€26.8' },
          { name: 'Salmon Fillet', desc: 'Grilled salmon', price: '€26.8' },
          { name: 'Mix Seafood', desc: 'Grilled seafood platter', price: '€30.8' }
        ]
      },

      {
        heading: "Chef's Special",
        items: [
          { name: 'Chirashi Don', desc: 'Assorted sashimi on sushi rice', price: '€22.8' },
          { name: 'Salmon Teriyaki Don', desc: 'Grilled salmon with teriyaki sauce', price: '€18.8' },
          { name: 'Beef Gyudon', desc: 'Japanese beef rice bowl', price: '€18.8' },
          { name: 'Pork Shogayaki Don', desc: 'Pork with ginger sauce', price: '€17.8' },
          { name: 'Chicken Teriyaki Don', desc: 'Chicken with teriyaki sauce', price: '€17.8' }
        ]
      },

      {
        heading: 'Extras',
        items: [
          { name: 'Japanese Rice', desc: 'Steamed rice', price: '€3.5' },
          { name: 'Fried Rice', desc: 'Side portion', price: '€5.0' },
          { name: 'Miso Soup', desc: 'Side soup', price: '€4.0' },
          { name: 'Kimchi', desc: 'Spicy fermented cabbage', price: '€4.0' }
        ]
      }

    ]
  },
  drinks: {
    title: 'Drinks',
    sub:   'Japanese Spirits · Cocktails · Wine',
    sections: [
      { heading: 'Beer/Cider', items: [
        { name: 'Asahi Super Dry', desc: 'Draft', price: '€7'    },
        { name: 'Kirin Ichiban',   desc: '330ml bottle', price: '€6' },
          { name: 'Heineken 0%',   desc: '330ml bottle', price: '€5' },
          { name: 'Stonewell Medium Dry',   desc: '330ml bottle', price: '€6' },
        ]},
      { heading: 'Wine', items: [
        { name: 'House White', desc: 'Chardonnay — glass / bottle', price: '€8 / €32' },
        { name: 'House Red',   desc: 'Merlot — glass / bottle',     price: '€8 / €32' },
        { name: 'Prosecco',    desc: 'Glass / bottle',               price: '€9 / €40' },
      ]},
      { heading: 'Soft Drinks', items: [
        { name: 'Coke',    desc: '',                          price: '€3' },
        { name: 'Coke zero', desc: '',        price: '€3'    },
        { name: '7Up',       desc: '',  price: '€3' },
        { name: 'Fanta',  desc: '',          price: '€3'    },
      ]},
    ],
  },
};

/* ════════════════════════════════════
   INIT
════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  initNavbar();
  initHours();
  initScrollReveal();

  if (page === 'home')    { initHero(); }
  if (page === 'gallery') { initGallery(); initLightbox(); }
  if (page === 'menu')    { initMenuOverlay(); }
  if (page === 'contact') { initContactForm(); }
});

/* ── HERO ── */
function initHero() {
  const c = document.getElementById('heroContent');
  if (c) setTimeout(() => c.classList.add('visible'), 150);
}

/* ── NAVBAR ── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const burger = document.getElementById('hamburger');
  const links  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));
}

/* ── HOURS ── */
function initHours() {
  const list = document.getElementById('hoursList');
  if (!list) return;
  const today = new Date().getDay();
  const idx   = today === 0 ? 6 : today - 1;
  HOURS.forEach((e, i) => {
    const li = document.createElement('li');
    li.className = i === idx ? 'today' : '';
    li.innerHTML = `<strong>${e.day}:</strong> ${e.h}`;
    list.appendChild(li);
  });
}

/* ── GALLERY ── */
function initGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  GALLERY_IMAGES.forEach((item, i) => {
    const el  = document.createElement('div');
    el.className = 'gallery-item' + (item.wide ? ' wide' : '');
    el.style.transitionDelay = `${i * 55}ms`;
    const img = document.createElement('img');
    img.src = item.src; img.alt = item.alt; img.loading = 'lazy';
    el.appendChild(img);
    grid.appendChild(el);
  });
}

/* ── LIGHTBOX ── */
function initLightbox() {
  const lb    = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `<button class="lb-close" aria-label="Close">&times;</button><img src="" alt=""/>`;
  document.body.appendChild(lb);

  const lbImg = lb.querySelector('img');

  const open  = (src, alt) => { lbImg.src = src; lbImg.alt = alt; lb.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const close = ()          => { lb.classList.remove('open'); document.body.style.overflow = ''; setTimeout(() => { lbImg.src = ''; }, 300); };

  document.getElementById('galleryGrid').addEventListener('click', e => {
    const item = e.target.closest('.gallery-item');
    if (item) open(item.querySelector('img').src, item.querySelector('img').alt);
  });
  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ── MENU OVERLAY ── */
function initMenuOverlay() {
  const overlay = document.getElementById('menuOverlay');
  const body    = document.getElementById('menuBody');
  const closeBtn = document.getElementById('menuClose');
  if (!overlay) return;

  const openMenu = key => {
    const data = MENUS[key];
    if (!data) return;
    let html = `
      <div class="sheet-handle"></div>
      <button class="sheet-close" id="menuClose" aria-label="Close">&times;</button>
      <h2 class="sheet-title">${data.title}</h2>
      <p class="sheet-sub">${data.sub}</p>
    `;
    data.sections.forEach(sec => {
      html += `<div class="menu-section"><div class="ms-heading">${sec.heading}</div>`;
      sec.items.forEach(it => {
        html += `
          <div class="menu-item">
            <div class="mi-info">
              <div class="mi-name">${it.name}</div>
              <div class="mi-desc">${it.desc}</div>
            </div>
            <span class="mi-price">${it.price}</span>
          </div>`;
      });
      html += `</div>`;
    });

    body.innerHTML = html;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    body.querySelector('.sheet-close').addEventListener('click', closeMenu);
  };

  const closeMenu = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.menu-card[data-menu]').forEach(card => {
    card.addEventListener('click', () => openMenu(card.dataset.menu));
  });

  overlay.addEventListener('click', e => { if (e.target === overlay) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}

/* ── CONTACT FORM ── */
function initContactForm() {
  const btn     = document.getElementById('sendBtn');
  const success = document.getElementById('formOk');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const vals = ['cname','cemail','csubject','cmessage'].map(id => document.getElementById(id).value.trim());
    if (vals.some(v => !v)) { shakeEl(btn); return; }

    btn.textContent = 'SENDING…'; btn.disabled = true;
    setTimeout(() => {
      success.classList.add('show');
      btn.textContent = '✓ SENT'; btn.style.background = '#28a745';
      setTimeout(() => {
        btn.textContent = 'SEND MESSAGE'; btn.style.background = ''; btn.disabled = false;
        success.classList.remove('show');
        ['cname','cemail','csubject','cmessage'].forEach(id => { document.getElementById(id).value = ''; });
      }, 6000);
    }, 1400);
  });
}

/* ── SCROLL REVEAL ── */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.about-img-col, .about-text, .feature-card, .gallery-item, .menu-card, .ap-item').forEach(el => obs.observe(el));
}

/* ── UTIL ── */
function shakeEl(el) {
  el.style.animation = 'none'; el.offsetHeight;
  el.style.animation = 'shake .4s ease';
  if (!document.getElementById('shakeKf')) {
    const s = document.createElement('style'); s.id = 'shakeKf';
    s.textContent = `@keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}}`;
    document.head.appendChild(s);
  }
}
