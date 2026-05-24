# Contributing to The Web Is Yours

Thanks for wanting to get involved. Here's everything you need to know.

---

## What We're Doing

We build free one-page websites for small businesses that only exist on social media. A café, a trades person, a music teacher, a shop. One page is enough. We buy their domain, build their site, and host it free — all they need to do is show up with their content.

Our goal is simple: **one site a month, per volunteer.**

---

## What We Ask of You

- **Find a business** in your area that has no website — social media only  
- **Buy their domain** (\~€15) — that's your contribution to the campaign  
- **Build their site** using our template — a few hours of your time  
- **Host it on Cloudflare Pages** — free, fast, consistent  
- **Register the domain in the business's name** — always, no exceptions  
- **Document it** — a short post or note about who you helped and what you built

That's it. One business, one page, one month.

---

## The Stack

We standardise on this for every site in the campaign:

| What | How |
| :---- | :---- |
| Template | Fork this repo |
| Hosting | Cloudflare Pages (free) |
| Domain | Registered in the business's name |
| Domain registrar | Anywhere reputable — Cloudflare, Blacknight, etc |

Keeping the stack consistent means every business gets the same quality experience, regardless of which volunteer builds their site.

---

## Step by Step

### 1\. Find a business

Look for businesses in your area with no website — only a Facebook page, Instagram account, or nothing at all. A personal connection helps. Someone who knows you is more likely to say yes and actually engage with the process.

Good candidates:

- Local cafés, restaurants, coffee shops  
- Trades people — plumbers, electricians, painters  
- Creatives — photographers, musicians, artists  
- Small retailers, market stall holders  
- Health and wellness — yoga teachers, therapists, coaches

### 2\. Have the conversation

Keep it simple. Tell them:

"I'm part of a campaign called The Web Is Yours. We build free one-page websites for local businesses. I'd like to build one for you. All I need is your content — name, what you do, your hours, contact details, a photo. I'll handle everything else. The domain costs about €15 for the year and it'll be registered in your name."

Set expectations clearly from the start:

- One page only  
- They supply the content  
- No ecommerce, no booking systems, no ongoing maintenance  
- The site is theirs to keep

### 3\. Collect the content

Before you touch the template, get everything you need from the business:

- [ ] Business name  
- [ ] Tagline or short description  
- [ ] Town / area  
- [ ] What they do — services or products (up to four)  
- [ ] About blurb — two or three sentences  
- [ ] Opening hours  
- [ ] Address  
- [ ] Phone number  
- [ ] Email address  
- [ ] Social media handles (Instagram, Facebook — whatever they have)  
- [ ] A photo — at least one good one, 800×600px minimum

Don't start building until you have all of this. Content chasing after you've built is painful.

### 4\. Register the domain

Register the domain **in the business's name** with their email address as the account holder. Not yours.

- Cloudflare Registrar is a good choice — at-cost pricing, no markup  
- Blacknight is a good Irish option, especially for .ie domains  
- .ie, .com, or .co.uk depending on location and preference

Ownership is the whole point of the campaign. The domain must belong to the business from day one.

### 5\. Fork the template and build the site

\# Fork thewebisyours-template on GitHub, then clone your fork

git clone https://github.com/YOUR\_USERNAME/thewebisyours-template.git

cd thewebisyours-template

\# Rename template to your business

\# e.g. mv index.html index.html (already named correctly)

Open `index.html` and work through it top to bottom:

1. Swap the four CSS colour variables to match the business  
2. Fill in every placeholder with real content  
3. Add the photo  
4. Add the Google Maps embed  
5. Update contact details

See the README for detailed instructions on each step.

### 6\. Deploy to Cloudflare Pages

1. Push your customised repo to GitHub  
2. Log into [Cloudflare Dashboard](https://dash.cloudflare.com)  
3. Go to **Workers & Pages → Create → Pages → Connect to Git**  
4. Select the repo  
5. Framework preset: **None** — leave build command and output directory blank  
6. Click **Save and Deploy**  
7. Add the custom domain under **Custom Domains**  
8. Point the domain's nameservers to Cloudflare

Done. The site is live.

### 7\. Hand it over

Once the site is live:

- Walk the business owner through their Cloudflare and domain accounts  
- Make sure they have their login details saved somewhere safe  
- Explain that domain renewal comes up once a year — around €15  
- Let them know Cloudflare Pages hosting is free indefinitely  
- Give them the raw HTML file so they own everything

Send them off with confidence. The site is theirs now.

### 8\. Tell us about it

Drop a message to [hello@thewebisyours.org](mailto:hello@thewebisyours.org) with:

- The business name and location  
- The URL  
- One sentence about what they do

We keep a record of every site built as part of the campaign. And if you're up for it, a short post on LinkedIn or Bluesky about the experience helps the campaign grow — tag **\#TheWebIsYours**.

---

## Ground Rules

**One page only.** The campaign is called one page for a reason. If a business needs more than one page, they need a proper web project — point them to a local agency and wish them well.

**Content from the client, always.** Don't write their About section for them. Don't guess their hours. Get it in writing before you build.

**Domain in their name, always.** No exceptions. If something happens to you, the site must still belong to them.

**No ongoing commitment.** You're not signing up to be their webmaster. Build it, hand it over, move on. Be kind about it but be clear.

**Use the template.** It exists for consistency. Customise colours, content, and photos — but don't reinvent the structure for each build. The template is the campaign's quality standard.

---

## Questions?

Get in touch at [hello@thewebisyours.org](mailto:hello@thewebisyours.org) or open an issue in this repo.

---

*The Web Is Yours · [thewebisyours.org](https://thewebisyours.org) · Westport, Ireland · 2026*  
