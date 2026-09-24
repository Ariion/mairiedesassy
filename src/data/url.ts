/** Préfixe un chemin interne avec la base du site (GitHub Pages). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

const moisCourts = ['Janv.', 'Févr.', 'Mars', 'Avr.', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'];

/** 12/09 */
export const dateCourte = (d: Date) =>
  `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`;
/** { jour: '12', mois: 'Oct.' } */
export const dateBloc = (d: Date) => ({ jour: String(d.getDate()).padStart(2, '0'), mois: moisCourts[d.getMonth()] });
/** 15 sept. 2026 */
export const dateLongue = (d: Date, annee = true) =>
  d.toLocaleDateString('fr-FR', { day: 'numeric', month: annee ? 'long' : 'short', year: annee ? 'numeric' : undefined });
