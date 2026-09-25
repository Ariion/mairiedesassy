# Site de la commune de Sassy (14170, Calvados)

Site vitrine de la mairie de Sassy, construit avec [Astro](https://astro.build) d’après la maquette Claude Design (`docs/design/`).
Il s’agit d’un site statique, sans base de données ni cookie. La police (Figtree) est hébergée sur le site. Design : maquette Figma « Sassy – Site de la mairie ».

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # vérification TypeScript + génération dans dist/ + index de recherche (Pagefind)
```

## Mise en ligne (Vercel)

Le site est publié sur **https://mairiedesassy.vercel.app/**. Vercel reconstruit le site à chaque push : la branche de production est publiée, les autres branches reçoivent une URL de prévisualisation.

- Réglages de build : voir `vercel.json` (Astro, `npm run build`, dossier `dist`).
- Nom de domaine (ex. `www.sassy.fr`) : l’ajouter dans Vercel → Settings → Domains, puis définir la variable d’environnement `SITE_URL=https://www.sassy.fr`.
- Agenda : la liste « À venir » est calculée au moment du build. Pour la tenir à jour sans publier, créer un *Deploy Hook* dans Vercel et l’appeler une fois par jour (cron).

## Publier du contenu

Tout le contenu éditable se trouve dans `src/content/`. Chaque fichier Markdown commence par un en-tête (frontmatter) :

| Rubrique | Dossier / fichier | Champs |
|---|---|---|
| Affichage mairie et comptes rendus | `affichage/*.md` | `date`, `titre`, `info`, `type` (Arrêté · Compte rendu · Avis · Info), `fichier` (PDF facultatif, déposé dans `public/documents/`) |
| Événements | `evenements/*.md` | `date`, `heure`, `titre`, `lieu`, `organisateur` |
| Blog | `articles/*.md` | `titre`, `auteur` (Mairie · Association patrimoine · SIVOM · Comité des fêtes), `date`, `extrait`, `image`, `commentaires` |
| Menu cantine | `menus/AAAA-MM-JJ.md` | `semaine` (date du lundi), `jours` |
| Revues | `revues/*.md` | `type` (mensuelle · trimestrielle), `numero`, `date`, `titre`, `fichier` (PDF dans `public/revues/`) |
| Annuaire | `annuaire.yaml` | `nom`, `activite`, `categorie`, `adresse`, `telephone`, `site` |
| Conseil municipal | `conseil.yaml` | `nom`, `fonction`, `ordre` |

Les coordonnées, les horaires et le nom du maire sont regroupés dans `src/data/site.ts`.

**Commentaires du blog.** Le formulaire ouvre la messagerie de l’internaute et adresse le message à la mairie. Pour publier un commentaire après modération, l’ajouter à la liste `commentaires` de l’article.

## Module Admin (édition visuelle)

Le [Module Admin](https://github.com/Ariion/Module-admin) (v1.13.1) est installé dans `public/admin/`.
Ajoutez **`?admin`** à l’adresse de n’importe quelle page (ex. `https://mairiedesassy.vercel.app/?admin`) pour ouvrir l’éditeur : textes, images, liens, sections, ambiance, historique.

- **Configuration** : `public/admin-config.js` (identifiant du site : `mairie-de-sassy`).
- **Mode démonstration** tant que les 5 clés Firebase ne sont pas renseignées : n’importe quel identifiant ouvre l’éditeur, les modifications restent dans le navigateur.
- **Mise en production** : créer le projet Firebase et y publier les règles de `firebase/`. Coller ensuite les clés dans `public/admin-config.js`, puis autoriser le domaine `mairiedesassy.vercel.app` dans *Authentication › Settings › Authorized domains*. La marche à suivre complète est dans `docs/INSTALLATION.md` du dépôt Module-admin.
- **Limites sur Vercel** : pas de téléversement (les images s’ajoutent par adresse) et pas de réécriture automatique du HTML. L’icône ⤓ exporte la page figée.
- **Mettre le module à jour** : remplacer le dossier `public/admin/` par celui de la nouvelle version.

## À faire avant la mise en ligne

- [ ] Remplacer les **exemples fictifs** tirés de la maquette : affichage, événements, articles, menu, revues, annuaire. Ils sont signalés par un commentaire `EXEMPLE`.
- [ ] Indiquer les deux adjoints dans `conseil.yaml`.
- [ ] Location de salle : ajouter capacité et tarifs (`src/pages/mairie/location-de-salle.astro`).
- [ ] Nommer l’école et l’association patrimoine, et préciser leurs contacts.
- [ ] Obtenir la version vectorielle (SVG) du blason ; la version image est dans `src/assets/blason-sassy.webp`.
- [ ] Fournir des photos en haute définition (≥ 1600 px de large) pour l’accueil, l’histoire et les actualités (champ `image`).
- [ ] Faire réaliser un audit RGAA et mettre à jour la page Accessibilité.
- [ ] Ajouter des photos (`src/pages/decouvrir/photos.astro`).
- [ ] Renseigner les clés Firebase du Module Admin (voir plus haut).

## Structure

```
src/
  content/          contenus éditables (Markdown / YAML)
  content.config.ts schémas des collections
  data/site.ts      coordonnées mairie + arborescence du menu
  layouts/          Base (barre, nav, pied de page) · Page (pages intérieures)
  components/       lignes d'affichage, événements, articles, revues
  pages/            accueil + 4 rubriques (La mairie, Démarches, Vie locale, Découvrir Sassy)
  styles/site.css   feuille de style unique (couleurs du blason)
docs/design/        maquette et cahier de passation Claude Design
```
