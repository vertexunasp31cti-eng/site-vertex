document.addEventListener("DOMContentLoaded", () => {
    const botaoJogar = document.getElementById("botaoJogar");
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