/* Envio HTTPS pelo FormSubmit, com verificação antispam do serviço. */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (!form) return;
    const button = form.querySelector('button[type="submit"]');
    const fields = ['name', 'email', 'message'].map(id => document.getElementById(id));
    fields.forEach(field => field.addEventListener('input', () => field.setCustomValidity('')));
    form.addEventListener('submit', event => {
        fields.forEach(field => {
            field.value = field.value.trim();
            field.setCustomValidity(field.value ? '' : 'Preencha este campo.');
        });
        if (!form.reportValidity()) {
            event.preventDefault();
            return;
        }
        // O navegador envia os campos e abre a confirmação do serviço.
        // O conteúdo não é apagado antes de o envio ser confirmado.
        button.disabled = true;
        button.textContent = 'Enviando…';
    });
    window.addEventListener('pageshow', () => {
        button.disabled = false;
        button.textContent = 'Enviar mensagem';
    });
});
