// ---------------------------------------------------------------
// Site settings: edit these values to update the site.
// ---------------------------------------------------------------
const SITE = {
  // Paste a YouTube or Vimeo link to your showreel.
  showreelUrl: '',
  // Testimonials. Each one: the English quote, who it is from (no names, no dates), where it
  // came from (freelance or whatsapp), stars only when the source had a real rating, and the
  // client's original words: a review text, or the chat lines for a WhatsApp message.
  testimonials: [
    {
      quote: 'Excellent service, beyond expectations and delivered on the agreed time. Very cooperative and creative.',
      source: 'freelance',
      stars: 5,
      original: 'الخدمة ممتازة فوق المتوقع، وفي الوقت المتفق عليه، والمصمم كان جدا متعاون ومبدع.',
    },
    {
      quote: "You're creative, truly creative. I'm amazed. God bless your work.",
      source: 'whatsapp',
      chat: ['انت مبدع مبدع', 'والله مبدع', '٤٠ ثانية', 'أنا مذهول الله يطرح البركة في عملك يا اخي'],
    },
    {
      quote: 'A creative person who cares about the finest details. Thank you.',
      source: 'freelance',
      stars: 5,
      original: 'شخص مبدع ومهتم في ادق التفاصيل شكرا',
    },
    {
      quote: 'Kind and cooperative, brings solutions and ideas, and delivers right on time.',
      source: 'freelance',
      stars: 5,
      original: 'شاب لطيف متعاون يعطي حلول و افكار و تسليم بالوقت المحدد',
    },
    {
      quote: 'Thank you so much, great job. Really, really good. Spot on!',
      source: 'whatsapp',
      chat: ['حبيبيييك', 'يعطيك العافية', 'اي كتير منيح', 'كفوو'],
    },
    {
      quote: 'Professional and amazing. Highly recommended!',
      source: 'freelance',
      stars: 5,
      original: 'محترف ورائع، انصح بشدة!',
    },
  ],
  // Contact. WhatsApp number with the country code and no + or spaces; the message is
  // what the chat opens with.
  contact: {
    whatsapp: '201013621022',
    whatsappMessage: "Hi Ibrahim, I saw your portfolio and I'd like to talk about a project.",
    email: 'ibrahimshaaban682@gmail.com',
  },
  // Link to your CV (a PDF in assets/ or a Google Drive link). Empty = the button stays hidden.
  cvUrl: '',
  // Projects. Each one: title, category (the tabs are made from these), YouTube link,
  // vertical (true for 9:16 reels), a short description, and an optional Behance breakdown link.
  projects: [
    {
      title: 'Dr Lama',
      category: 'Clinics',
      youtube: 'https://youtube.com/shorts/dgLxd3npF_Y',
      vertical: true,
      desc: 'A short awareness film shot on a green screen. Around the raw shot I built a whole space: a calm background, warm colour, and graphics that draw each idea the moment she says it, from 3D molecules to neon lines.',
      breakdown: '',
    },
    {
      title: 'Real Estate Project',
      category: 'Real Estate',
      youtube: 'https://youtube.com/shorts/3YSLbzUjkLU',
      vertical: true,
      desc: 'A real estate promo built on aerial shots of the project, with motion graphics that guide the eye to the building and everything around it.',
      breakdown: '',
    },
    {
      title: 'Mercedes-Benz',
      category: 'Cars',
      youtube: 'https://youtube.com/shorts/Qe9v36bxM1E',
      vertical: true,
      desc: 'A short car edit cut to the rhythm of the music, with sound design that gives every shot its weight.',
      breakdown: '',
    },
    {
      title: 'LAVU Eyewear',
      category: 'Promos & Ads',
      youtube: 'https://youtube.com/shorts/PGVic4EDRPU',
      vertical: true,
      desc: 'A social ad for LAVU eyewear, presented on camera: product shots and creator moments cut into a warm, premium promo.',
      breakdown: '',
    },
    {
      title: 'F1 Edit',
      category: 'Cars',
      youtube: 'https://www.youtube.com/watch?v=MdqtB2eEGa4',
      vertical: false,
      desc: 'A Formula 1 edit where picture and sound move as one: every cut, hit and transition lands on the beat.',
      breakdown: '',
    },
  ],
  // Clients shown in the moving strip. Each one: name, and a logo file (PNG with a clear
  // background, or SVG) in assets/img/clients/. Leave logo empty ('') to show the name as text.
  // Optional bg: the card's own colour, for a logo made to sit on its brand colour.
  clients: [
    { name: 'Armadio Closets', logo: 'assets/img/clients/armadio.png' },
    { name: 'Etmam Real Estate', logo: 'assets/img/clients/etmam.png' },
    { name: 'Saudi Games', logo: 'assets/img/clients/saudi-games.png' },
    { name: 'Saudi Film Commission', logo: 'assets/img/clients/film-commission.svg' },
    { name: 'Aleen Real Estate', logo: 'assets/img/clients/aleen.svg' },
    { name: 'Jalasat', logo: 'assets/img/clients/jalasat.png' },
    { name: 'AZ Event', logo: 'assets/img/clients/az-event.png' },
  ],
  // The hero title cycles through these. Each one: [small line, accent line, white line].
  // Leave the small line empty ('') to hide it for that title.
  roles: [
    ['Creative', 'Video', 'Editor'],
    ['Creative', 'Motion', 'Graphics'],
    ['', 'AI Video', 'Creation'],
  ],
};

