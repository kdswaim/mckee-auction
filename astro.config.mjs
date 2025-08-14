import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import markdoc from '@astrojs/markdoc';
import icons from 'astro-icon';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import partytown from '@astrojs/partytown';
// import content from '@astrojs/content';

// https://astro.build/config
export default defineConfig({

  output: 'server',
  adapter: netlify(),
  experimental: {
  },

  vite: {
    resolve: {
      alias: {
        'keystatic:posts' : '/src/keystatic/posts.ts'
      },
    },
    plugins: [tailwindcss()],
  },

  integrations: [
    markdoc(),
    icons({ local: 'src/icons' }),
    react(),
    markdoc(),
    // content(),
    keystatic(),
    partytown(),
  ],
});