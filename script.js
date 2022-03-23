const display = document.getElementById('display');
const result = document.getElementById('igual');
const teclasNumericas = document.querySelectorAll('[id*=tecla]');
const teclasOperadoras = document.querySelectorAll('[id*=operador]');

let virgula = false;
let virgulaSet = false;
let numeroNovo = true;
let operador;
let numeroAnterior;

const atualizarDisplay = (texto)  => {
    if(numeroNovo) {
        display.textContent = texto;
        numeroNovo = false;
    }
    else{
        display.textContent += texto;      
    }   
}

const inserirNumero = (event) => {
    atualizarDisplay(event.target.textContent);
    virgulaSet = false; 
}

teclasNumericas.forEach((tecla) => tecla.addEventListener('click', inserirNumero));

const selecionaOperador = (event) => {
    numeroNovo = true;
    virgulaSet = true; 
    operador = event.target.textContent;
    numeroAnterior = display.textContent;
}

teclasOperadoras.forEach((tecla) => tecla.addEventListener('click', selecionaOperador));

const calcular = () => {
    const numeroAtual = display.textContent;
    const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`); //usando template string
    numeroNovo = true;
    virgulaSet = true; 
    atualizarDisplay(resultado);
}

result.addEventListener('click', calcular);

const limparDisplay = () => (display.textContent = "");

document.querySelector("#limparDisplay").addEventListener("click", limparDisplay);

const limparCalculo = () => {
  limparDisplay();
  novoNumero = true;
  operador = undefined;
  numeroAnterior = undefined;
};

document.querySelector("#limparCalculo").addEventListener("click", limparCalculo);

const removerUltimoNumero = () => 
    (display.textContent = display.textContent.slice(0,-1));

document.querySelector("#backspace").addEventListener("click", removerUltimoNumero);

const inverterSinal = () => {
    numeroNovo = true;
    atualizarDisplay(display.textContent * -1);
}

document.querySelector("#inverter").addEventListener("click", inverterSinal);

const botaovirgula = () => {
    //virgula = true;
    if(!virgulaSet)
        display.textContent += "."; 
    virgulaSet = true; 
}

document.querySelector("#decimal").addEventListener("click", botaovirgula);