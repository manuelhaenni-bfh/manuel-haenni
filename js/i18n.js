// Internationalization (i18n) - Language Switcher
// Zeigt JavaScript-Kenntnisse: Objects, LocalStorage, DOM Manipulation, Event Handling

const translations = {
    de: {
        // Navigation
        nav_home: "Home",
        nav_experience: "Berufserfahrung",
        nav_education: "Ausbildung",
        nav_certificates: "Zertifikate",
        nav_contact: "Kontakt",

        // Hero Section
        hero_role_primary: "BSc in Digital Business & AI",
        hero_role_secondary: "Hilfsassistent am Institut für Wirtschaftsinformatik, Universität Bern",
        hero_tagline: "Als Student im Bereich Digital Business und AI fasziniert mich die Verbindung von Wirtschaft und Technologie. Besonders begeistert mich die Zukunft der Digitalisierung und die Möglichkeiten, Prozesse zu vereinfachen und wenn möglich mit künstlicher Intelligenz zu unterstützen.",
        hero_btn_contact: "Kontakt aufnehmen",
        hero_btn_cv: "Lebenslauf als PDF herunterladen",

        // About Section
        about_title: "Über mich",
        about_text: "Ich studiere Digital Business & AI an der Bernern Fachhochschule und arbeite als Hilfsassistent am Institut für Wirtschaftsinformatik an der Universität Bern. Ausgleich finde ich beim Fussballspielen und im gemeinschaftlichen Leben in meiner WG in Bern.",

        // Hobbies
        hobby_football: "Fussball",
        hobby_tennis: "Tennis",
        hobby_hiking: "Wandern",
        hobby_travel: "Reisen",
        hobby_skiing: "Skifahren",
        hobby_diving: "Tauchen",
        hobby_cooking: "Kochen",

        // Skills Section
        skills_title: "Skills",
        skills_professional_title: "Fachkenntnisse",
        skills_professional_desc: "Fundierte Kenntnisse in Bankwesen und Produktmanagement mit praktischer Erfahrung in Kundenberatung und Projektarbeit.",
        skills_pill_banking: "Bankwesen",
        skills_pill_product_mgmt: "Produktmanagement",
        skills_pill_ms_office: "MS Office",
        skills_pill_data_analysis: "Datenanalyse",
        skills_pill_html_css_js: "HTML, CSS, JS",
        skills_pill_german: "Deutsch (Muttersprache)",
        skills_pill_english: "Englisch (B2)",
        skills_pill_french: "Französisch (B1)",
        skills_technical_title: "Technische Skills",
        skills_technical_desc: "Grundkenntnisse in Programmierung und Datenanalyse sowie sehr gute Kenntnisse in Microsoft Office Suite.",
        skills_languages_title: "Sprachen",
        skills_languages_desc: "Mehrsprachige Kommunikationsfähigkeiten für internationale Zusammenarbeit und Kundenbetreuung.",

        // Contact Page
        contact_title: "Kontakt",
        contact_form_name: "Name",
        contact_form_email: "E-Mail",
        contact_form_message: "Nachricht",
        contact_form_privacy: "Ich stimme zu, dass meine Angaben zur Kontaktaufnahme gespeichert werden.",
        contact_form_submit: "Nachricht senden",
        contact_info_title: "Kontaktinformationen",
        contact_label_email: "E-Mail",
        contact_label_phone: "Telefon",
        contact_btn_whatsapp: "WhatsApp",
        contact_btn_call: "Anrufen",
        contact_label_linkedin: "LinkedIn",
        contact_label_instagram: "Instagram",
        contact_label_location: "Standort",
        contact_location_value: "Bern, Schweiz",
        contact_map_title: "Standort BFH Marzili",

        // Experience Page
        experience_title: "Berufserfahrung",
        experience_present: "heute",

        // Job Titles
        job_research_assistant: "Hilfsassistent",
        job_substitute: "Stellvertretungen",
        job_product_intern: "Praktikant Produktmanagement",
        job_apprentice: "Kaufmann EFZ",

        // Companies
        company_unibern: "Institut für Wirtschaftsinformatik, Universität Bern",
        company_luetzelfluh: "Schule Lützelflüh",
        company_valiant: "Valiant Bank",

        // Job Descriptions
        job_research_desc: "Unterstützung der administrativen Abläufe am Institut für Wirtschaftsinformatik der Universität Bern mit Fokus auf Personal- und Finanzmanagement, Eventorganisation und digitale Informationsverwaltung.",
        job_substitute_desc: "Übernahme von Stellvertretungen.",
        job_product_desc: "Unterstützung im Produktmanagement mit Fokus auf Produktentwicklung, Marktanalyse und Kundenfeedback.",
        job_apprentice_desc: "Kaufmännische Grundbildung mit Schwerpunkt Kundenberatung, Bankgeschäfte und administrative Tätigkeiten.",

        // Education Page
        education_title: "Ausbildung",

        // Education Titles
        edu_bachelor: "Bachelor Digital Business & AI",
        edu_rekrutenschule: "Rekrutenschule",
        edu_berufsmatura: "Berufsmaturität Wirtschaft (Teilzeit)",
        edu_apprenticeship: "Kaufmännische Grundausbildung EFZ",

        // Education Institutions
        edu_bfh: "Berner Fachhochschule (BFH)",
        edu_swiss_army: "Schweizer Armee",
        edu_wksbern: "WKS Bern",
        edu_valiant_training: "Valiant Bank",

        // Education Descriptions
        edu_bachelor_desc: "Studium mit Fokus auf die Verbindung von Business-Verständnis und Technologie, insbesondere im Bereich künstlicher Intelligenz und digitaler Geschäftsmodelle.",
        edu_rekrutenschule_desc: "Absolvierung der Rekrutenschule mit Entwicklung von Führungskompetenzen, Teamarbeit und Disziplin.",
        edu_berufsmatura_desc: "Berufsbegleitende Weiterbildung zur Erlangung der Studienberechtigung für Fachhochschulen mit wirtschaftlichem Schwerpunkt.",
        edu_apprenticeship_desc: "Fundierte kaufmännische Grundausbildung mit umfassenden Kenntnissen in Finanzwesen, Kundenberatung und Geschäftsprozessen.",

        // Certificates Page
        certificates_title: "Zertifikate",
        cert_level: "Foundation Level",
        cert_cpre_title: "Certified Professional for Requirements Engineering (CPRE)",
        cert_cpre_issuer: "SAQ Swiss Association for Quality",
        cert_cpre_date: "Juli 2025",
        cert_cpre_description: "Grundlegende Kenntnisse in Requirements Engineering einschliesslich Prinzipien, Arbeitsprodukte, Ermittlungspraktiken, Konfliktlösung und Anforderungsmanagement.",
        cert_skill_req_eng: "Requirements Engineering",
        cert_skill_analysis: "Anforderungsanalyse",
        cert_skill_process: "Prozessoptimierung",
        cert_btn_view: "Zertifikat anzeigen",

        // Footer
        footer_rights: "Alle Rechte vorbehalten.",
        footer_start: "Start",
        footer_imprint: "Impressum",
        footer_privacy: "Datenschutz",

        // Impressum Page
        impressum_title: "Impressum",
        impressum_subtitle: "Rechtliche Informationen und Kontaktdaten",
        impressum_heading: "Angaben gemäss Informationspflicht",
        impressum_responsible_title: "Verantwortlich für den Inhalt",
        impressum_contact_title: "Kontakt",
        impressum_disclaimer_title: "Haftungsausschluss",
        impressum_disclaimer_text: "Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehme ich jedoch keine Gewähr.",
        impressum_copyright_title: "Urheberrecht",
        impressum_copyright_text: "Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen meiner schriftlichen Zustimmung.",
        impressum_links_title: "Links auf externe Websites",
        impressum_links_text: "Diese Website enthält Links zu externen Websites Dritter. Auf die Inhalte dieser verlinkten Webseiten habe ich keinen Einfluss. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.",

        // Datenschutz Page
        datenschutz_title: "Datenschutzerklärung",
        datenschutz_subtitle: "Informationen zum Umgang mit Ihren Daten",
        datenschutz_main_title: "Datenschutzerklärung",
        datenschutz_overview_title: "1. Datenschutz auf einen Blick",
        datenschutz_overview_subtitle: "Allgemeine Hinweise",
        datenschutz_overview_text: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
        datenschutz_collection_main_title: "2. Datenerfassung auf dieser Website",
        datenschutz_responsible_title: "Wer ist verantwortlich für die Datenerfassung?",
        datenschutz_responsible_text: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:",
        datenschutz_collection_title: "Wie erfassen wir Ihre Daten?",
        datenschutz_collection_text1: "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.",
        datenschutz_collection_text2: "Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).",
        datenschutz_weather_title: "3. Wetter-Widget",
        datenschutz_weather_text: "Diese Website verwendet die OpenWeatherMap API, um Wetterinformationen für Bern anzuzeigen. Dabei werden keine personenbezogenen Daten übertragen.",
        datenschutz_rights_title: "4. Ihre Rechte",
        datenschutz_rights_intro: "Sie haben jederzeit das Recht:",
        datenschutz_rights_1: "Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten",
        datenschutz_rights_2: "Die Berichtigung unrichtiger personenbezogener Daten zu verlangen",
        datenschutz_rights_3: "Die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen",
        datenschutz_changes_title: "5. Änderungen",
        datenschutz_changes_text: "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.",

        // Toast Messages
        toast_success: "Nachricht erfolgreich gesendet!",
        toast_error: "Fehler beim Senden der Nachricht.",

        // Weather
        weather_city: "Bern, Schweiz"
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_experience: "Work Experience",
        nav_education: "Education",
        nav_certificates: "Certificates",
        nav_contact: "Contact",

        // Hero Section
        hero_role_primary: "BSc in Digital Business & AI",
        hero_role_secondary: "Research Assistant at the Institute of Information Systems, University of Bern",
        hero_tagline: "As a student in Digital Business and AI, I am fascinated by the connection between business and technology. I am particularly excited about the future of digitalization and the opportunities to simplify processes and, where possible, support them with artificial intelligence.",
        hero_btn_contact: "Get in touch",
        hero_btn_cv: "Download CV as PDF",

        // About Section
        about_title: "About me",
        about_text: "I study Digital Business & AI at Bern University of Applied Sciences and work as a research assistant at the Institute of Information Systems at the University of Bern. I find balance through playing football and community living in my shared apartment in Bern.",

        // Hobbies
        hobby_football: "Football",
        hobby_tennis: "Tennis",
        hobby_hiking: "Hiking",
        hobby_travel: "Travel",
        hobby_skiing: "Skiing",
        hobby_diving: "Diving",
        hobby_cooking: "Cooking",

        // Skills Section
        skills_title: "Skills",
        skills_professional_title: "Professional Expertise",
        skills_professional_desc: "Solid knowledge in banking and product management with practical experience in customer consulting and project work.",
        skills_pill_banking: "Banking",
        skills_pill_product_mgmt: "Product Management",
        skills_pill_ms_office: "MS Office",
        skills_pill_data_analysis: "Data Analysis",
        skills_pill_html_css_js: "HTML, CSS, JS",
        skills_pill_german: "German (Native)",
        skills_pill_english: "English (B2)",
        skills_pill_french: "French (B1)",
        skills_technical_title: "Technical Skills",
        skills_technical_desc: "Basic knowledge in programming and data analysis as well as excellent skills in Microsoft Office Suite.",
        skills_languages_title: "Languages",
        skills_languages_desc: "Multilingual communication skills for international collaboration and customer service.",

        // Contact Page
        contact_title: "Contact",
        contact_form_name: "Name",
        contact_form_email: "Email",
        contact_form_message: "Message",
        contact_form_privacy: "I agree that my details may be stored for contact purposes.",
        contact_form_submit: "Send message",
        contact_info_title: "Contact Information",
        contact_label_email: "Email",
        contact_label_phone: "Phone",
        contact_btn_whatsapp: "WhatsApp",
        contact_btn_call: "Call",
        contact_label_linkedin: "LinkedIn",
        contact_label_instagram: "Instagram",
        contact_label_location: "Location",
        contact_location_value: "Bern, Switzerland",
        contact_map_title: "BFH Marzili Location",

        // Experience Page
        experience_title: "Work Experience",
        experience_present: "Present",

        // Job Titles
        job_research_assistant: "Research Assistant",
        job_substitute: "Substitute Teacher",
        job_product_intern: "Product Management Intern",
        job_apprentice: "Commercial Apprentice",

        // Companies
        company_unibern: "Institute of Information Systems, University of Bern",
        company_luetzelfluh: "Schule Lützelflüh",
        company_valiant: "Valiant Bank",

        // Job Descriptions
        job_research_desc: "Supporting administrative processes at the Institute of Information Systems at the University of Bern with a focus on personnel and financial management, event organization and digital information management.",
        job_substitute_desc: "Taking on substitute teaching positions.",
        job_product_desc: "Support in product management with focus on product development, market analysis and customer feedback.",
        job_apprentice_desc: "Commercial apprenticeship with focus on customer consulting, banking operations and administrative tasks.",

        // Education Page
        education_title: "Education",

        // Education Titles
        edu_bachelor: "Bachelor Digital Business & AI",
        edu_rekrutenschule: "Military Recruit School",
        edu_berufsmatura: "Vocational Baccalaureate in Business (Part-time)",
        edu_apprenticeship: "Commercial Apprenticeship EFZ",

        // Education Institutions
        edu_bfh: "Bern University of Applied Sciences (BFH)",
        edu_swiss_army: "Swiss Armed Forces",
        edu_wksbern: "WKS Bern",
        edu_valiant_training: "Valiant Bank",

        // Education Descriptions
        edu_bachelor_desc: "Studies focusing on the connection between business understanding and technology, particularly in artificial intelligence and digital business models.",
        edu_rekrutenschule_desc: "Completion of recruit school with development of leadership skills, teamwork and discipline.",
        edu_berufsmatura_desc: "Part-time continuing education to obtain university entrance qualification with business focus.",
        edu_apprenticeship_desc: "Solid commercial basic training with comprehensive knowledge in finance, customer consulting and business processes.",

        // Certificates Page
        certificates_title: "Certificates",
        cert_level: "Foundation Level",
        cert_cpre_title: "Certified Professional for Requirements Engineering (CPRE)",
        cert_cpre_issuer: "SAQ Swiss Association for Quality",
        cert_cpre_date: "July 2025",
        cert_cpre_description: "Fundamental knowledge in Requirements Engineering including principles, work products, elicitation practices, conflict resolution and requirements management.",
        cert_skill_req_eng: "Requirements Engineering",
        cert_skill_analysis: "Requirements Analysis",
        cert_skill_process: "Process Optimization",
        cert_btn_view: "View Certificate",

        // Footer
        footer_rights: "All rights reserved.",
        footer_start: "Home",
        footer_imprint: "Imprint",
        footer_privacy: "Privacy",

        // Impressum Page
        impressum_title: "Imprint",
        impressum_subtitle: "Legal Information and Contact Details",
        impressum_heading: "Information According to Legal Requirements",
        impressum_responsible_title: "Responsible for Content",
        impressum_contact_title: "Contact",
        impressum_disclaimer_title: "Disclaimer",
        impressum_disclaimer_text: "The content of this website has been created with the greatest possible care. However, I cannot guarantee the accuracy, completeness and timeliness of the content.",
        impressum_copyright_title: "Copyright",
        impressum_copyright_text: "The content and works created by me on these pages are subject to Swiss copyright law. Reproduction, editing, distribution and any kind of use outside the limits of copyright law require my written consent.",
        impressum_links_title: "Links to External Websites",
        impressum_links_text: "This website contains links to external third-party websites. I have no influence on the content of these linked websites. Therefore, I cannot assume any liability for this external content.",

        // Datenschutz Page
        datenschutz_title: "Privacy Policy",
        datenschutz_subtitle: "Information on the Handling of Your Data",
        datenschutz_main_title: "Privacy Policy",
        datenschutz_overview_title: "1. Data Protection at a Glance",
        datenschutz_overview_subtitle: "General Information",
        datenschutz_overview_text: "The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you.",
        datenschutz_collection_main_title: "2. Data Collection on This Website",
        datenschutz_responsible_title: "Who is responsible for data collection?",
        datenschutz_responsible_text: "Data processing on this website is carried out by the website operator:",
        datenschutz_collection_title: "How do we collect your data?",
        datenschutz_collection_text1: "Your data is collected in part by you providing it to us. This may be data that you enter into a contact form, for example.",
        datenschutz_collection_text2: "Other data is collected automatically or with your consent when you visit the website by our IT systems. This is primarily technical data (e.g. internet browser, operating system or time of page access).",
        datenschutz_weather_title: "3. Weather Widget",
        datenschutz_weather_text: "This website uses the OpenWeatherMap API to display weather information for Bern. No personal data is transmitted in the process.",
        datenschutz_rights_title: "4. Your Rights",
        datenschutz_rights_intro: "You have the right at any time to:",
        datenschutz_rights_1: "Obtain information about your stored personal data",
        datenschutz_rights_2: "Request correction of inaccurate personal data",
        datenschutz_rights_3: "Request deletion of your personal data stored by us",
        datenschutz_changes_title: "5. Changes",
        datenschutz_changes_text: "We reserve the right to adapt this privacy policy so that it always complies with current legal requirements or to implement changes to our services in the privacy policy.",

        // Toast Messages
        toast_success: "Message sent successfully!",
        toast_error: "Error sending message.",

        // Weather
        weather_city: "Bern, Switzerland"
    }
};

