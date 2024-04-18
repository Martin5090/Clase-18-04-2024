console.log("Hola Mundo");
import {sumar,restar,multiplicar, dividir}  from "./operaciones.js";

let n1 = document.getElementById("numero1");
let n2 = document.getElementById("numero2");

let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");

let resultado = document.getElementById("resultado");

let btnSumar = document.getElementById("btnSumar");
let btnRestar = document.getElementById("btnRestar");
let btnMultiplicar = document.getElementById("btnMultiplicar");
let btnDividir = document.getElementById("btnDividir");

let n1v=0;
let n2v=0;
let res=0;

btnSumar.addEventListener("click",function (){
    let resFinal = 0;

    error1.innerHTML="";
    error2.innerHTML="";
    
    if (n1.value === ""){
        error1.innerHTML = 'Error, debe ingresar el primer numero';
        error1.style.color = 'red';
        return;
    }

    if (n2.value === ""){
        error2.innerHTML = 'Error, debe ingresar el segundo numero';
        error2.style.color = 'red';
        return;
    }

    res=sumar(n1.value,n2.value);

    resFinal= `El Resultado es: ${res}`;

    resultado.innerHTML = resFinal;
    resultado.style.color = "green";
    resultado.style.fontSize= "2rem";

    console.log('Conectamos bien');

});

btnRestar.addEventListener("click",function (){
    let resFinal = 0;

    error1.innerHTML="";
    error2.innerHTML="";

    if (n1.value === ""){
        error1.innerHTML = 'Error, debe ingresar el primer numero';
        error1.style.color = 'red';
        return;
    }

    if (n2.value === ""){
        error2.innerHTML = 'Error, debe ingresar el segundo numero';
        error2.style.color = 'red';
        return;
    }

    res=restar(n1.value,n2.value);

    resFinal= `El Resultado es: ${res}`;

    resultado.innerHTML = resFinal;
    resultado.style.color = "green";
    resultado.style.fontSize= "2rem";

    console.log('Conectamos bien');

});

btnMultiplicar.addEventListener("click",function (){
    let resFinal=0;

    error1.innerHTML="";
    error2.innerHTML="";

    if (n1.value === ""){
        error1.innerHTML = 'Error, debe ingresar el primer numero';
        error1.style.color = 'red';
        return;
    }

    if (n2.value === ""){
        error2.innerHTML = 'Error, debe ingresar el segundo numero';
        error2.style.color = 'red';
        return;
    }

    res=multiplicar(n1.value,n2.value);

    resFinal= `El Resultado es: ${res}`;

    resultado.innerHTML = resFinal;
    resultado.style.color = "green";
    resultado.style.fontSize= "2rem";

    console.log('Conectamos bien');

});

btnDividir.addEventListener("click",function (){
    let resFinal=0;

    error1.innerHTML="";
    error2.innerHTML="";

    if (n1.value === ""){
        error1.innerHTML = 'Error, debe ingresar el primer numero';
        error1.style.color = 'red';
        return;
    }

    if (n2.value === ""){
        error2.innerHTML = 'Error, debe ingresar el segundo numero';
        error2.style.color = 'red';
        return;
    }
    if (n2.value === "0"){
        error2.innerHTML = 'Error, debe ingresar el segundo numero no puede ser 0';
        error2.style.color = 'red';
        return;
    }


    res=dividir(n1.value,n2.value);

    resFinal= `El Resultado es: ${res}`;

    resultado.innerHTML = resFinal;
    resultado.style.color = "green";
    resultado.style.fontSize= "2rem";

    console.log('Conectamos bien');

});