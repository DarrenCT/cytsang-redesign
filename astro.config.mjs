// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://darrenct.github.io/cytsang-redesign/
// If the site moves to a custom domain, set `site` to that domain and remove `base`.
export default defineConfig({
  site: 'https://darrenct.github.io',
  base: '/cytsang-redesign',
  trailingSlash: 'always',
});
