/**
 * Manuel Hänni - Homepage JavaScript
 * Specific functionality for index.html
 */

// ========================================
// SCROLL ANIMATIONS
// ========================================

/**
 * Initialize Intersection Observer for scroll animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Make hero section visible immediately
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.classList.add('visible');
    }
}

// ========================================
// ACTIVE NAVIGATION
// ========================================

/**
 * Update active navigation on scroll
 */
function updateActiveNav() {
    const navLinks = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('section[id]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current) && current) {
            link.classList.add('active');
        } else if (link.getAttribute('href') === '#hero' && (current === '' || current === 'hero')) {
            link.classList.add('active');
        }
    });
}

// ========================================
// SMOOTH SCROLLING
// ========================================

/**
 * Setup smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// SNOWFLAKE ANIMATION
// ========================================

/**
 * Create snowflakes animation for skiing hobby
 */
function createSnowflakes() {
    const aboutSection = document.querySelector('.about');
    if (!aboutSection) return;
    
    // Create multiple snowflakes
    for (let i = 0; i < 15; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄️';
        
        // Random positioning and timing
        const leftPosition = Math.random() * 100;
        const animationDuration = 3 + Math.random() * 2; // 3-5 seconds
        const fontSize = 0.8 + Math.random() * 0.7; // 0.8-1.5em
        const delay = Math.random() * 2; // 0-2 second delay
        
        snowflake.style.left = leftPosition + '%';
        snowflake.style.fontSize = fontSize + 'em';
        snowflake.style.animationDuration = animationDuration + 's';
        snowflake.style.animationDelay = delay + 's';
        
        aboutSection.appendChild(snowflake);
        
        // Remove snowflake after animation
        setTimeout(() => {
            if (snowflake.parentNode) {
                snowflake.parentNode.removeChild(snowflake);
            }
        }, (animationDuration + delay) * 1000);
    }
}

/**
 * Animate hobby tags
 */
function animateHobby(element, type) {
    const emoji = element.querySelector('.hobby-emoji');
    if (!emoji) return;
    
    emoji.classList.remove('animate-football', 'animate-tennis', 'animate-hiking', 
                          'animate-travel', 'animate-skiing', 'animate-diving', 'animate-cooking');
    emoji.classList.add('animate-' + type);
    
    // Special skiing animation - snowflakes fall
    if (type === 'skiing') {
        createSnowflakes();
    }
    
    setTimeout(() => {
        emoji.classList.remove('animate-' + type);
    }, 1200);
}

// Make animateHobby available globally
window.animateHobby = animateHobby;

// ========================================
// MODAL FUNCTIONALITY
// ========================================

/**
 * Open ranking modal
 */
function openRankingModal() {
    const modal = document.getElementById('rankingModal');
    const iframe = document.getElementById('rankingIframe');
    
    if (!modal || !iframe) return;
    
    // Load iframe only on first open for better performance
    if (iframe.src === 'about:blank') {
        iframe.src = 'https://matchcenter.fvbj-afbj.ch/default.aspx?lng=1&cxxlnus=1&v=1405&t=37049&ls=24444&sg=67584&a=trr&bn=0';
    }
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

/**
 * Close ranking modal
 */
function closeRankingModal() {
    const modal = document.getElementById('rankingModal');
    if (!modal) return;
    
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Allow scrolling again
}

/**
 * Close modal when clicking on backdrop
 */
function closeModalOnBackdrop(event) {
    if (event.target.id === 'rankingModal') {
        closeRankingModal();
    }
}

// Make modal functions available globally
window.openRankingModal = openRankingModal;
window.closeRankingModal = closeRankingModal;
window.closeModalOnBackdrop = closeModalOnBackdrop;

/**
 * Close modal with ESC key
 */
function initModalKeyboardControls() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeRankingModal();
        }
    });
}

// ========================================
// INITIALIZATION
// ========================================

/**
 * Initialize homepage-specific functionality
 */
document.addEventListener('DOMContentLoaded', () => {
    // Setup scroll animations
    initScrollAnimations();
    
    // Setup smooth scrolling
    initSmoothScrolling();
    
    // Setup modal keyboard controls
    initModalKeyboardControls();
    
    // Update active navigation on scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // Initial call to update active nav
    updateActiveNav();
});