// Hero title: letters slide up, hold, slide out, next title comes in.
// A line whose text stays the same (e.g. "Creative") is left alone instead of re-animating.
(() => {
  const lines = [...document.querySelectorAll('[data-role]')];
  if (lines.length !== 3 || SITE.roles.length === 0) return;

  const fill = (el, word) => {
    el.innerHTML = '';
    [...word].forEach((c, i) => {
      const s = document.createElement('span');
      s.className = 'ch';
      s.textContent = c;
      s.style.transitionDelay = `${i * 35}ms`;
      el.appendChild(s);
    });
    el.setAttribute('aria-label', word);
  };

  let i = 0;
  const show = (only) => {
    lines.forEach((el, n) => {
      if (only && !only.includes(n)) return;
      el.classList.remove('is-in', 'is-out');
      fill(el, SITE.roles[i][n]);
      void el.offsetWidth;
      el.classList.add('is-in');
    });
  };
  show();
  if (SITE.roles.length < 2 || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  setInterval(() => {
    const next = (i + 1) % SITE.roles.length;
    const changing = [0, 1, 2].filter((n) => SITE.roles[i][n] !== SITE.roles[next][n]);
    changing.forEach((n) => { lines[n].classList.remove('is-in'); lines[n].classList.add('is-out'); });
    setTimeout(() => { i = next; show(changing); }, 650);
  }, 3200);
})();

// Video player: one full-screen overlay for the showreel and every project.
const ytId = (url) => (url || '').match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/)?.[1] || null;
const embedUrl = (url) => {
  const id = ytId(url);
  if (id) return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1&modestbranding=1`;
  const m = (url || '').match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (m) return `https://player.vimeo.com/video/${m[1]}?autoplay=1`;
  return null;
};

