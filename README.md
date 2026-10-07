# Sarensong Studios

Website for Sarensong Studios, a one-person indie game studio, and its debut project: a stylized island fable about dwarves.

It's a single static page with no build step, so it can be hosted for free on GitHub Pages, Cloudflare Pages or Netlify.

```
index.html          the whole site (HTML, CSS and the animated hero in one file)
assets/favicon.svg  browser tab icon
assets/logo-mark.svg  the wave-and-peak mark, for socials and documents
assets/og.png       preview image used when the link is shared
.nojekyll           tells GitHub Pages to serve files as-is
```

## Preview locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Before going live

Everything below is placeholder copy or a guess, written so the site works today. Swap each item for the real thing.

- [ ] **Domain and email.** The site uses `hello@sarensong.com` in three places (studio spec sheet, contact box, mailto link). Find and replace it once the domain is decided.
- [ ] **Game copy.** The Project 01 section (intro, three pillars) is written from the one-line premise "a stylized island fable about dwarves". Replace it with the real pitch.
- [ ] **Working title.** "Working title to be announced" sits above the project heading.
- [ ] **Roadmap.** Five stages: Concept (done), Pre-alpha (now), Vertical slice, Announce, Launch. Adjust to the real plan.
- [ ] **Screenshots.** Each "Signal pending" frame takes an image. Put files in `assets/` and add an `<img>` inside the frame:
  ```html
  <div class="frame"><img src="assets/screenshot-01.jpg" alt="Dwarves crossing the island at dusk"></div>
  ```
  The wide frame is 21:9 on desktop; the two smaller ones are 16:9.
- [ ] **Pipeline section.** Check that the "built with Claude" list matches how the tools are really used. The "Living characters" item is labelled as R&D.
- [ ] **Socials.** None are linked yet. Add them to the footer when the accounts exist.
- [ ] **Preview image.** Regenerate `assets/og.png` after the hero changes (any 1200×630 screenshot of the top of the page works).

## Deploy on GitHub Pages

1. Merge this branch into `main`.
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` and `/ (root)`.
3. To use a custom domain, add it under **Settings → Pages → Custom domain**. GitHub creates a `CNAME` file for you.
4. At your domain registrar, add the DNS records GitHub shows you (four `A` records for the apex domain, plus a `CNAME` for `www`), then tick **Enforce HTTPS** once the certificate is issued.

## Brand quick reference

| Token | Hex | Use |
| --- | --- | --- |
| Abyss | `#07111A` | Page background |
| Deep | `#0C1A26` | Raised panels |
| Rule | `#1B2C3A` | Hairlines and borders |
| Foam | `#E4EEF1` | Main text |
| Mist | `#8EA3B0` | Secondary text |
| Sea-glass | `#5ED6C9` | Studio accent, buttons, links |
| Ember | `#FF9F57` | Project 01 accent (the dwarves' forge light) |

Type: **Chakra Petch** for headings and the wordmark, **Hanken Grotesk** for body text, **Martian Mono** for labels. All three are free on Google Fonts.

The mark is a sound wave that rises into a mountain peak, with an ember light inside it: the studio's song and the dwarves' forge in one shape.
