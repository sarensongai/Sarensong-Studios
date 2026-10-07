# Sarensong Studios brand guide

Everything that makes Sarensong look and sound like Sarensong. Files live in `brand/`; the public version of this is `press.html`.

## The name

- **Formal name:** Sarensong Studios
- **Short name and wordmark:** SARENSONG
- **Handle everywhere:** `@sarensong` (fallback: `@sarensongstudios`)
- **Domain:** `sarensong.com` (fallback: `sarensongstudios.com`)

The story behind it: a song carried across the water, the kind of call you can't help but follow. That's the feeling every Sarensong world should leave behind. (If the name comes from somewhere more personal, swap in the real story.)

## Taglines

- **Primary:** Worlds that call you back.
- **Studio descriptor:** Independent game studio · Est. 2026
- **Current-project line:** Now building Embertide.

## Boilerplate

**One line**
> Sarensong Studios is a one-person indie game studio making stylized, story-led worlds.

**Paragraph**
> Sarensong Studios is an independent game studio founded in 2026. It is a team of one: design, code, art direction and story all come from a single developer, supported by an AI-assisted production pipeline built on Claude. The studio makes stylized, story-led games with handcrafted worlds that players want to come back to. Its debut project, Embertide, is in development.

**Social bio (under 160 characters)**
> Indie game studio of one. Stylized, story-led worlds that call you back. Now building Embertide, an island fable about dwarves.

## Project 01: Embertide (working title)

The name joins the dwarves' forge (**ember**) to the sea around their island (**tide**), which are also the brand's two accent colours.

- **Tagline:** A stylized island fable about dwarves.
- **Logline:** The sea swallowed their mountain. Now a small clan of dwarves must build a new hearth on an island that sings, and learn what its song is trying to tell them.
- **Pillars:** An island you can read at a glance · Dwarves at the centre · Told like a fable
- **Status:** Pre-alpha

> The logline and the premise in the press kit are a starting proposal. Replace them with the real story whenever it's ready; the title, tagline and pillars still work with most dwarf-and-island premises.

## Voice

Warm, curious and plain-spoken, with a little myth and a little tech.

- Short sentences. Concrete nouns: forge, tide, cove, hearth.
- Talk to players like a friend showing them something they made.
- Be honest about stage: "pre-alpha", "working title", "in development". Never oversell.
- Avoid: hype words (revolutionary, epic, AAA-quality), and walls of lore.

| Instead of | Write |
| --- | --- |
| An epic, revolutionary open-world experience | A small island, made by hand |
| Leveraging cutting-edge AI | Built with Claude |
| Coming soon!!! | In development. Follow along. |

## Logo

The mark is a sound wave that rises into a mountain peak, with an ember light inside it: the studio's song and the dwarves' forge in one shape.

| File | Use |
| --- | --- |
| `brand/logo/sarensong-lockup-on-dark.svg` | Default: website, slides, video end cards |
| `brand/logo/sarensong-lockup-on-light.svg` | Documents, email, light backgrounds |
| `brand/logo/sarensong-stacked-*.svg` | Square-ish spaces, posters |
| `brand/logo/sarensong-mark-*.svg` | Avatars, favicons, watermarks |
| `brand/logo/sarensong-lockup-white.svg` / `-black.svg` | One-colour printing, photos, merch |
| `brand/logo/embertide-title-on-dark.svg` / `-on-light.svg` | The game's own logo |
| `brand/logo/png/` | PNG versions of all of the above, transparent backgrounds |

All logo text is converted to outlines, so the files look right without the fonts installed.

- **Clear space:** at least the height of the mark on every side.
- **Minimum size:** horizontal lockup 120 px wide on screen, 30 mm in print. The mark alone 24 px.
- **Don't:** recolour outside the palette, stretch, rotate, add shadows or outlines, or put the colour version on a busy photo (use the white one-colour version instead).

## Colour

| Name | Hex | Role |
| --- | --- | --- |
| Abyss | `#07111A` | Backgrounds |
| Deep | `#0C1A26` | Panels and cards |
| Hairline | `#1B2C3A` | Borders and grid lines |
| Foam | `#E4EEF1` | Main text on dark |
| Mist | `#8EA3B0` | Secondary text |
| Sea-glass | `#5ED6C9` | Studio accent: buttons, links, the mark |
| Ember | `#FF9F57` | Embertide accent, the forge light |
| Flare | `#FFE3B8` | Highlights within ember gradients |

On light backgrounds, use the deeper variants in the light logo files: sea-glass `#0B7C71` and ember `#E8762A`.

Sea-glass belongs to the studio and ember belongs to the game. Keep that split, and the two will always read as related but distinct.

## Type

All free on Google Fonts.

| Face | Role |
| --- | --- |
| **Chakra Petch** 600–700 | Studio headings and wordmark. Its angled cuts read as both game interface and chiselled stone. |
| **Grenze** 800, uppercase | Embertide titles only. Heavy and carved, like dwarven lettering. |
| **Hanken Grotesk** 400–600 | Body text. |
| **Martian Mono** 400–500, uppercase, letter-spaced | Labels, status readouts, small print. |

## Imagery and motifs

- **The ridgeline island:** stacked wave lines that swell into an island peak. It appears in the site hero, the banners and the title card. The code is in `assets/site.js`.
- **The forge light:** one small ember glow at the summit. Use it once per composition.
- **Interface frames:** thin corner brackets, hairline grids, monospace status labels (`PRE-ALPHA`, `PROJECT 01`). Keep them sparse.
- When real screenshots exist, frame them with the corner brackets and let the game's colour do the talking.

## Social kit

| File | Where |
| --- | --- |
| `brand/social/avatar-1024.png` | Profile picture everywhere (safe for circle crops) |
| `brand/social/banner-1500x500.jpg` | X / Twitter and Bluesky header |
| `brand/social/banner-youtube-2560x1440.jpg` | YouTube channel art (logo sits inside the mobile safe area) |
| `brand/social/embertide-card-1920x1080.jpg` | Announcement posts, devlog covers, Discord |
| `assets/og.png` | Link preview for the website |

Handles to claim, in order: X, Bluesky (use `sarensong.com` as the handle once the domain is live), Instagram, TikTok, YouTube, Discord server, itch.io, and a Steam developer page when Embertide gets a store page.

## Email

- `hello@sarensong.com` for public, press and partnerships
- `yourname@sarensong.com` for you personally, and for the Claude for Startups application
- Signature: `brand/email/signature.html`. Open it in a browser, select all, copy and paste it into your mail app's signature settings. It loads the logo from the live website, so publish the site first.
