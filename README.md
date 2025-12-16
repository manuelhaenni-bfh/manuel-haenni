# Manuel Hänni - Website Projekt - EWEB

Persönliche Portfolio-Website für Manuel Hänni - Student für Digital Business & AI an der Universität Bern.

## 📁 Projektstruktur

```
manuel-haenni/
├── css/
│   └── styles.css          # Zentrale CSS-Datei
├── js/
│   ├── main.js            # Gemeinsame JavaScript-Funktionalität
│   ├── home.js            # Homepage-spezifische Funktionalität
│   ├── contact.js         # Kontaktformular-Funktionalität
│   ├── maps.js            # Google Maps Integration
│   ├── weather.js         # Wetter-Widget Funktionalität
│   ├── i18n.js            # Mehrsprachigkeit (DE/EN)
│   ├── title-animation.js # Animierte Titel-Effekte
│   ├── hobby-tilt.js      # 3D-Tilt-Effekt für Hobby-Karten
│   ├── hobby-text-size.js # Textgrössen-Anpassung
│   └── logo-sound.js      # Sound-Effekt für Logo
├── assets/
│   ├── manuel.jpg         # Profilbild
│   ├── Lebenslauf.pdf     # Lebenslauf zum Download
│   ├── CPRE-Zertifikat.pdf # Zertifikat
│   ├── MH_schlag.mp3      # Sound-Datei für Logo
│   ├── Hobbys/            # Hobby-Bilder
│   ├── logos/             # Diverse Logos
│   ├── BFH-Logo.png       # BFH Logo
│   ├── Uni-Bern-Logo.jpg  # Uni Bern Logo
│   ├── Valiant_Logo.png   # Valiant Bank Logo
│   ├── bzemme_logo.png    # BZEmme Logo
│   ├── wks_logo.png       # WKS KV Bildung Logo
│   ├── schweizer_armee.png # Schweizer Armee Logo
│   └── schule_luetzu-logo.png # Schule Lützelflüh Logo
├── img/                   # Weitere Bilder
├── index.html             # Homepage
├── ausbildung.html        # Ausbildungsseite
├── erfahrung.html         # Berufserfahrung
├── zertifikate.html       # Zertifikate
├── kontakt.html           # Kontaktseite
├── impressum.html         # Impressum
├── datenschutz.html       # Datenschutzerklärung
└── README.md              # Diese Datei
```

## 🎨 Features

### Design
- **Modernes Pastell-Design** mit ansprechenden Farbverläufen
- **Responsive Design** - funktioniert auf Desktop, Tablet und Mobile
- **Glasmorphismus-Effekte** für moderne Optik
- **Scroll-Animationen** für bessere User Experience
- **Dark Footer** für professionellen Look

### Funktionalität
- ✅ **Fixierter Header** mit aktiver Navigation
- ✅ **Mobile Navigation** mit Hamburger-Menu
- ✅ **Mehrsprachigkeit** (Deutsch/Englisch)
- ✅ **Wetter-Widget** mit Echtzeit-Daten
- ✅ **Smooth Scrolling** für Anchor-Links
- ✅ **Interaktive Hobby-Karten** mit 3D-Tilt-Effekt
- ✅ **Modal für FC Langnau Rangliste**
- ✅ **Interaktive Weltkugel** mit Google Maps Integration (klick auf Reisen-Bild)
- ✅ **Kontaktformular** mit Validierung
- ✅ **Toast-Benachrichtigungen**
- ✅ **Timeline** für Ausbildung und Berufserfahrung
- ✅ **Font Awesome Icons** - Moderne, skalierbare Icons

## 🚀 Installation & Verwendung

### Voraussetzungen
- Ein moderner Webbrowser (Chrome, Firefox, Safari, Edge)
- Optional: Ein lokaler Webserver (z.B. Live Server in VS Code)

### Setup
1. **Projekt herunterladen**
   ```bash
   # Projekt von GitHub clonen
   git clone [dein-repository-url]
   ```

2. **Assets hinzufügen**
   - Stelle sicher, dass alle Bilder im `assets/` Ordner vorhanden sind
   - Benötigte Dateien:
     - `manuel.jpg` - Profilbild
     - `Lebenslauf.pdf` - Lebenslauf
     - `CPRE-Zertifikat.pdf` - Zertifikat

