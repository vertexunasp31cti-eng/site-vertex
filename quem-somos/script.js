const EMAIL_DE_CONTATO = "";
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("contactForm");
    if (formulario) {

        const aviso = document.createElement("p");
        aviso.className = "contact-feedback";
        aviso.setAttribute("role", "status");
        aviso.style.marginTop = "12px";
        formulario.appendChild(aviso);

        formulario.addEventListener("submit", (evento) => {

            evento.preventDefault();

            const nome = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("message").value.trim();

            if (!nome || !email || !mensagem) {
                aviso.textContent = "Preencha nome, e-mail e mensagem.";
                return;
            }

            if (!EMAIL_DE_CONTATO) {
                aviso.textContent =
                    "Formulário ainda sem destino configurado. " +
                    "Defina EMAIL_DE_CONTATO em quem-somos/script.js.";
                return;
            }

            const assunto = encodeURIComponent(`Contato pelo site - ${nome}`);
            const corpo = encodeURIComponent(`${mensagem}\n\n---\n${nome}\n${email}`);

            window.location.href =
                `mailto:${EMAIL_DE_CONTATO}?subject=${assunto}&body=${corpo}`;

            aviso.textContent = "Abrindo seu programa de e-mail.";
            formulario.reset();
        });
    }
});
