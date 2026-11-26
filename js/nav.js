document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('site-nav');
    if (!nav) return;

    const base = nav.dataset.base || '';
    const links = [
        { href: 'index.html',                label: 'Accueil' },
        { href: 'pages/instruments.html',    label: 'Instruments' },
        { href: 'pages/traditions.html',     label: 'Traditions' },
        { href: 'pages/spirituelles.html',   label: 'Spirituelles' },
        { href: 'pages/savantes.html',       label: 'Savantes' },
        { href: 'pages/sahariennes.html',    label: 'Sahariennes' },
        { href: 'pages/correspondance.html', label: 'Correspondance' },
        { href: 'pages/artistes.html',       label: 'Artistes',     soon: true },
        { href: 'pages/preservation.html',   label: 'Préservation', soon: true },
        { href: 'pages/lexique.html',        label: 'Lexique',      soon: true },
        { href: 'pages/ressources.html',     label: 'Ressources',   soon: true },
    ];

    nav.innerHTML = links.map(({ href, label, soon }) => {
        if (soon) {
            return `<span class="nav-soon" aria-disabled="true" title="Section à venir">${label}<span class="badge-soon">à venir</span></span>`;
        }
        return `<a href="${base}${href}">${label}</a>`;
    }).join('');

    const current = window.location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('a').forEach(a => {
        if (a.getAttribute('href').endsWith(current)) {
            a.classList.add('active');
            a.setAttribute('aria-current', 'page');
        }
    });
});