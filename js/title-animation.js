// Title Animation - Particles Merge to Letters
// Each letter is formed by multiple particles that converge

function initTitleAnimation() {
    const titles = document.querySelectorAll('.section-title');

    titles.forEach(title => {
        // Store original text
        const text = title.textContent;

        // Clear the title
        title.innerHTML = '';

        // Split text into characters
        let charIndex = 0;
        text.split('').forEach(char => {
            if (char === ' ') {
                const space = document.createElement('span');
                space.classList.add('space');
                space.innerHTML = '&nbsp;';
                title.appendChild(space);
            } else {
                // Create wrapper for each character
                const charWrapper = document.createElement('span');
                charWrapper.classList.add('char-wrapper');
                charWrapper.style.setProperty('--char-index', charIndex);

                // Set individual width based on character
                const charWidths = {
                    'i': '0.8rem', 'l': '0.8rem', 'I': '0.8rem', 'j': '0.8rem',
                    'r': '1.2rem', 't': '1.0rem', 'f': '1.0rem',
                    'm': '2.2rem', 'w': '2.2rem', 'M': '2.2rem', 'W': '2.2rem',
                    'default': '1.4rem'
                };
                const width = charWidths[char] || charWidths['default'];
                charWrapper.style.width = width;

                // Create 5-8 particles for each letter
                const particleCount = Math.floor(Math.random() * 4) + 5; // 5-8 particles

                for (let i = 0; i < particleCount; i++) {
                    const particle = document.createElement('span');
                    particle.classList.add('particle');

                    // Random starting positions (spread around the character)
                    const angle = (360 / particleCount) * i + Math.random() * 30;
                    const distance = 40 + Math.random() * 30; // 40-70px away
                    const x = Math.cos(angle * Math.PI / 180) * distance;
                    const y = Math.sin(angle * Math.PI / 180) * distance;

                    particle.style.setProperty('--particle-x', `${x}px`);
                    particle.style.setProperty('--particle-y', `${y}px`);
                    particle.style.setProperty('--particle-delay', i);

                    charWrapper.appendChild(particle);
                }

                // Create the actual letter (appears after particles merge)
                const letter = document.createElement('span');
                letter.classList.add('letter');
                letter.textContent = char;
                charWrapper.appendChild(letter);

                title.appendChild(charWrapper);
                charIndex++;
            }
        });
    });

    // Intersection Observer for scroll detection
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '100px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    // Observe all titles
    titles.forEach(title => {
        observer.observe(title);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initTitleAnimation);

// Re-initialize when language changes (for i18n support)
document.addEventListener('languageChanged', () => {
    setTimeout(initTitleAnimation, 100);
});
