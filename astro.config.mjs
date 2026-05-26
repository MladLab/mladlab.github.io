import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mladlab.github.io',
  integrations: [tailwind()],
});
