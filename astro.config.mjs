// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Hébergement GitHub Pages par défaut : https://ariion.github.io/mairiedesassy/
// Pour un nom de domaine propre (ex. https://www.sassy.fr), définir
// SITE_URL=https://www.sassy.fr et SITE_BASE=/ au moment du build.
const site = process.env.SITE_URL ?? 'https://ariion.github.io';
const base = process.env.SITE_BASE ?? '/mairiedesassy';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
