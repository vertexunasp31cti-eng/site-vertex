/* =========================================
   QUEM SOMOS

   A pagina original chamava sobre-nos.js, que nunca foi publicado no
   repositorio. Sem esse arquivo o botao de tema, o menu do celular e o
   formulario de contato ficavam sem funcionar.

   O comportamento aqui e o mesmo das outras paginas do site.
========================================= */

/* Preencha com o e-mail da equipe para o formulario abrir o programa de
   e-mail do visitante ja com a mensagem pronta. Deixando em branco, o
   formulario apenas confere os campos e avisa que ainda nao ha destino. */
const EMAIL_DE_CONTATO = "";

document.addEventListener("DOMContentLoaded", () => {

    const botaoTema = document.getElementById("themeToggle");
    const botaoMenu = document.getElementById("menuButton");
    const nav = document.getElementById("nav");
    const rotuloPagina = document.getElementById("pageLabel");
    const formulario = document.getElementById("contactForm");

    /* =========================================
       TEMA CLARO / ESCURO

       A chave e a mesma usada nas outras paginas, para a escolha do
       visitante continuar valendo ao navegar pelo site.
    ========================================= */

    function aplicarTema(tema) {

        const claro = tema === "light";

        document.body.classList.toggle("light", claro);

        if (rotuloPagina) {
            rotuloPagina.textContent = claro
                ? "sobre nós - claro"
                : "sobre nós - escuro";
        }
    }

    aplicarTema(localStorage.getItem("mindmovie-theme") || "dark");

    if (botaoTema) {

        botaoTema.addEventListener("click", () => {

            const novoTema = document.body.classList.contains("light")
                ? "dark"
                : "light";

            localStorage.setItem("mindmovie-theme", novoTema);

            aplicarTema(novoTema);
        });
    }

    /* =========================================
       MENU DO CELULAR
    ========================================= */

    if (botaoMenu && nav) {

        botaoMenu.addEventListener("click", () => {

            const aberto = nav.classList.toggle("active");

            // A classe no botao e o que vira as tres barras em X.
            botaoMenu.classList.toggle("active", aberto);

            botaoMenu.setAttribute("aria-expanded", aberto ? "true" : "false");
        });

        // Fecha o menu ao escolher um destino.
        nav.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");
                botaoMenu.classList.remove("active");
                botaoMenu.setAttribute("aria-expanded", "false");
            });
        });
    }

    /* =========================================
       FORMULARIO DE CONTATO

       O site e estatico, sem servidor para receber o envio. Sem tratamento
       o navegador recarregava a pagina e a mensagem se perdia em silencio.
    ========================================= */

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
