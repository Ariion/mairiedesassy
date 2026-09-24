import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/** Affichage municipal : arrêtés, comptes rendus, avis, infos. */
const affichage = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/affichage' }),
  schema: z.object({
    date: z.coerce.date(),
    titre: z.string(),
    info: z.string(),
    type: z.enum(['Arrêté', 'Compte rendu', 'Avis', 'Info']),
    /** Chemin d'un PDF placé dans public/documents/ (ex. "documents/cr-2026-09-05.pdf") */
    fichier: z.string().optional(),
  }),
});

const evenements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/evenements' }),
  schema: z.object({
    date: z.coerce.date(),
    heure: z.string().optional(),
    titre: z.string(),
    lieu: z.string(),
    organisateur: z.string(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      titre: z.string(),
      auteur: z.enum(['Mairie', 'Association patrimoine', 'SIVOM', 'Comité des fêtes']),
      date: z.coerce.date(),
      extrait: z.string(),
      image: image().optional(),
      /** Commentaires validés par la mairie (modération). */
      commentaires: z
        .array(z.object({ nom: z.string(), date: z.coerce.date(), texte: z.string() }))
        .default([]),
    }),
});

const menus = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/menus' }),
  schema: z.object({
    semaine: z.coerce.date(),
    jours: z.array(
      z.object({
        jour: z.enum(['Lundi', 'Mardi', 'Jeudi', 'Vendredi']),
        entree: z.string(),
        plat: z.string(),
        dessert: z.string(),
      }),
    ),
  }),
});

const revues = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/revues' }),
  schema: z.object({
    type: z.enum(['mensuelle', 'trimestrielle']),
    numero: z.number(),
    date: z.coerce.date(),
    titre: z.string(),
    /** Chemin d'un PDF placé dans public/revues/ */
    fichier: z.string().optional(),
  }),
});

const annuaire = defineCollection({
  loader: file('./src/content/annuaire.yaml'),
  schema: z.object({
    nom: z.string(),
    activite: z.string(),
    categorie: z.enum(['Agriculture', 'Artisanat', 'Hébergement', 'Commerce & services']),
    adresse: z.string().optional(),
    telephone: z.string().optional(),
    site: z.string().url().optional(),
  }),
});

const conseil = defineCollection({
  loader: file('./src/content/conseil.yaml'),
  schema: z.object({
    nom: z.string(),
    fonction: z.string(),
    ordre: z.number(),
  }),
});

export const collections = { affichage, evenements, articles, menus, revues, annuaire, conseil };
