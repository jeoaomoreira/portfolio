import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Public site URL — used for canonical links, sitemap, and Open Graph.
  // TODO: swap for the real domain once chosen (e.g. https://raiz.cr).
  site: 'https://raiz.cr',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
