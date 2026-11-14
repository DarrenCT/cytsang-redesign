# cytsang-redesign

Redesign of the website for **C.Y. Tsang & Co., Solicitors** (曾重瑜律師事務所), a Hong Kong law firm.

Current deliverables:

- **High-fidelity mockups** of three visual directions (`mockups/`).
- A **working demo of the Western direction**, built with [Astro](https://astro.build) and deployed to GitHub Pages at <https://darrenct.github.io/cytsang-redesign/>.

The demo is English only, carries a "redesign demo" ribbon, and is marked `noindex` so it does not appear in search results. Practice-area copy beyond the Civil Litigation page is **draft text for the firm to review**, not approved content.

## Project status

- [x] Audit current site + full content inventory
- [ ] Define goals, audience, and primary call to action
- [ ] Benchmark comparable law firm sites
- [ ] Information architecture + sitemap
- [x] Homepage concept — Western style
- [x] Homepage concept — Hong Kong style
- [x] Homepage concept — local Chinese firm style
- [x] Practice-area detail page (all three styles)
- [x] Working Astro demo — Western style (home, firm, people, contact, all 15 practice areas)
- [ ] Attorney profile + contact page designs for the Hong Kong and local styles
- [ ] Chinese-language versions of approved layouts

## Repository layout

| Path | Contents |
| :--- | :--- |
| `docs/content-inventory.md` | Source-of-truth record of the existing site's content |
| `docs/audit.md` | Audit of the current site, including the HTTPS certificate issue |
| `docs/roadmap.md` | Suggested next steps and talking points |
| `src/pages/` | Demo site pages (home, firm, people, contact, practice index and detail) |
| `src/content/practice/` | One Markdown file per practice area; adding a file adds a page |
| `src/data/` | Firm details, navigation, and team data |
| `src/styles/global.css` | Shared design tokens and styles, ported from the Western mockups |
| `.github/workflows/deploy.yml` | Builds and deploys the demo to GitHub Pages on every push to `master` |
| `mockups/home/` | Homepage concept — Western / international style |
| `mockups/home-hk/` | Homepage concept — Hong Kong style (bilingual, skyline, blue + gold) |
| `mockups/home-local/` | Homepage concept — local Hong Kong Chinese firm style (Chinese-first, maroon, dense portal layout) |
| `mockups/practice-detail/` | Practice-area detail page — Western style (Civil Litigation example) |
| `mockups/practice-detail-hk/` | Practice-area detail page — Hong Kong style (Civil Litigation example) |
| `mockups/practice-detail-local/` | Practice-area detail page — local Hong Kong Chinese firm style (Civil Litigation example) |

All pages are locked to a light theme with dark accents (navy, blue or maroon depending on the direction).

## Running the demo locally

Requires Node.js 22.23.4 or newer (`.nvmrc` pins 26).

```bash
npm install
npm run dev
```

The site is served at <http://localhost:4321/cytsang-redesign/>. `npm run build` writes the static site to `dist/`.

The `/cytsang-redesign` path prefix comes from `base` in `astro.config.mjs`; internal links go through the `url()` helper in `src/data/site.ts`. To host on a custom domain, set `site` to that domain and remove `base`.

## Key facts

- **Firm:** C.Y. Tsang & Co., Solicitors, founded Hong Kong 2007
- **Languages:** English / Traditional Chinese / Simplified Chinese (trilingual parity required)
- **Focus:** civil and criminal litigation, plus corporate/commercial, trust, wills, probate, conveyancing
- **Live site:** http://cytsang.com (HTTPS currently broken — see `docs/audit.md`)
