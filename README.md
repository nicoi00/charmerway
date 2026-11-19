# CharmerWay Archive

The archive site for **CharmerWay**, an artist collective from Baltimore, Maryland (2017–2022).

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
- `closetEpisodes` (Charmers Cramped Closet Podcast): same fields as `episodes`.
- `music` (CStar Sound): `artists` as `{ name, role?, photo?, url? }` and
  `releases` as `{ title, artist, year, url? }`.
- `people`: `{ name, role, photo? }`; `photo` is a path like `"media/nico.jpg"`.
- `gallery`: `{ src, caption, year, alt? }`
- `logos`: `{ name, src, note, light? }` with `src` a file in `media/`. Use
  `light: true` for a transparent image that needs a white tile.
- `links`: `{ label, url }`. A link with an empty `url` and `todo: true` shows
  as a placeholder until you fill in the address.

The section ledes for both podcasts and CStar Sound come from the matching
entry in `projects`, so edit the text there.

Spelling: write **CharmerWay** (capital W) and **CStar** (capital S).

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

The C mark in the top bar, hero and footer is the official CharmerWay C
(`media/charmerway-c-mark.png`, cropped from the original `C Logo.png`). It's
applied as a CSS mask (`.cmark` in `styles.css`), so it takes the colour of
`--mark` in each theme. `media/favicon.svg` embeds the same file. The colour
versions in the Logos section are the original files resized to 1000px. The
four-point sparkle in the hero title is a small SVG `<symbol>` in `index.html`.
