/**
 * Manuel Hänni - Contact Page JavaScript
 * Specific functionality for kontakt.html
 */

// ========================================
// EMAILJS CONFIGURATION
// ========================================
// WICHTIG: Ersetze diese Werte mit deinen EmailJS Credentials
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'oBSasvsbcSAon9kVI',  // Ersetze mit deinem Public Key
    SERVICE_ID: 'service_9lm5tgp',  // Ersetze mit deiner Service ID
    TEMPLATE_ID: 'template_0s46a7c' // Ersetze mit deiner Template ID
};

// ========================================
// TOAST NOTIFICATIONS
// ========================================

/**
 * Show toast notification
 * @param {string} message - Message to display
 * @param {boolean} isError - Whether this is an error message
 */
function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.className = 'toast' + (isError ? ' error' : '');
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// ========================================
// CONTACT FORM
// ========================================

/**
 * Set button loading state
 * @param {HTMLButtonElement} button - Submit button
 * @param {boolean} loading - Loading state
 */
function setButtonLoading(button, loading) {
    if (loading) {
        button.disabled = true;
        button.dataset.originalText = button.textContent;
        button.innerHTML = '<span class="spinner"></span> Wird gesendet...';
        button.classList.add('loading');
    } else {
        button.disabled = false;
        button.textContent = button.dataset.originalText || 'Nachricht senden';
        button.classList.remove('loading');
    }
}

/**
 * Initialize contact form functionality
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Initialize EmailJS with public key
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = form.querySelector('button[type="submit"]');
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const privacy = formData.get('privacy');

        // Simple validation
        if (!name || !email || !message || !privacy) {
            showToast('Bitte füllen Sie alle Pflichtfelder aus.', true);
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Bitte geben Sie eine gültige E-Mail-Adresse ein.', true);
            return;
        }

        // Set loading state
        setButtonLoading(submitButton, true);

        try {
            // Send email using EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
                to_name: 'Manuel Hänni'
            };

            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams
            );

            // Success
            showToast('Nachricht erfolgreich gesendet! Vielen Dank für Ihre Kontaktaufnahme.');
            e.target.reset();

        } catch (error) {
            console.error('EmailJS Error:', error);
            showToast('Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.', true);
        } finally {
            setButtonLoading(submitButton, false);
        }
    });
}

// ========================================
// INITIALIZATION
// ========================================

/**
 * Initialize contact page functionality
 */
document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
});
