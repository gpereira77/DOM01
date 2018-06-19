const certo = document.querySelector("#certo");
const errado = document.querySelector("#errado");

function gatoErrado(){
    alert("Gato errado click n outro gato");
}

function gatoCerto(){
    certo.src = "http://placekitten.com/350/350";
    alert("Win");
}

errado.onclick = gatoErrado;
certo.onclick = gatoCerto;
