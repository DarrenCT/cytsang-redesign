# cytsang-redesign

Redesign of the website for **C.Y. Tsang & Co., Solicitors** (曾重瑜律師事務所), a Hong Kong law firm.

Current deliverable: **high-fidelity mockups** of the redesigned site. Tech stack for the eventual build is still open (leading candidate: Next.js, deployed on a platform with automatic HTTPS).

## Project status

- [x] Audit current site + full content inventory
- [ ] Define goals, audience, and primary call to action
- [ ] Benchmark comparable law firm sites
- [ ] Information architecture + sitemap
- [x] Homepage concept — Western style
- [x] Homepage concept — Hong Kong style
- [x] Homepage concept — local Chinese firm style
- [x] Practice-area detail page (all three styles)
- [ ] Attorney profile + contact pages
- [ ] Chinese-language versions of approved layouts

## Repository layout

| Path | Contents |
| :--- | :--- |
| `docs/content-inventory.md` | Source-of-truth record of the existing site's content |
| `docs/audit.md` | Audit of the current site, including the HTTPS certificate issue |
| `docs/roadmap.md` | Suggested next steps and talking points |
| `mockups/home/` | Homepage concept — Western / international style |
| `mockups/home-hk/` | Homepage concept — Hong Kong style (bilingual, skyline, blue + gold) |
| `mockups/home-local/` | Homepage concept — local Hong Kong Chinese firm style (Chinese-first, maroon, dense portal layout) |
| `mockups/practice-detail/` | Practice-area detail page — Western style (Civil Litigation example) |
| `mockups/practice-detail-hk/` | Practice-area detail page — Hong Kong style (Civil Litigation example) |
| `mockups/practice-detail-local/` | Practice-area detail page — local Hong Kong Chinese firm style (Civil Litigation example) |

All pages are locked to a light theme with dark accents (navy, blue or maroon depending on the direction).

## Key facts

- **Firm:** C.Y. Tsang & Co., Solicitors, founded Hong Kong 2007
- **Languages:** English / Traditional Chinese / Simplified Chinese (trilingual parity required)
- **Focus:** civil and criminal litigation, plus corporate/commercial, trust, wills, probate, conveyancing
- **Live site:** http://cytsang.com (HTTPS currently broken — see `docs/audit.md`)