const player = (() => {
  const modal = document.querySelector('.reel');
  if (!modal) return { open() {} };
  const frame = modal.querySelector('.reel__frame');
  const info = modal.querySelector('.reel__info');
  let lastFocus = null;

  const open = (url, { vertical = false, title = '', category = '', desc = '', breakdown = '' } = {}) => {
    const src = embedUrl(url);
    if (!src) return;
    lastFocus = document.activeElement;
    modal.classList.toggle('is-vertical', vertical);
    frame.innerHTML = `<iframe src="${src}" title="${title || 'Video'}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    info.hidden = !title;
    if (title) {
      info.querySelector('.reel__cat').textContent = category;
      info.querySelector('.reel__title').textContent = title;
      info.querySelector('.reel__desc').textContent = desc;
      const link = info.querySelector('.reel__link');
      link.hidden = !breakdown;
      if (breakdown) link.href = breakdown;
    }
    modal.setAttribute('aria-label', title || 'Showreel');
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modal.querySelector('.reel__close').focus();
  };
  const close = () => {
    modal.hidden = true;
    frame.innerHTML = '';
    document.body.style.overflow = '';
    lastFocus?.focus();
  };
  modal.querySelector('[data-close-reel]').addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal || e.target.classList.contains('reel__body')) close(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) close(); });
  return { open };
})();

// Showreel button: hidden until SITE.showreelUrl has a link.
document.querySelectorAll('[data-open-reel]').forEach((b) => {
  if (!embedUrl(SITE.showreelUrl)) { b.hidden = true; return; }
  b.addEventListener('click', () => player.open(SITE.showreelUrl));
});

// Projects: numbered cards built from SITE.projects, with a tab per category.
(() => {
  const grid = document.querySelector('.projects__grid');
  const tabs = document.querySelector('.projects__tabs');
  if (!grid || !SITE.projects?.length) return;

  const thumb = (p) => {
    const id = ytId(p.youtube);
    return p.vertical ? `https://i.ytimg.com/vi/${id}/oar2.jpg` : `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  };

  SITE.projects.forEach((p, i) => {
    const li = document.createElement('li');
    li.className = 'card fade';
    li.dataset.category = p.category;
    li.style.setProperty('--d', `${(i % 4) * 0.08}s`);
    li.innerHTML = `
      <button class="card__btn" type="button" aria-label="Play ${p.title}">
        <img class="card__img" src="${thumb(p)}" alt="" loading="lazy" decoding="async">
        <span class="card__num">${String(i + 1).padStart(2, '0')}</span>
        <span class="card__play glass" aria-hidden="true"><i class="ri-play-fill"></i></span>
        <span class="card__text">
          <span class="card__cat">${p.category}</span>
          <span class="card__title">${p.title}</span>
        </span>
      </button>`;
    li.querySelector('button').addEventListener('click', () => player.open(p.youtube, p));
    grid.appendChild(li);
  });

  // Tabs: one per category, in the order they first appear. No "All": until a category
  // is picked, every card shows dimmed with a hint, and a dimmed card opens its own category.
  const icons = {
    'Clinics': 'ri-heart-pulse-line',
    'Real Estate': 'ri-building-2-line',
    'Cars': 'ri-car-line',
    'Promos & Ads': 'ri-megaphone-line',
    'AI Videos': 'ri-sparkling-2-line',
    'Talking Heads': 'ri-user-voice-line',
    'Restaurants': 'ri-restaurant-line',
    'Products': 'ri-shopping-bag-3-line',
    'Social Media': 'ri-smartphone-line',
    'Content Creators': 'ri-user-star-line',
    'Graduation Events': 'ri-graduation-cap-line',
  };
  const hint = document.querySelector('.projects__hint');
  const pick = (c) => {
    grid.classList.remove('is-dim');
    if (hint) hint.classList.add('is-gone');
    reset.hidden = false;
    tabs.querySelectorAll('.projects__tab').forEach((t) => {
      const on = t.dataset.category === c;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    let n = 0;
    grid.querySelectorAll('.card').forEach((card) => {
      const show = card.dataset.category === c;
      card.hidden = !show;
      if (!show) return;
      // Number the cards 01, 02... inside the picked category
      card.querySelector('.card__num').textContent = String(++n).padStart(2, '0');
      card.classList.remove('is-pop'); void card.offsetWidth; card.classList.add('is-pop');
    });
  };
  // "Show all": back to the starting look (every card dimmed, hint shown, no tab picked)
  const reset = document.createElement('button');
  reset.type = 'button';
  reset.className = 'projects__tab projects__tab--reset';
  reset.hidden = true;
  reset.innerHTML = '<i class="ri-arrow-go-back-line" aria-hidden="true"></i>Show all';
  reset.addEventListener('click', () => {
    grid.classList.add('is-dim');
    if (hint) hint.classList.remove('is-gone');
    reset.hidden = true;
    tabs.querySelectorAll('.projects__tab').forEach((t) => {
      t.classList.remove('is-active');
      if (t !== reset) t.setAttribute('aria-selected', 'false');
    });
    grid.querySelectorAll('.card').forEach((card, i) => {
      card.hidden = false;
      card.querySelector('.card__num').textContent = String(i + 1).padStart(2, '0');
      card.classList.remove('is-pop'); void card.offsetWidth; card.classList.add('is-pop');
    });
  });
  grid.classList.add('is-dim');
  // While dimmed, a click on a card opens its category instead of playing the video.
  grid.addEventListener('click', (e) => {
    if (!grid.classList.contains('is-dim')) return;
    const card = e.target.closest('.card');
    if (!card) return;
    e.stopImmediatePropagation();
    pick(card.dataset.category);
  }, true);
  [...new Set(SITE.projects.map((p) => p.category))].forEach((c) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'projects__tab';
    b.dataset.category = c;
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', 'false');
    b.innerHTML = `<i class="${icons[c] || 'ri-film-line'}" aria-hidden="true"></i>`;
    b.append(c);
    b.addEventListener('click', () => pick(c));
    tabs.appendChild(b);
  });
  tabs.appendChild(reset);
})();

// Clients: a strip of logos that moves on its own. The list repeats to fill the strip,
// then the whole group is copied once so the loop has no visible seam.
// Moving the mouse (or a finger) left or right over the strip pushes it along too.
(() => {
  const marquee = document.querySelector('.marquee');
  const track = document.querySelector('.marquee__track');
  if (!track || !SITE.clients?.length) return;
  const item = (c) => {
    const li = document.createElement('li');
    li.className = 'client glass';
    if (c.bg) { li.classList.add('client--filled'); li.style.setProperty('--client-bg', c.bg); }
    if (c.logo) li.innerHTML = `<img class="client__logo" src="${c.logo}" alt="${c.name}" decoding="async" draggable="false">`;
    else li.innerHTML = `<span class="client__name">${c.name}</span>`;
    return li;
  };
  const group = document.createElement('ul');
  group.className = 'marquee__group';
  let list = [...SITE.clients];
  while (list.length < 8) list = list.concat(SITE.clients);
  list.forEach((c) => group.appendChild(item(c)));
  const copy = group.cloneNode(true);
  copy.setAttribute('aria-hidden', 'true');
  track.append(group, copy);

  const speed = matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 40; // px per second
  let x = 0;
  let push = 0; // extra movement from the mouse, eased out over a few frames
  let lastX = null;
  let last = performance.now();
  marquee.addEventListener('pointermove', (e) => {
    if (lastX !== null) push += (e.clientX - lastX) * 1.4;
    lastX = e.clientX;
  });
  const reset = () => { lastX = null; };
  marquee.addEventListener('pointerleave', reset);
  marquee.addEventListener('pointerup', reset);
  marquee.addEventListener('pointercancel', reset);
  const tick = (now) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const step = push * 0.2;
    push -= step;
    x += step - speed * dt;
    const w = group.offsetWidth;
    if (w) { x %= w; if (x > 0) x -= w; }
    track.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0)`;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
})();

// Testimonials: a glass card per quote. Under the English quote, the client's own words:
// a small review box with the stars for freelance reviews, or chat bubbles for WhatsApp.
(() => {
  const grid = document.querySelector('.reviews__grid');
  const list = SITE.testimonials || [];
  if (!grid) return;
  if (!list.length) { grid.closest('section').hidden = true; return; }
  const who = {
    freelance: { role: 'Verified client', from: 'Freelance platform', icon: 'ri-shield-check-line' },
    whatsapp: { role: 'Business owner', from: 'via WhatsApp', icon: 'ri-whatsapp-line' },
  };
  const stars = (n) => '<i class="ri-star-fill"></i>'.repeat(n);
  list.forEach((t, i) => {
    const w = who[t.source] || who.freelance;
    const li = document.createElement('li');
    li.className = 'review glass fade';
    li.style.setProperty('--d', `${(i % 3) * 0.1}s`);
    li.innerHTML = `
      <span class="review__mark" aria-hidden="true">&ldquo;</span>
      ${t.stars ? `<span class="review__stars" aria-label="${t.stars} out of 5 stars">${stars(t.stars)}</span>` : ''}
      <p class="review__text"></p>
      <div class="review__orig review__orig--${t.source}" dir="rtl" lang="ar"></div>
      <div class="review__who">
        <span class="review__avatar" aria-hidden="true"><i class="ri-user-3-line"></i></span>
        <span class="review__meta"><b></b><small></small></span>
        <i class="review__src review__src--${t.source} ${w.icon}" aria-hidden="true"></i>
      </div>`;
    li.querySelector('.review__text').textContent = t.quote;
    li.querySelector('.review__meta b').textContent = w.role;
    li.querySelector('.review__meta small').textContent = w.from;
    const orig = li.querySelector('.review__orig');
    if (t.chat) {
      t.chat.forEach((line) => {
        const s = document.createElement('span');
        s.className = 'review__bubble';
        s.textContent = line;
        orig.appendChild(s);
      });
    } else {
      if (t.stars) orig.insertAdjacentHTML('beforeend', `<span class="review__mini-stars" aria-hidden="true">${stars(t.stars)}</span>`);
      const p = document.createElement('p');
      p.textContent = t.original || '';
      orig.appendChild(p);
    }
    grid.appendChild(li);
  });
})();

// Contact: WhatsApp and email links, plus a copy button for the email.
(() => {
  const c = SITE.contact || {};
  document.querySelectorAll('[data-whatsapp]').forEach((a) => {
    a.href = `https://wa.me/${c.whatsapp}?text=${encodeURIComponent(c.whatsappMessage || '')}`;
  });
  const shown = c.whatsapp ? `+${c.whatsapp.slice(0, 2)} ${c.whatsapp.slice(2, 5)} ${c.whatsapp.slice(5, 8)} ${c.whatsapp.slice(8)}` : '';
  document.querySelectorAll('[data-whatsapp-text]').forEach((s) => { s.textContent = shown; });
  document.querySelectorAll('[data-email]').forEach((a) => { a.href = `mailto:${c.email}`; });
  // Let a long email break only after the @
  document.querySelectorAll('[data-email-text]').forEach((s) => {
    const [user, domain] = (c.email || '').split('@');
    s.textContent = user;
    if (domain) s.append('@', document.createElement('wbr'), domain);
  });
  document.querySelectorAll('[data-copy-email]').forEach((b) => {
    b.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(c.email); } catch (e) { return; }
      const label = b.querySelector('span');
      b.classList.add('is-done'); label.textContent = 'Copied';
      setTimeout(() => { b.classList.remove('is-done'); label.textContent = 'Copy'; }, 1800);
    });
  });
  document.querySelectorAll('[data-year]').forEach((s) => { s.textContent = new Date().getFullYear(); });
})();

