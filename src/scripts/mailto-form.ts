/**
 * Site statique : les formulaires ouvrent la messagerie de l'internaute avec
 * un message prérempli adressé à la mairie (data-mailto / data-subject).
 */
document.querySelectorAll<HTMLFormElement>('form[data-mailto]').forEach((form) => {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const data = new FormData(form);
    const sujet = String(data.get('sujet') ?? '') || form.dataset.subject || 'Message depuis le site';
    const lignes = [String(data.get('message') ?? ''), '', '—', `${data.get('nom') ?? ''}`, `${data.get('email') ?? ''}`];
    if (data.get('telephone')) lignes.push(String(data.get('telephone')));
    const href = `mailto:${form.dataset.mailto}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(lignes.join('\n'))}`;
    window.location.href = href;
  });
});