// Aktuelle Sprache aus LocalStorage oder Standard (Deutsch)
let currentLanguage = localStorage.getItem('language') || 'de';

// Funktion zum Wechseln der Sprache
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
    updateLanguageButton();
}

// Funktion zum Aktualisieren aller Texte auf der Seite
function updatePageLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[currentLanguage][key];

        if (translation) {
            // Prüfen ob es ein Input-Placeholder ist
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            }
            // Normaler Text
            else {
                element.textContent = translation;
            }
        }
    });

    // Spezielle Behandlung für das Wetter-Widget
    updateWeatherLanguage();
}

// Funktion zum Aktualisieren der Wetter-Stadt
function updateWeatherLanguage() {
    const weatherCity = document.querySelector('.weather-city');
    if (weatherCity) {
        weatherCity.textContent = translations[currentLanguage].weather_city;
    }
}

// Funktion zum Aktualisieren des Sprach-Buttons
function updateLanguageButton() {
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        const lang = option.getAttribute('data-lang');
        if (lang === currentLanguage) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Event Listener für Sprach-Buttons
document.addEventListener('DOMContentLoaded', () => {
    // Sprache beim Laden anwenden
    updatePageLanguage();
    updateLanguageButton();

    // Event Listener für Language Options
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            if (lang) {
                switchLanguage(lang);
            }
        });
    });
});

// Export für andere Module (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { switchLanguage, currentLanguage, translations };
}
