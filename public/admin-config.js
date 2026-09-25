/* =========================================================================
   Module Admin : configuration du site de la mairie de Sassy
   (module : github.com/Ariion/Module-admin, v1.13.1)

   Ouvrir l'éditeur : ajouter ?admin à l'adresse d'une page,
   par exemple https://mairiedesassy.vercel.app/?admin

   Tant que les 5 valeurs « À REMPLIR » ne sont pas renseignées, le module
   fonctionne en MODE DÉMONSTRATION : n'importe quel identifiant ouvre
   l'éditeur, et les modifications restent dans le navigateur de la personne.
   Une fois les clés Firebase copiées ici, les publications sont visibles de
   tous. Ces clés sont publiques par nature : la sécurité repose sur les
   règles du dossier firebase/ du dépôt, à publier dans la console Firebase.
   ========================================================================= */
const CLES = {
  apiKey:        'À REMPLIR',
  authDomain:    'À REMPLIR.firebaseapp.com',
  projectId:     'À REMPLIR',
  storageBucket: 'À REMPLIR.appspot.com',
  appId:         'À REMPLIR',
};

const RENSEIGNE = !Object.values(CLES).some((v) => /À REMPLIR/.test(v));

window.ADMIN_CONFIG = {
  siteId: 'mairie-de-sassy',
  backend: RENSEIGNE ? 'firebase' : 'demo',
  firebase: CLES,
  lang: 'fr',
  debug: false,

  // Hébergement statique (Vercel) : pas de téléversement, la bibliothèque
  // média se remplit par adresse (image déjà en ligne, vidéo YouTube…).
  media: { adapter: 'url' },

  // Vercel est en lecture seule : pas de réécriture du HTML à la publication.
  // L'icône ⤓ du panneau exporte la page figée si besoin.
  // host: { endpoint: '/admin-endpoint.php' },

  scan: {
    // Éléments purement décoratifs ou techniques, à ne pas rendre éditables.
    exclude: ['.skip', '.blason-band', '.nav-menu', '#recherche'],
  },
};
