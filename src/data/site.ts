/** Données officielles de la commune, réutilisées dans tout le site. */
export const mairie = {
  nom: 'Commune de Sassy',
  adresse: ['2, rue de la Forge', '14170 Sassy'],
  telephone: '02 31 90 06 26',
  telephoneHref: 'tel:+33231900626',
  email: 'mairiedesassy@wanadoo.fr',
  maire: 'M. Dominique Varin',
  horaires: [
    { jour: 'Lundi', heures: '11h–12h' },
    { jour: 'Jeudi', heures: '14h–15h' },
    { jour: 'Samedi', heures: '8h–12h', note: 'sur rendez-vous' },
  ],
  horairesCourts: 'Mairie ouverte lundi 11h–12h · jeudi 14h–15h · samedi 8h–12h sur rendez-vous',
  population: '217',
  populationAnnee: '2023',
  superficie: '9,56 km²',
  altitude: '51 à 104 m',
  codePostal: '14170',
  insee: '14669',
  gentile: 'Sassyens',
  interco: { nom: 'Communauté de communes du Pays de Falaise', url: 'https://www.paysdefalaise.fr/commune/sassy/' },
  coords: { lat: 48.986, lon: -0.137 },
};

export type NavItem = { label: string; href: string };
export type NavSection = { label: string; short: string; href: string; items: NavItem[] };

/** Arborescence du site : 4 menus déroulants (structure de la maquette « mairie »). */
export const nav: NavSection[] = [
  {
    label: 'La mairie', short: 'Mairie', href: 'mairie/',
    items: [
      { label: 'Infos et horaires', href: 'mairie/' },
      { label: 'Le conseil municipal', href: 'mairie/conseil-municipal/' },
      { label: 'Affichage mairie', href: 'mairie/affichage/' },
      { label: 'Comptes rendus de réunion', href: 'mairie/comptes-rendus/' },
      { label: 'Location de salle', href: 'mairie/location-de-salle/' },
      { label: 'Nous contacter', href: 'contact/' },
    ],
  },
  {
    label: 'Démarches', short: 'Démarches', href: 'demarches/etat-civil/',
    items: [
      { label: 'État civil', href: 'demarches/etat-civil/' },
      { label: 'Urbanisme', href: 'demarches/urbanisme/' },
      { label: 'École et cantine', href: 'ecole/menu-cantine/' },
      { label: 'SIVOM (association de l’école)', href: 'ecole/sivom/' },
      { label: 'Cimetière', href: 'demarches/cimetiere/' },
      { label: 'Informations utiles', href: 'contact/informations-utiles/' },
    ],
  },
  {
    label: 'Vie locale', short: 'Vie locale', href: 'vie-locale/blog/',
    items: [
      { label: 'Actualités', href: 'vie-locale/blog/' },
      { label: 'Agenda', href: 'vie-locale/evenements/' },
      { label: 'Revue mensuelle', href: 'vie-locale/revue-mensuelle/' },
      { label: 'Revue trimestrielle', href: 'vie-locale/revue-trimestrielle/' },
      { label: 'Annuaire professionnel', href: 'vie-locale/annuaire/' },
    ],
  },
  {
    label: 'Découvrir Sassy', short: 'Découvrir', href: 'decouvrir/histoire/',
    items: [
      { label: 'Histoire du village', href: 'decouvrir/histoire/' },
      { label: 'Association patrimoine', href: 'decouvrir/patrimoine/' },
      { label: 'Photos', href: 'decouvrir/photos/' },
      { label: 'Carte de la commune', href: 'decouvrir/carte/' },
    ],
  },
];
