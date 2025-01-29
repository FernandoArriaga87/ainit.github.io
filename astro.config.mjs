// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://fernandoarriaga87.github.io/ainit.github.io',
  base: '/ainit.github.io',
  outDir: './dist',
  integrations: [tailwind()]
});