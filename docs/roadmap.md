# Redesign Roadmap — Suggested Next Steps

Talking points for the redesign. Where we are, and what comes next.

## Where we are today

- Audited the current site and captured a full content inventory (`docs/`).
- Produced a **homepage design concept (v1)** — a complete visual direction to react to.
- Identified a live technical issue: the site's HTTPS certificate is broken (see `docs/audit.md`).

## What the concept demonstrates

- A clear primary action the current site lacks: **"Request a Consultation,"** repeated at the top, mid-page, and in contact.
- A conservative, credible visual identity (deep navy, brass accent, classic serif) suited to a litigation firm.
- Structured practice areas and attorney credibility, instead of walls of text.
- Mobile-first and trilingual-ready (EN / 繁 / 简) by design.

## Suggested next steps

1. **Agree the direction.** Confirm the overall look and tone, or flag what to adjust, before investing in more pages.
2. **Gather real assets.** Professional attorney photos, bios for the three team members currently listed by name only, and office photography. This is the biggest lever on how finished the site feels.
3. **Design the remaining key pages:** practice-area detail, full attorney profile, and the firm/about page.
4. **Produce the Chinese-language versions** of the approved layouts, with proper Chinese typography.
5. **Decide the build + hosting.** Recommended: a modern framework (e.g. Next.js) on a host with automatic HTTPS (Vercel / Netlify / Cloudflare Pages), which also resolves the certificate problem at launch.
6. **Fix the HTTPS certificate** on the current site in the interim, if it needs to stay reachable before the new site ships.

## Open questions for the firm

- Who are the primary clients the site should speak to first (corporate vs. individual)?
- Are professional photos of the team and office available, or do they need to be arranged?
- Is there appetite for added content over time (insights, case notes) to support search visibility?
