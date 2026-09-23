document.addEventListener("DOMContentLoaded", () => {
    const abrirVideo = document.getElementById("abrirVideo");
    const fecharVideo = document.getElementById("fecharVideo");
    const fundoModal = document.getElementById("fundoModal");
    const modalVideo = document.getElementById("modalVideo");
    const videoDemonstracao = document.getElementById("videoDemonstracao");
    function mostrarVideo() {

        if (!modalVideo) {
            return;
        }


        modalVideo.classList.add(
            "aberto"
        );


        modalVideo.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";


        if (videoDemonstracao) {

            videoDemonstracao
                .play()
                .catch(function () {

                    console.log(
                        "O vídeo aguardará o usuário apertar o botão de reprodução."
                    );

                });

        }

    }


    /* ========================================
       FECHAR VÍDEO
    ======================================== */

    function esconderVideo() {

        if (!modalVideo) {
            return;
        }


        modalVideo.classList.remove(
            "aberto"
        );


        modalVideo.setAttribute(
            "aria-hidden",
            "true"
        );


        if (videoDemonstracao) {

            videoDemonstracao.pause();

            videoDemonstracao.currentTime = 0;

        }


        document.body.style.overflow = "";

    }


    /* ========================================
       EVENTOS DO VÍDEO
    ======================================== */

    if (abrirVideo) {

        abrirVideo.addEventListener(
            "click",
            mostrarVideo
        );

    }


    if (fecharVideo) {

        fecharVideo.addEventListener(
            "click",
            esconderVideo
        );

    }


    if (fundoModal) {

        fundoModal.addEventListener(
            "click",
            esconderVideo
        );

    }


    /* ========================================
       FECHAR COM ESC
    ======================================== */

    document.addEventListener(
        "keydown",
        function (evento) {

            if (
                evento.key === "Escape" &&
                modalVideo &&
                modalVideo.classList.contains(
                    "aberto"
                )
            ) {

                esconderVideo();

            }

        }
    );

});