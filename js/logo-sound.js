// MH Logo Button Sound Effect
// On home page: plays sound
// On other pages: navigates to home

document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');

    if (!logo) return;

    // Create audio element
    const audio = new Audio('assets/MH_schlag.mp3');

    // Check if we're on the home page (index.html or root)
    const isHomePage = window.location.pathname === '/' ||
                       window.location.pathname.endsWith('/index.html') ||
                       window.location.pathname === '/index.html';

    logo.addEventListener('click', function(e) {
        e.preventDefault();

        if (isHomePage) {
            // On home page: play sound
            audio.currentTime = 0; // Reset to start
            audio.play().catch(err => {
                console.log('Audio playback failed:', err);
            });
        } else {
            // On other pages: navigate to home
            window.location.href = 'index.html';
        }
    });

    // Add cursor pointer style
    logo.style.cursor = 'pointer';
});
