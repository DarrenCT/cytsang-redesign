// Firm facts. Source of truth: docs/content-inventory.md

export const site = {
  name: 'C.Y. Tsang & Co., Solicitors',
  shortName: 'C.Y. Tsang & Co.',
  nameZh: '曾重瑜律師事務所',
  founded: 2007,
  description:
    'C.Y. Tsang & Co., Solicitors — a Hong Kong law firm founded in 2007, focused on civil and criminal litigation alongside corporate, trust, probate and conveyancing work.',
  address: {
    lines: ['23/F, Kam Sang Building', 'No. 257 Des Voeux Road Central', 'Sheung Wan, Hong Kong'],
    oneLine: '23/F, Kam Sang Building, 257 Des Voeux Road Central, Sheung Wan, Hong Kong',
    note: 'Above Sheung Wan MTR Station, Exit B',
    mapQuery: 'Kam Sang Building, 257 Des Voeux Road Central, Sheung Wan, Hong Kong',
  },
  tel: '3583 2601',
  telHref: 'tel:+85235832601',
  fax: '3583 2604',
  email: 'info@cytsang.com',
};

export const nav = [
  { label: 'The Firm', short: 'The Firm', path: '/about/' },
  { label: 'Practice Areas', short: 'Practice', path: '/practice/' },
  { label: 'Our People', short: 'People', path: '/people/' },
  { label: 'Contact', short: 'Contact', path: '/contact/' },
];

/** Prefix an internal path with the configured base (e.g. /cytsang-redesign on GitHub Pages). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapQuery)}&z=17&output=embed`;