// CV button: only shown once SITE.cvUrl has a link.
(() => {
  document.querySelectorAll('[data-cv]').forEach((a) => {
    if (!SITE.cvUrl) return;
    a.href = SITE.cvUrl;
    a.hidden = false;
  });
})();

// Scroll reveal: blocks with .fade slide up as they come into view; numbers inside count up.
(() => {
  const items = [...document.querySelectorAll('.fade, .card')];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || reduce) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const countUp = (el) => {
    const end = Number(el.dataset.count);
    const t0 = performance.now(), dur = 1400;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  document.querySelectorAll('[data-count]').forEach((n) => { n.textContent = '0'; });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-visible');
      e.target.querySelectorAll('[data-count]').forEach(countUp);
      io.unobserve(e.target);
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });
  items.forEach((el) => io.observe(el));
})();

// Custom cursor: eases toward the mouse, grows over links and buttons.
(() => {
  const cursor = document.querySelector('.cursor');
  if (!cursor || matchMedia('(hover: none), (pointer: coarse)').matches) return;

  let x = innerWidth / 2, y = innerHeight / 2;
  let cx = x, cy = y;

  addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
    cursor.classList.add('is-visible');
  });
  document.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'));

  document.addEventListener('mouseover', (e) => {
    cursor.classList.toggle('is-hover', !!e.target.closest('a, button'));
  });

  const tick = () => {
    cx += (x - cx) * 0.18;
    cy += (y - cy) * 0.18;
    cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    requestAnimationFrame(tick);
  };
  tick();
})();

