# Lunera website

Nuxt 4 and Vue 3 landing page for the Lunera Windows media organizer.

## Development

```bash
npm ci
npm run dev
```

## Production

```bash
npm run generate
```

Local generation writes to `.output/public`. On Netlify, `netlify.toml` explicitly selects `NITRO_PRESET=netlify-static`, which writes to `dist`, and configures `dist` as the publish directory. It also configures asset caching. The landing page is rendered at build time, so serving its HTML does not require a serverless function. `npm run build` remains available for a Node server deployment.

## Performance and accessibility

- Hero photographs are local WebP assets with explicit dimensions, preload hints, and high fetch priority. The preview image below the fold uses lazy loading.
- Static SEO metadata is generated on the server. Production JavaScript and CSS are minified, and generated text assets include Brotli and gzip versions.
- Secondary text colors meet WCAG AA contrast against the page surfaces. The page includes a keyboard skip link, labeled tool controls, and native FAQ disclosure controls.
- The landing page ships no executable JavaScript. `ToolSelector` uses native radio controls and CSS to switch tool previews, including keyboard navigation; the FAQ uses native disclosure controls. Both work with JavaScript disabled.
- This is a single-page site without client-side routes, so an app update manifest and route-change announcements are unnecessary.

The `/` route uses `noScripts: true`. Future interactions must use native HTML controls or explicitly restore client scripts before adding Vue event handlers.

## Search discovery

`app/composables/useLandingSeo.ts` defines the canonical URL, indexing directives, Open Graph and Twitter metadata, and JSON-LD for the website, Windows application, and visible FAQ. `public/robots.txt` permits crawlers and references `public/sitemap.xml`.

The production URL is `https://lumora-app-website.netlify.app/`. When changing domains, update the canonical and social URLs in the SEO composable, `public/robots.txt`, and `public/sitemap.xml` together.

AI search discovery uses the same crawlable HTML and accurate structured data. There is no special AI meta tag that guarantees inclusion or indexing. See [Google's AI search guidance](https://developers.google.com/search/docs/appearance/ai-features).

The local photographs come from the Unsplash image URLs previously used by this website (`photo-1470770841072-f978cf4d019e` and `photo-1464822759023-fed622ff2c3b`).
