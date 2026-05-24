# thewebisyours-template

A free one-page website template for small businesses. Part of the [The Web Is Yours](https://thewebisyours.org) campaign — a grassroots effort to give small businesses a home on the web they actually own.

---

## What This Is

A single HTML file. No build tools. No frameworks. No external dependencies — no Google Fonts, no tracking, no third-party requests. Drop it in a repo, connect to Cloudflare Pages, point a domain at it, and a business has a real website in under an hour.

---

## Who It's For

Small local businesses that only exist on social media — a café, a trades person, a music teacher, a shop. One page is enough. This template gives them:

- A hero section with headline and call to action
- An about section with space for a photo
- A services section with cards
- Opening hours
- Location with directions link — no Google account required
- Contact details — phone, email, social links
- Mobile responsive with hamburger nav
- Scroll animations
- Fast, accessible, no bloat

---

## How to Use It

### 1. Fork or clone this repo

```bash
git clone https://github.com/yourusername/thewebisyours-template.git
cd thewebisyours-template
```

### 2. Open `index.html` and change the colours

At the top of the CSS, find `:root` and swap four variables to match the business:

```css
:root {
  --bg:         #faf6f0;   /* Page background */
  --surface:    #fff9f2;   /* Card / section background */
  --ink:        #1c1712;   /* Main text */
  --accent:     #c4622d;   /* Brand colour — buttons, highlights */
}
```

Use [coolors.co](https://coolors.co) to find a palette. The whole site recolours instantly.

### 3. Fill in the business content

Replace all placeholder text throughout the file. Every section is clearly commented. Work top to bottom:

- Page `<title>` and `<meta description>`
- Business name in the header
- Hero tag (town/area), headline, subtext
- About section — who they are, what makes them different
- Services — rename, add, or remove cards
- Opening hours
- Address
- Directions URL — update the link in the Location section
- Contact details — phone, email, social links
- Footer

### 4. Add a photo

In the About section, replace the placeholder div with a real image:

```html
<img src="photo.jpg" alt="Description of the photo">
```

Recommended size: 800×600px. Keep file size under 300kb — use [squoosh.app](https://squoosh.app) to compress.

### 5. Update the directions link

Find `<a class="directions-link">` in the Location section and update the `href` to the real address:

```html
<a class="directions-link" href="https://maps.google.com/?q=YOUR+ADDRESS+HERE" ...>
```

No Google account or embed code needed — it just opens Google Maps in a new tab.

### 6. Replace the favicon

`favicon.svg` is a placeholder lettermark. Replace it with the business initial or a simple logo:

- Keep it as an SVG for best results
- The `viewBox="0 0 32 32"` gives you a 32×32 canvas
- Update `fill="#863d17"` to match the brand colour

### 7. Deploy to Cloudflare Pages

1. Push to a GitHub repo
2. Log into [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
4. Select the repo
5. Framework preset: **None** — leave build command and output directory blank
6. Click **Save and Deploy**
7. Add the custom domain under **Custom Domains**

Done. The site is live, fast, and free to host.

---

## Local Development

DDEV works well for previewing changes locally with HTTPS:

```bash
ddev start
ddev launch
```

The `.ddev/` folder is gitignored — set it up locally with:

```bash
ddev config --project-name=your-project-name --project-type=php --docroot=.
```

---

## Files

```
thewebisyours-template/
├── index.html          # The entire website — edit this
├── favicon.svg         # Site icon — replace with business initial or logo
├── css/
│   └── style.css       # All styles — colour variables at the top
├── fonts/              # Self-hosted Lora WOFF2 files (see Fonts section below)
│   ├── lora-v37-latin-regular.woff2
│   ├── lora-v37-latin-italic.woff2
│   └── lora-v37-latin-600.woff2
├── js/
│   └── script.js       # Scroll animations and mobile nav toggle
└── README.md
```

---

## Fonts

Headings use self-hosted Lora (serif). Download the three WOFF2 files from:
https://gwfh.mranftl.com/fonts/lora

Select: Regular 400, Regular 400 Italic, SemiBold 600

Place them in a `/fonts/` folder in the repo root:

```
fonts/
├── lora-v37-latin-regular.woff2
├── lora-v37-latin-italic.woff2
└── lora-v37-latin-600.woff2
```

Body text uses the device system font — no download required, no external requests.

---

## Part of The Web Is Yours Campaign

This template is used by volunteer web developers as part of [The Web Is Yours](https://thewebisyours.org) — a grassroots campaign giving free one-page websites to small businesses that only exist on social media.

**Want to get involved?**

- Know a business that needs a website? [Tell us](https://thewebisyours.org)
- Own a business and want a free site? [Get in touch](https://thewebisyours.org)
- Are you a developer who wants to help? [Join the campaign](https://thewebisyours.org)

One business. One page. One month of your time. That's all we ask.

---

## Licence

Free to use for any small business website built as part of The Web Is Yours campaign. Please keep the footer credit — it helps the campaign grow.

---

*Built with care by [JFM Digital Works](https://jfmdigital.works) · Westport, Co. Mayo*