// Navigation: background after scrolling.
(() => {
  const nav = document.querySelector('.nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 20);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Nav wheel. pos = which pill we're on (0 = About ... 3 = Contact, -1 = hero), moving
// continuously through each section's second half. The shown position eases toward it every
// frame, and every pill is placed from its offset to that position: the current one sits in
// the middle at full size and full colour, the others roll above/below, smaller and fainter,
// the nearest ones keeping a light tint of the lit colour.
(() => {
  const wrap = document.querySelector('.nav__links');
  const pills = [...document.querySelectorAll('.nav__pill')];
  if (!wrap || !pills.length) return;
  const targets = pills.map((a) => document.getElementById(a.getAttribute('href').slice(1)));
  const hero = document.getElementById('home');
  const GAP_V = 8, GAP_H = 6;
  const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const isRow = () => matchMedia('(max-width: 720px)').matches;

  const position = () => {
    if (scrollY + innerHeight >= document.documentElement.scrollHeight - 2) return pills.length - 1;
    const line = scrollY + innerHeight * 0.4;
    const tops = [hero.offsetTop, ...targets.map((t) => t.offsetTop)];
    for (let k = tops.length - 1; k >= 0; k--) {
      if (line < tops[k]) continue;
      if (k === tops.length - 1) return k - 1;
      return k - 1 + smooth(0.5, 1, (line - tops[k]) / (tops[k + 1] - tops[k]));
    }
    return -1;
  };

  let goal = position();
  let shown = goal;
  let running = false;

  const draw = () => {
    const w = pills[0].offsetWidth, h = pills[0].offsetHeight, row = isRow();
    // On the hero (shown < 0) About already sits in the middle, but only lightly lit.
    const lp = Math.max(0, shown);
    pills.forEach((a, i) => {
      const off = i - lp;
      const d = Math.abs(off);
      const s = Math.max(0.6, 1 - 0.16 * d);
      const o = Math.max(0, 1 - 0.38 * d);
      const lit = Math.max(0, 1 - 0.65 * Math.abs(i - shown)); // 1 on the current pill, ~0.35 on its neighbours
      const step = (row ? w + GAP_H : h + GAP_V) * (1 - 0.06 * d);
      a.style.setProperty('--x', row ? `${off * step - w / 2}px` : '0px');
      a.style.setProperty('--y', row ? '0px' : `${off * step - h / 2}px`);
      a.style.setProperty('--s', s.toFixed(4));
      a.style.setProperty('--o', o.toFixed(4));
      a.style.setProperty('--a', lit.toFixed(4));
      a.style.pointerEvents = o < 0.08 ? 'none' : '';
      a.tabIndex = o < 0.08 ? -1 : 0;
      if (Math.round(shown) === i) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
    });
  };

  const frame = () => {
    const diff = goal - shown;
    if (Math.abs(diff) > 0.001) { shown += diff * 0.14; draw(); requestAnimationFrame(frame); }
    else { shown = goal; draw(); running = false; }
  };
  const kick = () => { goal = position(); if (!running) { running = true; requestAnimationFrame(frame); } };

  addEventListener('scroll', kick, { passive: true });
  addEventListener('resize', () => { draw(); kick(); });
  addEventListener('load', kick);
  draw();
})();
