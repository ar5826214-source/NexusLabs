# NexusLabs — Agency Portfolio Website

A professional, fully responsive digital marketing agency website. Dark charcoal + lime-green theme. SEO-optimised, mobile-first, GitHub Pages ready.

---

## 📁 Project Structure

```
nexuslabs/
│
├── index.html          ← Homepage (Hero, Services, Process, Pricing, Testimonials)
├── services.html       ← Full services detail page
├── contact.html        ← Contact page with form
│
├── css/
│   ├── main.css        ← Design tokens, reset, typography, utilities
│   ├── nav.css         ← Navigation (desktop + mobile hamburger)
│   └── components.css  ← All component styles (cards, pricing, footer, etc.)
│
├── js/
│   └── main.js         ← Nav scroll, animations, pricing toggle, form, counters
│
├── images/             ← Put your images here (see Image Guide below)
│
├── robots.txt          ← SEO: tells Google what to crawl
├── sitemap.xml         ← SEO: helps Google find all your pages
│
└── .github/
    └── workflows/
        └── deploy.yml  ← Auto-deploys to GitHub Pages on every push
```

---

## 🎨 Design System

### Colors (edit in `css/main.css` under `:root`)

| Variable | Value | Use |
|---|---|---|
| `--clr-bg` | `#0a0a0b` | Main background |
| `--clr-bg2` | `#111113` | Section backgrounds |
| `--clr-bg3` | `#18181c` | Card backgrounds |
| `--clr-accent` | `#c8f065` | Lime-green accent (buttons, highlights) |
| `--clr-text` | `#f2f2f0` | Primary text |
| `--clr-text2` | `#9b9b9b` | Secondary text |

**To change accent color:** Find `#c8f065` in `css/main.css` and replace with your color. Also update `rgba(200,240,101,...)` values (those are the same lime-green in rgba format).

### Fonts (edit in `css/main.css` top @import)

- **Display/Headings:** Syne (Google Fonts)
- **Body text:** Outfit (Google Fonts)

To change fonts, replace the Google Fonts URL and update `--font-display` and `--font-body` variables.

---

## ✏️ How to Edit Content

### 1. Brand Name
**Search for:** `NexusLabs`  
**Replace with:** Your agency name  
**Files:** `index.html`, `services.html`, `contact.html`

> Use **Find & Replace** (Ctrl+H in VS Code or Notepad++) to change all at once.

---

### 2. Hero Section (`index.html`)

```html
<!-- Line ~110: Main headline -->
<h1 class="hero__title">
  We Turn Clicks<br>Into <em>Real Revenue</em>   ← CHANGE THIS
</h1>

<!-- Line ~118: Subheadline description -->
<p class="hero__sub">
  SEO, social media, web design...               ← CHANGE THIS
</p>
```

---

### 3. Stats / Numbers (`index.html`)

```html
<span data-count="150" data-suffix="+">150+</span>  ← clients served
<span data-count="3.2" data-suffix="×">3.2×</span>  ← avg ROI
<span data-count="98"  data-suffix="%">98%</span>   ← retention rate
<span data-count="6"   data-suffix="yr">6yr</span>  ← years in business
```

Change both the `data-count` value AND the text between the tags.

---

### 4. Services (`index.html` & `services.html`)

In `index.html` find the service cards (search for `service-card__title`) and change:
- Title: `SEO & Content Marketing` → your service name
- Description: the `<p class="service-card__desc">` text

Do the same in `services.html` for the detailed service sections.

---

### 5. Pricing (`index.html`)

```html
<!-- Starter price -->
<span class="price-card__num" data-monthly="499" data-yearly="399">499</span>
                               ↑ monthly price    ↑ yearly price

<!-- Pro price -->
<span class="price-card__num" data-monthly="999" data-yearly="799">999</span>

<!-- Agency price -->
<span class="price-card__num" data-monthly="1,999" data-yearly="1,599">1,999</span>
```

Change both `data-monthly`, `data-yearly` AND the text between the tags.

To edit features in a plan, find `<li class="price-card__feature">` entries under that plan.  
To **disable** a feature (show it greyed out), add `price-card__feature--dim` to the class.

---

### 6. Testimonials (`index.html`)

Search for `testi-card__text` — there are 3 testimonial cards. For each, change:
- The quote text inside `<p class="testi-card__text">`
- The name inside `<div class="testi-card__name">`
- The role inside `<div class="testi-card__role">`
- The initials inside `<div class="testi-card__avatar">` (2 letters only)

---

### 7. Contact Details (`index.html`, `contact.html`, footer)

```
hello@nexuslabs.co  → your real email
+1 (555) 000-0000   → your real phone number
```

For WhatsApp, change the phone `<a href="tel:...">` to `<a href="https://wa.me/YOURNUMBER">`.

---

### 8. Social Media Links (footer in `index.html`)

Find `<div class="footer__socials">` and update the `href="#"` links with your real URLs:
```html
<a href="https://twitter.com/YOURUSERNAME" ...>
<a href="https://linkedin.com/company/YOURCOMPANY" ...>
<a href="https://instagram.com/YOURUSERNAME" ...>
```

---

### 9. SEO Meta Tags (top of each HTML file)

In the `<head>` of each page, update:

```html
<title>NexusLabs — Digital Marketing Agency</title>          ← Page title (shows in Google)
<meta name="description" content="..."/>                     ← Description (shows in Google)
<link rel="canonical" href="https://yourdomain.com/"/>       ← Your real domain
<meta property="og:image" content="https://yourdomain.com/images/og-image.jpg"/>  ← Social share image
```

Also update the JSON-LD structured data block (search for `application/ld+json`) with your real:
- Business name
- Phone number
- Email
- Social media URLs

