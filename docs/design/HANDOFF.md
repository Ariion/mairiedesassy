# Handoff : site vitrine de la Mairie de Sassy (14170)

## Overview
Site vitrine de la commune de Sassy (Calvados, 217 hab.). Deux publics à parts égales : habitants (affichage municipal, cantine, salle, démarches) et visiteurs (histoire, patrimoine, photos, carte). Seule la page **Accueil** est maquettée en haute fidélité ; l'arborescence complète est définie ci-dessous.

Dépôt cible : `github.com/Ariion/mairiedesassy` (branche `main`, actuellement vide).

## About the Design Files
Les fichiers de ce dossier sont des **références de design en HTML** : des prototypes qui montrent l'apparence et le comportement attendus. Ce n'est pas du code de production à copier tel quel. La tâche consiste à **recréer ces designs** dans le framework le plus adapté. Le dépôt étant vide, recommandation : **Astro** (site statique, contenu en Markdown/collections, déploiement GitHub Pages / Netlify), ou un site 11ty. Le contenu éditable par la mairie (affichage, événements, blog, menus) doit vivre dans des fichiers de contenu (Markdown + frontmatter), ou via un CMS headless léger (Decap CMS) si des non-développeurs doivent publier.

## Fidelity
- `Accueil Sassy.dc.html` : **haute fidélité**. Couleurs, typo, espacements et structure définitifs. À reproduire au pixel près.
- `Sassy Wireframes.dc.html` : **basse fidélité**. Pistes de structure explorées ; sert uniquement de référence pour l'arborescence (option 1a).

