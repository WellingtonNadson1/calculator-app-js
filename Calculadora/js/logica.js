//Criando variáveis para armazenar valores
const numeros = document.querySelectorAll('[class*=num]');
const operadores = document.querySelectorAll(".operador");
const btnPonto = document.querySelector(".btnponto");
const btnPorcento = document.querySelector(".btnporcento");
const btnReset = document.querySelector("#reset");
console.log(btnReset);
const btnLimpar = document.querySelector("#limpar");
const btnIgual = document.querySelector("#igual");
let display = document.querySelector("#display");

let valorAtual = '';
let valorAnterior = '';
let operacao = undefined;

/* Utilizando um forEach para percorrer todos os buttons salvos 
na varíavel 'numeros' para Criar os eventos de cliques que irão 
buscar e reconhecer cada Número que será clicado no HTML*/
numeros.forEach(function (button){
    button.addEventListener('click', function (){
        juntarNumero(button.innerText);
    })
})

/* Utilizando um forEach para percorrer todos os buttons salvos 
na varíavel 'operadores' para Criar os eventos de cliques que irão 
buscar e reconhecer cada operador clicado no HTML*/
operadores.forEach(function (button){
    button.addEventListener('click', function (){
        selecionarOperacao(button.innerText);
    })
})

/*Criando evento de cique para o button 'Igual'*/
btnIgual.addEventListener('click', function(){
    calcular();
    atualizarDisplay();
})


btnReset.addEventListener('click', function(){
    clear();
    atualizarDisplay();
})

function juntarNumero(num){
    valorAtual = valorAtual.toString() + num.toString();
    atualizarDisplay();
}

function atualizarDisplay(){
    display.value = valorAtual;
}

function clear(){
    valorAtual = "";
    valorAnterior = "";
    operacao = undefined;
}

function selecionarOperacao(operador){
    if (valorAtual === "") return;
    if (valorAnterior !== ""){
        calcular();
    }
    operacao = operador.toString();
    valorAnterior = valorAtual;
    valorAtual = "";
}

function calcular(){
    let calculo;
    const anterior = parseFloat(valorAnterior);
    const atual = parseFloat(valorAtual);
    if (isNaN(anterior) || isNaN(atual)) return;
    switch(operacao){
        case '+':
            calculo = anterior + atual;
            break;
        case '-':
            calculo = anterior - atual;
            break;
        case '/':
            calculo = anterior / atual;
            break;
        case 'x':
            calculo = anterior * atual;
            break;
        default:
            return;
    }
    valorAtual = calculo;
    valorAnterior = "";
    operacao = undefined;
}

clear();