# Kulmeri Academic — Barista & Pastry Academy

A landing page for **Kulmeri Academic**, Somalia's premier training center for specialty coffee brewing, latte art mastery, and artisan pastry arts.

---

## ☕ Key Features

1. **Focused Navigation Bar**:
   - Streamlined to highlight only **Barista Class**, **Pastry Class** (the second class), and **Contact**.
   - Removed unnecessary links (*About*, *Gallery*, *Why Us*) as requested.
   - Integrated direct **"WhatsApp Us"** and **"Enroll Now"** action buttons.

2. **The Two Main Classes**:
   - **Barista Training**: 4-week specialty coffee masterclass (espresso dial-in, microfoam steaming, latte art, manual pour-over, grinder calibration, commercial maintenance).
   - **Pastry Training**: 6-week bakery masterclass (French viennoiserie, artisan croissants, cake baking & layering, sharp buttercream edges, mirror glazes, chocolate tempering, tarts & macarons).
   - Interactive Syllabus Modals with week-by-week curriculum breakdowns.

3. **Direct Contact & WhatsApp Integration**:
   - Direct 1-tap WhatsApp chat links for both official academy lines:
     - **Line 1:** `+252 770 662 323`
     - **Line 2:** `+252 613 911 963`
   - Interactive Fast-Track Registration Form that builds a structured message and opens WhatsApp directly with the user's details.
   - Floating WhatsApp Quick-Chat Widget in the bottom-right corner with pulse animation.

4. **Rich Mockup Sections**:
   - Hero section with 3 trust badges (*Professional Training*, *Expert Instructors*, *Practical Hands-on Experience*).
   - "Why Choose Kulmeri?" with 4 core pillars and signature arched visual.
   - "About Kulmeri Academic" with instructor spotlight and graduate statistics.
   - "Our Learning Environment" interactive carousel with Lightbox image zoom.
   - Call to Action banner with direct enrollment links.

---

## 📁 File Structure

```
Kulmeri/
├── index.html          # Main HTML5 landing page
├── css/
│   └── styles.css      # Custom styles, animations, and typography
├── js/
│   └── main.js         # Interactive modals, carousel, WhatsApp message builders
├── assets/
│   ├── logo.svg        # Kulmeri Academic Crest Vector Logo (Dark)
│   ├── logo-white.svg  # Kulmeri Academic Crest Vector Logo (Light / Gold)
│   ├── hero.jpg        # Barista & cake hero visual
│   ├── barista-class.jpg # Portafilter & espresso station
│   ├── pastry-class.jpg  # Artisan fruit & drip layer cake
│   ├── about-instructor.jpg # Barista instructor pouring latte art
│   ├── why-kulmeri.jpg   # Arched frame visual
│   ├── env-espresso.jpg  # Learning environment photo 1
│   ├── env-latte-art.jpg # Learning environment photo 2
│   ├── env-pastry.jpg    # Learning environment photo 3
│   └── env-academy.jpg   # Learning environment photo 4
├── server.rb           # Built-in lightweight local web server
├── start.sh            # One-click startup script for macOS
├── Kulmeri-Academy-Backup.zip # Complete backup archive
└── README.md           # Documentation
```

---

## 🚀 How to Run Locally

### Option 1: Double-Click or Run `start.sh`
In Terminal:
```bash
./start.sh
```
This starts the local web server and opens [http://localhost:8080](http://localhost:8080) automatically.

### Option 2: Run `server.rb` directly
```bash
ruby server.rb
```
Then visit: **http://localhost:8080**

### Option 3: Open `index.html` directly
Double-click `index.html` in Finder to view it directly in Chrome, Safari, or your default browser.

---

## 🌐 Deploying to the Web

The codebase is 100% static and requires zero build steps or complex dependencies. You can deploy it instantly by uploading the files to:
- **GitHub Pages**
- **Vercel** (Drag & drop the folder)
- **Netlify** (Drag & drop the folder)
- **Shared Hosting / cPanel** (Upload to `public_html`)
