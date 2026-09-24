document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (!form) return;
    const button = form.querySelector('button[type="submit"]');
    const status = document.getElementById('contactStatus');
    const fields = ['name', 'email', 'message'].map(id => document.getElementById(id));
    let sending = false;
    fields.forEach(field => field.addEventListener('input', () => field.setCustomValidity('')));
    form.addEventListener('submit', async event => {
        event.preventDefault();
        if (sending) return;
        fields.forEach(field => {
            field.value = field.value.trim();
            field.setCustomValidity(field.value ? '' : 'Preencha este campo.');
        });
        if (!form.reportValidity()) return;
        sending = true;
        button.disabled = true;
        button.textContent = 'Enviando…';
        form.setAttribute('aria-busy', 'true');
        status.textContent = 'Enviando sua mensagem…';
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 20000);
        try {
            const response = await fetch(form.action, {
                method: 'POST', body: new FormData(form),
                headers: { Accept: 'application/json' }, signal: controller.signal
            });
            if (!response.ok) throw new Error('Não foi possível confirmar o envio. Tente novamente em alguns instantes.');
            form.reset();
            status.textContent = 'Mensagem enviada! Obrigado pelo contato.';
        } catch (error) {
            status.textContent = error.name === 'AbortError'
                ? 'O envio demorou mais que o esperado. Não conseguimos confirmar o recebimento; seus dados foram mantidos.'
                : 'Não foi possível confirmar o envio. Verifique sua conexão e tente novamente. Seus dados foram mantidos.';
        } finally {
            clearTimeout(timeout);
            sending = false;
            button.disabled = false;
            button.textContent = 'Enviar mensagem';
            form.removeAttribute('aria-busy');
        }
    });
});
