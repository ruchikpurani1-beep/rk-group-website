# The RK Group — Official Website

A luxury, animated one-page site for **The RK Group** and its five divisions:

1. **RK Advertise Agency** — Meta, Google, ChatGPT & LinkedIn Ads
2. **RK Tech Studio** — Websites, Web Development, Enhancement, Backend SEO, E‑Commerce
3. **RK Plastomech (SMM)** — Machine manufacturing, fitting, repair, buy/sell
4. **RK Traders And Services** — Machinery & bulk trading, import/export
5. **RK Consultancy** — Loans, credit cards, insurance, certifications

Design direction: a "royal house suspended in deep space" — obsidian backgrounds, gold‑foil
accents, an animated starfield, an orbiting crest in the hero, and scroll‑reveal panels for
each division.

---

## 1. Before you publish — edit these two things

### A. Your WhatsApp number
Open `assets/js/script.js` and change the first line:

```js
const WHATSAPP_NUMBER = "919999999999"; // country code + number, no + or spaces
```

This number powers **both** the floating WhatsApp button and the "Send Request on WhatsApp"
form button — the form doesn't need a server, it just opens WhatsApp with the visitor's
details pre-filled as a message.

### B. Your contact details
In `index.html`, search for the **Contact** section and update:
- Phone display (`+91 99999 99999`)
- Email (`contact@rkgroup.com`)
- Location text

---

## 2. Run it locally

No build step — it's plain HTML/CSS/JS. Just open `index.html` in a browser, or serve it:

```bash
cd rk-group-website
python3 -m http.server 8000
# visit http://localhost:8000
```

---

## 3. Host it free on GitHub Pages

1. **Create a new GitHub repository** (e.g. `rk-group-website`) — public, no README/license
   needed since you already have files.
2. **Push this folder to it:**
   ```bash
   cd rk-group-website
   git init
   git add .
   git commit -m "Launch The RK Group website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. **Turn on Pages:** on GitHub, go to your repo → **Settings → Pages** → under
   "Build and deployment", set **Source: Deploy from a branch**, **Branch: main / (root)** →
   **Save**.
4. Wait ~1 minute, then your site is live at:
   `https://<your-username>.github.io/<your-repo>/`
5. **Optional — custom domain:** in the same Pages settings, add your domain under
   "Custom domain" and point your DNS `CNAME` record to `<your-username>.github.io`.

---

## 4. File structure

```
rk-group-website/
├── index.html              ← the whole site (single page)
├── assets/
│   ├── css/style.css        ← all styling, animation & design tokens
│   ├── js/script.js         ← starfield, scroll-reveal, WhatsApp + form logic
│   └── img/
│       ├── logo.png         ← original crest (black, transparent)
│       ├── logo-gold.png    ← gold crest, used across the dark theme
│       ├── logo-ivory.png   ← ivory crest, for light backgrounds if needed
│       ├── favicon.png
│       └── org-chart.png    ← branded organizational chart image
└── README.md
```

## 5. Customizing further
- **Colors / fonts:** all defined as CSS variables at the top of `assets/css/style.css`
  under `:root` — change `--gold`, `--void`, etc. to retheme everything at once.
- **Division content:** each division is one `<article class="division">` block in
  `index.html` — duplicate, edit, or reorder freely; reordering automatically keeps the
  alternating left/right layout if you keep the `reverse` class on every other block.
- **Form destination:** currently routes to WhatsApp only. To also collect entries via
  email, you can wire the form to a service like Formspree or EmailJS — happy to set that
  up if you'd like a backend-free email option too.

---

*Crest design supplied by the client. All other artwork, layout, and animation generated
for this build.*
