# Sandro Transport & Umzugshilfe

Statische Webseite für Transport- und Umzugshilfe in Kassel.  
Flexibel · Persönlich · Fair – Transport und Umzugshilfe mit Transporter bis 3,5t nach Absprache.

**Live-Demo:** [https://sandroabashishvili.github.io/sandro-transport/](https://sandroabashishvili.github.io/sandro-transport/)

![Hero Screenshot](./images/hero-transport.webp)

---

## 📂 Struktur

- `index.html` – Startseite (Hero, Leistungen, Preise, FAQ, Kontakt)  
- `legal/impressum.html` – Impressum
- `legal/datenschutz.html` – Datenschutzhinweise
- `assets/css/site.css` – eigene Zusatzstile  
- `assets/js/main.js` – Jahr, Smooth Scroll und Kontaktformular  
- `images/hero-transport.webp` – Hero-Bild (optimiert, WebP)
- `images/social-card.jpg` – Social sharing preview (1200×630)
- `images/favicon.png` – Website-Icon (512×512)  
- `robots.txt`, `sitemap.xml` – SEO & Indexierung  
- `404.html` – Fehlerseite  

---

## ✨ Features

- Responsives Design mit eigener lokaler CSS-Datei
- **SEO-Optimierung**: Canonical, Open Graph, Twitter Cards  
- **Schema.org LocalBusiness** – bessere Sichtbarkeit in Google Maps / Local Search  
- **Barrierefreiheit**: alt-Texte, aria-Labels, semantische Struktur  
- **Status klar sichtbar**: Service in Vorbereitung, aktuell noch nicht aktiv
- **Google Analytics** (optional, ID selbst eintragen)  

---

## 💻 Lokale Nutzung

```bash
# Repository klonen
git clone https://github.com/sandroabashishvili/sandro-transport.git
cd sandro-transport

# Lokal öffnen (ohne Build-System)
# Windows:
start index.html
# macOS:
open index.html
# Linux:
xdg-open index.html
🚀 Deployment (GitHub Pages)
Repository → Settings → Pages

Branch: main, Ordner: / (root) auswählen

Nach jedem Commit/Push aktualisiert sich die Seite automatisch

📌 Sitemap: erreichbar unter /sitemap.xml und in robots.txt verlinkt.

🌐 Eigene Domain (optional)
Domain in Repository Settings → Pages → Custom domain eintragen

DNS-Eintrag: CNAME → sandroabashishvili.github.io

Datei CNAME ins Repo legen (Inhalt = deine Domain, z. B. sandro-transport.de)

URLs in index.html, robots.txt und sitemap.xml anpassen

💶 Preise & FAQ bearbeiten
Inhalte sind direkt in index.html im Bereich Preise & FAQ zu finden

Struktur: Anfrage, Auftragumfang, Strecke, Helferzahl, Fahrzeugbedarf, Zahlungsarten

Änderungen einfach in HTML-Texten vornehmen

Tipp: Nach größeren Updates <lastmod> in sitemap.xml aktualisieren

📊 Google Analytics
In index.html den Platzhalter G-XXXXXXXXXX mit deiner GA-ID ersetzen

Wenn nicht gewünscht, den gesamten GA-Snippet entfernen

🔒 Sicherheit & Rechtliches
Statische Seite – kein Backend, keine Nutzerdaten werden gespeichert

Impressum und Datenschutzhinweise sind als eigene Seiten unter `legal/` enthalten.

Alle Commits sind versioniert (Git History)

Optional: GitHub Settings → „Private vulnerability reporting“ aktivieren

📜 Lizenz
Alle Inhalte © Aleksandre Abashishvili.
Falls nicht anders angegeben: kein öffentliches Nutzungsrecht (no license / all rights reserved).

📞 Kontakt
Aleksandre Abashishvili · Kassel
✉️ E-Mail: sandroabashishvili@gmail.com
