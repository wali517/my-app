import React, { useEffect, useState } from 'react';
import LogoNav from './assets/Logo_black.png';

/**
 * Gillion — Lifestyle homepage
 * Converted 1:1 from the original static HTML/CSS/JS into a single React component.
 * All markup, styles, and interactive behavior (sliders, dropdowns, sticky nav,
 * mobile sidebar, search overlay, subscribe panel, footer tabs, etc.) are preserved
 * exactly — the original vanilla JS runs unchanged inside a useEffect after mount,
 * operating on the same element ids/classes as before.
 */
export default function GillionHomepage() {
  const [megaTab, setMegaTab] = useState('lifestyle');
  const [megaPage, setMegaPage] = useState(0);
  const megaVisible = 4;

  function selectMegaTab(tab) {
    setMegaTab(tab);
    setMegaPage(0);
  }

  const megaMenuData = {
    lifestyle: [
      { title: "Revolutionize Your Life With These Easy-peasy Tips", img: "https://images.pexels.com/photos/7994388/pexels-photo-7994388.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { title: "My Story About Inspirational Trip This Summer", img: "https://images.pexels.com/photos/4050349/pexels-photo-4050349.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { title: "Health Tips And Benefits Of Healthy Lifestyle You Should Consider", img: "https://images.pexels.com/photos/5240450/pexels-photo-5240450.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { title: "People Never Get Tired Of Hearing Their Own Names, You Is A Great, Universal Shortcut.", img: "https://images.pexels.com/photos/8421662/pexels-photo-8421662.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { title: "Tips And Tricks How to Avoid Winter Depression", img: "https://images.pexels.com/photos/6633296/pexels-photo-6633296.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { title: "Heartwarming Dishes That Will Lighten Up Your Day & Night", img: "https://images.pexels.com/photos/7669757/pexels-photo-7669757.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { title: "Stylish Trends That Could Happen Faster Than You Think", img: "https://images.pexels.com/photos/30651300/pexels-photo-30651300.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { title: "Recent View On Things That Matter To Me The Most", img: "https://images.pexels.com/photos/4534592/pexels-photo-4534592.jpeg?auto=compress&cs=tinysrgb&w=1200" }
    ],
    guide: [
      { title: "The Single Most Important Thing You Need To Know About Style", img: "https://images.pexels.com/photos/1116984/pexels-photo-1116984.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { title: "People Never Get Tired Of Hearing Their Own Names, You Is A Great, Universal Shortcut.", img: "https://images.pexels.com/photos/3989314/pexels-photo-3989314.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { title: "This Years Style For The Autumn", img: "https://images.pexels.com/photos/6633296/pexels-photo-6633296.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { title: "Can You Really Find Friends on the Web?", img: "https://images.pexels.com/photos/5483021/pexels-photo-5483021.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { title: "New Glasses Trends That Will Come In Late 2017", img: "https://images.pexels.com/photos/29409173/pexels-photo-29409173.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { title: "Fabric Textile Trends In 2017, What To Look Forward/Expect", img: "https://images.pexels.com/photos/4050349/pexels-photo-4050349.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { title: "The Truth Is You Are Not The Only Person Concerned About Appearance", img: "https://images.pexels.com/photos/8421662/pexels-photo-8421662.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { title: "Is Ombre Hair Style Is Out Of Fashion?", img: "https://images.pexels.com/photos/5240450/pexels-photo-5240450.jpeg?auto=compress&cs=tinysrgb&w=1200" }
    ]
  };
  const megaTotal = megaMenuData[megaTab].length;
  const megaPageCount = Math.ceil(megaTotal / megaVisible);

  useEffect(() => {
    // Load the original Google Fonts (Playfair Display + Poppins)
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://fonts.googleapis.com';
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(preconnect);
    document.head.appendChild(fontLink);

    // ---------------------------------------------------------------
    // Original page script, unchanged, run once after the DOM mounts
    // ---------------------------------------------------------------

    /* ---------- guard against double-initialization ----------
       (React StrictMode's dev-only double effect invoke, or Vite
       HMR re-running this effect on save, would otherwise re-run
       all the DOM mutations below — cloning hero slides again,
       appending duplicate trend cards, duplicate dot buttons, and
       duplicate event listeners.) */
    const trendGrid = document.getElementById('trendGrid');
    if (trendGrid.dataset.hydrated === 'true') {
      return () => {
        document.head.removeChild(preconnect);
        document.head.removeChild(fontLink);
      };
    }
    trendGrid.dataset.hydrated = 'true';

    /* ---------- data for trending & sample posts ---------- */
    const trending = [
      { cat: "People, Style", title: "The Truth Is You Are Not The Only Person Concerned About Appearance", img: "https://images.pexels.com/photos/30651300/pexels-photo-30651300.jpeg?auto=compress&cs=tinysrgb&w=1200", meta: "2 min read" },
      { cat: "News, Style", title: "Fabric Textile Trends In 2017, What To Look Forward/Expect", img: "https://images.pexels.com/photos/8421662/pexels-photo-8421662.jpeg?auto=compress&cs=tinysrgb&w=1200", meta: "1 min read" },
      { cat: "Health, Lifestyle", title: "Health Tips And Benefits Of Healthy Lifestyle You Should Consider", img: "https://images.pexels.com/photos/7994388/pexels-photo-7994388.jpeg?auto=compress&cs=tinysrgb&w=1200", meta: "1 min read" },
      { cat: "Design, Style", title: "New Glasses Trends That Will Come In Late 2017", img: "https://images.pexels.com/photos/29409173/pexels-photo-29409173.jpeg?auto=compress&cs=tinysrgb&w=1200", meta: "1 min read" }
    ];
    trending.forEach(t => {
      trendGrid.insertAdjacentHTML('beforeend', `
          <article class="trend-card">
            <a href="#" class="media">
              <div class="bg-img" role="img" aria-label="${t.title}" style="background-image:url('${t.img}');"></div>
              <div class="shade"></div>
              <div class="dots"><span></span><span></span><span></span></div>
            </a>
            <div class="card-cap">
              <span class="eyebrow">${t.cat}</span>
              <h4><a href="#">${t.title}</a></h4>
              <div class="meta"><span>Gillion, 9 years ago</span><span>1 min read</span></div>
            </div>
          </article>`);
    });

    /* ---------- generic slider factory ---------- */
    function makeSlider(container, { interval = null, onChange = null } = {}) {
      const slides = container.querySelectorAll(':scope > .slide');
      let i = 0;
      function show(idx) {
        slides[i].classList.remove('active');
        i = (idx + slides.length) % slides.length;
        slides[i].classList.add('active');
        if (onChange) onChange(i, slides[i]);
      }
      if (interval) setInterval(() => show(i + 1), interval);
      return { next: () => show(i + 1), prev: () => show(i - 1), get index() { return i; }, count: slides.length };
    }

    /* ---------- hero banner (infinite loop, seamless both directions) ---------- */
    const heroTrack = document.getElementById('heroBannerTrack');
    const heroPrevBtn = document.getElementById('heroPrev');
    const heroNextBtn = document.getElementById('heroNext');
    const heroRealSets = [...heroTrack.querySelectorAll('.hero-set')];
    const heroRealCount = heroRealSets.length;

    // clone first & last set for a seamless infinite loop
    const heroFirstClone = heroRealSets[0].cloneNode(true);
    const heroLastClone = heroRealSets[heroRealCount - 1].cloneNode(true);
    heroTrack.appendChild(heroFirstClone);
    heroTrack.insertBefore(heroLastClone, heroRealSets[0]);

    let heroPos = 1; // index into track including the two clones
    let heroAnimating = false;
    heroTrack.style.transform = `translateX(-${heroPos * 100}%)`;

    function setHeroTransition(on) {
      heroTrack.style.transition = on ? 'transform .55s cubic-bezier(.4,0,.2,1)' : 'none';
    }
    function moveHero(dir) {
      if (heroAnimating) return;
      heroAnimating = true;
      setHeroTransition(true);
      heroPos += dir;
      heroTrack.style.transform = `translateX(-${heroPos * 100}%)`;
    }
    heroTrack.addEventListener('transitionend', () => {
      if (heroPos === heroRealCount + 1) { // landed on cloned first -> snap to real first
        setHeroTransition(false);
        heroPos = 1;
        heroTrack.style.transform = `translateX(-${heroPos * 100}%)`;
      } else if (heroPos === 0) { // landed on cloned last -> snap to real last
        setHeroTransition(false);
        heroPos = heroRealCount;
        heroTrack.style.transform = `translateX(-${heroPos * 100}%)`;
      }
      heroAnimating = false;
    });
    heroNextBtn.addEventListener('click', () => moveHero(1));
    heroPrevBtn.addEventListener('click', () => moveHero(-1));

    /* ---------- food slider ---------- */
    const foodSlider = document.getElementById('foodSlider');
    const foodDotsWrap = document.getElementById('foodDots');
    const foodSlidesCount = foodSlider.querySelectorAll('.slide').length;
    for (let k = 0; k < foodSlidesCount; k++) {
      const b = document.createElement('button');
      if (k === 0) b.classList.add('active');
      b.addEventListener('click', () => foodGo(k));
      foodDotsWrap.appendChild(b);
    }
    function updateFoodDots(idx) {
      [...foodDotsWrap.children].forEach((b, k) => b.classList.toggle('active', k === idx));
    }
    const foodCtrl = makeSlider(foodSlider, {
      onChange: (idx, el) => {
        document.getElementById('foodCat').textContent = el.dataset.cat;
        document.getElementById('foodTitle').innerHTML = el.dataset.title;
        updateFoodDots(idx);
      }
    });
    function foodGo(idx) {
      const diff = idx - foodCtrl.index;
      if (diff > 0) { for (let n = 0; n < diff; n++) foodCtrl.next(); }
      else if (diff < 0) { for (let n = 0; n < -diff; n++) foodCtrl.prev(); }
    }

    /* ---------- latest-post big slider ---------- */
    const lpCtrl = makeSlider(document.getElementById('lpSlider'), {
      onChange: (idx) => {
        document.getElementById('lpSlideCounter').textContent = (idx + 1) + '/' + lpCtrl.count;
      }
    });
    document.getElementById('lpNext').addEventListener('click', () => lpCtrl.next());
    document.getElementById('lpPrev').addEventListener('click', () => lpCtrl.prev());

    /* ---------- footer trending slider (slick-style slide, directional) ---------- */
    const ftTrack = document.getElementById('ftTrack');
    const ftSlides = ftTrack.querySelectorAll('.slide');
    const ftPrevBtn = document.getElementById('ftPrev');
    const ftNextBtn = document.getElementById('ftNext');
    let ftIdx = 0;
    function ftUpdateButtons() {
      ftPrevBtn.disabled = ftIdx === 0;
      ftNextBtn.disabled = ftIdx === ftSlides.length - 1;
    }
    function ftGo(idx) {
      ftIdx = Math.max(0, Math.min(idx, ftSlides.length - 1));
      ftTrack.style.transform = `translateX(-${ftIdx * 100}%)`;
      ftUpdateButtons();
    }
    ftUpdateButtons();
    ftNextBtn.addEventListener('click', () => ftGo(ftIdx + 1));
    ftPrevBtn.addEventListener('click', () => ftGo(ftIdx - 1));


    /* ---------- header interactions ---------- */
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    searchBtn.addEventListener('click', () => {
      searchOverlay.classList.add('show');
      setTimeout(() => document.getElementById('searchInput').focus(), 150);
    });
    searchClose.addEventListener('click', () => searchOverlay.classList.remove('show'));
    searchOverlay.addEventListener('click', e => { if (e.target === searchOverlay) searchOverlay.classList.remove('show'); });

    const subBtn = document.getElementById('subscribeBtn');
    const subPanel = document.getElementById('subPanel');
    const subBackdrop = document.getElementById('subBackdrop');
    const subClose = document.getElementById('subClose');
    function openSub() { subPanel.classList.add('show'); subBackdrop.classList.add('show'); }
    function closeSub() { subPanel.classList.remove('show'); subBackdrop.classList.remove('show'); }
    subBtn.addEventListener('click', openSub);
    subClose.addEventListener('click', closeSub);
    subBackdrop.addEventListener('click', closeSub);

    const loginBtn = document.getElementById('loginBtn');
    const loginMsg = document.getElementById('loginMsg');
    loginBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      loginMsg.classList.toggle('show');
    });
    document.addEventListener('click', (e) => {
      if (!loginMsg.contains(e.target) && e.target !== loginBtn) loginMsg.classList.remove('show');
    });

    /* ---------- mobile sidebar nav ---------- */
    const menuToggle = document.getElementById('menuToggle');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    const sidebarClose = document.getElementById('sidebarClose');

    function openSidebar() {
      mobileSidebar.classList.add('show');
      sidebarBackdrop.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
    function closeSidebar() {
      mobileSidebar.classList.remove('show');
      sidebarBackdrop.classList.remove('show');
      document.body.style.overflow = '';
    }
    menuToggle.addEventListener('click', openSidebar);
    sidebarClose.addEventListener('click', closeSidebar);
    sidebarBackdrop.addEventListener('click', closeSidebar);

    document.querySelectorAll('.side-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.side-item');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.side-item.open').forEach(el => { if (el !== item) el.classList.remove('open'); });
        item.classList.toggle('open', !wasOpen);
      });
    });

    /* close sidebar automatically if window is resized back to desktop */
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeSidebar();
    });

    /* ---------- sticky nav ---------- */
    const nav = document.getElementById('mainNav');
    const headerEl = document.querySelector('.site-header');
    let navOffset = null;
    function updateNavBottom() {
      document.documentElement.style.setProperty('--nav-bottom', nav.getBoundingClientRect().bottom + 'px');
    }
    updateNavBottom();
    window.addEventListener('scroll', () => {
      if (navOffset === null) navOffset = nav.offsetTop;
      if (window.scrollY > navOffset) {
        nav.classList.add('stuck');
        document.body.style.paddingTop = nav.offsetHeight + 'px';
      } else {
        nav.classList.remove('stuck');
        document.body.style.paddingTop = 0;
      }
      updateNavBottom();
    });
    window.addEventListener('resize', updateNavBottom);

    /* ---------- footer tabs ---------- */
    const tabLatest = document.getElementById('tabLatest');
    const tabPopular = document.getElementById('tabPopular');
    const postsLatest = document.getElementById('ftPostsLatest');
    const postsPopular = document.getElementById('ftPostsPopular');
    tabLatest.addEventListener('click', () => {
      tabLatest.classList.add('active'); tabPopular.classList.remove('active');
      postsLatest.style.display = 'block'; postsPopular.style.display = 'none';
    });
    tabPopular.addEventListener('click', () => {
      tabPopular.classList.add('active'); tabLatest.classList.remove('active');
      postsPopular.style.display = 'block'; postsLatest.style.display = 'none';
    });

    /* ---------- categories show more ---------- */
    const catList = document.getElementById('catList');
    const showMoreCat = document.getElementById('showMoreCat');
    showMoreCat.addEventListener('click', () => {
      const expanded = catList.classList.toggle('expanded');
      showMoreCat.textContent = expanded ? 'Show Less −' : 'Show More +';
    });


    return () => {
      document.head.removeChild(preconnect);
      document.head.removeChild(fontLink);
    };
  }, []);

  return (
    <>
      {/* ============ HEADER ============ */}
      <header className="site-header">
        <div className="wrap header-row">
          <div className="header-side left">
            <button className="icon-btn menu-toggle" id="menuToggle" aria-label="Open menu">
              <svg className="icon" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            </button>
            <button className="icon-btn" id="searchBtn" aria-label="Search">
              <svg className="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </button>
            <div className="share-wrap">
              <button className="icon-btn" aria-label="Share">
                <svg className="icon" viewBox="0 0 24 24"><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><line x1="8.3" y1="10.7" x2="15.7" y2="6.3" /><line x1="8.3" y1="13.3" x2="15.7" y2="17.7" /></svg>
              </button>
              <div className="share-drop">
                <a href="#" title="Facebook">f</a>
                <a href="#" title="Twitter">t</a>
                <a href="#" title="Pinterest">p</a>
                <a href="#" title="Email">e</a>
              </div>
            </div>
          </div>

          <div className="logo"><img src={LogoNav} alt="LOGO" /></div>

          <div className="header-side right">
            <button className="icon-btn" id="subscribeBtn" title="Subscribe" aria-label="Subscribe">
              <svg className="icon" viewBox="0 0 24 24"><path d="M13 2 3 14h7l-1 8 11-14h-7l1-6z" /></svg>
            </button>
            <div className="login-wrap">
              <button className="icon-btn" id="loginBtn" title="Saved" aria-label="Saved" style={{ position: 'relative' }}>
                <svg className="icon" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z" /></svg>
                <span className="save-count">0</span>
              </button>
              <div className="login-msg" id="loginMsg">
                <a href="https://gillion.shufflehound.com/lifestyle/?read-it-later" target="_blank" rel="noopener">Login to add posts to your read later list</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="main-nav" id="mainNav">
        <div className="wrap nav-inner">
          <div className="nav-item"><a href="#">Home</a><span className="nav-dots">⋮</span>
            <div className="nav-drop">
              <a href="#">Gillion Showcase</a>
              <a href="#">journal</a>
              <a href="#">News</a>
              <a href="#">Magazine</a>
              <a href="#">Shop</a>
              <a href="#">Gizmo News</a>
              <a href="#">Travel</a>
              <a href="#">Fashion</a>
              <a href="#">Clean</a>
              <a href="#">Personal</a>
              <a href="#">Foodie</a>
              <a href="#">Tech</a>
              <a href="#">Lifestyle</a>
              <a href="#">Card Style</a>
            </div>
          </div>
          <div className="nav-item has-alert"><a href="#">Features</a><span className="nav-dots">⋮</span>
            <div className="nav-drop">
              <a href="#"><span className="drop-label">Content Gallery</span></a>
              <a href="#"><span className="drop-label">Typography</span></a>
              <a href="#"><span className="drop-label">Post Types<span className="drop-dot"></span></span><span className="drop-more">...</span></a>
              <a href="#"><span className="drop-label">Post Layouts</span><span className="drop-more">...</span></a>
              <a href="#"><span className="drop-label">Post Loading</span><span className="drop-more">...</span></a>
              <a href="#"><span className="drop-label">Featured Post<span className="drop-dot"></span></span><span className="drop-more">...</span></a>
              <a href="#"><span className="drop-label">Reviews</span></a>
              <a href="#"><span className="drop-label">Headers<span className="drop-dot"></span></span><span className="drop-more">...</span></a>
              <a href="#"><span className="drop-label">Page Layouts<span className="drop-dot"></span></span><span className="drop-more">...</span></a>
              <a href="#"><span className="drop-label">AMP Post<span className="drop-dot"></span></span></a>
              <a href="#"><span className="drop-label">Search Results</span></a>
              <a href="#"><span className="drop-label">404 Page</span></a>
              <a href="#"><span className="drop-label">Authors<span className="drop-dot"></span></span></a>
              <a href="#"><span className="drop-label">Boxed Layout</span></a>
              <a href="#"><span className="drop-label">Elements</span><span className="drop-more">...</span></a>
            </div>
          </div>
          <div className="nav-item"><a href="#">Blog Styles</a><span className="nav-dots">⋮</span>
            <div className="nav-drop">
              <a href="#">Masonry Style</a>
              <a href="#">Masonry Card Style</a>
              <a href="#">Grid Style</a>
              <a href="#">Left style</a>
              <a href="#">Left Style(mini)</a>
              <a href="#">Left Style(large)</a>
              <a href="#">Mix Style</a>
              <a href="#">Mix Style(small)</a>
              <a href="#">Mix Style(large)</a>
              <a href="#">Large Style</a>
              <a href="#">Large Title Below Style</a>
              <a href="#">Large Centered Style</a>

            </div>
          </div>
          <div className="nav-item"><a href="#">Mega Menu</a><span className="nav-dots">⋮</span>
            <div className="mega-panel">
              <div className="mega-tabs">
                <button
                  type="button"
                  className={`mega-tab${megaTab === 'lifestyle' ? ' active' : ''}`}
                  onMouseEnter={() => selectMegaTab('lifestyle')}
                  onFocus={() => selectMegaTab('lifestyle')}
                >
                  Lifestyle
                </button>
                <button
                  type="button"
                  className={`mega-tab${megaTab === 'guide' ? ' active' : ''}`}
                  onMouseEnter={() => selectMegaTab('guide')}
                  onFocus={() => selectMegaTab('guide')}
                >
                  Guide
                </button>
              </div>
              <div className="mega-grid">
                <div className="mega-page" key={`${megaTab}-${megaPage}`}>
                  {megaMenuData[megaTab].slice(megaPage * megaVisible, megaPage * megaVisible + megaVisible).map((post, i) => (
                    <article className="mega-card" key={i}>
                      <a href="#" className="media">
                        <img src={post.img} alt={post.title} />
                        <div className="shade"></div>
                        <div className="dots"><span></span><span></span><span></span></div>
                      </a>
                      <h5><a href="#">{post.title}</a></h5>
                      <div className="meta">
                        <svg className="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
                        <span>9 years ago</span>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="mega-nav-arrows">
                  <button
                    className="arrow-btn"
                    type="button"
                    disabled={megaPage === 0}
                    onClick={() => setMegaPage(p => Math.max(0, p - 1))}
                    aria-label="Previous"
                  >‹</button>
                  <button
                    className="arrow-btn"
                    type="button"
                    disabled={megaPage === megaPageCount - 1}
                    onClick={() => setMegaPage(p => Math.min(megaPageCount - 1, p + 1))}
                    aria-label="Next"
                  >›</button>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-item has-alert"><a href="#">Shop</a><span className="nav-dots">⋮</span>
            <div className="nav-drop">
              <a href="#"><span className="drop-label">Shop Page</span></a>
              <a href="#"><span className="drop-label">Shop Demo</span></a>
              <a href="#"><span className="drop-label">Single Product<span className="drop-dot"></span></span><span className="drop-more">...</span></a>
              <a href="#"><span className="drop-label">Privacy Policy<span className="drop-dot"></span></span></a>
              <a href="#"><span className="drop-label">My Account</span></a>
              <a href="#"><span className="drop-label">Checkout</span></a>
              <a href="#"><span className="drop-label">Cart</span></a>
            </div>
          </div>
        </div>
      </nav>

      {/* ============ MOBILE SIDEBAR NAV ============ */}
      <div className="sidebar-backdrop" id="sidebarBackdrop"></div>
      <aside className="mobile-sidebar" id="mobileSidebar">
        <div className="sidebar-head">
          <div className="logo">GILLION<small>LIFESTYLE</small></div>
          <button className="sidebar-close" id="sidebarClose" aria-label="Close menu">&times;</button>
        </div>
        <ul className="side-nav">
          <li className="side-item">
            <div className="side-row">
              <a href="#">Home</a>
              <button className="side-toggle" aria-label="Toggle submenu">
                <svg className="icon" viewBox="0 0 24 24" style={{ width: '14px', height: '14px' }}><polyline points="6 9 12 15 18 9" /></svg>
              </button>
            </div>
            <div className="side-drop">
              <a href="#">Gillion Showcase</a>
              <a href="#">journal</a>
              <a href="#">News</a>
              <a href="#">Magazine</a>
              <a href="#">Shop</a>
              <a href="#">Gizmo News</a>
              <a href="#">Travel</a>
              <a href="#">Fashion</a>
              <a href="#">Clean</a>
              <a href="#">Personal</a>
              <a href="#">Foodie</a>
              <a href="#">Tech</a>
              <a href="#">Lifestyle</a>
              <a href="#">Card Style</a>
            </div>
          </li>
          <li className="side-item has-alert">
            <div className="side-row">
              <a href="#">Features<span className="side-alert-dot"></span></a>
              <button className="side-toggle" aria-label="Toggle submenu">
                <svg className="icon" viewBox="0 0 24 24" style={{ width: '14px', height: '14px' }}><polyline points="6 9 12 15 18 9" /></svg>
              </button>
            </div>
            <div className="side-drop">
              <a href="#">Content Gallery</a>
              <a href="#">Typography</a>
              <a href="#">Post Types<span className="side-alert-dot"></span></a>
              <a href="#">Post Layouts</a>
              <a href="#">Post Loading</a>
              <a href="#">Featured Post<span className="side-alert-dot"></span></a>
              <a href="#">Reviews</a>
              <a href="#">Headers<span className="side-alert-dot"></span></a>
              <a href="#">Page Layouts<span className="side-alert-dot"></span></a>
              <a href="#">AMP Post<span className="side-alert-dot"></span></a>
              <a href="#">Search Results</a>
              <a href="#">404 Page</a>
              <a href="#">Authors<span className="side-alert-dot"></span></a>
              <a href="#">Boxed Layout</a>
              <a href="#">Elements</a>
            </div>
          </li>
          <li className="side-item">
            <div className="side-row">
              <a href="#">Blog Styles</a>
              <button className="side-toggle" aria-label="Toggle submenu">
                <svg className="icon" viewBox="0 0 24 24" style={{ width: '14px', height: '14px' }}><polyline points="6 9 12 15 18 9" /></svg>
              </button>
            </div>
            <div className="side-drop">
              <a href="#">Masonry Style</a>
              <a href="#">Masonry Card Style</a>
              <a href="#">Grid Style</a>
              <a href="#">Left style</a>
              <a href="#">Left Style(mini)</a>
              <a href="#">Left Style(large)</a>
              <a href="#">Mix Style</a>
              <a href="#">Mix Style(small)</a>
              <a href="#">Mix Style(large)</a>
              <a href="#">Large Style</a>
              <a href="#">Large Title Below Style</a>
              <a href="#">Large Centered Style</a>
            </div>
          </li>
          <li className="side-item">
            <div className="side-row">
              <a href="#">Mega Menu</a>
              <button className="side-toggle" aria-label="Toggle submenu">
                <svg className="icon" viewBox="0 0 24 24" style={{ width: '14px', height: '14px' }}><polyline points="6 9 12 15 18 9" /></svg>
              </button>
            </div>
            <div className="side-drop">
              <a href="#">Lifestyle</a>
              <a href="#">Guide</a>
            </div>
          </li>
          <li className="side-item has-alert">
            <div className="side-row">
              <a href="#">Shop<span className="side-alert-dot"></span></a>
              <button className="side-toggle" aria-label="Toggle submenu">
                <svg className="icon" viewBox="0 0 24 24" style={{ width: '14px', height: '14px' }}><polyline points="6 9 12 15 18 9" /></svg>
              </button>
            </div>
            <div className="side-drop">
              <a href="#">Shop Page</a>
              <a href="#">Shop Demo</a>
              <a href="#">Single Product<span className="side-alert-dot"></span></a>
              <a href="#">Privacy Policy<span className="side-alert-dot"></span></a>
              <a href="#">My Account</a>
              <a href="#">Checkout</a>
              <a href="#">Cart</a>
            </div>
          </li>
        </ul>
      </aside>

      {/* search overlay */}
      <div className="search-overlay" id="searchOverlay">
        <div className="search-box">
          <svg className="icon search-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          <input type="text" placeholder="Enter a keyword to search…" id="searchInput" />
          <button className="search-close" id="searchClose">✕</button>
        </div>
      </div>

      {/* subscribe panel */}
      <div className="sub-backdrop" id="subBackdrop"></div>
      <div className="sub-panel" id="subPanel">
        <button className="close-x" id="subClose">✕</button>
        <h3>Subscribe to get latest updates</h3>
        <p>Subscribe to get latest news and updates from our blog! Be the first to know about new stories.</p>
        <input type="email" placeholder="info@gmail.com.com" />
        <button className="btn solid">Subscribe</button>
      </div>

      {/* ============ HERO ============ */}
      <section style={{ paddingTop: '6px' }}>
        <div className="wrap">
          <div className="hero-banner-wrap" id="heroBannerWrap">
            <div className="hero-banner-track" id="heroBannerTrack">

              {/* SET 1 */}
              <div className="hero-set">
                <a href="#" className="hero-main media">
                  <img src="https://images.pexels.com/photos/1116984/pexels-photo-1116984.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                  <div className="shade"></div>
                  <div className="hero-cap">
                    <span className="eyebrow">Travel</span>
                    <h2>Adventure Time: Exploring The Beautiful Old City</h2>
                    <div className="meta">
                      <span>Gillion, 9 years ago</span><svg className="icon m-icon hero-bookmark" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z" /></svg>
                    </div>
                  </div>
                </a>
                <div className="hero-side">
                  <a href="#" className="hero-sub media">
                    <img src="https://images.pexels.com/photos/30651300/pexels-photo-30651300.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                    <div className="shade"></div>
                    <div className="hero-cap small">
                      <span className="eyebrow">Design, Style</span>
                      <h3>Stylish Trends That Could Happen Faster Than You Think</h3>
                      <div className="meta"><span>Gillion, 9 years ago</span><svg className="icon m-icon hero-bookmark" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z" /></svg></div>
                    </div>
                  </a>
                  <a href="#" className="hero-sub media">
                    <img src="https://images.pexels.com/photos/4534592/pexels-photo-4534592.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                    <div className="shade"></div>
                    <div className="hero-cap small">
                      <span className="eyebrow">Lifestyle, Motivation</span>
                      <h3>Master Your Mind In 5 Minutes A Day</h3>
                      <div className="meta"><span>Gillion, 9 years ago</span><svg className="icon m-icon hero-bookmark" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z" /></svg></div>
                    </div>
                  </a>
                </div>
              </div>

              {/* SET 2 */}
              <div className="hero-set">
                <a href="#" className="hero-main media">
                  <img src="https://images.pexels.com/photos/29409173/pexels-photo-29409173.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                  <div className="shade"></div>
                  <div className="hero-cap">
                    <span className="eyebrow">Style</span>
                    <h2>Gear Up! Accessories That Will Accent Your Style</h2>
                    <div className="meta"><span>Gillion, 9 years ago</span><svg className="icon m-icon hero-bookmark" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z" /></svg></div>
                  </div>
                </a>
                <div className="hero-side">
                  <a href="#" className="hero-sub media">
                    <img src="https://images.pexels.com/photos/7669757/pexels-photo-7669757.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                    <div className="shade"></div>
                    <div className="hero-cap small">
                      <span className="eyebrow">Food</span>
                      <h3>Simple Recipes To Try On A Lazy Weekend</h3>
                      <div className="meta"><span>Gillion, 9 years ago</span><svg className="icon m-icon hero-bookmark" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z" /></svg></div>
                    </div>
                  </a>
                  <a href="#" className="hero-sub media">
                    <img src="https://images.pexels.com/photos/5240450/pexels-photo-5240450.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                    <div className="shade"></div>
                    <div className="hero-cap small">
                      <span className="eyebrow">Beauty</span>
                      <h3>Skincare Habits Worth Sticking To This Year</h3>
                      <div className="meta"><span>Gillion, 9 years ago</span><svg className="icon m-icon hero-bookmark" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z" /></svg></div>
                    </div>
                  </a>
                </div>
              </div>

              {/* SET 3 */}
              <div className="hero-set">
                <a href="#" className="hero-main media">
                  <img src="https://images.pexels.com/photos/4050349/pexels-photo-4050349.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                  <div className="shade"></div>
                  <div className="hero-cap">
                    <span className="eyebrow">Design</span>
                    <h2>Interiors That Balance Comfort With Character</h2>
                    <div className="meta"><span>Gillion, 9 years ago</span><svg className="icon m-icon hero-bookmark" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z" /></svg></div>
                  </div>
                </a>
                <div className="hero-side">
                  <a href="#" className="hero-sub media">
                    <img src="https://images.pexels.com/photos/3989314/pexels-photo-3989314.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                    <div className="shade"></div>
                    <div className="hero-cap small">
                      <span className="eyebrow">Fitness</span>
                      <h3>Quick Workouts For Impossibly Busy Mornings</h3>
                      <div className="meta"><span>Gillion, 9 years ago</span><svg className="icon m-icon hero-bookmark" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z" /></svg></div>
                    </div>
                  </a>
                  <a href="#" className="hero-sub media">
                    <img src="https://images.pexels.com/photos/8421662/pexels-photo-8421662.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                    <div className="shade"></div>
                    <div className="hero-cap small">
                      <span className="eyebrow">Culture</span>
                      <h3>Books Everyone Will Be Talking About This Fall</h3>
                      <div className="meta"><span>Gillion, 9 years ago</span><svg className="icon m-icon hero-bookmark" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z" /></svg></div>
                    </div>
                  </a>
                </div>
              </div>

            </div>

            <div className="hero-nav">
              <button className="hero-arrow" id="heroPrev" aria-label="Previous slide">
                <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button className="hero-arrow" id="heroNext" aria-label="Next slide">
                <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOT TOPICS ============ */}
      <section style={{ paddingTop: '4px' }}>
        <div className="wrap">
          <span className="sec-title">Hot Topics</span>
          <div className="grid-2">
            <article className="topic-card">
              <a href="#" className="media">
                <div className="bg-img" role="img" aria-label="Can You Really Find Friends on the Web?" style={{ backgroundImage: 'url(\'https://images.pexels.com/photos/5483021/pexels-photo-5483021.jpeg?auto=compress&cs=tinysrgb&w=1200\')' }}></div>
                <div className="shade"></div>
                <div className="dots"><span></span><span></span><span></span></div>
              </a>
              <div className="card-cap">
                <span className="eyebrow">Guide, People</span>
                <h4><a href="#">Can You Really Find Friends on the Web?</a></h4>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin mattis, erat at ultrices aliquam, turpis nisi rutrum erat, eu finibus felis nisl ultricies mi. Aliquam quis interdum dui. Vivamus mattis bibendum dolor, vel varius ante facilisi at. Maecenas molestie vestibulum…</p>
                <div className="meta">
                  <span>Gillion, 9 years ago</span><span className="sep">|</span>
                  <span><svg className="icon m-icon" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>0</span><span className="sep">|</span>
                  <span><svg className="icon m-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>1 min read</span><span className="sep">|</span>
                  <svg className="icon m-icon" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z" /></svg>
                </div>
              </div>
            </article>
            <article className="topic-card">
              <a href="#" className="media">
                <div className="bg-img" role="img" aria-label="Tips And Tricks How to Avoid Winter Depression" style={{ backgroundImage: 'url(\'https://images.pexels.com/photos/6633296/pexels-photo-6633296.jpeg?auto=compress&cs=tinysrgb&w=1200\')' }}></div>
                <div className="shade"></div>
                <div className="dots"><span></span><span></span><span></span></div>
              </a>
              <div className="card-cap">
                <span className="eyebrow">Guide, People</span>
                <h4><a href="#">Tips And Tricks How to Avoid Winter Depression</a></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit fringilla enim, ut scelerisque dui. In hac habitasse platea dictumst. Etiam malesuada varius purus, ut consectetur dolor cursus quis. Vestibulum quis purus viverra, lobortis sapien quis, fringilla eros. Integer justo eros, sollicitudin vitae varius mattis,…</p>
                <div className="meta">
                  <span>Gillion, 9 years ago</span><span className="sep">|</span>
                  <span><svg className="icon m-icon" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>2</span><span className="sep">|</span>
                  <span><svg className="icon m-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>2 min read</span><span className="sep">|</span>
                  <svg className="icon m-icon" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z" /></svg>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ FOOD SLIDER ============ */}
      <section style={{ paddingBottom: '20px' }}>
        <div className="wrap">
          <div className="food-slider" id="foodSlider">
            <div className="slide active" data-cat="Cook, Food" data-title="Heartwarming Dishes That Will Lighten Up Your Day &amp; Night"><img src="https://images.pexels.com/photos/7669757/pexels-photo-7669757.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" /></div>
            <div className="slide" data-cat="People, Style" data-title="Meet The People Who Are Redefining Everyday Style"><img src="https://images.pexels.com/photos/30651300/pexels-photo-30651300.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" /></div>
            <div className="slide" data-cat="Style" data-title="Everyday Style Tips That Actually Make A Difference"><img src="https://images.pexels.com/photos/29409173/pexels-photo-29409173.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" /></div>
            <div className="shade"></div>
            <div className="food-cap">
              <span className="eyebrow" id="foodCat">Cook, Food</span>
              <h2 id="foodTitle">Heartwarming Dishes That Will Lighten Up Your Day &amp; Night</h2>
              <div className="meta">
                <img src="https://images.pexels.com/photos/5240450/pexels-photo-5240450.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" className="author-avatar" />
                <span>Gillion, 9 years ago</span><span className="sep">|</span>
                <span><svg className="icon m-icon" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>0</span><span className="sep">|</span>
                <span><svg className="icon m-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>2 min read</span><span className="sep">|</span>
                <svg className="icon m-icon" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z" /></svg>
              </div>
            </div>
            <div className="food-dots" id="foodDots"></div>
          </div>
        </div>
      </section>

      {/* ============ TRENDING ARTICLES ============ */}
      <section style={{ paddingTop: '20px', paddingBottom: '130px' }}>
        <div className="wrap">
          <span className="sec-title">Trending Articles</span>
          <div className="grid-4" id="trendGrid"></div>
        </div>
      </section>

      {/* ============ SUBSCRIBE BANNER ============ */}
      <section className="sub-banner" style={{ paddingTop: '0', paddingBottom: '0' }}>
        <div className="wrap">
          <h2>
            <svg className="icon" viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}><path d="M3 6h18v12H3z" /><path d="M3 6l9 7 9-7" /></svg>
            Subscribe To Get Latest Updates
          </h2>
          <div className="sub-form">
            <input type="email" placeholder="info@beautyfusionuk.com" />
            <button className="btn solid">Subscribe</button>
          </div>
          <div className="fine">Subscribe to get latest news and updates from our blog!</div>
        </div>
      </section>

      {/* ============ LATEST POSTS ============ */}
      <section>
        <div className="wrap">
          <span className="sec-title">Latest Posts</span>
          <div className="latest-grid">
            <div className="lp-slider" id="lpSlider">
              <div className="slide active" data-cat="Motivation" data-title="&lt;b&gt;Review:&lt;/b&gt; Recent View On Things That Matter To Me The Most" data-excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet, nunc et accumsan cursus, neque eros sodales lectus, in fermentum libero dui eu lacus. Nam lobortis facilisi sapien non aliquet. Aenean ligula urna, vehicula placerat sodales vel, tempor et orci. Donec molestie metus a sagittis…" data-comments="2" data-time="2 min read"><img src="https://images.pexels.com/photos/4534592/pexels-photo-4534592.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" /></div>
              <div className="slide" data-cat="Design, Style" data-title="Stylish Trends That Could Happen Faster Than You Think" data-excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet, nunc et accumsan cursus, neque eros sodales lectus, in fermentum libero dui eu lacus. Nam lobortis facilisi sapien non aliquet. Aenean ligula urna, vehicula placerat sodales vel, tempor et orci. Donec molestie metus a sagittis…" data-comments="2" data-time="1 min read"><img src="https://images.pexels.com/photos/30651300/pexels-photo-30651300.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" /></div>
              <div className="slide" data-cat="Lifestyle, Motivation" data-title="Revolutionize Your Life With These Easy-peasy Tips" data-excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget mi in nunc vulputate consectetur, Aliquam condimentum, felis ac convallis sodales, justo diam." data-comments="0" data-time="1 min read"><img src="https://images.pexels.com/photos/7994388/pexels-photo-7994388.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" /></div>
              <div className="lp-shade"></div>
              <div className="lp-count" id="lpCount">6+</div>
              <div className="lp-slide-counter" id="lpSlideCounter">1/3</div>
              <div className="lp-arrows">
                <button className="lp-arrow" id="lpPrev">‹</button>
                <button className="lp-arrow" id="lpNext">›</button>
              </div>
            </div>
            <div className="lp-side" id="lpSide">
              <span className="eyebrow" id="lpCat">Motivation</span>
              <h4 id="lpTitle" style={{ fontSize: '22px', margin: '10px 0 12px', lineHeight: '1.35' }}><a href="#"><b>Review:</b> Recent View On Things That Matter To Me The Most</a></h4>
              <p id="lpExcerpt" style={{ fontSize: '13px', color: 'var(--sub)', lineHeight: '1.8' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet, nunc et accumsan cursus, neque eros sodales lectus, in fermentum libero dui eu lacus. Nam lobortis facilisi sapien non aliquet. Aenean ligula urna, vehicula placerat sodales vel, tempor et orci. Donec molestie metus a sagittis…</p>
              <div className="meta">
                <span>Gillion, 9 years ago</span><span className="sep">|</span>
                <span><svg className="icon m-icon" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg><span id="lpComments">2</span></span><span className="sep">|</span>
                <span><svg className="icon m-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg><span id="lpTime">2 min read</span></span><span className="sep">|</span>
                <svg className="icon m-icon" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z" /></svg>
              </div>
            </div>

          </div>

          <div className="latest-list">
            <div className="latest-row">
              <div className="lr-text">
                <span className="eyebrow">Design, Style</span>
                <h4><a href="#">Stylish Trends That Could Happen Faster Than You Think</a></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet, nunc et accumsan cursus, neque eros sodales lectus, in fermentum libero dui eu lacus. Nam lobortis facilisi sapien non aliquet. Aenean ligula urna, vehicula placerat sodales vel, tempor et orci. Donec molestie metus a sagittis…</p>
                <div className="meta">
                  <span>Gillion, 9 years ago</span><span className="sep">|</span>
                  <span><svg className="icon m-icon" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>0</span><span className="sep">|</span>
                  <span><svg className="icon m-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>1 min read</span><span className="sep">|</span>
                  <svg className="icon m-icon" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z" /></svg>
                </div>
              </div>
              <a href="#" className="media lr-media">
                <img src="https://images.pexels.com/photos/30651300/pexels-photo-30651300.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                <div className="shade"></div>
                <div className="dots"><span></span><span></span><span></span></div>
              </a>
            </div>

            <div className="latest-row reverse">
              <a href="#" className="media lr-media">
                <img src="https://images.pexels.com/photos/7994388/pexels-photo-7994388.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                <div className="shade"></div>
                <div className="dots"><span></span><span></span><span></span></div>
              </a>
              <div className="lr-text">
                <span className="eyebrow">Lifestyle, Motivation</span>
                <h4><a href="#">Revolutionize Your Life With These Easy-peasy Tips</a></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget mi in nunc vulputate consectetur, Aliquam condimentum, felis ac convallis sodales, justo diam.</p>
                <div className="meta">
                  <span>Gillion, 9 years ago</span><span className="sep">|</span>
                  <span><svg className="icon m-icon" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>0</span><span className="sep">|</span>
                  <span><svg className="icon m-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>1 min read</span><span className="sep">|</span>
                  <svg className="icon m-icon" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z" /></svg>
                </div>
              </div>
            </div>

            <div className="latest-row">
              <div className="lr-text">
                <span className="eyebrow">Style</span>
                <h4><a href="#">Is Ombre Hair Style Is Out Of Fashion?</a></h4>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin mattis, erat at ultrices aliquam, turpis nisi rutrum erat, eu finibus felis nisl ultricies mi. Aliquam quis interdum dui. Vivamus mattis bibendum dolor, vel varius ante facilisi at. Maecenas molestie vestibulum…</p>
                <div className="meta">
                  <span>Gillion, 9 years ago</span><span className="sep">|</span>
                  <span><svg className="icon m-icon" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>0</span><span className="sep">|</span>
                  <span><svg className="icon m-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>2 min read</span><span className="sep">|</span>
                  <svg className="icon m-icon" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z" /></svg>
                </div>
              </div>
              <a href="#" className="media lr-media">
                <img src="https://images.pexels.com/photos/29409173/pexels-photo-29409173.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                <div className="shade"></div>
                <div className="dots"><span></span><span></span><span></span></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER TOP ============ */}
      <div className="foot-top">
        <div className="wrap">
          <div className="insta-title">
            <svg className="icon" viewBox="0 0 24 24" style={{ width: '16px', height: '16px', color: '#fff' }}><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
            Instagram Feed
          </div>

          <div className="foot-cols">
            {/* column 1: trending slider + subscribe */}
            <div>
              <div className="ft-nav-row">
                <span className="foot-block-title" style={{ margin: '0' }}>Trending Now</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button className="arrow-btn" id="ftPrev">‹</button>
                  <button className="arrow-btn" id="ftNext">›</button>
                </div>
              </div>
              <div className="ft-slider" id="ftSlider">
                <div className="ft-track" id="ftTrack">
                  <div className="slide"><img src="https://images.pexels.com/photos/4534592/pexels-photo-4534592.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" /><div className="shade"></div>
                    <div className="cap"><span className="eyebrow">Review</span><div style={{ fontSize: '13px', fontWeight: '700', marginTop: '6px' }}>Recent View On Things That Matter To Me The Most</div></div>
                  </div>
                  <div className="slide"><img src="https://images.pexels.com/photos/30651300/pexels-photo-30651300.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" /><div className="shade"></div>
                    <div className="cap"><span className="eyebrow">Design</span><div style={{ fontSize: '13px', fontWeight: '700', marginTop: '6px' }}>Stylish Trends That Could Happen Faster Than You Think</div></div>
                  </div>
                  <div className="slide"><img src="https://images.pexels.com/photos/3989314/pexels-photo-3989314.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" /><div className="shade"></div>
                    <div className="cap"><span className="eyebrow">Style</span><div style={{ fontSize: '13px', fontWeight: '700', marginTop: '6px' }}>Is Ombre Hair Style Is Out Of Fashion?</div></div>
                  </div>
                </div>
              </div>
              <div className="foot-sub">
                <span className="foot-block-title" style={{ margin: '0' }}>Subscribe Now</span>
                <div className="foot-sub-row">
                  <input type="email" placeholder="Your email" />
                  <button className="btn solid">Subscribe</button>
                </div>
                <p>Get the latest updates straight to your inbox.</p>
              </div>
            </div>

            {/* column 2: latest / popular */}
            <div>
              <div className="foot-tabs">
                <button className="active" id="tabLatest">Latest</button>
                <button id="tabPopular">Popular</button>
              </div>
              <div id="ftPostsLatest">
                <div className="ft-post">
                  <img src="https://images.pexels.com/photos/4534592/pexels-photo-4534592.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                  <div><h5>Review: Recent View On Things That Matter To Me The Most</h5><div className="meta">9 years ago · 3</div></div>
                </div>
                <div className="ft-post">
                  <img src="https://images.pexels.com/photos/30651300/pexels-photo-30651300.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                  <div><h5>Stylish Trends That Could Happen Faster Than You Think</h5><div className="meta">9 years ago · 2</div></div>
                </div>
                <div className="ft-post">
                  <img src="https://images.pexels.com/photos/7994388/pexels-photo-7994388.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                  <div><h5>Revolutionize Your Life With These Easy-peasy Tips</h5><div className="meta">9 years ago · 1</div></div>
                </div>
                <div className="ft-post">
                  <img src="https://images.pexels.com/photos/3989314/pexels-photo-3989314.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                  <div><h5>Is Ombre Hair Style Is Out Of Fashion?</h5><div className="meta">9 years ago · 2</div></div>
                </div>
              </div>
              <div id="ftPostsPopular" style={{ display: 'none' }}>
                <div className="ft-post">
                  <img src="https://images.pexels.com/photos/6633296/pexels-photo-6633296.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                  <div><h5>Tips And Tricks How to Avoid Winter Depression</h5><div className="meta">9 years ago · 2</div></div>
                </div>
                <div className="ft-post">
                  <img src="https://images.pexels.com/photos/5483021/pexels-photo-5483021.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                  <div><h5>Can You Really Find Friends on the Web?</h5><div className="meta">9 years ago · 0</div></div>
                </div>
                <div className="ft-post">
                  <img src="https://images.pexels.com/photos/7669757/pexels-photo-7669757.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                  <div><h5>Heartwarming Dishes That Will Lighten Up Your Day &amp; Night</h5><div className="meta">9 years ago · 0</div></div>
                </div>
                <div className="ft-post">
                  <img src="https://images.pexels.com/photos/29409173/pexels-photo-29409173.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                  <div><h5>New Glasses Trends That Will Come In Late 2017</h5><div className="meta">9 years ago · 1</div></div>
                </div>
              </div>
            </div>

            {/* column 3: categories + hot tags */}
            <div>
              <span className="foot-block-title">Categories</span>
              <ul className="cat-list" id="catList">
                <li><span>Cook</span><span>12</span></li>
                <li><span>Design</span><span>18</span></li>
                <li><span>Food</span><span>9</span></li>
                <li><span>Guide</span><span>7</span></li>
                <li className="hidden-cat"><span>Health</span><span>14</span></li>
                <li className="hidden-cat"><span>Interview</span><span>5</span></li>
                <li className="hidden-cat"><span>Lifestyle</span><span>21</span></li>
                <li className="hidden-cat"><span>Motivation</span><span>10</span></li>
              </ul>
              <button className="show-more" id="showMoreCat">Show All</button>

              <span className="foot-block-title" style={{ marginTop: '44px', display: 'block' }}>Hot Tags</span>
              <div className="tags">
                <a href="#">#accessories</a><a href="#">#dress</a><a href="#">#4lifehack</a>
                <a href="#">#lifestyle</a><a href="#">#motivation</a><a href="#">#style</a>
                <a href="#">#trend</a><a href="#">#trends</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="foot-bottom">
        <div className="logo">GILLION<small>LIFESTYLE</small></div>
        <p>CopyRight©2026 Gillion Lifestyle. <a href="#"></a>.</p>
      </div>


    </>
  );
}
