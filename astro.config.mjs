// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Hébergement Vercel : https://mairiedesassy.vercel.app/
// Pour un nom de domaine propre (ex. https://www.sassy.fr), définir la
// variable d'environnement SITE_URL dans les réglages du projet Vercel.
const site = process.env.SITE_URL ?? 'https://mairiedesassy.vercel.app';
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
