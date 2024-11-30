function selecionarPersonagem(personagem) {
    x = document.getElementById("playerVez").value;
    if (x == 1) {
        document.getElementById("playerVez").value = 2;
        document.getElementById("playerVezlabel").innerHTML = "2";
        sessionStorage.setItem("personagem1", personagem);
    } else if (x == 2) {
        sessionStorage.setItem("personagem2", personagem);
        window.location.href = "batalha.html";
    }    
}