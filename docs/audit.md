# Current Site Audit — cytsang.com

Captured 2026-11-10. Companion to `content-inventory.md`.

## What the current site is

A mid-2000s-era brochure site for C.Y. Tsang & Co., Solicitors, a Hong Kong litigation and commercial firm founded in 2007. Built on static PHP pages. Trilingual (EN / 繁體中文 / 简体中文).

## Design assessment

- **Header:** centered serif wordmark ("C.Y. TSANG & CO., SOLICITORS") with the Chinese firm name beneath; language switcher top-right.
- **Navigation:** navy blue horizontal bar, five items (Profile, People, Practice, Links, Contact Us).
- **Hero:** a single dated stock photo of law-report volumes labelled "1998"; grey gradient background.
- **Body:** dense walls of left-aligned text with weak visual hierarchy. No cards, no iconography, no imagery beyond the one banner.
- **Typography:** generic system serif/sans mix, no deliberate type system.
- **Overall:** dated, text-heavy, no clear calls to action.

## Usability and technical problems

- **No primary call to action.** Contact is buried as a nav item; nothing drives a visitor toward an enquiry.
- **Not mobile-considered.** Fixed-width desktop layout.
- **Broken HTTPS certificate.** See below.
- **Thin content on three of five team members** (names only).
- **Static, hard-to-maintain PHP pages** with trilingual content duplicated across `/`, `/tc/`, `/sc/`.

## HTTPS certificate issue

- **Symptom:** `https://www.cytsang.com` fails to load with `ERR_CERT_COMMON_NAME_INVALID`. The installed TLS certificate is issued for a different domain, so it does not cover `cytsang.com` / `www.cytsang.com`. The site only works over plain, insecure HTTP.
- **Why it matters:** browsers increasingly block or warn on such sites; it's a credibility and security problem for a law firm.
- **How to fix (for the firm / their host):**
  1. Identify the current web host and who has control-panel access.
  2. Install a free Let's Encrypt certificate covering both the apex (`cytsang.com`) and `www` subdomain. Most hosts offer this as one-click "AutoSSL" / free SSL; it auto-renews every 90 days.
  3. Add an HTTP-to-HTTPS redirect so visitors land on the secure version.
- **Recommended path:** since the site is being rebuilt, host the new site on a platform with automatic HTTPS (Vercel, Netlify, or Cloudflare Pages). The certificate problem then disappears at launch. Patch the old certificate now only if the current site must stay reachable in the interim.

## Redesign priorities (from this audit)

1. Establish a clear primary action (request a consultation / contact the firm).
2. Rebuild information architecture with real content hierarchy.
3. Design mobile-first.
4. Plan trilingual structure in from the start (navigation, layout, Chinese font stacks and line spacing).
5. Add missing content: team bios and photos, practice-area detail, contact form, map, trust signals.
