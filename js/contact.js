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
 * Transform contact form into thank you message
 * @param {HTMLFormElement} form - The contact form
 * @param {string} name - Name of the sender
 */
function transformFormToThankYou(form, name) {
    // Create thank you message HTML
    const thankYouHTML = `
        <div class="thank-you-message">
            <div class="thank-you-icon">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <h2>Vielen Dank, ${name}!</h2>
            <p>Deine Nachricht wurde erfolgreich versendet.</p>
            <p>Ich werde mich so schnell wie möglich bei dir melden.</p>
            <button type="button" class="btn btn-primary" onclick="resetContactForm()">
                Neue Nachricht senden
            </button>
        </div>
    `;

    // Add fade-out animation
    form.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    form.style.opacity = '0';
    form.style.transform = 'scale(0.95)';

    // After fade-out, replace content and fade-in
    setTimeout(() => {
        form.innerHTML = thankYouHTML;
        form.style.opacity = '0';
        form.style.transform = 'scale(0.95)';

        // Trigger reflow
        form.offsetHeight;

        // Fade in
        requestAnimationFrame(() => {
            form.style.opacity = '1';
            form.style.transform = 'scale(1)';
        });
    }, 500);
}

/**
 * Initialize contact form functionality
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Check if form already has listener to prevent multiple submissions
    if (form.dataset.listenerAttached === 'true') {
        return;
    }

    // Mark form as having listener attached
    form.dataset.listenerAttached = 'true';

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

            // Success - Transform form into thank you message
            transformFormToThankYou(form, name);

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
 * Reset contact form to original state
 */
function resetContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Original form HTML
    const originalFormHTML = `
        <div class="form-group">
            <label for="name" class="form-label" data-i18n="contact_form_name">Name *</label>
            <input type="text" id="name" name="name" class="form-input" required>
        </div>
        <div class="form-group">
            <label for="email" class="form-label" data-i18n="contact_form_email">E-Mail *</label>
            <input type="email" id="email" name="email" class="form-input" required>
        </div>
        <div class="form-group">
            <label for="message" class="form-label" data-i18n="contact_form_message">Nachricht *</label>
            <textarea id="message" name="message" class="form-textarea" required data-i18n="contact_form_message" placeholder="Ihre Nachricht..."></textarea>
        </div>
        <div class="form-checkbox">
            <input type="checkbox" id="privacy" name="privacy" required>
            <label for="privacy" data-i18n="contact_form_privacy">Ich stimme zu, dass meine Angaben zur Kontaktaufnahme gespeichert werden.</label>
        </div>
        <div class="voltage-button">
            <button type="submit" class="btn btn-primary voltage-btn" data-i18n="contact_form_submit">Nachricht senden</button>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 234.6 61.3" preserveAspectRatio="none" xml:space="preserve">
                <filter id="glow">
                    <feGaussianBlur class="blur" result="coloredBlur" stdDeviation="2"></feGaussianBlur>
                    <feTurbulence type="fractalNoise" baseFrequency="0.075" numOctaves="1" result="turbulence"></feTurbulence>
                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" xChannelSelector="R" yChannelSelector="G" result="displace"></feDisplacementMap>
                    <feMerge>
                        <feMergeNode in="coloredBlur"></feMergeNode>
                        <feMergeNode in="coloredBlur"></feMergeNode>
                        <feMergeNode in="coloredBlur"></feMergeNode>
                        <feMergeNode in="displace"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                </filter>
                <path class="voltage line-1" d="m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7 5.8-7.3 5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2 7.2 7.7 6.2 9.5-1.1 1.8-12.3-6.5-14.1-5.5-1.7 0.9-0.1 6.2-2.2 6.2z" fill="transparent" stroke="#fff"/>
                <path class="voltage line-2" d="m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z" fill="transparent" stroke="#fff"/>
            </svg>
            <div class="dots">
                <div class="dot dot-1"></div>
                <div class="dot dot-2"></div>
                <div class="dot dot-3"></div>
                <div class="dot dot-4"></div>
                <div class="dot dot-5"></div>
            </div>
        </div>
    `;

    // Fade out
    form.style.opacity = '0';
    form.style.transform = 'scale(0.95)';

    setTimeout(() => {
        form.innerHTML = originalFormHTML;
        form.style.opacity = '0';
        form.style.transform = 'scale(0.95)';

        // Trigger reflow
        form.offsetHeight;

        // Fade in and re-initialize
        requestAnimationFrame(() => {
            form.style.opacity = '1';
            form.style.transform = 'scale(1)';
        });

        // Re-initialize form functionality
        setTimeout(() => {
            initContactForm();
        }, 100);
    }, 500);
}

/**
 * Initialize contact page functionality
 */
document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
});
