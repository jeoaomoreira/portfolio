import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Public site URL — used for canonical links, sitemap, and Open Graph.
  // TODO: swap for the real domain once chosen (e.g. https://raiz.cr).
  site: 'https://raiz.cr',
  // Section was renamed Trabajos → Proyectos; keep old shared links working.
  redirects: {
    '/trabajos': '/proyectos',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
