// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import preact from "@astrojs/preact"
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), preact(), (await import("@playform/compress")).default()],
  experimental: {
    responsiveImages: true
  },
  vite: {

    plugins: [tailwindcss()],

  },
});