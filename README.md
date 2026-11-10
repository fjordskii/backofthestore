# Back of the Store

Brand site for the [Back of the Store](https://www.youtube.com/@backofthestore) YouTube channel, live at [backofthestore.studio](https://backofthestore.studio).

Short explainers of where everyday businesses really make their money: the rent, royalties, fees and float. Every episode is sourced from public filings and uses original diagrams. We're not affiliated with the companies we cover, and nothing here is financial advice.

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

All pages are statically generated at build time.

## Adding an episode

Episodes are driven by a single data file. Shipping a new public episode is a one-entry change:

1. Add a thumbnail at `public/episodes/<slug>.jpg` (1280×720).
2. Append one object to the `episodes` array in `src/data/episodes.ts`. Use a new `slug` (this becomes `/episodes/<slug>`), the public YouTube id, ISO `publishedAt` date, ISO-8601 `duration` (`PT3M45S`), short `summary` and `description`, `chapters`, `sources` (primary filings only), a `methodNote` (rounded figures; any calculations labeled as ours), and the episode `disclaimer`.
3. Commit and deploy. The homepage “latest episode” block, `/episodes` list, the episode page, `sitemap.xml`, and VideoObject JSON-LD all read from that array.

Do not add an episode until the YouTube video is public. Leave drafts out of the data file.

## Brand

Colors and type follow `BRAND.md` from the channel kit: DM Serif Display for headlines, Manrope for UI, cream/paper ground, ink, green, and one rust accent phrase.

## Deploy

The Vercel project is `backofthestore` on team `fjordskiis-projects`, attached to `backofthestore.studio` (www redirects to the apex). Production deploys from the `main` branch of `fjordskii/backofthestore`.
