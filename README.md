# CharmerWay Archive

The archive site for **CharmerWay**, an art collective from Baltimore, Maryland (2017–2022).

It's a plain static site with no build step and nothing to install:

```
index.html   page structure (no content lives here)
styles.css   all styling, light + dark themes
app.js       renders every section from data.js
data.js      ALL the content — edit this
media/       images (photos, flyers, scans, avatars)
```

Open `index.html` in a browser to view it locally.

## Editing content (`data.js`)

Everything on the page comes from `window.ARCHIVE` in `data.js`. Edit the
lists and reload the page.

- `name`, `years`, `place`, `tagline`: the hero and footer.
- `now`: what CharmerWay is today, shown in a panel in the hero. `text` plus
  `items` of `{ label, value, url?, copy? }`. `copy: true` adds a Copy button
  (used for the Minecraft server address). `status: "minecraft"` shows whether the
  server is online, the player count and version, using the free public
  api.mcsrvstat.us service (it caches results for a few minutes).
- `minecraft`: the Minecraft Server section: `address`, `edition`, `text` and
  `steps` (how to join). It shows live status, players and version unless you
  add `status: false`. Remove the whole block to hide the section.
- `about`: a list of paragraphs. The first one is shown larger.
- `timeline`: `{ year, title, text }`
- `projects`: `{ name, kind, years, text, url? }`
- `episodes` (CStar Presents): `{ no, guest, title, date, url? }`
  - `no: null` shows "—" until the episode number is confirmed.
  - With a `url`, the episode becomes a link (▶).
  - With a `title`, it's the headline and the guest is shown as "with …".
- `people`: `{ name, role, photo? }`; `photo` is a path like `"media/nico.jpg"`.
- `gallery`: `{ src, caption, year, alt? }`
- `links`: `{ label, url }`. A link with an empty `url` and `todo: true` shows
  as a placeholder until you fill in the address.

Any entry with `todo: true` shows up as a dashed placeholder with a yellow
**To add** tag. Remove `todo: true` once the entry is filled in with real
information.

Keep it to facts you can stand behind. This is an archive.

Watch your punctuation: every entry is wrapped in `{ }`, entries are separated
by commas, and text goes inside quotes. If the page suddenly goes blank, a
missing comma or quote in `data.js` is the usual cause (open the browser
console to see the line number).

## Adding media

1. Put the file in `media/` (JPG, PNG, WebP or GIF). Keep files under ~1–2 MB;
   resize big phone photos first.
2. Use lowercase names without spaces, for example `media/school33-studio-2019.jpg`.
3. Add it to `gallery` in `data.js`:

   ```js
   gallery: [
     { src: "media/school33-studio-2019.jpg", caption: "Studio at School 33", year: "2019" }
   ],
   ```

The gallery shows a "how to add images" box until it has at least one entry.

## Deploying to charmerway.com

Upload the whole folder (`index.html`, `styles.css`, `app.js`, `data.js`,
`media/`; you can leave out this README and the `.claude/` folder, which only holds a local preview config). Any static host works.

**Netlify (easiest):** go to <https://app.netlify.com/drop> and drag the
`charmerway` folder onto the page. Then in *Domain management* add
`charmerway.com` and follow Netlify's DNS instructions at your registrar.
To update, drag the folder onto the site's *Deploys* tab again.

**GitHub Pages:** push the folder to a GitHub repository, then go to
*Settings → Pages*, choose *Deploy from a branch*, pick `main` and `/ (root)`.
Add `charmerway.com` under *Custom domain* (this creates a `CNAME` file), and
point the domain's DNS at GitHub Pages as described in GitHub's docs.

The page makes two outside requests: Google Fonts (Outfit and Inter), and
api.mcsrvstat.us for the Minecraft server status. If fonts are blocked the page
uses system fonts; if the status check fails it says "Status unavailable".

## Logo

The C mark and the four-point sparkle are redrawn as SVG from the CharmerWay
YouTube and X profile images. They're defined once at the top of `index.html`
(`<symbol id="mark">` and `<symbol id="sparkle">`) and reused everywhere,
including `media/favicon.svg`. If you have the original logo files, replace the
paths inside those symbols. The mark's colour is `--mark` in `styles.css`.
