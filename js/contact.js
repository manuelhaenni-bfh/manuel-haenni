/**
 * Manuel Hänni - Contact Page JavaScript
 * Specific functionality for kontakt.html
 */

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
 * Initialize contact form functionality
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
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

        // Create mailto link
        const subject = `Kontaktanfrage von ${name}`;
        const body = `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`;
        const mailtoLink = `mailto:manuel.haenni@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success toast
        showToast('E-Mail-Client wird geöffnet...');
        
        // Reset form
        e.target.reset();
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
