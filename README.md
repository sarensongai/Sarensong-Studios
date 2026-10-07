# Sarensong Studios

Website and brand kit for Sarensong Studios, a one-person game studio, and its first game **Skyhoard**: two dwarf crews, two airships, one floating island.

It's a static site with no build step, so it can be hosted for free on GitHub Pages, Cloudflare Pages or Netlify.

```
index.html            home page: hero, Skyhoard, how we build, studio, contact
press.html            press kit: fact sheet, copy, screenshots, logos, colour and type
assets/site.css       shared styles (colour and type tokens at the top)
assets/site.js        copy buttons
assets/skyhoard/      in-game screenshots
brand/logo/           logo SVGs (text outlined) and transparent PNGs
brand/social/         avatar, banners, Skyhoard card, link preview image
brand/email/          email signature and its logo
BRAND.md              brand guide: logo rules, colours, type, voice, boilerplate
.nojekyll             tells GitHub Pages to serve files as-is
```

## Preview locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Before going live

- [ ] **Domain and email.** The site uses `hello@sarensong.com` and `sarensong.com`. Find and replace across `index.html`, `press.html`, `BRAND.md` and `brand/email/signature.html` if the domain ends up different.
- [ ] **Skyhoard name.** Marked as a working title on the site and press kit. Remove "working title" once it is final.
- [ ] **Platform.** The press kit says PC. Change it if that's wrong.
- [ ] **Socials.** Claim `@sarensong`, then add links to the footer and the press kit fact sheet.
- [ ] **Email signature.** Add your surname in `brand/email/signature.html` if you want it.
- [ ] **New screenshots.** Drop them in `assets/skyhoard/` and swap the file names in `index.html` and `press.html`.

## Deploy on GitHub Pages

1. Merge this branch into `main`.
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` and `/ (root)`.
3. To use a custom domain, add it under **Settings → Pages → Custom domain**. GitHub creates a `CNAME` file for you.
4. At your domain registrar, add the DNS records GitHub shows you (four `A` records for the apex domain, plus a `CNAME` for `www`), then tick **Enforce HTTPS** once the certificate is issued.

## Brand

See [BRAND.md](BRAND.md). In short: ink `#161B18` on stone `#F2F1EC` with one pine accent `#2D5C4C`; Barlow Semi Condensed for headings and the logo, Barlow for body text.
