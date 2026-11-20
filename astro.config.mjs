import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Public site URL — used for canonical links, sitemap, and Open Graph.
  // TODO: register nambuku.com (verified available 2026-11-19) and point DNS here.
  site: 'https://nambuku.com',
  // Section was renamed Trabajos → Proyectos; keep old shared links working.
  redirects: {
    '/trabajos': '/proyectos',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
