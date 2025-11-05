// Interactive Tilt Effect for Hobby Images
// Images lean towards each other when hovering

function initHobbyTilt() {
    const cards = document.querySelectorAll('.hobby-image-card');

    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            // Current card pops forward
            this.style.transform = 'scale(1.15) translateZ(30px) rotateY(0deg)';
            this.style.zIndex = '20';

            // Left neighbor leans right
            if (index > 0) {
                const leftCard = cards[index - 1];
                leftCard.style.transform = 'scale(1.05) translateZ(10px) rotateY(8deg)';
                leftCard.style.zIndex = '15';
            }

            // Right neighbor leans left
            if (index < cards.length - 1) {
                const rightCard = cards[index + 1];
                rightCard.style.transform = 'scale(1.05) translateZ(10px) rotateY(-8deg)';
                rightCard.style.zIndex = '15';
            }

            // Far left neighbor subtle lean
            if (index > 1) {
                const farLeftCard = cards[index - 2];
                farLeftCard.style.transform = 'scale(1.02) translateZ(5px) rotateY(4deg)';
                farLeftCard.style.zIndex = '10';
            }

            // Far right neighbor subtle lean
            if (index < cards.length - 2) {
                const farRightCard = cards[index + 2];
                farRightCard.style.transform = 'scale(1.02) translateZ(5px) rotateY(-4deg)';
                farRightCard.style.zIndex = '10';
            }
        });

        card.addEventListener('mouseleave', function() {
            // Reset all cards
            cards.forEach(c => {
                c.style.transform = 'scale(1) translateZ(0) rotateY(0deg)';
                c.style.zIndex = '1';
            });
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initHobbyTilt);
