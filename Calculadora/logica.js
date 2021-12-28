let resultado = document.querySelector(".resultado");
let btn9 = document.querySelector(".num-9");
let btnZero = document.querySelector(".num-0");
let btnSoma = document.querySelector(".soma");
let btnDiv = document.querySelector(".dividir");

btn9.addEventListener("click", e =>{
   resultado.innerHTML = btn9.value;
});

btnZero.addEventListener("click", e =>{
    resultado.innerHTML = btnZero.value;
});

btnSoma.addEventListener("click", e =>{
    alert("Vou Somar a conta");
});

btnDiv.addEventListener("click", e =>{
    alert("Vou Dividir a conta");
});

function soma(params) {
    
};