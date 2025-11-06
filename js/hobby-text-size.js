// Automatically adjust hobby label font size based on text length
function adjustHobbyLabelSizes() {
    const labels = document.querySelectorAll('.hobby-label');

    labels.forEach(label => {
        const text = label.textContent;
        const textLength = text.length;

        // Calculate font size based on text length for 280px high images
        // Shorter text = bigger font, longer text = smaller font
        let fontSize;

        if (textLength <= 6) {
            // Short words like "Tennis", "Reisen", "Kochen" (6 chars)
            fontSize = '1.7rem';
        } else if (textLength <= 7) {
            // Medium words like "Tauchen", "Wandern" (7 chars)
            fontSize = '1.5rem';
        } else if (textLength <= 8) {
            // Words like "Fussball" (8 chars)
            fontSize = '1.3rem';
        } else {
            // Longer words like "Skifahren" (9+ chars)
            fontSize = '1.3rem';
        }

        // Apply the calculated font size
        label.style.fontSize = fontSize;
    });
}

// Run on page load
document.addEventListener('DOMContentLoaded', adjustHobbyLabelSizes);

// Re-run when language changes (in case text length changes)
window.addEventListener('languageChanged', adjustHobbyLabelSizes);
