document.addEventListener("DOMContentLoaded", function () {

    /* ========================================
       ELEMENTOS
    ======================================== */

    const themeToggle =
        document.getElementById("themeToggle");

    const botaoMenu =
        document.getElementById("botaoMenu");

    const menu =
        document.getElementById("menu");

    const linksMenu =
        document.querySelectorAll(".menu a");

    const botaoJogar =
        document.getElementById("botaoJogar");


    /* ========================================
       MODO CLARO / ESCURO
    ======================================== */

    const temaSalvo =
        localStorage.getItem("mindmovie-theme");


    if (temaSalvo === "light") {

        document.body.classList.add("light");

    } else {

        document.body.classList.remove("light");

    }


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "light"
                );


                const modoClaro =
                    document.body.classList.contains(
                        "light"
                    );


                if (modoClaro) {

                    localStorage.setItem(
                        "mindmovie-theme",
                        "light"
                    );

                } else {

                    localStorage.setItem(
                        "mindmovie-theme",
                        "dark"
                    );

                }

            }
        );

    }


    /* ========================================
       MENU MOBILE
    ======================================== */

    if (botaoMenu && menu) {

        botaoMenu.addEventListener(
            "click",
            function () {

                const aberto =
                    menu.classList.toggle(
                        "aberto"
                    );


                botaoMenu.classList.toggle(
                    "ativo"
                );


                botaoMenu.setAttribute(
                    "aria-expanded",
                    aberto ? "true" : "false"
                );


                document.body.style.overflow =
                    aberto ? "hidden" : "";

            }
        );

    }


    /* ========================================
       FECHAR MENU AO CLICAR
    ======================================== */

    linksMenu.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                menu.classList.remove(
                    "aberto"
                );


                botaoMenu.classList.remove(
                    "ativo"
                );


                botaoMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );


                document.body.style.overflow = "";

            }
        );

    });


    /* ========================================
       BOTÃO DO JOGO
    ======================================== */

    if (botaoJogar) {

        botaoJogar.addEventListener(
            "click",
            function (evento) {

                /*
                   Quando você tiver o link/página
                   do jogo, coloque no href do HTML.

                   Exemplo:

                   href="3Dcorrida/index.html"

                   Depois você pode apagar este
                   preventDefault().
                */

                if (
                    botaoJogar.getAttribute("href") === "#"
                ) {

                    evento.preventDefault();

                }

            }
        );

    }

});