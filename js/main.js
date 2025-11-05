/**
 * Manuel Hänni - Website JavaScript
 * Main functionality for all pages
 */

// ========================================
// HEADER FUNCTIONALITY
// ========================================

/**
 * Update header background on scroll
 */
function updateHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
}

// ========================================
// MOBILE MENU
// ========================================

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('nav');
    
    if (!mobileMenuBtn || !nav) return;

    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('show');
        mobileMenuBtn.textContent = nav.classList.contains('show') ? '✕' : '☰';
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768 && nav.classList.contains('show')) {
                nav.classList.remove('show');
                mobileMenuBtn.textContent = '☰';
            }
        });
    });
}

// ========================================
// SCROLL TO TOP
// ========================================

/**
 * Scroll to top on page load
 */
function scrollToTop() {
    window.scrollTo(0, 0);
}

/**
 * Disable browser scroll restoration
 */
function disableScrollRestoration() {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
}

// ========================================
// KEYBOARD NAVIGATION
// ========================================

/**
 * Support keyboard navigation for accessibility
 */
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

// ========================================
// HERO NAME SCALING ON SCROLL
// ========================================

/**
 * Scale hero name based on scroll position (desktop only)
 */
function initHeroNameScaling() {
    const heroTitle = document.querySelector('.hero h1');
    if (!heroTitle) return;

    let ticking = false;
    let isDesktop = window.innerWidth > 992;

    function updateScale() {
        // Check if desktop
        if (!isDesktop) {
            heroTitle.style.transform = 'scale(1)';
            ticking = false;
            return;
        }

        const scrolled = window.scrollY;
        // Scale from 1.0 to 1.5 over the first 300px of scroll
        const maxScroll = 300;
        const maxScale = 1.5;
        const minScale = 1.0;

        let scale = minScale + (scrolled / maxScroll) * (maxScale - minScale);
        scale = Math.min(scale, maxScale); // Cap at maxScale
        scale = Math.max(scale, minScale); // Don't go below minScale

        heroTitle.style.transform = `scale(${scale})`;
        ticking = false;
    }

    // Handle scroll
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScale);
            ticking = true;
        }
    });

    // Handle resize
    window.addEventListener('resize', () => {
        isDesktop = window.innerWidth > 992;
        if (!isDesktop) {
            heroTitle.style.transform = 'scale(1)';
        }
    });

    // Initial update
    updateScale();
}

// ========================================
// INITIALIZATION
// ========================================

/**
 * Initialize all functionality when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    // Setup header
    updateHeader();
    window.addEventListener('scroll', updateHeader);

    // Setup mobile menu
    initMobileMenu();

    // Setup keyboard navigation
    initKeyboardNavigation();

    // Setup hero name scaling
    initHeroNameScaling();

    // Disable scroll restoration
    disableScrollRestoration();

    // If homepage-specific script (initScrollAnimations) is not present,
    // make all sections visible so subpages aren't hidden by the CSS animation rules.
    // home.js uses an IntersectionObserver to add `.visible` to sections on the homepage;
    // other pages may not include home.js, so we ensure sections are shown here as a fallback.
    if (typeof initScrollAnimations !== 'function') {
        document.querySelectorAll('section').forEach(sec => sec.classList.add('visible'));
    }
});

/**
 * Scroll to top on page load
 */
window.onload = function() {
    scrollToTop();
};

/**
 * Additional fallback for page load
 */
window.addEventListener('load', function() {
    setTimeout(scrollToTop, 100);
});