## Arborescence (5 rubriques)
- **Mairie** : Infos mairie · Affichage mairie · Comptes rendus de réunion · Le conseil municipal · Location de salle
- **École** : Menu cantine · SIVOM (association de l'école)
- **Vie locale** : Événements · Blog (articles + commentaires) · Revue mensuelle · Revue trimestrielle · Annuaire professionnel
- **Découvrir** : Histoire du village · Association patrimoine · Photos · Carte de la ville
- **Contact** : Contact · Informations utiles

Décisions déjà prises :
- Location de salle : page simple, avec infos, tarifs et contact (pas de réservation en ligne).
- Blog : publié par la mairie et les associations (rôles auteur). Commentaires modérés.
- Revues : PDF téléchargeables, archivés par numéro.

## Page Accueil : layout (de haut en bas)
Conteneur : `max-width:1200px; margin:0 auto; padding-inline: clamp(20px,5vw,56px)`. Toutes les grilles reflowent via `repeat(auto-fit, minmax(min(100%, Xpx), 1fr))`.

1. **Barre utilitaire** : fond `#201e1d`, texte `#f3f2f2`, 13px, padding 8px. Gauche : « Mairie ouverte lundi 11h–12h · jeudi 14h–15h · samedi 8h–12h sur rendez-vous ». Droite : « 02 31 90 06 26 », « mairiedesassy@wanadoo.fr ».
2. **Nav** (classe DS `.nav`) : bordure basse 2px `--color-divider`. Marque : un carré 14×14 fait de 4 carrés de 7px (vert, rouge, bleu, or), puis « Sassy » en Archivo 800 22px. Liens 14px (hover et page courante en vert) : Mairie, École & cantine, Vie locale, Découvrir, Contact. Bouton `.btn-primary` « Contacter la mairie ».
3. **Bande blason** : 6px de haut, grille `3fr 2fr 1fr 2fr` : vert, rouge, or, bleu.
4. **Hero** : 2 colonnes (min 420px), gap 40px, padding 56px 0, alignées en bas.
   - Kicker : 13px, uppercase, letter-spacing .08em, couleur `--color-accent-700`, texte « Commune de Sassy · 14170 · Calvados ».
   - H1 : `clamp(44px,6.4vw,84px)`, line-height 1.02, letter-spacing -0.025em, texte « Bienvenue / à Sassy. ».
   - Paragraphe : 18px/1.6, max 46ch, encre à 80 %.
   - Boutons : `.btn-primary` « Voir l'affichage mairie → » et `.btn-secondary` « Agenda du village ».
   - Photo : mairie en couleur, ratio 4:3, `object-fit:cover`, bordure 2px `#201e1d`.
5. **Chiffres clés** : bordures haute et basse 2px encre, 4 cellules séparées par des bordures gauches 2px divider. Chiffre en Archivo 800 40px vert (nowrap), légende 13px uppercase à 70 %. Contenu : 217 / Habitants (2023) · 9,56 km² / Superficie · XIIᵉ / Église St-Gervais-St-Protais · 1066 / Un seigneur de « Sacy » à Hastings.
6. **Affichage mairie + Événements** : 2 colonnes (min 440px), gap 56px, padding 56px 0.
   - En-tête de colonne : H2 28px, bordure basse 2px encre, lien `.btn-ghost` « Tout voir → » / « Agenda complet → ».
   - Ligne d'affichage : grille `64px 1fr auto`, padding 16px 0, filet bas 1px divider, fond survolé = encre à 4 %. Contenu : date (800 15px, chiffres tabulaires), titre (600 16px) + info (13px à 70 %), `.tag.tag-accent` pour le type (Arrêté, Compte rendu, Avis, Info).
   - Ligne d'événement : grille `88px 1fr`, gap 20px. Bloc date avec bordure 2px encre : jour en 800 32px, bande du mois 12px uppercase sur fond rouge `#c8102e` et texte blanc. Titre 800 19px, lieu 14px, organisateur 13px en `--color-accent-700`.
7. **Au quotidien** : 4 tuiles (min 180px). Chacune : carré vert 10px + numéro 01–04, titre 800 21px, texte 14px. Bordure basse 2px divider, hover en `--color-accent-700`. Tuiles : Menu de la cantine, Location de salle, Revues du village, Annuaire des pros.
8. **Le blog du village** (masquable) : 3 articles (min 230px), gap 32px. Kicker auteur (12px uppercase accent-700), H3 21px, extrait 15px, méta « date · N commentaires » 13px.
9. **Découvrir** : bordure haute 2px encre, 2 colonnes. Photo de l'église en couleur (ratio 3:2) avec figcaption. Kicker, H2 `clamp(28px,3.2vw,40px)` « Du Châtel aux Vauquelin, mille ans d'histoire », paragraphe 16px/1.65, puis boutons secondary « L'histoire du village → » et ghost « Photos », « Carte ».
10. **Bloc contact** : fond vert plein `#1f6b3a`, texte `#f3f2f2`, padding 64px. H2 `clamp(34px,4.2vw,56px)` « Une question ? / La mairie vous répond. ». Trois colonnes (Adresse, Horaires, Joindre), chacune avec un filet haut 2px clair, texte 17px en 600.
11. **Pied de page** : 5 colonnes de liens (min 130px), 14px/1.9, reprenant l'arborescence ; puis ligne légale 13px « © Commune de Sassy · Maire : M. Dominique Varin · Mentions légales ».

## Design Tokens
Base : design system « Modernist » (`_ds/.../styles.css`), avec l'accent remplacé par les couleurs du blason communal.
- Fond `--color-bg` #f3f2f2 · surface #eae9e9 · encre `--color-text` #201e1d · divider = encre à 40 %
- **Sinople (principale)** `--color-accent` #1f6b3a · 100 #eef6f0 · 200 #d4eadb · 300 #b3d8bf · 600 #185c30 (hover) · 700 #134a27 (texte accentué) · 800 #0e3a1e
- **Gueules** #c8102e : bande du mois des événements, bande blason
- **Or** #d9a61c · **Azur** #1f4e9c : uniquement dans la bande et la marque blason
- Police : Archivo (Google Fonts) 400/600/800, titres en 800, letter-spacing -0.015em
- Espacements : 4, 8, 12, 16, 24, 32 px ; sections à 56px
- **Rayon 0 partout**. Filets structurants de 2px. Ombres : aucune sur la page.
- Focus : `outline 2px solid accent; offset 2px`

Blason (source Wikipédia) : « Tiercé en pairle renversé : sinople au colombier d'or, gueules à deux léopards d'or, argent à trois fasces ondées d'azur et trèfle de sinople ». Récupérer le fichier vectoriel officiel du blason auprès de la mairie ou de Wikimedia pour la marque définitive.

## Interactions & Behavior
- Liens et boutons : états hover et pressed tirés du dégradé accent (600, puis 700).
- Ancres internes sur l'accueil (#affichage, #agenda, #decouvrir, #contact) ; en production, chaque lien mène à sa page.
- Responsive : toutes les grilles passent en auto-fit. Sur mobile (< 480px), prévoir un menu ☰ qui remplace la rangée de liens de la nav.
- Blog : commentaires avec modération (file d'attente côté admin), formulaire nom + email + message.

## Content model (suggestion)
- `affichage` : date, titre, info, type (Arrêté | Compte rendu | Avis | Info), fichier PDF
- `evenements` : date, titre, lieu, heure, organisateur
- `articles` : titre, auteur (Mairie | Association patrimoine | SIVOM…), date, extrait, corps, image, commentaires
- `menus_cantine` : semaine, jours → plats
- `revues` : type (mensuelle | trimestrielle), numéro, date, PDF
- `annuaire` : nom, activité, adresse, téléphone, site
- `conseil` : nom, fonction (maire, adjoints, conseillers). Le conseil compte 11 membres, dont le maire et 2 adjoints.

## Données réelles
Mairie : 2, rue de la Forge, 14170 Sassy · Tél. et fax 02 31 90 06 26 · mairiedesassy@wanadoo.fr · Horaires : lundi 11h–12h, jeudi 14h–15h, samedi 8h–12h (sur rendez-vous) · Maire : M. Dominique Varin · 217 hab. (2023) · 9,56 km² · Communauté de communes du Pays de Falaise.
Les contenus d'affichage, les événements et les articles de la maquette sont **fictifs**. Ce sont des exemples à remplacer.

## Assets
- `assets/sassy-mairie.webp` : mairie et monument aux morts (fournie par l'utilisateur)
- `assets/sassy-eglise.webp` : église Saint-Gervais-et-Saint-Protais (fournie par l'utilisateur)
- Icônes : Lucide si besoin (aucune utilisée sur l'accueil)

## Files
- `Accueil Sassy.dc.html` : maquette haute fidélité de l'accueil (s'ouvre dans un navigateur ; nécessite `support.js` et `_ds/`)
- `Sassy Wireframes.dc.html` : wireframes et arborescence
- `_ds/.../styles.css` : tokens et classes du design system (`.btn`, `.tag`, `.nav`…)
