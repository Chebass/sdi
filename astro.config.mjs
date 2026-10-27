import { defineConfig } from 'astro/config';

const productionHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || 'sdi-sable.vercel.app';

export default defineConfig({
  site: process.env.SITE_URL || `https://${productionHost}`,
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
