function selecionarPersonagem(personagem) {
    x = document.getElementById("playerVez").value;
    if (x == 1) {
        document.getElementById("playerVez").value = 2;
        document.getElementById("playerVezlabel").innerHTML = "2";
        sessionStorage.setItem("personagem1", personagem);
        document.getElementById("indicadorPlayer").style.color = "red";
        // pega todos elementos com a classname pokemon e remove a classname hoverBlue e add a classname hoverRed
        var elementos = document.getElementsByClassName("pokemon");
        for (var i = 0; i < elementos.length; i++) {
            elementos[i].classList.remove("hoverBlue");
            elementos[i].classList.add("hoverRed");
        }        
    } else if (x == 2) {
        sessionStorage.setItem("personagem2", personagem);
        window.location.href = "batalha.html";
    }    
}