import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://chebass.github.io',
  base: process.env.BASE_PATH || '/sdi',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
