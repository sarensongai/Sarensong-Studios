# Sarensong Studios

Website and brand kit for Sarensong Studios, a one-person indie game studio, and its debut project **Embertide** (working title), a stylized island fable about dwarves.

It's a static site with no build step, so it can be hosted for free on GitHub Pages, Cloudflare Pages or Netlify.

```
index.html            home page: hero, Embertide, studio, pipeline, contact
press.html            press kit: fact sheet, copy, logos, images, colour and type
assets/site.css       shared styles (colour and type tokens at the top)
assets/site.js        animated ridgeline hero + copy buttons
assets/               favicon, share image, Embertide title art
brand/logo/           logo SVGs (text outlined) and transparent PNGs
brand/social/         avatar, banners, Embertide title card
brand/email/          email signature and its logo
BRAND.md              brand guide: name, voice, logo rules, colours, type, social kit
.nojekyll             tells GitHub Pages to serve files as-is
```

## Preview locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Before going live

Some of this is a proposal or placeholder so the site works today. Swap each item for the real thing.

- [ ] **Domain and email.** The site uses `hello@sarensong.com` and `sarensong.com`. Find and replace across `index.html`, `press.html`, `BRAND.md` and `brand/email/signature.html` once the domain is decided.
- [ ] **Embertide story.** The title, logline and press-kit description are a proposed starting point. Replace them with the real premise (homepage project section, press kit descriptions, `BRAND.md`).
- [ ] **Roadmap.** Five stages: Concept (done), Pre-alpha (now), Vertical slice, Announce, Launch. Adjust to the real plan.
- [ ] **Screenshots.** The two "Signal pending" frames on the homepage take images. Put files in `assets/` and add an `<img>` inside the frame:
  ```html
  <div class="frame frame-art"><img src="assets/screenshot-01.jpg" alt="Dwarves crossing the island at dusk"></div>
  ```
- [ ] **Pipeline section.** Check that the "built with Claude" list matches how the tools are really used. The "Living characters" item is labelled as R&D.
- [ ] **Socials.** Claim `@sarensong` (see `BRAND.md`), then add links to the footer and the press kit fact sheet.
- [ ] **Email signature.** Put your name in `brand/email/signature.html`.

## Deploy on GitHub Pages

1. Merge this branch into `main`.
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` and `/ (root)`.
3. To use a custom domain, add it under **Settings → Pages → Custom domain**. GitHub creates a `CNAME` file for you.
4. At your domain registrar, add the DNS records GitHub shows you (four `A` records for the apex domain, plus a `CNAME` for `www`), then tick **Enforce HTTPS** once the certificate is issued.

## Brand

See [BRAND.md](BRAND.md) for the full guide. In short: sea-glass `#5ED6C9` on abyss `#07111A` for the studio, ember `#FF9F57` for Embertide; Chakra Petch for headings, Grenze for Embertide titles, Hanken Grotesk for body, Martian Mono for labels.
