const themeToggle = document.getElementById("themeToggle");
const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");
const pageLabel = document.getElementById("pageLabel");

function aplicarTema(tema) {

    if (tema === "light") {

        document.body.classList.add("light");

        pageLabel.textContent = "referências - claro";

    } else {

        document.body.classList.remove("light");

        pageLabel.textContent = "referências - escuro";
    }
}

const temaSalvo = localStorage.getItem("mindmovie-theme") || "dark";

aplicarTema(temaSalvo);

themeToggle.addEventListener("click", function () {

    const temaAtual = document.body.classList.contains("light")
        ? "light"
        : "dark";

    const novoTema = temaAtual === "light"
        ? "dark"
        : "light";

    localStorage.setItem("mindmovie-theme", novoTema);

    aplicarTema(novoTema);
});

menuButton.addEventListener("click", function () {

    const aberto = nav.classList.toggle("active");

    // A classe no botao e o que vira as tres barras em X.
    menuButton.classList.toggle("active", aberto);

    menuButton.setAttribute("aria-expanded", aberto ? "true" : "false");

});

// Fecha o menu ao escolher um destino.
nav.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");

    });

});