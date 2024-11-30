document.getElementById("tela-inicial").addEventListener("click", function() {
    document.getElementById("tela-inicial").classList.add("hidden");
    // executar o código para a tela de seleção depois de 1 segundo

    setTimeout(function() {
        window.location.href = "selecao.html";
    },800);
});