3. **Website öffnen**
   - **Option 1:** Doppelklick auf `index.html`
   - **Option 2:** Mit Live Server in VS Code öffnen (empfohlen)
   - **Option 3:** Mit einem lokalen Webserver hosten

## 💻 Entwicklung in Visual Studio Code

### Empfohlene Extensions
- **Live Server** - Für lokale Entwicklung
- **Prettier** - Code-Formatierung
- **HTML CSS Support** - IntelliSense für CSS
- **Path Intellisense** - Autovervollständigung für Pfade

### VS Code Setup
1. Öffne den Ordner `website-projekt` in VS Code
2. Installiere die Extension "Live Server"
3. Rechtsklick auf `index.html` → "Open with Live Server"
4. Die Website öffnet sich automatisch im Browser

## 📝 Anpassungen vornehmen

### CSS ändern
Alle Styles befinden sich in `css/styles.css`:
- **Farben:** Variablen in `:root` anpassen
- **Schriftarten:** Google Fonts Links im HTML ändern
- **Abstände:** `--section-padding` und `--container-padding` anpassen

### JavaScript ändern
- **Gemeinsame Funktionen:** `js/main.js`
- **Homepage-Features:** `js/home.js`
- **Kontaktformular:** `js/contact.js`
- **Maps Integration:** `js/maps.js`
- **Wetter-Widget:** `js/weather.js`
- **Mehrsprachigkeit:** `js/i18n.js`

### Inhalte ändern
Bearbeite einfach die entsprechenden HTML-Dateien:
- `index.html` - Homepage, Über mich, Skills, Hobbys
- `ausbildung.html` - Bildungsweg
- `erfahrung.html` - Berufserfahrung
- `zertifikate.html` - Zertifikate
- `kontakt.html` - Kontaktinformationen
- `impressum.html` - Impressum
- `datenschutz.html` - Datenschutzerklärung

## 🔧 Technische Details

### Verwendete Technologien
- **HTML5** - Semantisches Markup
- **CSS3** - Modern mit CSS Variables
- **Vanilla JavaScript** - Keine Frameworks nötig
- **Google Fonts** - Inter Schriftfamilie
- **Font Awesome 6.5.1** - Icon-Bibliothek
- **Google Maps API** - Interaktive Weltkugel mit Marker
- **Wetter-API** - Echtzeit-Wetterdaten

### Browser-Kompatibilität
- ✅ Chrome/Edge (letzte 2 Versionen)
- ✅ Firefox (letzte 2 Versionen)
- ✅ Safari (letzte 2 Versionen)
- ✅ Mobile Browser (iOS Safari, Chrome Android)

### Performance-Optimierungen
- Lazy Loading für Bilder
- Minimale externe Dependencies
- Optimierte Animationen
- Responsive Images

### Barrierefreiheit (Accessibility)
- **Alt-Texte** für alle Bilder
- **ARIA-Labels** für interaktive Elemente
- **aria-hidden** für dekorative Icons
- **Screen Reader kompatibel**
- **Semantisches HTML5**
- **Keyboard Navigation**

### Testing
- **Lighthouse Score**: 95+ für Accessibility
- **Screen Reader getestet**: VoiceOver (Mac), NVDA (Windows)
- **SEO Score**: 100

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 480px) { ... }

/* Tablet */
@media (max-width: 768px) { ... }

/* Desktop */
Default: 1200px Container-Breite
```

## 🎯 Nächste Schritte

### Für die Entwicklung
1. ✅ HTML, CSS und JS sind getrennt
2. ✅ Ordnerstruktur ist sauber
3. ✅ Code ist dokumentiert
4. ✅ Mehrsprachigkeit integriert
5. ✅ Wetter-Widget implementiert
6. ✅ Barrierefreiheit implementiert
7. ✅ Font Awesome Icons integriert
8. ✅ Performance getestet (Lighthouse: 80+)
9. ✅ Website auf GitHub Pages deployen

### Für das Modul
- [x] Mit VS Code arbeiten
- [x] Dokumentation erstellen
- [x] Auf GitHub hochladen

## 📧 Kontakt

**Manuel Hänni**
- E-Mail: manuel.haenni@icloud.com
- LinkedIn: [Manuel Hänni](https://www.linkedin.com/in/manuel-h%C3%A4nni-634906330/)
- Instagram: [@m_haenni](https://www.instagram.com/m_haenni/)

---

© 2025 Manuel Hänni. Alle Rechte vorbehalten.
