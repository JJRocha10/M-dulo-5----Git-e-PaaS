var nome = "Marcelo Eltz";
var cargo = "CTO - Growdev";

var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");
/*dizerOla(); ta executando a funcao */

function colocaNomeNoHtml(nome){
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo){
    cargoHtml.innerHTML = cargo;
}
function logarNome(){
    console.log(nome);
}

function clickNoProjetos(){
    console.log("clicou no botao projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre(){
    console.log("Clicou no botao sobre");
    texto2.style.display = "none";
    texto1.style.display = "block";
}

colocaNomeNoHtml(nome);
colocarCargoNoHtml(cargo);