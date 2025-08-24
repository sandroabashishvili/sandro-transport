# Sandro Transport & Umzugshilfe

Statische Webseite für Transport- und Umzugshilfe in Kassel.
Flexibel · Persönlich · Fair – mit 7-Sitzer und Anhänger nach Absprache.

**Live-Demo:** [https://sandroabashishvili.github.io/sandro-transport/](https://sandroabashishvili.github.io/sandro-transport/)

![Hero Screenshot](./trailer.webp)

---

## 📂 Struktur

* `index.html` – Startseite (Hero, Leistungen, Preise, FAQ, Kontakt, Impressum)
* `trailer.webp` – Hero-Bild (optimiert, WebP)
* `favicon.png` – Website-Icon (512×512)
* `robots.txt`, `sitemap.xml` – SEO & Indexierung
* `404.html` – Fehlerseite

---

## ✨ Features

* Responsives Design mit **TailwindCSS** (CDN)
* **SEO-Optimierung**: Canonical, Open Graph, Twitter Cards
* **Schema.org LocalBusiness** – bessere Sichtbarkeit in Google Maps / Local Search
* **Barrierefreiheit**: alt-Texte, aria-Labels, semantische Struktur
* **Einfache Kontaktaufnahme**: Telefonnummer, E-Mail-Link, Mailto-Formular
* **Google Analytics** (optional, ID selbst eintragen)

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
```

---

## 🚀 Deployment (GitHub Pages)

* Repository → **Settings → Pages**
* Branch: `main`, Ordner: `/ (root)` auswählen
* Nach jedem Commit/Push aktualisiert sich die Seite automatisch

📌 Sitemap: erreichbar unter `/sitemap.xml` und in `robots.txt` verlinkt.

---

## 🌐 Eigene Domain (optional)

1. Domain in Repository Settings → **Pages → Custom domain** eintragen
2. DNS-Eintrag: `CNAME` → `sandroabashishvili.github.io`
3. Datei `CNAME` ins Repo legen (Inhalt = deine Domain, z. B. `sandro-transport.de`)
4. URLs in `index.html`, `robots.txt` und `sitemap.xml` anpassen

---

## 💶 Preise & FAQ bearbeiten

* Inhalte sind direkt in `index.html` im Bereich **Preise** & **FAQ** zu finden
* Struktur: Grundpreis, Stundensatz, Kilometerpauschale, Zahlungsarten
* Änderungen einfach in HTML-Texten vornehmen
* Tipp: Nach größeren Updates `<lastmod>` in `sitemap.xml` aktualisieren

---

## 📊 Google Analytics

* In `index.html` den Platzhalter `G-XXXXXXXXXX` mit deiner GA-ID ersetzen
* Wenn nicht gewünscht, den gesamten GA-Snippet entfernen

---

## 🔒 Sicherheit & Rechtliches

* Statische Seite – kein Backend, keine Nutzerdaten werden gespeichert
* Impressum & rechtlicher Hinweis sind in `index.html` enthalten
* Alle Commits sind versioniert (Git History)
* Optional: GitHub Settings → „Private vulnerability reporting“ aktivieren

---

## 📜 Lizenz

Alle Inhalte © Sandro Abashishvili.
Falls nicht anders angegeben: **kein öffentliches Nutzungsrecht** (no license / all rights reserved).

---

## 📞 Kontakt

Sandro Abashishvili · Kassel
✉️ E-Mail: [sandroabashishvili@gmail.com](mailto:sandroabashishvili@gmail.com)
📞 Telefon: +49 1521 1084360

---

*Bei Fragen oder Vorschlägen bitte ein **Issue** im Repo erstellen oder direkt per E-Mail melden.*
