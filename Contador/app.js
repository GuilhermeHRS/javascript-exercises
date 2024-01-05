let input_inicio = document.querySelector("#inicio");
let input_fim = document.querySelector("#fim");
let input_passo = document.querySelector("#passo");
let btnContar = document.querySelector("button");
let titulo = document.querySelector("h3");
let resultado = document.querySelector("p");


function contar() {
  let inicio = Number(input_inicio.value);
  let fim = Number(input_fim.value);
  let passo = Number(input_passo.value);

  if (passo !== 0) {
    titulo.innerHTML = "Contando...";
    resultado.style.padding = "2px";
    resultado.innerHTML = "";

    let incremento = inicio <= fim ? 1 : -1;

    for (let i = inicio; (incremento === 1 && i <= fim) || (incremento === -1 && i >= fim); i += passo * incremento) {
      resultado.innerHTML += i + " ";
    }
  } else {
    alert("Erro! Os campos não podem ser iguais a zero.");
    limparCampo();
  }
}

function limparCampo() {
  titulo.innerHTML = "";
  inicio.value = "";
  fim.value = "";
  passo.value = "";
  resultado.innerHTML = "";
}
