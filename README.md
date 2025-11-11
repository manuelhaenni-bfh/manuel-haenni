# Manuel Hänni - Website Projekt - EWEB

Persönliche Portfolio-Website für Manuel Hänni - Student für Digital Business & AI an der Universität Bern.

## 📁 Projektstruktur

```
website-projekt/
├── css/
│   └── styles.css          # Zentrale CSS-Datei
├── js/
│   ├── main.js            # Gemeinsame JavaScript-Funktionalität
│   ├── weather.js         # Wetter-Widget Funktionalität
│   ├── i18n.js            # Mehrsprachigkeit (DE/EN)
│   ├── title-animation.js # Animierte Titel-Effekte
│   ├── hobby-tilt.js      # 3D-Tilt-Effekt für Hobby-Karten
│   ├── hobby-text-size.js # Textgrössen-Anpassung
│   └── logo-sound.js      # Sound-Effekt für Logo
├── assets/
│   ├── manuel.jpg         # Profilbild
│   ├── Lebenslauf.pdf     # Lebenslauf zum Download
│   ├── CPRE-Zertifikat.pdf
│   ├── Hobbys/            # Hobby-Bilder
│   └── Company Logos      # Firmen- und Instituts-Logos
├── index.html             # Homepage
├── ausbildung.html        # Ausbildungsseite
├── erfahrung.html         # Berufserfahrung
├── zertifikate.html       # Zertifikate
├── kontakt.html           # Kontaktseite
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
- ✅ **Kontaktformular** mit Validierung
- ✅ **Toast-Benachrichtigungen**
- ✅ **Timeline** für Ausbildung und Berufserfahrung
- ✅ **Font Awesome Icons** - Moderne, skalierbare Icons
- ✅ **Barrierefreiheit** - Alt-Texte und ARIA-Labels für Screen Reader

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

### Inhalte ändern
Bearbeite einfach die entsprechenden HTML-Dateien:
- `index.html` - Homepage, Über mich, Skills
- `ausbildung.html` - Bildungsweg
- `erfahrung.html` - Berufserfahrung
- `zertifikate.html` - Zertifikate
- `kontakt.html` - Kontaktinformationen
- `reisen.html` - Reiseerfahrungen

## 🔧 Technische Details

### Verwendete Technologien
- **HTML5** - Semantisches Markup
- **CSS3** - Modern mit CSS Variables
- **Vanilla JavaScript** - Keine Frameworks nötig
- **Google Fonts** - Inter Schriftfamilie
- **Font Awesome 6.5.1** - Icon-Bibliothek
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
