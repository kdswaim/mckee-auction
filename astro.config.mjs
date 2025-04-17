import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import markdoc from '@astrojs/markdoc';
import icons from 'astro-icon';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({

  output: 'server',
  adapter: netlify(),
  experimental: {
    session: true
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    markdoc(),
    icons({ local: 'src/icons' }),
    react(),
  ],
});
