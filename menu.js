/* Comportamento compartilhado por todas as seções. */
(() => {
    const header = document.querySelector('.header');
    if (!header) return;
    const nav = document.getElementById('siteNav');
    const menu = document.getElementById('siteMenu');
    const theme = document.getElementById('siteTheme');
    const mobile = window.matchMedia('(max-width: 900px)');
    function setOpen(open) {
        nav.classList.toggle('active', open);
        menu.classList.toggle('active', open);
        menu.setAttribute('aria-expanded', String(open));
        menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    }
    function setTheme(light) {
        document.body.classList.toggle('light', light);
        theme.setAttribute('aria-pressed', String(light));
        theme.setAttribute('aria-label', light ? 'Ativar modo escuro' : 'Ativar modo claro');
    }
    let savedTheme = 'dark';
    try { savedTheme = localStorage.getItem('mindmovie-theme') || 'dark'; } catch (_) {}
    setTheme(savedTheme === 'light');
    theme.addEventListener('click', () => {
        const light = !document.body.classList.contains('light');
        setTheme(light);
        try { localStorage.setItem('mindmovie-theme', light ? 'light' : 'dark'); } catch (_) {}
    });
    menu.addEventListener('click', () => setOpen(menu.getAttribute('aria-expanded') !== 'true'));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
    document.addEventListener('click', event => { if (!header.contains(event.target)) setOpen(false); });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
            setOpen(false);
            menu.focus();
        }
    });
    mobile.addEventListener('change', () => setOpen(false));
})();
