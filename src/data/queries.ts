import { getCollection } from 'astro:content';

const today = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

export async function affichageRecent() {
  return (await getCollection('affichage')).sort((a, b) => +b.data.date - +a.data.date);
}

export async function evenementsTries() {
  const all = (await getCollection('evenements')).sort((a, b) => +a.data.date - +b.data.date);
  const t = today();
  return {
    aVenir: all.filter((e) => e.data.date >= t),
    passes: all.filter((e) => e.data.date < t).reverse(),
  };
}

export async function articlesRecents() {
  return (await getCollection('articles')).sort((a, b) => +b.data.date - +a.data.date);
}