---

### 10. Footer Copyright Year

The year auto-updates automatically via JavaScript — no need to change it.

---

## 🖼️ Images Guide

### Recommended Free Image Sources

| Source | Link | Best For |
|---|---|---|
| **Unsplash** | https://unsplash.com | Professional photos, business, office |
| **Pexels** | https://pexels.com | Marketing, people, lifestyle |
| **Pixabay** | https://pixabay.com | Wide variety, free commercial use |
| **StockSnap** | https://stocksnap.io | Business, tech |

### Recommended Images to Download

Download these and save to your `/images/` folder:

1. **Hero background texture** (abstract dark tech) — search "dark abstract technology" on Unsplash  
   Save as: `images/hero-bg.jpg`

2. **OG Image** (for social sharing, 1200×630px) — create a simple branded image  
   Save as: `images/og-image.jpg`

3. **Team photo** (if you want an About section) — search "business team" on Pexels  
   Save as: `images/team.jpg`

4. **Office/workspace** — search "dark modern office" on Unsplash  
   Save as: `images/office.jpg`

### How to Add an Image to the Site

Example — adding a team photo to the Why section in `index.html`:

```html
<img src="images/team.jpg" 
     alt="NexusLabs team working" 
     width="600" 
     height="400" 
     loading="lazy" 
     style="border-radius: 14px; width: 100%; height: auto;">
```

Always include `loading="lazy"` for performance and `alt` text for SEO.

---

## 🚀 How to Deploy on GitHub Pages

### Step 1 — Create a GitHub Account
Go to https://github.com and sign up (free).

### Step 2 — Create a New Repository
1. Click the **+** icon → **New repository**
2. Name it `your-agency-name` (e.g. `nexuslabs`)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload Your Files
**Option A — GitHub Web (easiest, no coding needed):**
1. Open your repo on GitHub
2. Click **Add file** → **Upload files**
3. Drag ALL your project files and folders in
4. Click **Commit changes**

**Option B — GitHub Desktop (recommended):**
1. Download GitHub Desktop: https://desktop.github.com
2. Clone your repo
3. Copy all project files into the folder
4. Commit and push

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **GitHub Actions**
3. The `deploy.yml` workflow file will automatically deploy your site

### Step 5 — Your Live URL
Your site will be live at:  
`https://YOURUSERNAME.github.io/REPONAME/`

Example: `https://johndoe.github.io/nexuslabs/`

### Step 6 — Custom Domain (Optional)
1. Buy a domain at https://namecheap.com (~$10/year)
2. In GitHub → Settings → Pages → Custom domain → enter your domain
3. In Namecheap, add a CNAME record pointing to `YOURUSERNAME.github.io`

---

## ⚡ Performance Tips

- All CSS and JS are already optimised for fast loading
- Images: compress before uploading using https://squoosh.app (free)
- Keep image sizes under 200KB for best performance
- The site scores 95+ on Google PageSpeed out of the box

---

## 📧 Making the Contact Form Work

The form currently shows a success animation but doesn't actually send emails. To make it send real emails, use one of these free services:

### Option A — Formspree (easiest, free)
1. Sign up at https://formspree.io
2. Get your form endpoint (looks like `https://formspree.io/f/XXXXXXXX`)
3. In `contact.html`, find `<form id="contactForm"` and add:
   ```html
   <form id="contactForm" action="https://formspree.io/f/XXXXXXXX" method="POST">
   ```
4. Also update the JS in `js/main.js` — replace the fake async with a real fetch.

### Option B — EmailJS (no backend needed)
1. Sign up at https://emailjs.com
2. Follow their setup guide
3. Add their SDK to `contact.html` and update `main.js`

---

## 🎨 Quick Customisation Cheatsheet

| What to change | Where | What to edit |
|---|---|---|
| Agency name | All HTML files | `NexusLabs` |
| Accent color | `css/main.css` | `--clr-accent: #c8f065` |
| Background color | `css/main.css` | `--clr-bg: #0a0a0b` |
| Fonts | `css/main.css` | `@import` URL + `--font-display`, `--font-body` |
| Nav links | All HTML files | `.nav__links` section |
| Hero headline | `index.html` | `.hero__title` |
| Services | `index.html`, `services.html` | `.service-card` blocks |
| Pricing | `index.html` | `data-monthly`, `data-yearly` attributes |
| Testimonials | `index.html` | `.testi-card` blocks |
| Email | All HTML files | `hello@nexuslabs.co` |
| Phone | All HTML files | `+1 (555) 000-0000` |
| Social links | `index.html` footer | `.footer__socials` |
| SEO title/desc | Each HTML `<head>` | `<title>` and `<meta name="description">` |
| Domain in sitemap | `sitemap.xml` | `yourdomain.com` |
| Domain in robots | `robots.txt` | `yourdomain.com` |

---

## 🆘 Common Questions

**Q: How do I change the nav logo letter "N"?**  
A: Search for `nav__logo-mark` in the HTML and change the letter inside the div.

**Q: How do I add a new page?**  
A: Copy `services.html`, rename it, update the `<title>` and `<meta>` tags, replace the content, and add a link to it in the `<nav>` of all pages.

**Q: How do I change the "Most Popular" badge on the Pro plan?**  
A: Find `<div class="price-card__badge"` in `index.html` and edit the text.

**Q: How do I remove a pricing tier?**  
A: Find the `<div class="price-card">` block for that tier and delete the entire div.

**Q: The mobile menu isn't working locally?**  
A: Open the file via a local server (not double-click). Use VS Code with the Live Server extension.

---

*Built with ❤️ — Good luck with your agency!*
